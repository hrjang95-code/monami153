const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const regex = /([^{}]+)\s*\{([^}]*)\}/g;
let match;
while ((match = regex.exec(css)) !== null) {
  const selector = match[1].trim();
  const rules = match[2].trim();
  
  if (selector.includes('.app') || selector.includes('.page') || selector.includes('.app-stage')) {
    if (selector.includes('prod') || selector.includes('col') || selector.includes('my') || selector.includes('crt')) {
       console.log("Found override:", selector);
       console.log(rules);
    }
  }
}
