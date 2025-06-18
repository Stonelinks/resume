import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import * as cheerio from 'cheerio';
import mime from 'mime';
import { encode } from 'he';

const TARGET_URL = 'http://localhost:3001';
const OUTPUT_DIR = 'dist';

// Generic escape for any inlined content
const escapeContent = (str: string): string =>
  encode(str, { useNamedReferences: true });

const fetchAndEncode = async (url: string): Promise<string | null> => {
  try {
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());
    const mimeType = mime.getType(url) || 'application/octet-stream';

    if (mimeType.startsWith('text/') || mimeType.includes('javascript')) {
      return buffer.toString('utf-8');
    }

    return `data:${mimeType};base64,${buffer.toString('base64')}`;
  } catch (e) {
    console.warn('Failed to fetch:', url);
    return null;
  }
};

const savePage = async (url: string) => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 2000));
  await page.pdf({ path: 'output.pdf', format: 'A4' });

  const html = await page.content();
  const $ = cheerio.load(html);

  // Inline stylesheets
  await Promise.all(
    $('link[rel="stylesheet"]')
      .map(async (_, el) => {
        const href = $(el).attr('href');
        if (!href) return;
        const absUrl = new URL(href, url).href;
        const css = await fetchAndEncode(absUrl);
        if (css) {
          $(el).replaceWith(`<style>${escapeContent(css)}</style>`);
        }
      })
      .get(),
  );

  // Inline scripts
  await Promise.all(
    $('script[src]')
      .map(async (_, el) => {
        const src = $(el).attr('src');
        if (!src) return;
        const absUrl = new URL(src, url).href;
        const js = await fetchAndEncode(absUrl);
        if (js) {
          $(el).replaceWith(`<script>${escapeContent(js)}</script>`);
        }
      })
      .get(),
  );

  // Inline images
  await Promise.all(
    $('img[src]')
      .map(async (_, el) => {
        const src = $(el).attr('src');
        if (!src) return;
        const absUrl = new URL(src, url).href;
        const dataUri = await fetchAndEncode(absUrl);
        if (dataUri) {
          $(el).attr('src', dataUri);
        }
      })
      .get(),
  );

  // Inline fonts and other assets in <style> blocks (optional/advanced)

  // Save final HTML
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR);
  writeFileSync(join(OUTPUT_DIR, 'index.html'), $.html());
  console.log('Saved page to dist/index.html');

  await browser.close();
};

savePage(TARGET_URL);
