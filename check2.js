const fs = require('fs');
let txt = fs.readFileSync('index.html', 'utf8');
let idx = txt.indexOf('무한');
let str = txt.substring(idx - 20, idx + 20);
for(let i=0; i<str.length; i++) {
  console.log(str[i] + ': ' + str.charCodeAt(i).toString(16));
}
