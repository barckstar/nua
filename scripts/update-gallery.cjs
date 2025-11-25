const fs = require('fs');
const path = require('path');
const { imageSize: sizeOf } = require('image-size');

const galleryDir = path.join(__dirname, '../public/gallery');
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'gallery.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Ensure gallery directory exists
if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
    console.log('Created gallery directory at public/gallery');
}

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

try {
    const files = fs.readdirSync(galleryDir);

    const images = files
        .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => {
            const filePath = path.join(galleryDir, file);
            try {
                const buffer = fs.readFileSync(filePath);
                const dimensions = sizeOf(buffer);
                return {
                    src: `/gallery/${file}`,
                    width: dimensions.width,
                    height: dimensions.height,
                    alt: path.basename(file, path.extname(file)) // Use filename as alt text
                };
            } catch (err) {
                console.error(`Error reading dimensions for ${file}:`, err.message);
                return null;
            }
        })
        .filter(img => img !== null);

    fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
    console.log(`Successfully generated gallery.json with ${images.length} images.`);

} catch (err) {
    console.error('Error generating gallery data:', err);
    process.exit(1);
}
