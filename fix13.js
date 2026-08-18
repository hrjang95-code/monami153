const fs = require('fs');

const popupDetailHtml = `
    <!-- ADD TO CART Popup -->
    <div class="dt-popup-overlay" id="cartPopup" aria-hidden="true">
      <div class="dt-popup" role="dialog" aria-labelledby="popupTitle" aria-modal="true">
        <div class="dt-popup__header">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
          <span class="dt-popup__eyebrow">ADDED TO CART</span>
        </div>
        <div class="dt-popup__title" id="popupTitle">장바구니에 담았어요.</div>
        <div class="dt-popup__item">
          <span class="dt-popup__item-name">MONAMI 153 ID</span>
          <span class="dt-popup__item-meta">Signature Red &middot; 1개</span>
        </div>
        <div class="dt-popup__actions">
          <button class="dt-popup__btn dt-popup__btn--primary" onclick="location.href='cart.html'">CART 보기</button>
          <button class="dt-popup__btn dt-popup__btn--secondary" onclick="closeCartPopup()">계속 쇼핑하기</button>
        </div>
      </div>
    </div>
`;

const scriptDetailJs = `
    <script>
      function openCartPopup() {
        document.getElementById('cartPopup').setAttribute('aria-hidden', 'false');
      }
      function closeCartPopup() {
        document.getElementById('cartPopup').setAttribute('aria-hidden', 'true');
      }
    </script>
`;

const popupCheckoutHtml = `
    <!-- ORDER COMPLETE Popup -->
    <div class="chk-popup-overlay" id="orderPopup" aria-hidden="true">
      <div class="chk-popup" role="dialog" aria-labelledby="popupTitle" aria-modal="true">
        <div class="chk-popup__header">
          <span class="chk-popup__eyebrow">ORDER COMPLETE</span>
          <div class="chk-popup__title" id="popupTitle">
            주문 완료!
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
          </div>
        </div>
        <div class="chk-popup__content">
          <p class="chk-popup__desc">고객님의 주문이 정상적으로 완료되었습니다.</p>
          <p class="chk-popup__order-num">주문번호 <strong>20260815-123456</strong></p>
        </div>
        <div class="chk-popup__actions">
          <button class="chk-popup__btn chk-popup__btn--primary" onclick="location.href='mypage.html'">주문 내역 보기</button>
          <button class="chk-popup__btn chk-popup__btn--secondary" onclick="location.href='index.html'">홈으로 돌아가기</button>
        </div>
      </div>
    </div>
`;

const scriptCheckoutJs = `
    <script>
      function openOrderPopup() {
        document.getElementById('orderPopup').setAttribute('aria-hidden', 'false');
      }
    </script>
`;

const files = ['product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];

files.forEach(f => {
  let t = fs.readFileSync('clean/' + f, 'utf8');
  
  // replace href='#' with href='index.html' globally for brand__logo and app__logo
  t = t.replace(/href="#" class="brand__logo"/g, 'href="index.html" class="brand__logo"');
  t = t.replace(/href="#" class="app__logo"/g, 'href="index.html" class="app__logo"');

  // Insert popups for detail.html
  if (f === 'detail.html') {
    t = t.replace(/<button class="dt-btn-cart">ADD TO CART<\/button>/, '<button class="dt-btn-cart" onclick="openCartPopup()">ADD TO CART</button>');
    t = t.replace(/<\/div>\s*<\/div>\s*<\/body>/, '\n' + popupDetailHtml + '\n' + scriptDetailJs + '\n  </div>\n</div>\n</body>');
  }

  // Insert popups for checkout.html
  if (f === 'checkout.html') {
    t = t.replace(/<button class="chk-submit__btn">PAY NOW<\/button>/, '<button class="chk-submit__btn" onclick="openOrderPopup()">PAY NOW</button>');
    t = t.replace(/<\/div>\s*<\/div>\s*<\/body>/, '\n' + popupCheckoutHtml + '\n' + scriptCheckoutJs + '\n  </div>\n</div>\n</body>');
  }

  fs.writeFileSync(f, t, 'utf8');
  console.log('Processed ' + f);
});
