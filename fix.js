const fs = require('fs');
const files = ['index.html', 'product.html', 'detail.html', 'color.html', 'cart.html', 'checkout.html', 'mypage.html'];

const replacements = [
  ['??Color Your Day</title>', '— Color Your Day</title>'],
  ['브랜?????스', '브랜드 쇼케이스'],
  ['aria-label=\"MONAMI 153 ??>', 'aria-label=\"MONAMI 153 홈\">'],
  ['?나??153,<br />무한??가?성', '모나미 153,<br />무한한 가능성'],
  ['?나??153,<br />무한??가?성</p>', '모나미 153,<br />무한한 가능성</p>'],
  ['?떤 153??찾으?나??', '어떤 153을 찾으시나요?'],
  ['#153?리지??/button>', '#153오리지널</button>'],
  ['#?니??/button>', '#토너먼트</button>'],
  ['#153?이?/button>', '#153네이처</button>'],
  ['#153?이?</button>', '#153네이처</button>'],
  ['#?정??/button>', '#한정판</button>'],
  ['#?벤??/button>', '#이벤트</button>'],
  ['#?물??/button>', '#선물용</button>'],
  ['1963????br />?랑받아??br />모나?153</p>', '1963년부터<br />사랑받아온<br />모나미 153</p>'],
  ['153 ?토??세??보기', '153 스토리 자세히 보기'],
  ['?신???루?br />?성??br />컬러?찾아</p>', '당신의 하루를<br />완성할<br />컬러를 찾아</p>'],
  ['컬러 찾기 ?비??바로가?>', '컬러 찾기 서비스 바로가기\">'],
  ['153?로 ?하??br />마음, ?물?기</p>', '153으로 전하는<br />마음, 선물하기</p>'],
  ['?물??구경?기', '선물샵 구경하기'],
  ['aria-label=\"?바구니\"', 'aria-label=\"장바구니\"'],
  ['aria-label=\"?로???림\"', 'aria-label=\"새로운 알림\"'],
  ['<h3>?깍,<br />?늘??<em>??/em>??br />꺼내 보세??</h3>', '<h3>딸깍,<br />오늘의 <em>색</em>을<br />꺼내 보세요.</h3>'],
  ['<p class=\"hero__sub\">모나?153, 무한??가?성</p>', '<p class=\"hero__sub\">모나미 153, 무한한 가능성</p>'],
  ['<!-- ?라?드 ?디케?터 -->', '<!-- 슬라이드 인디케이터 -->'],
  ['<!-- ?어???비주??-->', '<!-- 히어로 비주얼 -->'],
  ['alt=\"?러 ?의 MONAMI 153 볼펜\"', 'alt=\"여러 색의 MONAMI 153 볼펜\"'],
  ['>자세히 보기 &gt;</a>', '>전체보기 &gt;</a>'],
  ['>?세??보기 &gt;</a>', '>전체보기 &gt;</a>'],
  ['>?체</button>', '>전체</button>'],
  ['>?이?</button>', '>네이처</button>'],
  ['>리필??/button>', '>리필심</button>'],
  ['>?트?품</button>', '>기프트상품</button>'],
  ['??/strong>', '원</strong>'],
  ['광복???디??br />출시 기념 ?정??/h2>', '광복절 에디션<br />출시 기념 한정판</h2>'],
  ['aria-label=\"?단 ?비게이??>', 'aria-label=\"하단 네비게이션\">']
];

files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  replacements.forEach(r => {
    text = text.split(r[0]).join(r[1]);
  });
  fs.writeFileSync(f, text, 'utf8');
  console.log('Fixed ' + f);
});
