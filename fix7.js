const fs = require('fs');

function fix(file, regex, replacement) {
  if(!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(regex, replacement);
  fs.writeFileSync(file, text, 'utf8');
}

// index.html
fix('index.html', /<h2>8\.15 광복[\s\S]*?<\/div>/, `<h2>8.15 광복절 에디션<br />출시 기념 한정판</h2>
              <a href="product.html" class="special-banner__btn">VIEW MORE</a>
            </div>`);

// product.html
fix('product.html', /<h2 class="prod-hero__title">[\s\S]*?<\/h2>/, '<h2 class="prod-hero__title">당신의 153을<br>골라보세요<span style="color:var(--red)">.</span></h2>');

// detail.html
fix('detail.html', /<div class="dt-popup__title">[\s\S]*?<\/div>/, '<div class="dt-popup__title">장바구니에 담았어요.</div>');

// color.html
fix('color.html', /<h2 class="col-hero__title">[\s\S]*?<\/h2>/, '<h2 class="col-hero__title">오늘, 어떤 색을<br>꺼내볼까요?<span style="color:var(--red)">.</span></h2>');

// cart.html & checkout.html
fix('cart.html', /aria-label="[^"]*로가[^"]*"/, 'aria-label="뒤로가기"');
fix('checkout.html', /aria-label="[^"]*로가[^"]*"/, 'aria-label="뒤로가기"');

// mypage.html
fix('mypage.html', /<p class="myp-hero__subtitle">[\s\S]*?<\/p>/, '<p class="myp-hero__subtitle">"내가 고른 펜, 내게 담긴 기록"</p>');

console.log('Fixed final bugs!');
