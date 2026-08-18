const fs = require('fs');

let idx = fs.readFileSync('index.html', 'utf8');
const cleanProd = fs.readFileSync('product.html', 'utf8');

// The entire brand aside is identical up to </aside>
const brandRegex = /<aside class="brand"[\s\S]*?<\/aside>/;
const cleanBrand = cleanProd.match(brandRegex)[0];
idx = idx.replace(brandRegex, cleanBrand);

// Now fix the app side strings for index.html manually
// Wait, I can just use string replace on the remaining known broken strings!
idx = idx.replace(/<title>[\s\S]*?<\/title>/, '<title>MONAMI 153 — Color Your Day</title>');
idx = idx.replace(/placeholder="\?떤 153\?\?찾으\?나\?\?"/, 'placeholder="어떤 153을 찾으시나요?"');
idx = idx.replace(/aria-label="\?바구니"/, 'aria-label="장바구니"');
idx = idx.replace(/aria-label="\?로\?\?\?림"/, 'aria-label="새로운 알림"');
idx = idx.replace(/<h3>\?깍,<br \/>\?늘\?\?<em>\?\?<\/em>\?\?br \/>꺼내 보세\?\?<\/h3>/, '<h3>딸깍,<br />오늘의 <em>색</em>을<br />꺼내 보세요.</h3>');
idx = idx.replace(/<p class="hero__sub">모나\?153, 무한\?\?가\?성<\/p>/, '<p class="hero__sub">모나미 153, 무한한 가능성</p>');
idx = idx.replace(/<!-- \?라\?드 \?디케\?터 -->/, '<!-- 슬라이드 인디케이터 -->');
idx = idx.replace(/<!-- \?어\?비주\?\?-->/, '<!-- 히어로 비주얼 -->');
idx = idx.replace(/alt="\?러 \?의 MONAMI 153 볼펜"/, 'alt="여러 색의 MONAMI 153 볼펜"');
idx = idx.replace(/<a href="product\.html">\?체보기 &gt;<\/a>/, '<a href="product.html">전체보기 &gt;</a>');
idx = idx.replace(/<button class="is-active">\?체<\/button>/, '<button class="is-active">전체</button>');
idx = idx.replace(/<button>\?리미엄<\/button>/, '<button>프리미엄</button>');
idx = idx.replace(/<button>리필\?\?<\/button>/, '<button>리필심</button>');
idx = idx.replace(/<button>기프\?상\?\?<\/button>/, '<button>기프트상품</button>');
idx = idx.replace(/<strong>1,000\?\?<\/strong>/, '<strong>1,000원</strong>');
idx = idx.replace(/<strong>1,300\?\?<\/strong>/, '<strong>1,300원</strong>');
idx = idx.replace(/<strong>1,500\?\?<\/strong>/, '<strong>1,500원</strong>');
idx = idx.replace(/<strong>2,000\?\?<\/strong>/, '<strong>2,000원</strong>');
idx = idx.replace(/<h2>8\.15 광복\?\?\?디\?\?br \/>출시 기념 \?정\?\?<\/h2>/, '<h2>8.15 광복절 에디션<br />출시 기념 한정판</h2>');

// bottom nav
const navRegex = /<nav class="bottom-nav"[\s\S]*?<\/nav>/;
const cleanNav = cleanProd.match(navRegex)[0];
// replace `onclick="location.href='index.html'"` correctly (wait, cleanNav has it for product page)
idx = idx.replace(navRegex, cleanNav);
// Make the first button active for index.html
idx = idx.replace(/<nav class="bottom-nav"[\s\S]*?<\/nav>/, `<nav class="bottom-nav" aria-label="하단 네비게이션">
          <button class="is-active" onclick="location.href='index.html'">
            <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>HOME</span>
          </button>
          <button onclick="location.href='product.html'">
            <svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
            <span>PRODUCT</span>
          </button>
          <button onclick="location.href='color.html'">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span>COLOR</span>
          </button>
          <button onclick="location.href='mypage.html'">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>MY</span>
          </button>
        </nav>`);

fs.writeFileSync('index.html', idx, 'utf8');
console.log('Fixed index.html!');
