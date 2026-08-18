const fs = require('fs');
let txt = fs.readFileSync('index.html', 'utf8');
let idx = txt.indexOf('Color Your Day');
console.log(JSON.stringify(txt.substring(idx - 10, idx + 20)));
idx = txt.indexOf('무한');
console.log(JSON.stringify(txt.substring(idx - 20, idx + 20)));
idx = txt.indexOf('class=\"brand\"');
console.log(JSON.stringify(txt.substring(idx, idx + 40)));
