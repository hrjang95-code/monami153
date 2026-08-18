const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');
if (!css.includes('@media (max-width: 480px)')) {
  css += '\n\n/* MOBILE RESPONSIVE LAYOUT */\n@media (max-width: 480px) {\n  .brand {\n    display: none;\n  }\n  .app-stage {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    justify-content: flex-start;\n  }\n  .app {\n    width: 100%;\n    max-width: 100%;\n    transform: none !important;\n    height: 100vh;\n  }\n}\n';
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Appended mobile responsive styles');
} else {
  console.log('Already has mobile styles');
}
