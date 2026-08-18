const fs = require('fs');

function fixStr(file, search, replace) {
  if(!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  text = text.split(search).join(replace);
  fs.writeFileSync(file, text, 'utf8');
}

fixStr('product.html', '<option>\ufffd\ufffd기\ufffd\ufffd</option>', '<option>인기순</option>');
fixStr('color.html', '<option>\ufffd\ufffd기\ufffd\ufffd</option>', '<option>인기순</option>');

fixStr('detail.html', '계속 \ufffd\ufffd핑\ufffd\ufffd기</button>', '계속 쇼핑하기</button>');
fixStr('detail.html', '계속 \ufffd\ufffd핑\ufffd\ufffd기', '계속 쇼핑하기');

fixStr('cart.html', 'aria-label=\"\ufffd\ufffd로가\ufffd\ufffd>', 'aria-label=\"뒤로가기\">');
fixStr('checkout.html', 'aria-label=\"\ufffd\ufffd로가\ufffd\ufffd>', 'aria-label=\"뒤로가기\">');

console.log('Fixed simple strings!');
