import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const indexFile = path.join(distDir, 'index.html');
const notFoundFile = path.join(distDir, '404.html');

try {
    fs.copyFileSync(indexFile, notFoundFile);
    console.log('Success: Copied index.html to 404.html for GitHub Pages SPA support.');
} catch (error) {
    console.error('Error copying file:', error);
    process.exit(1);
}
