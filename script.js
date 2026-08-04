const projects = [
  {id:'wireshow',number:'01',cn:'WireShow 展会主视觉',en:'WireShow Exhibition Visual',typeCn:'展会 / 主视觉',typeEn:'EXHIBITION / KEY VISUAL',cover:18,pages:[5,22],year:'2024',roleCn:'创意概念 / 空间视觉 / 延展设计',roleEn:'CONCEPT / SPATIAL VISUALS / APPLICATIONS',descCn:'以链接、探索与发现为核心，为 WireShow 建立从主视觉到展台空间的统一视觉体验。',descEn:'A unified visual world for WireShow, from key art to spatial experience, built around connection, exploration and discovery.'},
  {id:'honor',number:'02',cn:'HONOR手机系列海外社媒设计与宣发',en:'HONOR Overseas Social Media Design & Launch',typeCn:'视觉 / 海外社媒',typeEn:'VISUAL / OVERSEAS SOCIAL',cover:30,pages:[26,35],year:'2024',roleCn:'海外社媒视觉 / 创意概念 / 物料延展',roleEn:'SOCIAL VISUALS / CREATIVE / APPLICATIONS',descCn:'为 HONOR 手机系列打造海外社媒视觉体系，从创意概念到落地执行，覆盖 Instagram、TikTok 等主流平台。',descEn:'Built the overseas social media visual system for the HONOR phone lineup, from concept to delivery across Instagram, TikTok and other major platforms.'},
  {id:'alicloud',number:'03',cn:'Alibaba Cloud海外社媒设计与宣发',en:'Alibaba Cloud Overseas Social Media Design & Launch',typeCn:'视觉 / 海外社媒',typeEn:'VISUAL / OVERSEAS SOCIAL',cover:39,pages:[36,39],year:'2024',roleCn:'海外社媒视觉 / 创意概念 / 系列化输出',roleEn:'SOCIAL VISUALS / CREATIVE / SERIES',descCn:'为阿里云打造海外社媒视觉体系，从客户需求到创意落地，覆盖 Facebook、Instagram 等平台的内容设计、KV 与系列化输出。',descEn:'Designed the overseas social media visual system for Alibaba Cloud, from client brief to creative delivery, covering Facebook, Instagram and other platforms with KV, series and content design.'},
  {id:'neworiental',number:'04',cn:'新东方活动设计及线下运营',en:'New Oriental Event Design & Offline Ops',typeCn:'视觉 / 活动',typeEn:'VISUAL / CAMPAIGN',cover:43,pages:[40,46],year:'2024',roleCn:'活动主视觉 / 宣传物料 / 线下运营',roleEn:'KEY VISUAL / COLLATERAL / OFFLINE OPS',descCn:'明快的颜色与角色化插画系统，为暑期学习活动创造轻松、有参与感的活动现场与传播节奏。',descEn:'A bright colour and character illustration system that built a lively, participatory on-site experience and a consistent communication rhythm for the summer learning campaign.'},
  {id:'mobi',number:'05',cn:'MOBI YUNBAO IP 形象',en:'MOBI YUNBAO Character',typeCn:'视觉 / IP',typeEn:'VISUAL / IP',cover:50,pages:[47,52],year:'2024',roleCn:'IP 设定 / 角色三视图 / 表情延展',roleEn:'CHARACTER CONCEPT / TURNAROUNDS / EXPRESSIONS',descCn:'以云朵和移动感为灵感，构建可持续延展的吉祥物形象与角色语言。',descEn:'A scalable mascot and visual vocabulary inspired by clouds and motion.'},
  {id:'tea',number:'06',cn:'卿颜花果茶文创产品设计',en:'Qingyan Floral Tea Cultural Product Design',typeCn:'视觉 / 文创',typeEn:'VISUAL / CULTURAL',cover:61,pages:[56,64],year:'2024',roleCn:'品牌策略 / 包装系统 / 文创延展',roleEn:'BRAND STRATEGY / PACKAGING / APPLICATIONS',descCn:'以高饱和几何图形和花果风味为核心，完成从品牌命名到包装与文创周边的完整系统。',descEn:'A complete system from naming to packaging and cultural-product merchandise, powered by vivid geometric flavour codes.'},
  {id:'poster',number:'07',cn:'主题海报系列',en:'Thematic Poster Series',typeCn:'视觉 / 海报',typeEn:'VISUAL / POSTER',cover:66,pages:[65,71],year:'2024',roleCn:'海报设计 / 信息层级 / 系列延展',roleEn:'POSTER DESIGN / INFORMATION HIERARCHY / SERIES',descCn:'从文化活动到公共议题，使用不同的图形语言回应每一个主题与阅读距离。',descEn:'From cultural events to public topics, each theme finds its own graphic language and reading distance.'},
  {id:'vi',number:'08',cn:'山点一线 VI 设计',en:'Shandian Yixian VI System',typeCn:'视觉 / 品牌',typeEn:'VISUAL / BRAND',cover:74,pages:[72,74],year:'2024',roleCn:'标志设计 / VI 系统 / 应用规范',roleEn:'LOGO / VI SYSTEM / APPLICATIONS',descCn:'以山与线的关系为线索，将自然意象转化为轻盈、连贯的视觉识别。',descEn:'An identity that turns the relationship of mountain and line into a light, cohesive visual language.'},
  {id:'photo',number:'09',cn:'旅行摄影记录',en:'Travel Photography Notes',typeCn:'视觉 / 摄影',typeEn:'VISUAL / PHOTOGRAPHY',cover:76,pages:[75,78],year:'2024',roleCn:'摄影 / 画面编辑',roleEn:'PHOTOGRAPHY / IMAGE EDITING',descCn:'在不同的地貌、城市与人物之间，保留不被设定的瞬间。',descEn:'Unscripted moments held between landscapes, cities and people.'}
];
const brandProjects = [
  {id:'geo',number:'B01',base:'brand-building',cn:'Green Energy Origin VI 品牌识别规范',en:'Green Energy Origin Brand Identity Guidelines',typeCn:'品牌 / VI 规范',typeEn:'BRAND / VI GUIDELINES',year:'2025',folder:'geo',images:['GEO-VI-Brand-identity-guidelines-Apr_页面_01.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_04.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_05.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_06.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_09.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_13.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_21.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_22.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_23.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_24.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_28.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_30.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_32.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_33.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_34.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_35.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_37.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_41.png', 'GEO-VI-Brand-identity-guidelines-Apr_页面_43.png'],roleCn:'品牌VI规范 / 视觉识别系统',roleEn:'BRAND VI / IDENTITY SYSTEM',descCn:'为新能源独角兽 GEO 打造从标志、色彩、字体到应用场景的完整品牌视觉识别规范，涵盖办公系统、线下物料、数字媒体及展会场景。',descEn:'A complete brand visual identity system for the new-energy unicorn GEO, covering logo, colour, typography and applications across stationery, physical collaterals, digital media and exhibition scenarios.'},
  {id:'tianxing',number:'B02',base:'brand-building',cn:'天星SSAM 品牌VI手册',en:'SSAM Brand VI Manual',typeCn:'品牌 / VI 手册',typeEn:'BRAND / VI MANUAL',year:'2025',folder:'tianxing',images:['天星VI手册_页面_001.png', '天星VI手册_页面_011.png', '天星VI手册_页面_014.png', '天星VI手册_页面_031.png', '天星VI手册_页面_034.png', '天星VI手册_页面_041.png', '天星VI手册_页面_068.png', '天星VI手册_页面_079.png', '天星VI手册_页面_082.png', '天星VI手册_页面_108.png', '天星VI手册_页面_110.png', '天星VI手册_页面_111.png', '天星VI手册_页面_113.png', '天星VI手册_页面_115.png', '天星VI手册_页面_120.png', '天星VI手册_页面_125.png', '天星VI手册_页面_126.png'],roleCn:'品牌VI手册 / 视觉规范',roleEn:'BRAND VI MANUAL / IDENTITY',descCn:'为金融科技品牌天星SSAM 搭建从标志规范、色彩体系到全场景应用物料的品牌VI手册，确保线上线下品牌形象统一。',descEn:'Built a comprehensive brand VI manual for fintech brand Tianxing SSAM, from logo specifications and colour systems to full-scene application materials.'},
  {id:'axa',number:'B03',base:'brand-building',cn:'安盛AXA 品牌设计方案',en:'AXA Brand Design Solutions',typeCn:'品牌 / 视觉系统',typeEn:'BRAND / VISUAL IDENTITY',year:'2025',folder:'axa',images:['安盛AXA_页面_001.png', '安盛AXA_页面_004.png', '安盛AXA_页面_018.png', '安盛AXA_页面_020.png', '安盛AXA_页面_021.png', '安盛AXA_页面_022.png', '安盛AXA_页面_023.png', '安盛AXA_页面_035.png', '安盛AXA_页面_037.png', '安盛AXA_页面_056.png', '安盛AXA_页面_103.png', '安盛AXA_页面_121.png', '安盛AXA_页面_135.png', '安盛AXA_页面_145.png', '安盛AXA_页面_150.png', '安盛AXA_页面_156.png', '安盛AXA_页面_158.png', '安盛AXA_页面_161.png', '安盛AXA_页面_164.png'],roleCn:'品牌视觉方案 / 物料延展',roleEn:'BRAND VISUALS / COLLATERAL',descCn:'为全球保险品牌安盛AXA 输出品牌设计及空间视觉方案，涵盖品牌形象、办公空间导视及线下活动物料系统。',descEn:'Delivered brand design and spatial visual solutions for global insurer AXA, covering brand identity, office wayfinding and offline event material systems.'},
  {id:'shenneng',number:'B04',base:'brand-building',cn:'申能SHENERGY 视觉识别手册',en:'Shenergy Visual Identity Manual',typeCn:'品牌 / 视觉识别',typeEn:'BRAND / VISUAL IDENTITY',year:'2025',folder:'shenneng',images:['申能视觉识别手册_页面_001.png', '申能视觉识别手册_页面_014.png', '申能视觉识别手册_页面_026.png', '申能视觉识别手册_页面_050.png', '申能视觉识别手册_页面_051.png', '申能视觉识别手册_页面_055.png', '申能视觉识别手册_页面_056.png', '申能视觉识别手册_页面_062.png', '申能视觉识别手册_页面_070.png', '申能视觉识别手册_页面_071.png', '申能视觉识别手册_页面_072.png', '申能视觉识别手册_页面_078.png', '申能视觉识别手册_页面_079.png', '申能视觉识别手册_页面_080.png', '申能视觉识别手册_页面_081.png', '申能视觉识别手册_页面_082.png', '申能视觉识别手册_页面_084.png', '申能视觉识别手册_页面_085.png', '申能视觉识别手册_页面_090.png', '申能视觉识别手册_页面_093.png', '申能视觉识别手册_页面_094.png', '申能视觉识别手册_页面_099.png'],roleCn:'视觉识别手册 / 应用系统',roleEn:'VISUAL IDENTITY MANUAL / APPLICATIONS',descCn:'为能源国企申能集团打造完整的视觉识别手册，涵盖标志、标准字、色彩、辅助图形及多场景应用规范。',descEn:'Built a complete visual identity manual for state-owned energy group Shenergy, covering logo, typography, colour palette and multi-scene applications.'},
];

const exhibitionProjects = [
  {id:'wireshow_exh',number:'E01',base:'exhibition',cn:'2025 WireShow 展会主办方设计方案',en:'2025 WireShow Organiser Design',typeCn:'展会 / 主视觉',typeEn:'EXHIBITION / KEY VISUAL',year:'2025',folder:'e01_WireShow',images:['幻灯片1.PNG', '幻灯片3.PNG', '幻灯片4.PNG', '幻灯片5.PNG', '幻灯片6.PNG', '幻灯片7.PNG', '幻灯片8.PNG', '幻灯片9.PNG', '幻灯片10.PNG', '幻灯片11.PNG', '幻灯片12.PNG', '幻灯片13.PNG', '幻灯片14.PNG', '幻灯片15.PNG', '幻灯片16.PNG', '幻灯片18.PNG', '幻灯片19.PNG', '幻灯片21.PNG', '幻灯片24.PNG', '幻灯片26.PNG', '幻灯片27.PNG', '幻灯片30.PNG', '幻灯片31.PNG', '幻灯片32.PNG', '幻灯片33.PNG', '幻灯片35.PNG', '幻灯片37.PNG', '幻灯片39.PNG', '幻灯片40.PNG', '幻灯片42.PNG', '幻灯片46.PNG', '幻灯片47.PNG', '幻灯片48.PNG', '幻灯片50.PNG'],roleCn:'展位设计 / 空间规划 / 物料延展',roleEn:'BOOTH DESIGN / SPATIAL / COLLATERAL',descCn:'为 WireShow 2025 主办方打造从展位概念、空间规划到全场景物料延展的设计方案，兼顾品牌辨识度与参展动线。',descEn:'A complete design proposal for WireShow 2025 organisers, covering booth concept, spatial planning and full-scene collateral applications.'},
  {id:'battery_eu',number:'E02',base:'exhibition',cn:'GEO - The Battery Show Europe 2026',en:'GEO — The Battery Show Europe 2026',typeCn:'展会 / 国际',typeEn:'EXHIBITION / INTERNATIONAL',year:'2026',folder:'e02_BatteryEurope',images:['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '8.jpg', '9.jpg', '10.jpg'],roleCn:'海外展会全案 / 空间设计 / 现场执行',roleEn:'OVERSEAS EXHIBITION / SPATIAL / EXECUTION',descCn:'为新能源独角兽 GEO 策划并执行 The Battery Show Europe 2026 展位全案，从展前搭建、物料筹备到现场运营与客户接洽。',descEn:'Planned and executed the full Battery Show Europe 2026 booth for new-energy unicorn GEO, from pre-show build and material prep to on-site operations and client engagement.'},
  {id:'battery_na',number:'E03',base:'exhibition',cn:'GEO - The Battery Show North America 2026',en:'GEO — The Battery Show North America 2026',typeCn:'展会 / 国际',typeEn:'EXHIBITION / INTERNATIONAL',year:'2026',folder:'e03_BatteryNA',images:['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],roleCn:'北美展会全案 / 物料统筹 / 品牌展示',roleEn:'NA EXHIBITION / LOGISTICS / BRAND SHOWCASE',descCn:'为 GEO 策划并交付 The Battery Show North America 2026 展位设计与物料方案，确保跨区域品牌形象统一与高效落地。',descEn:'Designed and delivered the Battery Show North America 2026 booth and material plan for GEO, ensuring cross-regional brand consistency and efficient execution.'},
  {id:'ncsc',number:'E04',base:'exhibition',cn:'NCSC 2025 第18届全国超导学术研讨会',en:'NCSC 2025 — 18th National Superconductivity Symposium',typeCn:'展会 / 学术会议',typeEn:'EXHIBITION / ACADEMIC',year:'2025',folder:'e04_NCSC',images:['幻灯片1.PNG', '幻灯片2.PNG', '幻灯片3.PNG', '幻灯片4.PNG', '幻灯片5.PNG', '幻灯片6.PNG', '幻灯片7.PNG', '幻灯片8.PNG', '幻灯片9.PNG', '幻灯片10.PNG', '幻灯片11.PNG'],roleCn:'会议主视觉 / 物料设计 / 现场排版',roleEn:'CONFERENCE VISUALS / COLLATERAL / LAYOUT',descCn:'为第18届全国超导学术研讨会输出会议视觉系统、背景展板、物料排版及现场视觉管理。',descEn:'Delivered the conference visual identity system, backdrop panels, collateral layout and on-site visual management for the 18th National Superconductivity Symposium.'},
  {id:'nect',number:'E05',base:'exhibition',cn:'NECT 2025 新能源领域用电缆关键技术研讨会',en:'NECT 2025 — New Energy Cable Technology Symposium',typeCn:'展会 / 技术论坛',typeEn:'EXHIBITION / TECH FORUM',year:'2025',folder:'e05_NECT',images:['幻灯片1.PNG', '幻灯片2.PNG', '幻灯片3.PNG', '幻灯片4.PNG', '幻灯片5.PNG', '幻灯片6.PNG'],roleCn:'论坛主视觉 / 物料延展 / 现场执行',roleEn:'FORUM VISUALS / COLLATERAL / EXECUTION',descCn:'为新能源电缆关键技术研讨会输出主视觉、导视物料及现场视觉方案，助力技术论坛专业呈现。',descEn:'Produced the key visual, wayfinding collaterals and on-site visual package for the New Energy Cable Technology Symposium.'},
];


const mediaProjects = [
  {id:'geo_brand_media',number:'M01',base:'media',cn:'GEO 品牌体系搭建与推广',en:'GEO Brand System Construction & Promotion',typeCn:'市场 / 品牌推广',typeEn:'MARKETING / BRAND PROMOTION',year:'2025',folder:'m03_GEOBrand',images:['幻灯片1.PNG', '幻灯片2.PNG', '幻灯片3.PNG', '幻灯片4.PNG', '幻灯片5.PNG', '幻灯片6.PNG', '幻灯片7.PNG', '幻灯片8.PNG', '幻灯片9.PNG', '幻灯片10.PNG', '幻灯片11.PNG'],roleCn:'品牌体系搭建 / 内容策略 / 全渠道推广',roleEn:'BRAND SYSTEM / CONTENT STRATEGY / OMNI-CHANNEL',descCn:'为新能源独角兽 GEO 从 0 到 1 搭建品牌传播体系与推广矩阵，涵盖品牌故事、核心信息、官网规划、社媒矩阵及媒体投放策略。',descEn:'Built GEO brand communication system and promotion matrix from zero to one for the new-energy unicorn, covering brand story, core messaging, website planning, social media matrix and media placement.'},
  {id:'wireshow_media',number:'M02',base:'media',cn:'WireShow & WireChina 展会推广',en:'WireShow & WireChina Exhibition Promotion',typeCn:'市场 / 展会推广',typeEn:'MARKETING / EXHIBITION PROMO',year:'2024',folder:'m02_WireShow',images:['幻灯片1.PNG', '幻灯片2.PNG', '幻灯片3.PNG', '幻灯片4.PNG', '幻灯片5.PNG', '幻灯片6.PNG', '幻灯片7.PNG', '幻灯片8.PNG', '幻灯片9.PNG', '幻灯片10.PNG', '幻灯片11.PNG'],roleCn:'展会推广策划 / 内容制作 / 媒体投放',roleEn:'EXHIBITION PROMO / CONTENT / MEDIA PLACEMENT',descCn:'为 WireShow 及 WireChina 两大展会制定推广策略，输出社媒预热、EDM 邀约、媒体通稿及现场传播内容。',descEn:'Developed promotion strategies for WireShow and WireChina exhibitions, producing social media teasers, EDM invitations, press releases and on-site communication content.'},
  {id:'honor90_media',number:'M03',base:'media',cn:'HONOR 90 海外社媒投放 — TikTok & Instagram',en:'HONOR 90 Overseas Social — TikTok & Instagram',typeCn:'市场 / 社媒投放',typeEn:'MARKETING / SOCIAL MEDIA',year:'2024',folder:'m01_Honor90',images:['幻灯片1.PNG', '幻灯片2.PNG', '幻灯片3.PNG', '幻灯片4.PNG', '幻灯片5.PNG', '幻灯片6.PNG', '幻灯片7.PNG', '幻灯片8.PNG', '幻灯片9.PNG', '幻灯片10.PNG', '幻灯片11.PNG', '幻灯片12.PNG', '幻灯片13.PNG', '幻灯片14.PNG', '幻灯片15.PNG', '幻灯片16.PNG', '幻灯片17.PNG', '幻灯片18.PNG', '幻灯片19.PNG', '幻灯片20.PNG', '幻灯片21.PNG', '幻灯片22.PNG', '幻灯片23.PNG', '幻灯片24.PNG', '幻灯片25.PNG', '幻灯片26.PNG', '幻灯片27.PNG', '幻灯片28.PNG', '幻灯片29.PNG', '幻灯片30.PNG', '幻灯片31.PNG', '幻灯片32.PNG', '幻灯片33.PNG'],roleCn:'社媒内容策划 / 视觉设计 / 投放执行',roleEn:'SOCIAL CONTENT / VISUAL DESIGN / AD PLACEMENT',descCn:'为 HONOR 90 系列策划并执行 TikTok 与 Instagram 海外社媒投放方案，涵盖创意短视频、海报视觉、投放策略及效果复盘。',descEn:'Planned and executed TikTok and Instagram overseas social campaigns for the HONOR 90 series, covering creative short videos, poster visuals, ad placement strategy and performance review.'},
];



let activeCategory='visual';
let language='cn';
const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>[...root.querySelectorAll(selector)];
const pageImage=n=>`assets/visual-design/page-${String(n).padStart(2,'0')}.jpg`;
const brandImage=(folder,file,base)=>`assets/${base}/${folder}/${file}`;
const local=(cn,en)=>language==='cn'?cn:en;
const currentProjects=()=>activeCategory==='brand'?brandProjects:activeCategory==='exhibition'?exhibitionProjects:activeCategory==='media'?mediaProjects:projects;

function renderMarquee(){const pages=[18,30,43,50,61,66,74,76,15,24,32,41,55,62,68,70];const card=n=>`<figure class="marquee-card"><img src="${pageImage(n)}" alt="Preview" loading="lazy"></figure>`;$('#marqueeOne').innerHTML=[...pages.slice(0,8),...pages.slice(0,8),...pages.slice(0,8)].map(card).join('');$('#marqueeTwo').innerHTML=[...pages.slice(8),...pages.slice(8),...pages.slice(8)].map(card).join('');}

function workCard(project,index){
  const title=local(project.cn,project.en), type=local(project.typeCn,project.typeEn);
  let imgHTML;
  if(project.folder){
    // Brand project - use images array
    const folder=project.folder;
    const imgs=project.images;
    const img1=brandImage(folder,imgs[0],project.base);
    const img2=imgs.length>1?brandImage(folder,imgs[1],project.base):'';
    const img3=imgs.length>2?brandImage(folder,imgs[2],project.base):(imgs.length>1?brandImage(folder,imgs[1],project.base):'');
    imgHTML=`<div class="work-image-layout"><div class="work-image-col"><figure class="work-image"><img src="${img1}" alt="${title}" loading="lazy"></figure><figure class="work-image"><img src="${img2||img1}" alt="${title}" loading="lazy"></figure></div><figure class="work-image"><img src="${img3||img1}" alt="${title}" loading="lazy"></figure></div>`;
  }else{
    // Visual project - use pages range
    const last=Math.min(project.pages[1],project.pages[0]+3);
    imgHTML=`<div class="work-image-layout"><div class="work-image-col"><figure class="work-image"><img src="${pageImage(project.pages[0])}" alt="${title}" loading="lazy"></figure><figure class="work-image"><img src="${pageImage(Math.min(project.pages[0]+1,project.pages[1]))}" alt="${title}" loading="lazy"></figure></div><figure class="work-image"><img src="${pageImage(last)}" alt="${title}" loading="lazy"></figure></div>`;
  }
  return `<article class="work-card-shell" style="z-index:${index+1}"><div class="work-card" style="--stack:${index}"><header class="work-card-header"><strong class="work-index">${project.number}</strong><div class="work-title"><span>${type}</span><h3>${title}</h3></div><button class="open-project" type="button" data-project="${project.id}">${local('查看项目','VIEW PROJECT')} ↗</button></header>${imgHTML}</div></article>`;
}

function renderProjects(){
  const stack=$('#projectStack');
  if(!stack)return;
  const projs=currentProjects();
  stack.innerHTML=projs.map(workCard).join('');
  $$('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project)));
}

function localize(){
  document.documentElement.lang=language==='cn'?'zh-CN':'en';
  document.title=local('王严祺 — 品牌经理 · 整合营销','Wang Yanqi — Brand Manager & Integrated Marketing');
  $$('[data-cn][data-en]').forEach(node=>node.innerHTML=local(node.dataset.cn,node.dataset.en));
  $('.language-switch').classList.toggle('is-en',language==='en');
  renderProjects();
}

function openProject(id,updateHistory=true){
  const allProjects=[...projects,...brandProjects,...exhibitionProjects,...mediaProjects];
  const project=allProjects.find(item=>item.id===id);
  if(!project)return;
  const title=local(project.cn,project.en),type=local(project.typeCn,project.typeEn),role=local(project.roleCn,project.roleEn),desc=local(project.descCn,project.descEn);
  let imagesHTML='';
  if(project.folder){
    // Brand project
    const total=project.images.length;
    imagesHTML=project.images.map((file,i)=>`<figure class="detail-image"><img src="${brandImage(project.folder,file,project.base)}" alt="${title} ${i+1}" ${i>1?'loading="lazy"':''}></figure>`).join('');
    $('#modalContent').innerHTML=`<section class="detail-meta"><div><small>${project.number} / ${total} · ${type}</small><h2>${title}</h2></div><div class="detail-info"><p>${desc}</p><span>${local('角色','ROLE')}</span><p>${role}</p><span>${local('时间','YEAR')}</span><p>${project.year}</p></div></section><section class="detail-images">${imagesHTML}</section><footer class="detail-footer"><span>WANG YANQI / PORTFOLIO</span><button class="next-project" type="button">${local('下一个项目 →','NEXT PROJECT →')}</button></footer>`;
  }else{
    // Visual project
    const total=project.pages[1]-project.pages[0]+1;
    const images=Array.from({length:total},(_,i)=>project.pages[0]+i);
    imagesHTML=images.map((page,i)=>`<figure class="detail-image"><img src="${pageImage(page)}" alt="${title} ${i+1}" ${i>1?'loading="lazy"':''}></figure>`).join('');
    $('#modalContent').innerHTML=`<section class="detail-meta"><div><small>${project.number} / ${total} · ${type}</small><h2>${title}</h2></div><div class="detail-info"><p>${desc}</p><span>${local('角色','ROLE')}</span><p>${role}</p><span>${local('时间','YEAR')}</span><p>${project.year}</p></div></section><section class="detail-images">${imagesHTML}</section><footer class="detail-footer"><span>WANG YANQI / PORTFOLIO</span><button class="next-project" type="button">${local('下一个项目 →','NEXT PROJECT →')}</button></footer>`;
  }
  const modal=$('#projectModal');modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.scrollTop=0;
  $('.next-project',modal).addEventListener('click',()=>{const projs=currentProjects();const i=projs.findIndex(item=>item.id===id);openProject(projs[(i+1)%projs.length].id)});
  if(updateHistory)history.pushState({project:id},'',`#project/${id}`);
}

function closeProject(updateHistory=true){const modal=$('#projectModal');if(!modal.classList.contains('is-open'))return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(updateHistory&&location.hash.startsWith('#project/'))history.pushState({},'','#projects')}

function setCategory(category){
  $$('.project-filter').forEach(item=>item.classList.toggle('is-active',item.dataset.category===category));
  activeCategory=category;
  const projs=currentProjects();
  $('#projectStack').hidden=projs.length===0;
  $('#archiveWaiting').hidden=projs.length>0||(category!=='visual'&&category!=='brand'&&category!=='exhibition'&&category!=='media');
  renderProjects();
}

$('.language-switch').addEventListener('click',()=>{language=language==='cn'?'en':'cn';localize()});
$$('[data-scroll]').forEach(button=>button.addEventListener('click',()=>{const target=document.getElementById(button.dataset.scroll);target?.scrollIntoView({behavior:'smooth'});$('.nav-shell').classList.remove('menu-open');if(button.dataset.filter){setTimeout(()=>{const filterBtn=document.querySelector(`.project-filter[data-category="${button.dataset.filter}"]`);if(filterBtn){filterBtn.click();filterBtn.scrollIntoView({behavior:'smooth',block:'center'})}},500)}}));
$('.menu-button').addEventListener('click',()=>$('.nav-shell').classList.toggle('menu-open'));
const dropdownToggle=$('.nav-dropdown>button');
if(dropdownToggle){dropdownToggle.addEventListener('click',(e)=>{e.preventDefault();$('.nav-dropdown').classList.toggle('open')})};
document.addEventListener('click',(e)=>{if(!e.target.closest('.nav-dropdown')){$('.nav-dropdown')?.classList.remove('open');}});
$$('.project-filter').forEach(button=>button.addEventListener('click',()=>setCategory(button.dataset.category)));
$('.modal-close').addEventListener('click',()=>closeProject());
$('#projectModal').addEventListener('click',event=>{if(event.target===$('#projectModal'))closeProject()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeProject()});
window.addEventListener('popstate',()=>{const id=location.hash.replace('#project/','');const allProjects=[...projects,...brandProjects,...exhibitionProjects,...mediaProjects];if(allProjects.some(project=>project.id===id))openProject(id,false);else closeProject(false)});
const earth=$('#earthMagnet');
if(earth){earth.parentElement.addEventListener('mousemove',event=>{const rect=earth.getBoundingClientRect();const x=(event.clientX-(rect.left+rect.width/2))/rect.width;const y=(event.clientY-(rect.top+rect.height/2))/rect.height;earth.style.transform=`translateX(-50%) translate3d(${x*24}px,${y*20}px,0) rotate(${x*3}deg)`});earth.parentElement.addEventListener('mouseleave',()=>earth.style.transform='translateX(-50%)')};
function animateMarquee(){const section=$('.marquee-section');const rect=section.getBoundingClientRect();const offset=(innerHeight-rect.top)*.18;$('#marqueeOne').style.transform=`translate3d(${-210+offset}px,0,0)`;$('#marqueeTwo').style.transform=`translate3d(${-520-offset}px,0,0)`;requestAnimationFrame(animateMarquee)}
$('#year').textContent=new Date().getFullYear();renderMarquee();// Block right-click / drag on images
document.addEventListener('contextmenu',(e)=>{if(e.target.closest('.detail-image')||e.target.closest('.work-image')||e.target.closest('.marquee-card')){e.preventDefault()}});
document.addEventListener('dragstart',(e)=>{if(e.target.tagName==='IMG'){e.preventDefault()}});
renderProjects();requestAnimationFrame(animateMarquee());
const initial=location.hash.replace('#project/','');const allProjects=[...projects,...brandProjects,...exhibitionProjects,...mediaProjects];if(allProjects.some(project=>project.id===initial))openProject(initial,false);
