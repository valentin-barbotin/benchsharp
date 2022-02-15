import path from 'path';
import sharp from 'sharp';
import gm from 'gm';
import fs from 'fs';

const filePath = path.join(__dirname, 'pax.png');
console.log(filePath);

const nullStream = fs.createWriteStream('/dev/null');
const t = Date.now();
gm(filePath).resize(20480, 20480, '@').stream().pipe(nullStream).on('finish', () => {
    console.log(Date.now() - t);
});

// comment / uncomment to see difference

// const img = sharp(filePath).resize(20480, 20480);
// img.pipe(nullStream).on('finish', () => {
//     console.log(`Resized in ${Date.now() - t}ms`);
// });