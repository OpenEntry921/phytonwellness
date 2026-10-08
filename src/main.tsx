import React from 'react';
import ReactDOM from 'react-dom/client';
import { products } from './data/products';
import './styles.css';

const stages=[['01','지리산','좋은 원료는 어디에서 시작되었는지 분명해야 합니다. 피톤웰니스는 지리산 편백의 출발점을 기록합니다.'],['02','채취','자연을 대하는 태도부터 제품의 품질이 시작됩니다. 채취 정보는 검증된 내용만 투명하게 공개합니다.'],['03','증류','잎과 물, 시간의 과정. 실제 제조 장소와 방식은 확인을 마친 뒤 상세히 안내합니다.'],['04','피톤치드','익숙한 숲의 감각을 일상 가까이 전합니다. 확인되지 않은 효능 대신 원료와 사용 정보를 정확히 말합니다.']];
function App(){return <>
  <a className="skip" href="#main">본문으로 바로가기</a>
  <header><a className="logo" href="#top" aria-label="피톤웰니스 홈">PHYTON<span>WELLNESS</span></a><nav aria-label="주요 메뉴"><a href="#story">브랜드</a><a href="#products">제품</a><a href="#principles">원칙</a><a href="#partners">파트너</a></nav><a className="navCta" href="#stores">구매처</a></header>
  <main id="main">
   <section className="hero" id="top"><div className="rings" aria-hidden="true"/><div className="heroCopy"><p className="kicker">JIRISAN CYPRESS · PHYTONWELLNESS</p><h1>숲에서<br/>시작합니다.</h1><p>지리산 편백에서 일상의 공간까지.<br/>원료의 시작과 만드는 태도를 정직하게 전합니다.</p><a className="button light" href="#story">숲의 여정 보기 <span>↓</span></a></div><div className="heroNote"><span>FOREST, DISTILLED.</span><small>원료와 공정의 이야기를 따라 천천히 내려가 보세요.</small></div></section>
   <section className="manifesto"><p className="sectionNo">PHYTONWELLNESS MANIFESTO</p><h2>우리는 자연을 꾸미지 않고,<br/><em>그 시작을 보여줍니다.</em></h2><p>좋은 제품은 화려한 문장보다 분명한 출처, 성실한 과정, 오래 지키는 원칙에서 탄생한다고 믿습니다.</p></section>
   <section className="journey" id="story">{stages.map((s,i)=><article className="stage" key={s[0]}><div className={'stageVisual v'+i} role="img" aria-label={`${s[1]} 사진을 위한 플레이스홀더`}><span>ACTUAL FIELD IMAGE<br/>TO BE PROVIDED</span></div><div className="stageCopy"><span>{s[0]}</span><h2>{s[1]}</h2><p>{s[2]}</p></div></article>)}</section>
   <section className="products" id="products"><div className="heading"><p className="sectionNo">05 · PRODUCTS</p><h2>숲의 감각을<br/>일상의 형태로.</h2><p>확인된 제품 정보만을 선명하게 전합니다.</p></div><div className="productGrid">{products.map((p,i)=><article className="product" key={p.id}><div className={'pack pack'+i} aria-hidden="true"><span>PHYTON<br/>WELLNESS</span></div><p className="eyebrow">{p.eyebrow}</p><h3>{p.name}</h3>{p.volume&&<b>{p.volume}</b>}<p>{p.description}</p><dl>{p.details.map(d=><div key={d.label}><dt>{d.label}</dt><dd>{d.value}</dd></div>)}</dl></article>)}</div></section>
   <section className="home"><p className="sectionNo">06 · INTO YOUR HOME</p><h2>숲에서 시작된 이야기가<br/>당신의 집에 닿도록.</h2><p>잠깐의 향보다 오래 남는 태도를 생각합니다.</p></section>
   <section className="principles" id="principles"><div><p className="sectionNo">07 · OUR PRINCIPLES</p><h2>우리가 지키는 것</h2></div><ol><li><b>01</b><span><strong>출처를 분명하게</strong>원료와 제조 정보는 사실 확인을 거쳐 공개합니다.</span></li><li><b>02</b><span><strong>과장하지 않게</strong>확인되지 않은 효능과 인증을 말하지 않습니다.</span></li><li><b>03</b><span><strong>과정을 꾸준하게</strong>채취와 증류의 기록을 차곡차곡 쌓아갑니다.</span></li></ol></section>
   <section className="journal"><div><p className="sectionNo">08 · CUSTOMER VOICE</p><h2>고객의 목소리</h2><p>검증된 후기와 사용 경험을 준비하고 있습니다.<br/>가공하거나 만들어낸 후기는 게시하지 않습니다.</p><span className="pending">콘텐츠 준비 중</span></div><div><p className="sectionNo">09 · FOREST JOURNAL</p><h2>채취 일지</h2><p>계절과 현장의 실제 기록을 이곳에 전하겠습니다.<br/>사진과 정보가 확보되는 대로 공개합니다.</p><span className="pending">첫 기록 준비 중</span></div></section>
   <section className="stores" id="stores"><p className="sectionNo">10 · WHERE TO BUY</p><h2>피톤웰니스 만나기</h2><p>공식 판매 링크를 확인하고 있습니다. 확인이 완료되면 연결됩니다.</p><div className="storeGrid"><span>쿠팡<small>링크 확인 중</small></span><span>네이버 스마트스토어<small>링크 확인 중</small></span><span>G마켓 · 옥션<small>링크 확인 중</small></span></div></section>
   <section className="partners" id="partners"><p className="kicker">11 · PARTNERSHIP & EXPORT</p><h2>한국의 편백을<br/>더 넓은 시장으로.</h2><p>기업 선물, 대량 구매, 유통 및 수출 파트너십을 위한 기반을 준비하고 있습니다. 확정되지 않은 공급 조건이나 수출 가능 국가는 별도 협의 후 안내합니다.</p><a className="button light" href="#partners" aria-disabled="true">파트너십 문의 <span>↗</span></a><small>문의 메일 주소는 운영 전 최종 확인이 필요합니다.</small></section>
  </main>
  <footer><div className="logo inverse">PHYTON<span>WELLNESS</span></div><p>숲에서 시작합니다.<br/><i>Forest, distilled.</i></p><div><a href="#story">브랜드</a><a href="#products">제품</a><a href="#stores">구매처</a><a href="#partners">파트너·수출</a></div><small>© {new Date().getFullYear()} PHYTONWELLNESS. All rights reserved.<br/>사업자 및 고객센터 정보 확인 후 공개 예정</small></footer>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:'PHYTONWELLNESS',alternateName:'피톤웰니스',url:'https://phytonwellness.co.kr/'})}}/>
 </>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
