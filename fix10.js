const fs = require('fs');

function fix(file, regex, replacement) {
  if(!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(regex, replacement);
  fs.writeFileSync(file, text, 'utf8');
}

// product.html
fix('product.html', /<option>[\s\S]*?기[\s\S]*?<\/option>/, '<option>인기순</option>');

// detail.html
fix('detail.html', /Signature Red &middot; 1[\s\S]<\/div>/, 'Signature Red &middot; 1개</div>');
fix('detail.html', /계속 [\s\S]*?핑[\s\S]*?기<\/button>/, '계속 쇼핑하기</button>');

// color.html
fix('color.html', /<p class="col-hero__desc">[\s\S]*?<\/p>/, '<p class="col-hero__desc">5가지 컬러로 만나는 153의 매력.<br>당신의 오늘을 가장 잘 표현하는 색은 무엇인가요?</p>');
fix('color.html', /<option>[\s\S]*?기[\s\S]*?<\/option>/, '<option>인기순</option>');

// cart.html & checkout.html
fix('cart.html', /aria-label="[^"]*로가[^>]*>/, 'aria-label="뒤로가기">');
fix('checkout.html', /aria-label="[^"]*로가[^>]*>/, 'aria-label="뒤로가기">');

console.log('Fixed absolute final bugs!');
