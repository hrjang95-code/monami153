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

document.addEventListener('click', (e) => {
  const checkbox = e.target.closest('.p-card__checkbox');
  if (checkbox) {
    e.preventDefault();
    e.stopPropagation();
    checkbox.classList.toggle('checked');
    return;
  }
  
  const heart = e.target.closest('.p-card__heart');
  if (heart) {
    e.preventDefault();
    e.stopPropagation();
    const svg = heart.querySelector('svg');
    if (svg) {
      if (svg.style.fill === 'var(--red)' || heart.classList.contains('active')) {
        svg.style.fill = 'none';
        svg.style.stroke = '#555';
        heart.classList.remove('active');
      } else {
        svg.style.fill = 'var(--red)';
        svg.style.stroke = 'var(--red)';
        heart.classList.add('active');
      }
    }
  }
});

function initDrawer() {
  const hamburgerBtn = document.querySelector('.app__header .app__icon[aria-label="메뉴"]');
  const appContainer = document.querySelector('.app');
  if (!hamburgerBtn || !appContainer) return;

  const drawerHTML = `
    <div class="drawer-container">
      <div class="drawer-overlay"></div>
      <aside class="drawer-panel">
      <div class="drawer-panel__header">
        <button class="drawer-panel__close" aria-label="닫기">
          <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <a href="login.html" class="drawer-panel__auth" id="drawer-auth-btn"><img src="img/login.png" alt="" class="drawer-auth-icon"><span>로그인</span></a>
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
            <a href="story.html">
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
    </div>
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

  hamburgerBtn.addEventListener('click', () => {
    if (panel.classList.contains('is-active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  renderDrawerAuthState();

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

// Firebase Auth 동적 로드 및 초기화 함수 (한 곳에서 관리)
let firebaseApp = null;
async function getFirebaseAuth() {
  const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js");
  const { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js");

  if (!firebaseApp) {
    // 순수 정적 프로젝트이므로 Vercel 환경변수 자동 주입(import.meta.env)이 불가합니다.
    // 실제 빌드 환경이 아니므로 아래에 실제 값을 문자열로 입력해야 정상 작동합니다.
    const firebaseConfig = {
      apiKey: "AIzaSyBAPG7eemlOfh_i6mEOJJPd-znbGlF7E8w",
      authDomain: "monami153-2f1f7.firebaseapp.com",
      projectId: "monami153-2f1f7",
      storageBucket: "monami153-2f1f7.firebasestorage.app",
      messagingSenderId: "145236413203",
      appId: "1:145236413203:web:5d810f081904113a1728e6"
    };
    firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  }
  return { auth: getAuth(firebaseApp), GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut };
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
    const myPhotoEl = document.getElementById('myp-user-photo');

    if (myNameEl) {
      myNameEl.textContent = currentUser.name || "MONAMI USER";
    }
    if (myEmailEl) {
      myEmailEl.textContent = currentUser.email || "";
    }
    if (myPhotoEl) {
      if (currentUser.photoURL) {
        myPhotoEl.src = currentUser.photoURL;
      } else {
        myPhotoEl.src = "img/login.png";
      }
    }
  } else {
    mypageUnauth.style.display = 'flex';
    mypageAuth.style.display = 'none';
  }
}

function renderDrawerAuthState() {
  const drawerAuthBtn = document.getElementById('drawer-auth-btn');
  if (!drawerAuthBtn) return;
  
  const iconHTML = `<img src="img/login.png" alt="" class="drawer-auth-icon">`;

  if (currentUser && currentUser.isLoggedIn) {
    let displayName = currentUser.nickname || currentUser.displayName || currentUser.name;
    
    if (!displayName && currentUser.email) {
      displayName = currentUser.email.split('@')[0];
    }
    
    let finalText = '고객님';
    if (displayName) {
      finalText = displayName.includes('님') ? displayName : displayName + '님';
    }
    drawerAuthBtn.innerHTML = `${iconHTML}<span>${finalText}</span>`;
    drawerAuthBtn.href = 'mypage.html';
  } else {
    drawerAuthBtn.innerHTML = `${iconHTML}<span>로그인</span>`;
    drawerAuthBtn.href = 'login.html';
  }
}

async function logoutUser() {
  if (currentUser) {
    try {
      if (currentUser.provider === 'google') {
        const { auth, signOut } = await getFirebaseAuth();
        await signOut(auth);
      } else if (currentUser.provider === 'kakao') {
        if (window.Kakao && Kakao.Auth && Kakao.Auth.getAccessToken()) {
          await new Promise((resolve) => Kakao.Auth.logout(resolve));
        }
      }
    } catch (error) {
      console.error("로그아웃 처리 중 에러 발생:", error);
    }
  }

  currentUser = null;
  localStorage.removeItem('monami153_user');
  renderLoginState();
  renderMyPageState();
  renderDrawerAuthState();
  showLoginToast("로그아웃되었습니다.");
}

document.addEventListener('DOMContentLoaded', () => {
  // Kakao SDK 초기화
  if (window.Kakao && !Kakao.isInitialized()) {
    Kakao.init('6d84eee9328b5a332929db265893cfce'); // 사용자가 별도로 전달한 키 값으로 교체
  }

  // 1. Google 실제 로그인 버튼 연결
  const googleBtn = document.getElementById('login-google');
  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      try {
        const { auth, GoogleAuthProvider, signInWithPopup } = await getFirebaseAuth();
        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        currentUser = {
          uid: user.uid,
          provider: "google",
          name: user.displayName || "MONAMI USER",
          email: user.email || "",
          photoURL: user.photoURL || "",
          isLoggedIn: true
        };

        saveCurrentUser();
        renderLoginState();
        renderMyPageState();
        renderDrawerAuthState();
        showLoginToast("Google 로그인 완료!\nMONAMI 153에 오신 것을 환영해요.");
      } catch (error) {
        console.error("Google 로그인 실패:", error);
        showLoginToast("Google 로그인을 완료하지 못했습니다.");
      }
    });
  }

  // 2. Kakao 로그인 버튼 연결
  const kakaoBtn = document.getElementById('login-kakao');
  if (kakaoBtn) {
    kakaoBtn.addEventListener('click', () => {
      try {
        if (!window.Kakao) {
          console.error("Kakao SDK가 로드되지 않았습니다.");
          return;
        }
        if (!Kakao.isInitialized()) {
          console.error("Kakao SDK가 초기화되지 않았습니다.");
          return;
        }
        Kakao.Auth.authorize({
          redirectUri: 'http://127.0.0.1:5500/MONAMI153/kakao-callback.html'
        });
      } catch (error) {
        console.error("Kakao 로그인 요청 실패:", error);
      }
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await logoutUser();
    });
  }

  const mypageLogoutBtn = document.getElementById('mypage-logout-btn');
  if (mypageLogoutBtn) {
    mypageLogoutBtn.addEventListener('click', async () => {
      await logoutUser();
      setTimeout(() => {
        location.href = 'login.html';
      }, 700);
    });
  }

  // 초기 로그인 상태 복원 및 렌더링 (기존 localStorage 기반)
  loadCurrentUser();
  renderLoginState();
  renderMyPageState();
  renderDrawerAuthState();

  // Firebase 로그인 상태 복원 (페이지 새로고침 시)
  getFirebaseAuth().then(({ auth, onAuthStateChanged }) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Firebase 로그인 사용자가 있으면 currentUser 덮어쓰기
        currentUser = {
          uid: user.uid,
          provider: "google",
          name: user.displayName || "MONAMI USER",
          email: user.email || "",
          photoURL: user.photoURL || "",
          isLoggedIn: true
        };
        saveCurrentUser();
        renderLoginState();
        renderMyPageState();
        renderDrawerAuthState();
      } else {
        // Firebase 사용자가 없을 때는 기존 localStorage 로그인 상태 로직 유지
        // 단, 로그아웃 완료 후 기존 정보(Google)가 잘못 복원되는 것 방지
        if (currentUser && currentUser.provider === 'google') {
          currentUser = null;
          localStorage.removeItem('monami153_user');
          renderLoginState();
          renderMyPageState();
          renderDrawerAuthState();
        }
      }
    });
  }).catch(error => {
    console.error("Firebase 상태 복원 중 에러:", error);
  });
});

// 장바구니 데이터 구조
let cartItems = [];

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

function initQuantitySelectors() {
  const qtySelectors = document.querySelectorAll('.qty-selector, .col-mini-qty, .dt-qty-control');
  
  qtySelectors.forEach(selector => {
    const buttons = selector.querySelectorAll('button');
    const span = selector.querySelector('span');
    
    if (buttons.length >= 2 && span) {
      const minusBtn = buttons[0];
      const plusBtn = buttons[1];
      
      minusBtn.setAttribute('type', 'button');
      plusBtn.setAttribute('type', 'button');
      
      minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        let currentVal = Number(span.textContent);
        if (isNaN(currentVal)) currentVal = 0;
        
        const minVal = selector.classList.contains('dt-qty-control') ? 1 : 0;
        
        if (currentVal > minVal) {
          span.textContent = currentVal - 1;
        }
      });
      
      plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        let currentVal = Number(span.textContent);
        if (isNaN(currentVal)) currentVal = 0;
        
        span.textContent = currentVal + 1;
      });
    }
  });
}

function initSortSelects() {
  const sortSelects = document.querySelectorAll('.product-sort-select');
  
  const allCards = document.querySelectorAll('.p-card, .col-mini-card');
  allCards.forEach((card, idx) => {
    if (!card.dataset.originalIndex) {
      card.dataset.originalIndex = idx;
    }
  });

  sortSelects.forEach(select => {
    select.addEventListener('change', (e) => {
      const sortBy = e.target.value;
      const cards = Array.from(document.querySelectorAll('.p-card, .col-mini-card'));
      const containerMap = new Map();
      
      cards.forEach(card => {
        const parent = card.parentElement;
        if (!containerMap.has(parent)) {
          containerMap.set(parent, []);
        }
        containerMap.get(parent).push(card);
      });
      
      containerMap.forEach((containerCards, parent) => {
        containerCards.sort((a, b) => {
          if (sortBy === 'popularity') {
            return Number(a.dataset.originalIndex) - Number(b.dataset.originalIndex);
          }
          
          if (sortBy === 'newest') {
            const dateA = new Date(a.dataset.date || 0).getTime();
            const dateB = new Date(b.dataset.date || 0).getTime();
            return dateB - dateA; // Descending
          }
          
          if (sortBy === 'price_low' || sortBy === 'price_high') {
            const priceElA = a.querySelector('.p-card__price, .col-mini-card__price');
            const priceElB = b.querySelector('.p-card__price, .col-mini-card__price');
            
            const priceA = priceElA ? Number(priceElA.textContent.replace(/[^0-9]/g, '')) : 0;
            const priceB = priceElB ? Number(priceElB.textContent.replace(/[^0-9]/g, '')) : 0;
            
            if (sortBy === 'price_low') {
              return priceA - priceB;
            } else {
              return priceB - priceA;
            }
          }
          
          if (sortBy === 'name') {
            const nameElA = a.querySelector('h3, h4');
            const nameElB = b.querySelector('h3, h4');
            
            const nameA = nameElA ? nameElA.textContent.trim() : '';
            const nameB = nameElB ? nameElB.textContent.trim() : '';
            
            return nameA.localeCompare(nameB);
          }
          
          return 0;
        });
        
        containerCards.forEach(card => parent.appendChild(card));
      });
    });
  });
}
function initBrandCards() {
  const cards = document.querySelectorAll('.brand-card');
  cards.forEach(card => {
    const titleEl = card.querySelector('.brand-card__title');
    if (titleEl) {
      const text = titleEl.textContent.trim().toUpperCase();
      card.addEventListener('click', () => {
        if (text === '153 STORY') {
          location.href = 'story.html';
        } else if (text === 'COLOR PICK') {
          location.href = 'color.html';
        } else if (text === 'GIFT SHOP') {
          location.href = 'product.html';
        }
      });
    }
  });
}

function initCategoryFilter() {
  const isHome = document.querySelector('.line-up__tabs') !== null;
  const tabs = document.querySelectorAll(isHome ? '.line-up__tabs button' : '.prod-tabs button');
  if (tabs.length === 0) return;

  const cards = document.querySelectorAll(isHome ? '.product' : '.p-card, .col-mini-card');
  
  // Assign simple categories dynamically if missing
  cards.forEach(card => {
    const title = card.querySelector('h3');
    if (title && !card.dataset.category) {
      const t = title.textContent.toLowerCase();
      let cats = ['all'];
      if (t.includes('153 original') || t.includes('153 black') || t.includes('153 blue') || t.includes('153 red') || t.includes('153 green')) {
        cats.push('original', 'pen');
      }
      if (t.includes('id') || t.includes('neo') || t.includes('pro')) {
        cats.push('premium', 'pen');
        if (t.includes('neo')) cats.push('gift');
      }
      if (t.includes('refill')) {
        cats.push('refill');
      }
      card.dataset.category = cats.join(' ');
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const filterCat = urlParams.get('category') || 'all';

  function applyFilter(cat) {
    cards.forEach(card => {
      const cats = card.dataset.category || '';
      if (cat === 'all' || cats.includes(cat)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tabs.forEach(tab => {
    let tabFilter = tab.dataset.filter;
    if (!tabFilter) {
      const text = tab.textContent.trim();
      if (text === '전체') tabFilter = 'all';
      else if (text === '153 ORIGINAL') tabFilter = 'original';
      else if (text === '프리미엄') tabFilter = 'premium';
      else if (text === '볼펜') tabFilter = 'pen';
      else if (text === '리필심') tabFilter = 'refill';
      else if (text === '기프트상품') tabFilter = 'gift';
      tab.dataset.filter = tabFilter;
    }

    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove(isHome ? 'is-active' : 'active'));
      tab.classList.add(isHome ? 'is-active' : 'active');
      
      const newCat = tab.dataset.filter;
      applyFilter(newCat);
      
      if (!isHome) {
        const newUrl = newCat === 'all' ? window.location.pathname : `?category=${newCat}`;
        window.history.replaceState(null, '', newUrl);
      }
    });
  });

  if (!isHome) {
    tabs.forEach(t => t.classList.remove('active'));
    const activeTab = Array.from(tabs).find(t => t.dataset.filter === filterCat) || tabs[0];
    if (activeTab) activeTab.classList.add('active');
    applyFilter(filterCat);
  } else {
    tabs.forEach(t => t.classList.remove('is-active'));
    if (tabs[0]) tabs[0].classList.add('is-active');
    applyFilter('all');
  }
}

function initColorMood() {
  const isColorPage = document.querySelector('.col-mood-grid') !== null;
  if (!isColorPage) return;

  const moodCards = document.querySelectorAll('.col-mood-card');
  const sectionHeader = document.querySelector('.col-blue-header h2');
  const sectionDesc = document.querySelector('.col-blue-header p');
  const sectionImgs = document.querySelectorAll('.col-blue-header img, .col-mini-card__img img');
  const cardTitles = document.querySelectorAll('.col-mini-card h4');
  const pickTitle = document.querySelector('.col-pick-card__title');
  const btn = document.querySelector('.col-blue-btn button');

  // 컬러 매핑 데이터
  const colorData = {
    black: { title: 'BLACK 153', text: '언제나 정답인 클래식.<br>오늘은 나의 컬러, BLACK.', filter: 'grayscale(1)' },
    blue: { title: 'BLUE 153', text: '맑고 차분한 하루.<br>오늘은 나의 컬러, BLUE.', filter: 'hue-rotate(210deg) saturate(2)' },
    red: { title: 'RED 153', text: '선명하고 대담하게.<br>오늘은 나의 컬러, RED.', filter: 'none' },
    green: { title: 'GREEN 153', text: '산뜻하고 기분 좋은 하루.<br>오늘은 나의 컬러, GREEN.', filter: 'hue-rotate(90deg) saturate(2)' },
    yellow: { title: 'YELLOW 153', text: '밝고 경쾌한 에너지.<br>오늘은 나의 컬러, YELLOW.', filter: 'hue-rotate(45deg) saturate(2)' }
  };

  moodCards.forEach(card => {
    card.addEventListener('click', () => {
      moodCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const colorKey = Array.from(card.classList)
        .find(c => c.startsWith('c-'))
        ?.replace('c-', '');
      
      if (colorKey && colorData[colorKey]) {
        const data = colorData[colorKey];
        const colorName = colorKey.toUpperCase();

        if (sectionHeader) sectionHeader.textContent = data.title;
        if (sectionDesc) sectionDesc.innerHTML = data.text;
        
        sectionImgs.forEach(img => img.style.filter = data.filter);

        cardTitles.forEach(title => {
          title.textContent = title.textContent.replace(/Black|Blue|Red|Green|Yellow/i, colorName.charAt(0) + colorName.slice(1).toLowerCase());
        });

        if (pickTitle) pickTitle.textContent = colorName;

        if (btn) {
          btn.setAttribute('onclick', `location.href='product.html?color=${colorKey}'`);
        }
      }
    });
  });
}

function initProductColorFilter() {
  const swatches = document.querySelectorAll('.prod-filter__swatches span');
  if (swatches.length === 0) return;

  const cards = document.querySelectorAll('.p-card');
  const urlParams = new URLSearchParams(window.location.search);
  const colorParam = urlParams.get('color');

  // 컬러 데이터를 p-card에 부여
  cards.forEach(card => {
    const title = card.querySelector('h3');
    if (title && !card.dataset.prodColor) {
      const t = title.textContent.toLowerCase();
      if (t.includes('black')) card.dataset.prodColor = 'black';
      else if (t.includes('blue')) card.dataset.prodColor = 'blue';
      else if (t.includes('red')) card.dataset.prodColor = 'red';
      else if (t.includes('green')) card.dataset.prodColor = 'green';
      else if (t.includes('yellow')) card.dataset.prodColor = 'yellow';
      else card.dataset.prodColor = 'none';
    }
  });

  function applyColorFilter(color) {
    cards.forEach(card => {
      if (!color || color === 'all') {
        card.style.display = '';
      } else {
        if (card.dataset.prodColor === color) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      }
    });

    swatches.forEach(swatch => {
      if (swatch.dataset.color === color) {
        swatch.style.outline = '2px solid var(--red)';
        swatch.style.outlineOffset = '2px';
      } else {
        swatch.style.outline = 'none';
      }
    });
  }

  // 스와치 클릭 이벤트
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const col = swatch.dataset.color;
      applyColorFilter(col);
      
      const newUrl = `?color=${col}`;
      window.history.replaceState(null, '', newUrl);
    });
  });

  if (colorParam) {
    applyColorFilter(colorParam);
  }
}

function initColorPageFilters() {
  const topTabs = document.querySelectorAll('.col-tabs button');
  const swatches = document.querySelectorAll('.col-filter__swatches span');
  const innerTabs = document.querySelectorAll('.col-blue-inner-tabs button');
  const grid = document.querySelector('.col-blue-grid');
  const goBtn = document.querySelector('.col-blue-btn button');
  if (!topTabs.length || !grid) return;

  const seriesData = {
    all: [
      { name: '153 Original Blue', price: '₩300', img: 'img/w_h7.png', filter: 'hue-rotate(210deg) saturate(2)' },
      { name: '153 ID Blue', price: '₩15,000', img: 'img/w_h9.png', filter: 'hue-rotate(210deg) saturate(2)' },
      { name: '153 Neo Blue', price: '₩10,000', img: 'img/w_h8.png', filter: 'hue-rotate(210deg) saturate(2)' }
    ],
    original: [
      { name: '153 Original Blue', price: '₩300', img: 'img/w_h7.png', filter: 'hue-rotate(210deg) saturate(2)' },
      { name: '153 Black', price: '₩300', img: 'img/w_h7.png', filter: 'none' },
      { name: '153 Red', price: '₩300', img: 'img/w_h7.png', filter: 'none' }
    ],
    id: [
      { name: '153 ID Blue', price: '₩15,000', img: 'img/w_h9.png', filter: 'hue-rotate(210deg) saturate(2)' },
      { name: '153 ID Black', price: '₩15,000', img: 'img/w_h9.png', filter: 'none' }
    ],
    neo: [
      { name: '153 Neo Blue', price: '₩10,000', img: 'img/w_h8.png', filter: 'hue-rotate(210deg) saturate(2)' },
      { name: '153 Neo', price: '₩10,000', img: 'img/w_h8.png', filter: 'none' }
    ]
  };

  let currentSeries = 'all';
  const cards = grid.querySelectorAll('.col-mini-card');

  function renderGrid() {
    const items = seriesData[currentSeries] || seriesData.all;

    cards.forEach((card, i) => {
      if (items[i]) {
        card.style.display = 'flex';
        const img = card.querySelector('.col-mini-card__img img');
        const title = card.querySelector('h4');
        const price = card.querySelector('.col-mini-card__price');

        if (img) {
          img.src = items[i].img;
          img.alt = items[i].name;
          img.style.filter = items[i].filter;
        }
        if (title) title.textContent = items[i].name;
        if (price) price.textContent = items[i].price;
      } else {
        card.style.display = 'none';
      }
    });

    const activeMood = document.querySelector('.col-mood-card.active');
    if (activeMood) activeMood.click();
  }

  function updateGoBtn() {
    if (!goBtn) return;
    let categoryParam = 'original';
    if (currentSeries === 'all') categoryParam = 'all';
    else if (currentSeries === 'id' || currentSeries === 'neo') categoryParam = 'premium';
    
    let colorParam = 'blue';
    const activeMood = document.querySelector('.col-mood-card.active');
    if (activeMood) {
      colorParam = Array.from(activeMood.classList).find(c => c.startsWith('c-'))?.replace('c-', '') || 'blue';
    }
    
    goBtn.onclick = () => {
      location.href = `product.html?color=${colorParam}&category=${categoryParam}`;
    };
  }

  topTabs.forEach(tab => {
    let text = tab.textContent.trim();
    if (text === 'ALL') tab.dataset.series = 'all';
    else if (text.includes('ORIGINAL')) tab.dataset.series = 'original';
    else if (text.includes('ID')) tab.dataset.series = 'id';
    else if (text.includes('NEO')) tab.dataset.series = 'neo';

    tab.addEventListener('click', () => {
      topTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSeries = tab.dataset.series;

      innerTabs.forEach(t => t.classList.remove('active'));
      const activeInner = Array.from(innerTabs).find(t => t.dataset.series === currentSeries);
      if (activeInner) activeInner.classList.add('active');

      renderGrid();
      updateGoBtn();
    });
  });

  innerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const series = tab.dataset.series || 'original';
      const topTab = Array.from(topTabs).find(t => t.dataset.series === series);
      if (topTab) topTab.click();
    });
  });

  const colorOrder = ['black', 'blue', 'red', 'green', 'yellow'];
  swatches.forEach((swatch, i) => {
    swatch.dataset.color = colorOrder[i];
    swatch.addEventListener('click', () => {
      swatches.forEach(s => {
        s.style.outline = 'none';
        s.style.outlineOffset = '0';
      });
      swatch.style.outline = '2px solid var(--red)';
      swatch.style.outlineOffset = '2px';

      const col = swatch.dataset.color;
      const moodCard = document.querySelector(`.col-mood-card.c-${col}`);
      if (moodCard) moodCard.click();
      
      updateGoBtn();
    });
  });

  const defaultTab = Array.from(topTabs).find(t => t.dataset.series === 'all');
  if (defaultTab) defaultTab.click();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartBadge();
  initQuantitySelectors();
  initSortSelects();
  initBrandCards();
  initCategoryFilter();
  initColorMood();
  initProductColorFilter();
  initColorPageFilters();
  initCustomCursor();
});

/* ==========================================================================
   CUSTOM PEN CURSOR (Desktop Only)
   ========================================================================== */
function initCustomCursor() {
  // Only apply for devices that support hover/fine pointer
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  // Create wrapper and image dynamically
  const wrapper = document.createElement('div');
  wrapper.id = 'custom-cursor-wrapper';
  wrapper.style.display = 'none'; // hidden until mouse moves
  
  const img = document.createElement('img');
  img.src = 'img/monami153-writing.png';
  img.id = 'custom-cursor-img';
  img.alt = '';
  
  wrapper.appendChild(img);
  document.body.appendChild(wrapper);

  // Track mouse coordinates efficiently
  let mouseX = 0;
  let mouseY = 0;
  let isMoving = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Initial sync
    if (!isMoving) {
      wrapper.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      wrapper.style.display = 'block';
      isMoving = true;
    }
  });

  document.addEventListener('mouseenter', () => {
    if (isMoving) wrapper.style.display = 'block';
  });

  document.addEventListener('mouseleave', () => {
    wrapper.style.display = 'none';
  });

  // Use requestAnimationFrame for smooth zero-lag tracking
  function renderCursor() {
    if (isMoving) {
      wrapper.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Handle Hover states using event delegation
  const interactableSelectors = 'a, button, input, label, select, .brand-card, .brand__tags button';
  
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactableSelectors)) {
      wrapper.classList.add('hovering');
    }
  });

  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactableSelectors)) {
      wrapper.classList.remove('hovering');
    }
  });

  // Handle Click state
  document.addEventListener('mousedown', () => {
    wrapper.classList.add('clicking');
  });

  document.addEventListener('mouseup', () => {
    wrapper.classList.remove('clicking');
  });
}

