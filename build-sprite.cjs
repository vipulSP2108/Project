const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg') && f !== 'sprite.svg');

let symbols = [];

files.forEach(file => {
    const id = path.basename(file, '.svg');
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Extract viewBox if it exists
    const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? `viewBox="${viewBoxMatch[1]}"` : 'viewBox="0 0 24 24"'; // fallback

    // Extract the inner content of the <svg> tag
    const innerContentMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    
    if (innerContentMatch && innerContentMatch[1]) {
        // Wrap in <symbol>
        const symbol = `  <symbol id="${id}" ${viewBox}>\n    ${innerContentMatch[1].trim()}\n  </symbol>`;
        symbols.push(symbol);
    }
});

const spriteSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n${symbols.join('\n')}\n</svg>`;

fs.writeFileSync(path.join(dir, 'sprite.svg'), spriteSvg);
console.log('Sprite created successfully with ' + symbols.length + ' icons.');
