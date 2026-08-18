const fs = require('fs');
const files = ['index.html', 'product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];

files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  text = text.replace(/<h2>8\.15 광복[\s\S]*?<\/h2>/, '<h2>8.15 광복절 에디션<br />출시 기념 한정판</h2>');
  fs.writeFileSync(f, text, 'utf8');
});
console.log('Fixed banner!');
