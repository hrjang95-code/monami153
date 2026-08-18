const fs = require('fs');

const files = ['index.html', 'product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];

files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');

  // Title
  text = text.replace(/<title>MONAMI 153.*?Color Your Day<\/title>/g, '<title>MONAMI 153 — Color Your Day</title>');

  // Brand aside
  text = text.replace(/<aside class="brand" aria-label="MONAMI 153[^"]*">/g, '<aside class="brand" aria-label="MONAMI 153 브랜드 쇼케이스">');
  text = text.replace(/class="brand__logo" aria-label="MONAMI 153[^"]*">/g, 'class="brand__logo" aria-label="MONAMI 153 홈">');
  
  // Brand lead
  text = text.replace(/<p class="brand__lead">[^<]*<br \/>[^<]*<\/p>/g, '<p class="brand__lead">모나미 153,<br />무한한 가능성</p>');

  // Search
  text = text.replace(/placeholder="[^"]*153[^"]*"/g, 'placeholder="어떤 153을 찾으시나요?"');

  // Brand tags
  text = text.replace(/<div class="brand__tags">[\s\S]*?<\/div>/g, `<div class="brand__tags">
          <button>#153오리지널</button>
          <button>#토너먼트</button>
          <button>#153네이처</button>
          <button>#한정판</button>
          <button>#이벤트</button>
          <button>#선물용</button>
        </div>`);

  // Cards
  text = text.replace(/<p class="brand-card__body">1963[^<]*<br \/>[^<]*<br \/>[^<]*<\/p>/g, '<p class="brand-card__body">1963년부터<br />사랑받아온<br />모나미 153</p>');
  text = text.replace(/aria-label="153[^"]*보기"/g, 'aria-label="153 스토리 자세히 보기"');
  
  text = text.replace(/<p class="brand-card__body">[^<]*루[^<]*<br \/>[^<]*<br \/>[^<]*<\/p>/g, '<p class="brand-card__body">당신의 하루를<br />완성할<br />컬러를 찾아</p>');
  text = text.replace(/aria-label="컬러 찾기[^"]*바로가[^"]*"/g, 'aria-label="컬러 찾기 서비스 바로가기"');

  text = text.replace(/<p class="brand-card__body">153[^<]*<br \/>마음, [^<]*<\/p>/g, '<p class="brand-card__body">153으로 전하는<br />마음, 선물하기</p>');
  text = text.replace(/aria-label="[^"]*구경[^"]*"/g, 'aria-label="선물샵 구경하기"');

  // Cart
  text = text.replace(/aria-label="[^"]*바구니"/g, 'aria-label="장바구니"');
  text = text.replace(/aria-label="[^"]*로[^"]*림"/g, 'aria-label="새로운 알림"');

  // Hero
  text = text.replace(/<h3>[^<]*<br \/>[^<]*<em>[^<]*<\/em>[^<]*<br \/>[^<]*<\/h3>/g, '<h3>딸깍,<br />오늘의 <em>색</em>을<br />꺼내 보세요.</h3>');
  text = text.replace(/<p class="hero__sub">모나[^<]*153, 무한[^<]*성<\/p>/g, '<p class="hero__sub">모나미 153, 무한한 가능성</p>');
  
  text = text.replace(/<!-- [^<]*디케[^<]* -->/g, '<!-- 슬라이드 인디케이터 -->');
  text = text.replace(/<!-- [^<]*비주[^<]* -->/g, '<!-- 히어로 비주얼 -->');
  text = text.replace(/alt="[^"]*의 MONAMI 153 볼펜"/g, 'alt="여러 색의 MONAMI 153 볼펜"');
  
  // Line-up
  text = text.replace(/<a href="product.html">[^<]*보기 &gt;<\/a>/g, '<a href="product.html">전체보기 &gt;</a>');
  
  text = text.replace(/<nav class="line-up__tabs">[\s\S]*?<\/nav>/g, `<nav class="line-up__tabs">
              <button class="is-active">전체</button>
              <button>153 ORIGINAL</button>
              <button>프리미엄</button>
              <button>볼펜</button>
              <button>리필심</button>
              <button>기프트상품</button>
            </nav>`);

  // Prices
  text = text.replace(/<strong>1,000[^<]*<\/strong>/g, '<strong>1,000원</strong>');
  text = text.replace(/<strong>1,300[^<]*<\/strong>/g, '<strong>1,300원</strong>');
  text = text.replace(/<strong>1,500[^<]*<\/strong>/g, '<strong>1,500원</strong>');
  text = text.replace(/<strong>2,000[^<]*<\/strong>/g, '<strong>2,000원</strong>');

  // Special banner
  text = text.replace(/<h2>8\.15 광복[^<]*<br \/>출시 기념 [^<]*<\/h2>/g, '<h2>8.15 광복절 에디션<br />출시 기념 한정판</h2>');

  // Bottom nav
  text = text.replace(/aria-label="[^"]*단 [^"]*비게이[^"]*"/g, 'aria-label="하단 네비게이션"');
  
  // Also fix the tag name that was corrupted!
  // <button>#153?리지??/button> was <button>#153오리지널</button>. I already replaced brand tags entirely.
  // <button>리필??/button> was <button>리필심</button>. I already replaced line-up__tabs entirely.
  
  // Now, what about the other files?
  // Let's replace any `\ufffd` in texts if any remain
  
  fs.writeFileSync(f, text, 'utf8');
});
console.log("Regex replacements done.");
