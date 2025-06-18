import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import * as fs from 'fs/promises';

const TARGET_URLS = ['http://localhost:3001'];

const OUTPUT_DIR = 'dist';

const downloadResource = async (
  url: string,
  basePath: string,
): Promise<string | null> => {
  try {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    const parsedUrl = new URL(url);
    const filePath = join(basePath, parsedUrl.pathname);

    // Ensure the directory exists
    const dir = dirname(filePath);
    mkdirSync(dir, { recursive: true });

    // Write the file
    await fs.writeFile(filePath, Buffer.from(buffer));
    return filePath;
  } catch (e) {
    console.warn('Failed to download:', url);
    return null;
  }
};

const makeRelativePath = (url: string) => {
  const u = new URL(url);
  return `./${u.pathname}`;
};

const savePage = async (url: string) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();

  const requests = new Set<string>();

  page.on('request', (req) => {
    const resourceUrl = req.url();
    const type = req.resourceType();
    if (['stylesheet', 'script', 'image', 'font'].includes(type)) {
      requests.add(resourceUrl);
    }
  });

  await page.goto(url, { waitUntil: 'networkidle2' });
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Download resources
  const downloadedPaths = new Map<string, string>();

  for (const resourceUrl of requests) {
    const localPath = await downloadResource(resourceUrl, OUTPUT_DIR);
    if (localPath) {
      downloadedPaths.set(resourceUrl, makeRelativePath(resourceUrl));
    }
  }

  // Replace resource URLs in HTML
  let html = await page.content();
  for (const [remoteUrl, localRelPath] of downloadedPaths.entries()) {
    html = html.replaceAll(remoteUrl, localRelPath);
  }

  // Save HTML
  const filename =
    url === TARGET_URLS[0]
      ? 'index.html'
      : url.replace(/[^a-z0-9]/gi, '_') + '.html';
  writeFileSync(join(OUTPUT_DIR, filename), html);

  await browser.close();
  console.log(`Saved ${url} as ${filename}`);
};

const main = async () => {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR);

  for (const url of TARGET_URLS) {
    await savePage(url);
  }

  console.log('Done');
};

main();
