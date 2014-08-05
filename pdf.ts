import puppeteer from 'puppeteer';
import { pathToFileURL } from 'url';

const filePath = './dist/pdf.html';
const outputPath = './dist/lucas_doyle_resume.pdf';

const browser = await puppeteer.launch({
  args: ['--no-sandbox'],
});
const page = await browser.newPage();

// Convert local HTML string to data URL or use file:// URL
const fileUrl = pathToFileURL(filePath).href;
await page.goto(fileUrl, { waitUntil: 'networkidle0' });

await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
});

await browser.close();

console.log(`PDF written to ${outputPath}`);
