const fs = require('fs');

let t = fs.readFileSync('index.html', 'utf8');

// The brand cards block is corrupted
t = t.replace(/<div class="brand__cards">[\s\S]*?<\/div>\s*<\/section>/, `<div class="brand__cards">
          <!-- 153 STORY -->
          <article class="brand-card">
            <div class="brand-card__content">
              <h2 class="brand-card__title">153 STORY</h2>
              <p class="brand-card__body">1963년부터<br />사랑받아온<br />모나미 153</p>
            </div>
            <div class="brand-card__illust" aria-hidden="true">
              <svg viewBox="0 0 64 48">
                <path d="M12 24l16 16 24-24" fill="none" stroke="currentColor" stroke-width="3" />
              </svg>
            </div>
            <button class="brand-card__btn" aria-label="153 스토리 자세히 보기">
              <svg viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </article>
          <!-- COLOR PICK -->
          <article class="brand-card">
            <div class="brand-card__content">
              <h2 class="brand-card__title">COLOR PICK</h2>
              <p class="brand-card__body">당신의 하루를<br />완성할<br />컬러를 찾아</p>
            </div>
            <div class="brand-card__illust" aria-hidden="true">
              <div class="brand-card__circles">
                <span style="background:var(--red)"></span>
                <span style="background:#1d69b7"></span>
                <span style="background:#f4c22b"></span>
              </div>
            </div>
            <button class="brand-card__btn" aria-label="컬러 찾기 서비스 바로가기">
              <svg viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </article>
          <!-- GIFT SHOP -->
          <article class="brand-card">
            <div class="brand-card__content">
              <h2 class="brand-card__title">GIFT SHOP</h2>
              <p class="brand-card__body">153으로 전하는<br />마음, 선물하기</p>
            </div>
            <div class="brand-card__illust" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <rect x="8" y="16" width="32" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
                <path d="M24 16v24M16 16c0-6 8-8 8-2s-8 6-8 6c0-6 8-8 8-2s-8 6-8 6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <button class="brand-card__btn" aria-label="선물샵 구경하기">
              <svg viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </article>
        </div>
      </section>`);

// Hero copy block
t = t.replace(/<div class="hero__copy">[\s\S]*?<\/div>\s*<\/section>/, `<div class="hero__copy">
              <h3>딸깍,<br />오늘의 <em>색</em>을<br />꺼내 보세요.</h3>
              <p class="hero__sub">모나미 153, 무한한 가능성</p>
              <a href="color.html" class="hero__link">153, COLOR YOUR DAY &rarr;</a>

              <!-- 슬라이드 인디케이터 -->
              <div class="hero__dots" aria-hidden="true">
                <span class="is-active"></span><span></span><span></span>
              </div>
            </div>
            <!-- 히어로 비주얼 -->
            <div class="hero__visual" aria-hidden="true">
              <img src="img/m_h2.png" alt="여러 색의 MONAMI 153 볼펜" />
            </div>
          </section>`);

// Bottom nav block
t = t.replace(/<nav class="bottom-nav"[^>]*>[\s\S]*?<\/nav>/, `<nav class="bottom-nav" aria-label="하단 네비게이션">
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

fs.writeFileSync('index.html', t, 'utf8');

const files = ['product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];
files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  // Re-apply the brand cards fix to ALL files since they all have the same brand block
  text = text.replace(/<div class="brand__cards">[\s\S]*?<\/div>\s*<\/section>/, `<div class="brand__cards">
          <!-- 153 STORY -->
          <article class="brand-card">
            <div class="brand-card__content">
              <h2 class="brand-card__title">153 STORY</h2>
              <p class="brand-card__body">1963년부터<br />사랑받아온<br />모나미 153</p>
            </div>
            <div class="brand-card__illust" aria-hidden="true">
              <svg viewBox="0 0 64 48">
                <path d="M12 24l16 16 24-24" fill="none" stroke="currentColor" stroke-width="3" />
              </svg>
            </div>
            <button class="brand-card__btn" aria-label="153 스토리 자세히 보기">
              <svg viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </article>
          <!-- COLOR PICK -->
          <article class="brand-card">
            <div class="brand-card__content">
              <h2 class="brand-card__title">COLOR PICK</h2>
              <p class="brand-card__body">당신의 하루를<br />완성할<br />컬러를 찾아</p>
            </div>
            <div class="brand-card__illust" aria-hidden="true">
              <div class="brand-card__circles">
                <span style="background:var(--red)"></span>
                <span style="background:#1d69b7"></span>
                <span style="background:#f4c22b"></span>
              </div>
            </div>
            <button class="brand-card__btn" aria-label="컬러 찾기 서비스 바로가기">
              <svg viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </article>
          <!-- GIFT SHOP -->
          <article class="brand-card">
            <div class="brand-card__content">
              <h2 class="brand-card__title">GIFT SHOP</h2>
              <p class="brand-card__body">153으로 전하는<br />마음, 선물하기</p>
            </div>
            <div class="brand-card__illust" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <rect x="8" y="16" width="32" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
                <path d="M24 16v24M16 16c0-6 8-8 8-2s-8 6-8 6c0-6 8-8 8-2s-8 6-8 6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <button class="brand-card__btn" aria-label="선물샵 구경하기">
              <svg viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          </article>
        </div>
      </section>`);
  fs.writeFileSync(f, text, 'utf8');
});
