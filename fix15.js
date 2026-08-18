const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const brandRegex = /<aside class="brand"[\s\S]*?<\/aside>/;
const navRegex = /<nav class="bottom-nav"[\s\S]*?<\/nav>/;

const cleanBrand = indexHtml.match(brandRegex)[0];

const files = ['product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace the entire brand section
  content = content.replace(brandRegex, cleanBrand);
  
  // The nav has a different active button for each page, but the Korean text is '하단 네비게이션' in aria-label, etc.
  content = content.replace(/aria-label="\?단 \?비게이\?"/g, 'aria-label="하단 네비게이션"');
  
  // Also title
  content = content.replace(/<title>[\s\S]*?<\/title>/g, '<title>MONAMI 153 — Color Your Day</title>');

  // Cart badge
  content = content.replace(/aria-label="\?바구니"/g, 'aria-label="장바구니"');
  content = content.replace(/aria-label="\?로\?\?\?림"/g, 'aria-label="새로운 알림"');
  
  // Back button (cart/checkout)
  content = content.replace(/aria-label="\?로가\?"/g, 'aria-label="뒤로가기"');

  // App logo href fix
  content = content.replace(/href="#" class="app__logo"/g, 'href="index.html" class="app__logo"');

  fs.writeFileSync(f, content, 'utf8');
  console.log('Processed ' + f);
});
