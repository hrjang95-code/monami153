document.querySelectorAll(".colors__row button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".colors__row button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
  });
});

document.querySelectorAll(".product__heart").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = button.textContent === "♡" ? "♥" : "♡";
  });
});

function initDrawer() {
  const hamburgerBtn = document.querySelector('.app__header .app__icon[aria-label="메뉴"]');
  const appContainer = document.querySelector('.app');
  if (!hamburgerBtn || !appContainer) return;

  const drawerHTML = `
    <div class="drawer-overlay"></div>
    <aside class="drawer-panel">
      <div class="drawer-panel__header">
        <button class="drawer-panel__close" aria-label="닫기">
          <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <div class="drawer-panel__logo">monami<span>153</span></div>
      </div>
      
      <div class="drawer-panel__scroll">
        <div class="drawer-panel__hero">
          <div class="drawer-panel__hero-bg">153</div>
          <div class="drawer-panel__hero-lines">
            <span style="background:#111"></span>
            <span style="background:var(--red)"></span>
            <span style="background:#1d69b7"></span>
            <span style="background:#07804f"></span>
          </div>
          <h3>딸깍!<br>오늘의 색을<br>꺼내 보세요<span>.</span></h3>
          <p class="drawer-panel__hero-color">COLOR YOUR DAY.</p>
          <p class="drawer-panel__hero-since">MONAMI 153 SINCE 1963</p>
        </div>
        
        <ul class="drawer-menu">
          <li>
            <a href="index.html">
              <div class="drawer-menu__icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="9 22 9 12 15 12 15 22" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
              <div class="drawer-menu__text">
                <strong>HOME</strong>
                <span>홈 / 상품목록</span>
              </div>
              <div class="drawer-menu__arrow"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
            </a>
          </li>
          <li>
            <a href="product.html">
              <div class="drawer-menu__icon"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
              <div class="drawer-menu__text">
                <strong>PRODUCT</strong>
                <span>153 제품 보기</span>
              </div>
              <div class="drawer-menu__arrow"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
            </a>
          </li>
          <li>
            <a href="color.html">
              <div class="drawer-menu__icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
              <div class="drawer-menu__text">
                <strong>COLOR PICK</strong>
                <span class="drawer-menu__dots">컬러별 제품 탐색 <i style="background:#111"></i><i style="background:#1d69b7"></i><i style="background:var(--red)"></i><i style="background:#07804f"></i><i style="background:#f4c22b"></i></span>
              </div>
              <div class="drawer-menu__arrow"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
            </a>
          </li>
          <li>
            <a href="cart.html">
              <div class="drawer-menu__icon"><svg viewBox="0 0 24 24"><path d="M3 4h2l2 11h10l2-8H6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="19" r="1" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="19" r="1" stroke="currentColor" stroke-width="2"/></svg></div>
              <div class="drawer-menu__text">
                <strong>CART</strong>
                <span>장바구니</span>
              </div>
              <div class="drawer-menu__arrow"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
            </a>
          </li>
          <li>
            <a href="mypage.html">
              <div class="drawer-menu__icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
              <div class="drawer-menu__text">
                <strong>MY 153</strong>
                <span>마이페이지</span>
              </div>
              <div class="drawer-menu__arrow"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div class="drawer-menu__icon"><svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
              <div class="drawer-menu__text">
                <strong>ABOUT 153</strong>
                <span>153 브랜드 스토리</span>
              </div>
              <div class="drawer-menu__arrow"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
            </a>
          </li>
        </ul>
        
        <div class="drawer-brand">
          <h4>153 &mdash; SINCE 1963</h4>
          <p>1963년부터 이어진,<br>우리의 가장 익숙한 볼펜.</p>
          <div class="drawer-brand__eng">
            ONE PEN.<br>SIX DECADES.<br>COUNTLESS STORIES.
          </div>
          <div class="drawer-brand__bg">153</div>
        </div>
      </div>
    </aside>
  `;

  // Insert drawer HTML into .app container
  appContainer.insertAdjacentHTML('beforeend', drawerHTML);

  const overlay = appContainer.querySelector('.drawer-overlay');
  const panel = appContainer.querySelector('.drawer-panel');
  const closeBtn = appContainer.querySelector('.drawer-panel__close');

  function openDrawer() {
    overlay.classList.add('is-active');
    panel.classList.add('is-active');
    appContainer.style.overflow = 'hidden'; // prevent background scrolling if any
  }

  function closeDrawer() {
    overlay.classList.remove('is-active');
    panel.classList.remove('is-active');
    appContainer.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-active')) {
      closeDrawer();
    }
  });
}

document.addEventListener('DOMContentLoaded', initDrawer);
