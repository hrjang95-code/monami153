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

// ==============================================
// 1. 공통 로그인 상태 변수 및 데이터 구조 준비
// ==============================================
/*
  로그인 성공 후 사용자 데이터 구조 (향후 모든 provider 공통 사용)
  {
    uid: string,         // 사용자 고유값
    provider: string,    // "google" | "kakao" | "apple" | "temporary"
    name: string,        // 사용자 이름
    email: string,       // 사용자 이메일
    photoURL: string,    // 프로필 이미지 URL (없으면 빈 문자열)
    isLoggedIn: boolean  // 로그인 상태 (true/false)
  }
*/
let currentUser = null; // 초기 로그인 상태는 null

function saveCurrentUser() {
  if (currentUser) {
    localStorage.setItem('monami153_user', JSON.stringify(currentUser));
  } else {
    localStorage.removeItem('monami153_user');
  }
}

function loadCurrentUser() {
  const savedUser = localStorage.getItem('monami153_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch (e) {
      console.error("사용자 정보 파싱 오류:", e);
      currentUser = null;
    }
  }
}

function showLoginToast(message) {
  const existingToast = document.querySelector('.login-toast');
  if (existingToast) {
    existingToast.remove();
  }

  const appContainer = document.querySelector('.app');
  if (!appContainer) return;

  const toast = document.createElement('div');
  toast.className = 'login-toast';
  toast.innerHTML = message.replace(/\n/g, '<br>');

  appContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('is-visible');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

function renderLoginState() {
  const loginUnauth = document.getElementById('login-unauth');
  const loginAuth = document.getElementById('login-auth');
  
  if (!loginUnauth || !loginAuth) return;

  if (currentUser && currentUser.isLoggedIn) {
    loginUnauth.style.display = 'none';
    loginAuth.style.display = 'flex';

    const nameEl = document.getElementById('auth-user-name');
    const emailEl = document.getElementById('auth-user-email');
    const providerEl = document.getElementById('auth-user-provider');

    if (nameEl) nameEl.textContent = currentUser.name;
    if (emailEl) emailEl.textContent = currentUser.email;
    if (providerEl) providerEl.textContent = currentUser.provider;
  } else {
    loginUnauth.style.display = 'flex';
    loginAuth.style.display = 'none';
  }
}

function renderMyPageState() {
  const mypageUnauth = document.getElementById('mypage-unauth');
  const mypageAuth = document.getElementById('mypage-auth');

  if (!mypageUnauth || !mypageAuth) return;

  if (currentUser && currentUser.isLoggedIn) {
    mypageUnauth.style.display = 'none';
    mypageAuth.style.display = 'block';

    const myNameEl = document.getElementById('myp-user-name');
    const myEmailEl = document.getElementById('myp-user-email');
    const myProviderEl = document.getElementById('myp-user-provider');

    if (myNameEl) {
      myNameEl.textContent = currentUser.name || "MONAMI USER";
    }
    if (myEmailEl) {
      myEmailEl.textContent = currentUser.email || "";
    }
    if (myProviderEl) {
      myProviderEl.textContent = currentUser.provider ? currentUser.provider.toUpperCase() : "";
    }
  } else {
    mypageUnauth.style.display = 'flex';
    mypageAuth.style.display = 'none';
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('monami153_user');
  renderLoginState();
  renderMyPageState();
  showLoginToast("로그아웃되었습니다.");
}

document.addEventListener('DOMContentLoaded', () => {
  const tempLoginBtn = document.getElementById('login-temporary');
  
  if (tempLoginBtn) {
    tempLoginBtn.addEventListener('click', () => {
      currentUser = {
        uid: "temporary-user-001",
        provider: "temporary",
        name: "MONAMI USER",
        email: "temporary@monami153.com",
        photoURL: "",
        isLoggedIn: true
      };
      
      saveCurrentUser();
      
      console.log("임시 로그인 성공:", currentUser);

      if (currentUser.isLoggedIn === true) {
        showLoginToast("로그인 완료!\nMONAMI 153에 오신 것을 환영해요.");
        renderLoginState();
        renderMyPageState();
      }
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logoutUser();
    });
  }

  const mypageLogoutBtn = document.getElementById('mypage-logout-btn');
  if (mypageLogoutBtn) {
    mypageLogoutBtn.addEventListener('click', () => {
      logoutUser();
      setTimeout(() => {
        location.href = 'login.html';
      }, 700);
    });
  }

  // 초기 로그인 상태 복원 및 렌더링
  loadCurrentUser();
  renderLoginState();
  renderMyPageState();
});

// 장바구니 데이터 구조
let cartItems = [
  {
    id: "product-001",
    name: "MONAMI 153 VIVID",
    price: 1500,
    quantity: 3,
    stock: 10,
    image: "img/m_h2.png",
    colorHex: "#cc0000",
    colorName: "Signature Red",
    filter: "hue-rotate(330deg) saturate(3)"
  },
  {
    id: "product-002",
    name: "PLUS PEN 3000",
    price: 800,
    quantity: 1,
    stock: 10,
    image: "img/w_h8.png",
    colorHex: "#ffc107",
    colorName: "Mustard Yellow",
    filter: "hue-rotate(50deg) saturate(2)"
  },
  {
    id: "product-003",
    name: "FX ZETA 0.5",
    price: 1200,
    quantity: 2,
    stock: 10,
    image: "img/w_h9.png",
    colorHex: "#1565c0",
    colorName: "Deep Blue",
    filter: "hue-rotate(210deg) saturate(2)"
  }
];

try {
  const storedCart = localStorage.getItem('monami153_cart');
  if (storedCart) {
    cartItems = JSON.parse(storedCart).map(item => ({
      ...item,
      stock: item.stock ?? 10
    }));
  }
} catch (e) {
  console.error("Failed to parse cart data from localStorage", e);
}

function saveCartToStorage() {
  try {
    localStorage.setItem('monami153_cart', JSON.stringify(cartItems));
  } catch (e) {
    console.error("Failed to save cart data to localStorage", e);
  }
}

// 장바구니 렌더링 함수
function renderCart() {
  const crtList = document.querySelector('.crt-list');
  if (!crtList) return;
  
  if (cartItems.length === 0) {
    crtList.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; text-align: center; color: #555;">
        <svg viewBox="0 0 24 24" style="width: 48px; height: 48px; margin-bottom: 16px; opacity: 0.3;">
          <path d="M3 4h2l2 11h10l2-8H6" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="9" cy="19" r="1" stroke="currentColor" stroke-width="2"/>
          <circle cx="17" cy="19" r="1" stroke="currentColor" stroke-width="2"/>
        </svg>
        <p style="font-size: 14px; font-weight: 700; color: #111; margin: 0 0 8px;">장바구니가 비어 있어요.</p>
        <p style="font-size: 12px; margin: 0 0 24px;">마음에 드는 153을 담아보세요.</p>
        <button onclick="location.href='product.html'" style="background: var(--red); color: #fff; border: none; padding: 12px 24px; border-radius: 30px; font-size: 12px; font-weight: 700; cursor: pointer;">상품 보러가기</button>
      </div>
    `;
  } else {
    crtList.innerHTML = cartItems.map(item => `
      <div class="crt-item" data-id="${item.id}">
        <button class="crt-item__delete" aria-label="삭제" onclick="removeCartItem('${item.id}')">
          <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div class="crt-item__check">
          <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <div class="crt-item__img">
          <img src="${item.image}" alt="${item.name}" style="filter:${item.filter}" onerror="this.style.display='none'" />
        </div>
        <div class="crt-item__info">
          <h3 class="crt-item__title">${item.name}</h3>
          <p class="crt-item__color">
            <span class="crt-item__color-dot" style="background:${item.colorHex}"></span>
            ${item.colorName}
          </p>
          <p class="crt-item__price">₩${item.price.toLocaleString()}</p>
          <div class="crt-item__qty">
            <button onclick="updateQuantity('${item.id}', -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 총 금액 계산 및 반영
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const formattedPrice = `₩${totalPrice.toLocaleString()}`;
  
  const priceEl = document.querySelector('.crt-summary__row--price');
  const totalEl = document.querySelector('.crt-summary__total-val');
  
  if (priceEl) priceEl.textContent = formattedPrice;
  if (totalEl) totalEl.textContent = formattedPrice;

  // 총 수량(개수) 계산 및 반영
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const itemLabel = totalQuantity === 1 ? 'ITEM' : 'ITEMS';
  const selectedEl = document.querySelector('.crt-summary__selected');
  
  if (selectedEl) {
    selectedEl.textContent = `SELECTED: ${totalQuantity} ${itemLabel}`;
  }

  // ORDER NOW 버튼 활성화/비활성화
  const orderBtn = document.querySelector('.crt-btn-order');
  if (orderBtn) {
    if (cartItems.length === 0) {
      orderBtn.disabled = true;
      orderBtn.style.opacity = '0.5';
      orderBtn.style.pointerEvents = 'none';
    } else {
      orderBtn.disabled = false;
      orderBtn.style.opacity = '1';
      orderBtn.style.pointerEvents = 'auto';
    }
  }
}

function updateCartBadge() {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.app__cart-badge');
  
  badges.forEach(badge => {
    if (totalQuantity > 0) {
      badge.textContent = totalQuantity;
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.justifyContent = 'center';
      badge.style.color = '#fff';
      badge.style.fontSize = '10px';
      badge.style.fontWeight = 'bold';
      badge.style.width = '16px';
      badge.style.height = '16px';
      badge.style.top = '8px';
      badge.style.right = '8px';
    } else {
      badge.textContent = '';
      badge.style.display = 'none';
    }
  });
}

function showStockFeedback() {
  let toast = document.getElementById('stockToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'stockToast';
    toast.textContent = '최대 구매 가능 수량입니다.';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(0,0,0,0.8)';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '20px';
    toast.style.fontSize = '14px';
    toast.style.zIndex = '9999';
    toast.style.transition = 'opacity 0.3s ease';
    toast.style.pointerEvents = 'none';
    document.body.appendChild(toast);
  }
  toast.style.opacity = '1';
  clearTimeout(toast.timeoutId);
  toast.timeoutId = setTimeout(() => {
    toast.style.opacity = '0';
  }, 2000);
}

function updateQuantity(id, change) {
  const item = cartItems.find(i => i.id === id);
  if (item) {
    const currentStock = item.stock ?? 10;
    if (change > 0 && item.quantity >= currentStock) {
      showStockFeedback();
      return;
    }
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      item.quantity = newQuantity;
      saveCartToStorage(); // 데이터 저장
      renderCart(); // Re-render to update the UI
      updateCartBadge(); // 배지 갱신
    } else if (change === -1) {
      removeCartItem(id); // 수량이 1일 때 - 누르면 바로 삭제
    }
  }
}

function removeCartItem(id) {
  const index = cartItems.findIndex(i => i.id === id);
  if (index !== -1) {
    cartItems.splice(index, 1);
    saveCartToStorage(); // 데이터 저장
    renderCart(); // UI 갱신
    updateCartBadge(); // 배지 갱신
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartBadge();
});

