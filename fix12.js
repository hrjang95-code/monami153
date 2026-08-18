const fs = require('fs');

function replaceAll(f, search, replacement) {
  if(!fs.existsSync(f)) return;
  let t = fs.readFileSync(f, 'utf8');
  t = t.replace(search, replacement);
  fs.writeFileSync(f, t, 'utf8');
}

replaceAll('product.html', /<option>[\s\S]*?<\/option>/, '<option>인기순</option>');
replaceAll('color.html', /<option>[\s\S]*?<\/option>/, '<option>인기순</option>');
replaceAll('cart.html', /<p>[\s\S]*?요\. <span>[\s\S]*?<\/span><\/p>/, '<p>담았어요. <span>3</span></p>');
replaceAll('checkout.html', /<h2>거의<br><span>[\s\S]*?<\/span><\/h2>/, '<h2>거의<br><span>다 왔어요!</span></h2>');

console.log('Done fix12!');
