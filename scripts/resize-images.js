import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const dirsToProcess = ['ELEMENTOS', 'LOGOS'];

// Configuration
const MAX_WIDTH = 1024;
const QUALITY = 80;

async function processDirectory(dirName) {
    const fullPath = path.join(publicDir, dirName);

    if (!fs.existsSync(fullPath)) {
        console.log(`Directory ${dirName} not found.`);
        return;
    }

    const files = fs.readdirSync(fullPath);

    for (const file of files) {
        if (file.endsWith('.webp')) {
            const filePath = path.join(fullPath, file);

            try {
                // Read to buffer first to avoid file locking on Windows
                const inputBuffer = fs.readFileSync(filePath);
                const image = sharp(inputBuffer);
                const metadata = await image.metadata();

                if (metadata.width > MAX_WIDTH || metadata.height > MAX_WIDTH) {
                    console.log(`Resizing ${file} (${metadata.width}x${metadata.height})...`);

                    const buffer = await image
                        .resize({
                            width: MAX_WIDTH,
                            height: MAX_WIDTH,
                            fit: 'inside',
                            withoutEnlargement: true
                        })
                        .webp({ quality: QUALITY })
                        .toBuffer();

                    fs.writeFileSync(filePath, buffer);
                    console.log(`Saved optimized ${file}`);
                } else {
                    // Re-compress even if size is okay, to ensure optimization
                    console.log(`Optimizing quality for ${file}...`);
                    const buffer = await image
                        .webp({ quality: QUALITY })
                        .toBuffer();
                    fs.writeFileSync(filePath, buffer);
                }
            } catch (error) {
                console.error(`Error processing ${file}:`, error);
            }
        }
    }
}

async function main() {
    for (const dir of dirsToProcess) {
        await processDirectory(dir);
    }
    console.log('Image optimization complete!');
}

main();
