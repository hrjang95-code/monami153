const fs = require('fs');
const files = ['product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];
files.forEach(f => {
  let t = fs.readFileSync(f, 'utf8');
  t = t.replace(/<a href=\"#\" class=\"brand__logo\"/g, '<a href=\"index.html\" class=\"brand__logo\"');
  t = t.replace(/<a href=\"#\" class=\"app__logo\"/g, '<a href=\"index.html\" class=\"app__logo\"');
  fs.writeFileSync(f, t, 'utf8');
});
