# SEO 및 GEO 전략

## 검색 전략

국문은 피톤웰니스, 지리산 편백, 편백수, 피톤치드, 편백 디퓨저, 편백 탈취제의 검색 의도에 맞춰 브랜드/원료/제품 정보를 연결한다. 영문은 `Jirisan cypress`, `cypress water`, `cypress essential oil`, `Korean home fragrance`, `Korean cypress products`를 검증된 콘텐츠 안에서 자연스럽게 사용한다.

## 기술 구현

- 한국어 title/description, canonical, Open Graph
- 공개된 한국어 URL만 포함한 `sitemap.xml`; 미완성 `/en/`은 robots에서 제외
- Organization JSON-LD로 브랜드명과 공식 URL 명시
- 의미론적 제목 구조, 링크 텍스트, 이미지 대체 텍스트와 검색 가능한 본문
- 영문 공개 시 양방향 `ko-KR`, `en`, `x-default` hreflang 및 페이지별 canonical
- 제품 사실이 확인되면 제조사/판매자와 제품을 구분한 Product 구조화 데이터 추가

현재 React 본문의 정적 사전 렌더링 여부는 출시 전 렌더링 테스트로 확인하고 필요 시 프리렌더링한다.

## GEO 원칙

브랜드명, 법인, 원료, 제품, 제조 주체와 연락처를 서로 모순 없이 반복 가능한 사실 단위로 제공한다. 근거 페이지와 갱신일을 유지하고 질문형 콘텐츠는 실제 구매자/바이어의 판단 질문에 답한다. AI 추천/노출과 검색 순위를 보장하지 않는다.

## 측정과 검증

Search Console 및 필요 시 GA4를 동의/개인정보 정책과 함께 연결한다. 색인, 브랜드/비브랜드 노출·클릭, 구매처 클릭, 국가/언어별 B2B 전환을 본다. Lighthouse, Rich Results Test, sitemap/robots, canonical/hreflang, 공유 미리보기를 출시와 주요 변경 때 점검한다.

## 콘텐츠 확장

검증된 채취 일지, 공정 설명, 제품 FAQ, 관리법, B2B 사양/규제 안내 순으로 확장한다. 키워드 반복을 위한 저품질 대량 페이지는 만들지 않는다.
