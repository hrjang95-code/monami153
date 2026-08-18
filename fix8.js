const fs = require('fs');

function fix(file, regex, replacement) {
  if(!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(regex, replacement);
  fs.writeFileSync(file, text, 'utf8');
}

// product.html
fix('product.html', /<option>[\s\S]*?<\/option>/, '<option>인기순</option>');

// detail.html
fix('detail.html', /Signature Red &middot; 1[\s\S]*?<\/div>/, 'Signature Red &middot; 1개</div>');

// color.html
fix('color.html', /<p class="col-hero__desc">[\s\S]*?<\/p>/, '<p class="col-hero__desc">5가지 컬러로 만나는 153의 매력.<br>당신의 오늘을 가장 잘 표현하는 색은 무엇인가요?</p>');

// cart.html & checkout.html
fix('cart.html', /aria-label="[^"]*로가[^>]*>/, 'aria-label="뒤로가기">');
fix('checkout.html', /aria-label="[^"]*로가[^>]*>/, 'aria-label="뒤로가기">');

// mypage.html
fix('mypage.html', /<p class="myp-color__title">[\s\S]*?<\/p>/, '<p class="myp-color__title">내가 가장 많이 고른 색</p>');

console.log('Fixed absolute final bugs!');
