const fs = require('fs');
const files = ['index.html', 'product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];

files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');

  // index.html special banner
  text = text.replace(/<h2>8\.15 광복.*?<br \/>출시 기념 .*?<\/h2>/, '<h2>8.15 광복절 에디션<br />출시 기념 한정판</h2>');

  // product.html hero
  text = text.replace(/<h2 class="prod-hero__title">.*?<br>.*?<span style="color:var\(--red\)">\.<\/span><\/h2>/, '<h2 class="prod-hero__title">당신의 153을<br>골라보세요<span style="color:var(--red)">.</span></h2>');
  
  // product filters
  text = text.replace(/<span>.*?<\/span>/g, match => {
    if (match.includes('\ufffd') || match.includes('?')) {
      if (match.includes('신상품')) return '<span>신상품순</span>';
      if (match.includes('상')) return '<span>신상품순</span>';
    }
    return match;
  });

  // check if any other text is broken
  // In product.html, the button "더보기 (16/34)"?
  text = text.replace(/<button class="btn-outline" onclick="location\.href='product\.html'">.*?<\/button>/, `<button class="btn-outline" onclick="location.href='product.html'">
              <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg> 더보기 (16/34)
            </button>`);

  // detail.html
  text = text.replace(/<div class="dt-hero__sleek">.*?<span>.*?<\/span>.*?<\/div>/, `<div class="dt-hero__sleek">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
            <span>SLEEK</span>
          </div>`);
  text = text.replace(/<p class="dt-info__eyebrow">.*?<\/p>/, '<p class="dt-info__eyebrow">MONAMI 153 ID</p>');
  text = text.replace(/<p class="dt-info__desc">.*?<\/p>/, '<p class="dt-info__desc">메탈 소재가 주는 묵직한 필기감과 고급스러운 무드. 당신의 아이덴티티를 표현할 153 ID 라인업입니다.</p>');
  text = text.replace(/<p class="dt-info__meta">.*?<\/p>/, '<p class="dt-info__meta">0.7mm / 고급 메탈 케이스 포함</p>');
  
  text = text.replace(/<button class="dt-btn-cart"[^>]*>.*?<\/button>/, `<button class="dt-btn-cart" onclick="openCartPopup()">ADD TO CART</button>`);
  
  // color.html
  text = text.replace(/<h2 class="colors__title">.*?<span style="color:var\(--red\)">.*?<\/span><\/h2>/, `<h2 class="colors__title">컬러별로 153을<br>만나보세요<span style="color:var(--red)">.</span></h2>`);
  text = text.replace(/<p class="colors__sub">.*?<\/p>/, `<p class="colors__sub">원하는 색상의 버튼을 눌러보세요.</p>`);
  text = text.replace(/<button onclick="location\.href='detail\.html'">.*?<\/button>/g, `<button onclick="location.href='detail.html'">상품 보기 <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></button>`);

  // cart.html
  text = text.replace(/<h1 class="crt-header__title">.*?<\/h1>/, `<h1 class="crt-header__title">CART</h1>`);
  text = text.replace(/<div class="crt-summary__title">.*?<\/div>/, `<div class="crt-summary__title">담았어요.</div>`);
  text = text.replace(/<div class="crt-summary__count">.*?<\/div>/, `<div class="crt-summary__count">총 3개</div>`);

  // checkout.html
  text = text.replace(/<h1 class="chk-header__title">.*?<\/h1>/, `<h1 class="chk-header__title">CHECKOUT</h1>`);
  text = text.replace(/<h2 class="chk-section__title">.*?<\/h2>/g, function(match, offset, string) {
    if (offset < 1000) return `<h2 class="chk-section__title">주문자 정보</h2>`;
    if (offset < 2000) return `<h2 class="chk-section__title">배송지 정보</h2>`;
    return `<h2 class="chk-section__title">결제 수단</h2>`;
  });
  text = text.replace(/<label class="chk-radio">.*?<input type="radio" name="payment" checked>.*?<span>.*?<\/span>.*?<\/label>/s, `<label class="chk-radio"><input type="radio" name="payment" checked><span>신용/체크카드</span></label>`);
  text = text.replace(/<label class="chk-radio">.*?<input type="radio" name="payment">.*?<span>.*?<\/span>.*?<\/label>/s, `<label class="chk-radio"><input type="radio" name="payment"><span>네이버페이</span></label>`);
  
  // mypage.html
  text = text.replace(/<h2 class="myp-profile__name">.*?<strong>.*?<\/strong>.*?<\/h2>/, `<h2 class="myp-profile__name"><strong>홍길동</strong>님, 환영합니다.</h2>`);
  text = text.replace(/<p class="myp-profile__meta">.*?<\/p>/, `<p class="myp-profile__meta">회원등급: <strong>Family</strong> | 포인트: <strong>1,530 P</strong></p>`);
  
  text = text.replace(/<div class="myp-card__title">.*?<\/div>/g, function(match, offset) {
    if (offset < 2000) return `<div class="myp-card__title">최근 주문내역</div>`;
    return `<div class="myp-card__title">내 관심 상품</div>`;
  });
  text = text.replace(/<div class="myp-order__date">.*?<\/div>/, `<div class="myp-order__date">2026.08.15 주문</div>`);
  text = text.replace(/<div class="myp-order__status">.*?<\/div>/, `<div class="myp-order__status">배송중</div>`);
  text = text.replace(/<h3 class="myp-order__name">.*?<\/h3>/, `<h3 class="myp-order__name">153 ID Signature Red 외 2건</h3>`);
  
  fs.writeFileSync(f, text, 'utf8');
});
console.log('Final fixes applied!');
