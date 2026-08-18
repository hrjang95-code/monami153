const fs = require('fs');
function replaceAll(f, search, replacement) {
  if(!fs.existsSync(f)) return;
  let t = fs.readFileSync(f, 'utf8');
  t = t.replace(search, replacement);
  fs.writeFileSync(f, t, 'utf8');
}
replaceAll('product.html', /<option>[\s\S]*?기[\s\S]*?<\/option>/g, '<option>인기순</option>');
replaceAll('detail.html', /1[\s\S]*?<\/div>/g, '1개</div>');
replaceAll('color.html', /<option>[\s\S]*?기[\s\S]*?<\/option>/g, '<option>인기순</option>');
replaceAll('cart.html', /aria-label="[\s\S]*?로가[\s\S]*?>/g, 'aria-label="뒤로가기">');
replaceAll('checkout.html', /aria-label="[\s\S]*?로가[\s\S]*?>/g, 'aria-label="뒤로가기">');
replaceAll('mypage.html', /<p class="myp-color__title">[\s\S]*?<\/p>/g, '<p class="myp-color__title">내가 가장 많이 고른 색</p>');
console.log('done');
