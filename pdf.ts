import puppeteer from 'puppeteer';
import { pathToFileURL } from 'url';

const filePath = './dist/pdf.html';
const outputPath = './dist/lucas_doyle_resume.pdf';

const browser = await puppeteer.launch({
  args: ['--no-sandbox'],
  // Set by bin/build; falls back to puppeteer's own lookup in $PUPPETEER_CACHE_DIR.
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
});
const page = await browser.newPage();

// The page picks its layout off the ?pdf query parameter. A file:// URL has no
// query string of its own, so append one -- chrome ignores it when resolving
// the path but still exposes it as location.search, which is what the bundled
// react app re-reads when it re-renders on load.
const fileUrl = `${pathToFileURL(filePath).href}?pdf`;
await page.goto(fileUrl, { waitUntil: 'networkidle0' });

await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
});

await browser.close();

console.log(`PDF written to ${outputPath}`);
