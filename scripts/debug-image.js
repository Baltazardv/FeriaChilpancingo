import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../public/ELEMENTOS/CATEDRAL_Mesa de trabajo 1.webp');

async function check() {
    try {
        const metadata = await sharp(filePath).metadata();
        console.log('File:', filePath);
        console.log('Width:', metadata.width);
        console.log('Height:', metadata.height);
        console.log('Size:', metadata.size);
    } catch (e) {
        console.error(e);
    }
}

check();
