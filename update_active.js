const fs = require('fs');

function setActive(filename, activeIndex) {
  let html = fs.readFileSync(filename, 'utf8');
  
  // Find the bottom-nav block
  const navStart = html.indexOf('<nav class="bottom-nav"');
  if (navStart === -1) return;
  const navEnd = html.indexOf('</nav>', navStart);
  
  let navBlock = html.substring(navStart, navEnd);
  
  // Remove existing is-active class from all buttons in the nav
  navBlock = navBlock.replace(/class="is-active"/g, '');
  
  // Now add is-active to the correct button
  let buttonMatches = [...navBlock.matchAll(/<button/g)];
  if (buttonMatches[activeIndex]) {
    const targetIdx = buttonMatches[activeIndex].index;
    navBlock = navBlock.substring(0, targetIdx + 7) + ' class="is-active"' + navBlock.substring(targetIdx + 7);
  }
  
  html = html.substring(0, navStart) + navBlock + html.substring(navEnd);
  fs.writeFileSync(filename, html);
}

// 0: HOME, 1: PRODUCT, 2: COLOR, 3: MY
setActive('index.html', 0);
setActive('product.html', 1);
setActive('color.html', 2);
setActive('mypage.html', 3);
