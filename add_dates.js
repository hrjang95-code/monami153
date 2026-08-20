const fs = require('fs');

function addDates(filename, regex) {
  let html = fs.readFileSync(filename, 'utf8');
  let date = 30;
  
  html = html.replace(regex, (match) => {
    date--;
    const day = date.toString().padStart(2, '0');
    return match + ' data-date="2026-08-' + day + '"';
  });
  
  fs.writeFileSync(filename, html);
}

addDates('product.html', /<article\s+class="p-card"/g);
addDates('color.html', /<article\s+class="col-mini-card"/g);
