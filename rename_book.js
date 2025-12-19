
import fs from 'fs';
import path from 'path';

const directoryPath = path.join(process.cwd(), 'public/libro');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Filter for images and sort visually/numerically if possible
    // The names are a bit messy, so basic alphanumeric sort might be best approximation
    const imageFiles = files.filter(file => /\.(webp|png|jpg|jpeg)$/i.test(file)).sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    console.log(`Found ${imageFiles.length} images.`);

    imageFiles.forEach((file, index) => {
        const oldPath = path.join(directoryPath, file);
        const extension = path.extname(file);
        const newName = `page_${index + 1}${extension}`;
        const newPath = path.join(directoryPath, newName);

        fs.rename(oldPath, newPath, (err) => {
            if (err) console.log('ERROR: ' + err);
            else console.log(`${file} -> ${newName}`);
        });
    });
});
