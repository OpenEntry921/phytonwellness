export type Product = { id:string; name:string; eyebrow:string; description:string; volume?:string; details:{label:string;value:string}[]; purchaseUrl?:string };
export const products: Product[] = [
  {id:'diffuser',name:'피톤치드 디퓨저',eyebrow:'FOREST IN A BOTTLE',volume:'15 ml',description:'편백의 분위기를 작은 병에 담아 일상의 가까운 곳에 두는 디퓨저입니다.',details:[{label:'성분·신고번호',value:'확인 후 공개 예정'},{label:'구매처',value:'판매 URL 확인 중'}]},
  {id:'deodorizer',name:'포레스트 듀 시나몬 피톤치드 탈취제',eyebrow:'FOREST DEW',volume:'500 ml',description:'생활 공간을 위한 탈취제입니다. 상세 용도와 성분은 검증을 거쳐 안내합니다.',details:[{label:'용도·성분',value:'확인 후 공개 예정'},{label:'신고번호',value:'확인 후 공개 예정'}]},
  {id:'wipes',name:'편백수 물티슈',eyebrow:'CYPRESS WATER',description:'편백수를 활용한 일상용 물티슈입니다. 제품 정보는 확인된 사실만 제공합니다.',details:[{label:'규격·성분',value:'확인 후 공개 예정'},{label:'구매처',value:'판매 URL 확인 중'}]},
];
