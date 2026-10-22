/* ---------------- DATA ---------------- */
const IMG = {
  hero: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fine_Dining.jpg',
  mise: 'https://commons.wikimedia.org/wiki/Special:FilePath/Green_curry_ingredients.jpg',
  kitchen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chefs_in_the_Kitchen_(6948413018).jpg',
  risoto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Risotto_ai_funghi_porcini.JPG',
  tagliatelle: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tagliatelle_al_ragu_Bolognese.jpg',
  cordeiro: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rack_of_lamb_cutlets_dinner_at_Black_Horse_Inn,_West_Sussex,_England.jpg',
  curry: 'https://commons.wikimedia.org/wiki/Special:FilePath/Green_Curry,_Siam_House,_Paris_001.jpg',
  pao: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sourdough_Bread_Loaf.jpg',
  torta: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lemon_tart_(cropped).jpg',
  feijoada: 'https://commons.wikimedia.org/wiki/Special:FilePath/Feijoada_completa.jpg',
  burger: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lamb_Burger_with_Fries_and_Aioli.jpg',
  mousse: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_Mousse.jpg',
  bowl: 'https://commons.wikimedia.org/wiki/Special:FilePath/BuddhaBowlLot.jpg',
};

const chefs = {
  torino: { name:'Osteria Torino', person:'Chef Marina Kohl', initial:'M', city:'Joinville, SC', distance:'2,3 km', radius:'5 km',
    stats:{receitas:32, alunos:1240, avaliacao:4.9},
    bio:'Cozinha italiana contemporânea no centro de Joinville. A chef Marina Kohl compartilha técnicas de massas e risotos direto do salão do restaurante.',
    cover: IMG.kitchen },
  renato: { name:'Chef Renato Aveiro', person:'Chef Renato Aveiro', initial:'R', city:'Joinville, SC', distance:'4,1 km', radius:'8 km',
    stats:{receitas:14, alunos:530, avaliacao:4.9},
    bio:'Ex-sous chef de restaurante estrelado, hoje ensina cortes nobres e cocção lenta direto da própria cozinha.',
    cover: IMG.cordeiro },
  siam: { name:'Casa Siam', person:'Chef Anong Suwan', initial:'A', city:'Joinville, SC', distance:'3,0 km', radius:'6 km',
    stats:{receitas:21, alunos:860, avaliacao:4.7},
    bio:'Referência em comida tailandesa na região, com pastas de curry preparadas artesanalmente todos os dias.',
    cover: IMG.curry },
  bosque: { name:'Padaria do Bosque', person:'Panificação artesanal', initial:'P', city:'Joinville, SC', distance:'1,4 km', radius:'4 km',
    stats:{receitas:18, alunos:2100, avaliacao:4.9},
    bio:'Fermentação natural, sem pressa. A padaria ensina o processo completo do levain ao forno de pedra.',
    cover: IMG.pao },
  lume: { name:'Confeitaria Lume', person:'Chef Bia Lume', initial:'B', city:'Joinville, SC', distance:'2,8 km', radius:'5 km',
    stats:{receitas:26, alunos:980, avaliacao:4.8},
    bio:'Confeitaria autoral especializada em tortas e sobremesas com toque cítrico e sazonal.',
    cover: IMG.torta },
  recanto: { name:'Recanto Mineiro', person:'Chef Joana Ribeiro', initial:'J', city:'Joinville, SC', distance:'3,6 km', radius:'6 km',
    stats:{receitas:19, alunos:740, avaliacao:4.8},
    bio:'Comida mineira de raiz, feita no fogão a lenha do jeito que a vó fazia — agora ensinada em vídeoaula.',
    cover: IMG.feijoada },
  bufalo: { name:'Búfalo Burgers', person:'Chef Théo Duarte', initial:'T', city:'Joinville, SC', distance:'2,0 km', radius:'5 km',
    stats:{receitas:11, alunos:1580, avaliacao:4.7},
    bio:'Hambúrgueres autorais com blend próprio e pão de brioche feito na casa, direto da hamburgueria mais pedida da cidade.',
    cover: IMG.burger },
  verde: { name:'Verde Vivo', person:'Chef Sofia Martins', initial:'S', city:'Joinville, SC', distance:'1,9 km', radius:'4 km',
    stats:{receitas:16, alunos:690, avaliacao:4.9},
    bio:'Cozinha vegetariana contemporânea, com bowls e pratos coloridos feitos com produtores locais.',
    cover: IMG.bowl },
};

const recipes = [
  { id:'risoto-funghi', name:'Risoto de Funghi Porcini', chef:'torino', time:'45 min', difficulty:'média', portions:'2 pessoas', price:34.90, rating:4.8, reviews:312, kitPrice:46.00, kitsLeft:4, img:IMG.risoto, restricao:'sem restrição',
    kit:[['Arroz arbóreo','200g'],['Funghi porcini seco','15g'],['Caldo de legumes artesanal','500ml'],['Parmesão ralado na hora','60g'],['Manteiga e vinho branco','1 dose']],
    instrucoes:['Hidrate o funghi porcini em água morna por 15 min e reserve o líquido.','Refogue a cebola na manteiga até ficar translúcida.','Adicione o arroz arbóreo e toste por 2 min.','Vá adicionando o caldo quente aos poucos, mexendo sempre.','Finalize com o funghi picado, parmesão e um fio de azeite.'],
    testi:{quote:'Segui certinho e ficou idêntico ao prato do restaurante.', name:'Camila R.'} },
  { id:'tagliatelle-ragu', name:'Tagliatelle ao Ragu', chef:'torino', time:'1h10', difficulty:'fácil', portions:'2 pessoas', price:27.90, rating:4.7, reviews:184, kitPrice:38.00, kitsLeft:6, img:IMG.tagliatelle, restricao:'sem restrição',
    kit:[['Tagliatelle fresco','250g'],['Molho ragu de carne','400g'],['Parmesão ralado na hora','50g'],['Manjericão fresco','1 maço']],
    instrucoes:['Cozinhe o tagliatelle fresco em água fervente com sal por 3 min.','Aqueça o ragu em fogo baixo até ferver suavemente.','Escorra a massa e misture ao molho na panela.','Sirva com parmesão ralado e manjericão fresco por cima.'],
    testi:{quote:'O molho pronto no kit foi o diferencial, não precisei correr atrás de nada.', name:'Bruno S.'} },
  { id:'cordeiro-porto', name:'Cordeiro ao Vinho do Porto', chef:'renato', time:'2h20', difficulty:'difícil', portions:'2 pessoas', price:42.00, rating:4.9, reviews:96, kitPrice:68.00, kitsLeft:2, img:IMG.cordeiro, restricao:'sem glúten',
    kit:[['Pernil de cordeiro','600g'],['Vinho do Porto','200ml'],['Batatas rústicas','400g'],['Ervas frescas','1 maço']],
    instrucoes:['Tempere o cordeiro com sal, pimenta e ervas frescas.','Sele a carne em fogo alto até dourar todos os lados.','Deglace com o vinho do Porto e deixe reduzir.','Leve ao forno a 160°C por 1h30 com as batatas.','Deixe descansar 10 min antes de fatiar.'],
    testi:{quote:'Achei que fosse complicado, mas o passo a passo em vídeo resolveu tudo.', name:'Diego F.'} },
  { id:'curry-verde', name:'Curry Verde Tailandês', chef:'siam', time:'50 min', difficulty:'média', portions:'2 pessoas', price:28.50, rating:4.6, reviews:145, kitPrice:35.00, kitsLeft:5, img:IMG.curry, restricao:'sem glúten',
    kit:[['Pasta de curry verde','80g'],['Leite de coco','400ml'],['Frango em cubos','300g'],['Berinjela tailandesa','150g']],
    instrucoes:['Refogue a pasta de curry verde até soltar aroma.','Adicione o leite de coco aos poucos, mexendo bem.','Junte o frango e cozinhe até dourar por fora.','Acrescente a berinjela e cozinhe por 10 min.','Ajuste o sal e sirva com arroz jasmim.'],
    testi:{quote:'Pasta de curry fresquinha, muito mais saborosa que a de mercado.', name:'Larissa T.'} },
  { id:'pao-fermentacao', name:'Pão de Fermentação Natural', chef:'bosque', time:'3h + fermentação', difficulty:'fácil', portions:'1 pão grande', price:19.90, rating:4.9, reviews:401, kitPrice:24.00, kitsLeft:8, img:IMG.pao, restricao:'vegano',
    kit:[['Farinha especial','500g'],['Fermento natural (levain)','100g'],['Sal marinho','10g']],
    instrucoes:['Misture a farinha, o levain, o sal e a água até formar uma massa homogênea.','Deixe descansar 30 min e faça as primeiras dobras.','Repita as dobras a cada 30 min por 2h.','Modele e deixe fermentar na geladeira por 8-12h.','Asse em forno bem quente com vapor por 40 min.'],
    testi:{quote:'Meu levain nunca tinha funcionado até eu comprar o kit certo.', name:'Marcos V.'} },
  { id:'torta-limao', name:'Torta de Limão Siciliano', chef:'lume', time:'1h + geladeira', difficulty:'fácil', portions:'8 fatias', price:24.90, rating:4.8, reviews:210, kitPrice:30.00, kitsLeft:3, img:IMG.torta, restricao:'vegetariano',
    kit:[['Massa sablée pronta','1 disco'],['Limão siciliano','4 un'],['Leite condensado','1 lata'],['Claras para merengue','4 un']],
    instrucoes:['Pré-asse a massa sablée por 12 min a 180°C.','Bata o leite condensado com o suco e raspas de limão.','Despeje o recheio sobre a massa e leve à geladeira por 2h.','Bata as claras em neve para o merengue e finalize com maçarico.'],
    testi:{quote:'Kit chegou super fresco, só faltou eu ter mais paciência com o merengue.', name:'Ana P.'} },
  { id:'feijoada-completa', name:'Feijoada Completa', chef:'recanto', time:'3h', difficulty:'média', portions:'4 pessoas', price:32.90, rating:4.9, reviews:268, kitPrice:64.00, kitsLeft:5, img:IMG.feijoada, restricao:'sem glúten',
    kit:[['Feijão preto selecionado','500g'],['Carnes defumadas variadas','700g'],['Linguiça artesanal','300g'],['Couve fresca','1 maço'],['Farinha de mandioca torrada','200g']],
    instrucoes:['Deixe o feijão de molho por 4h e cozinhe na panela de pressão.','Refogue as carnes defumadas e a linguiça em fogo médio.','Junte tudo ao feijão e cozinhe por 1h30 em fogo baixo.','Refogue a couve fatiada fina na hora de servir.','Sirva com farinha torrada e arroz branco.'],
    testi:{quote:'Gostinho de comida de vó, sem passar o domingo inteiro na cozinha.', name:'Rafael M.'} },
  { id:'hamburguer-artesanal', name:'Hambúrguer Artesanal de Cordeiro', chef:'bufalo', time:'35 min', difficulty:'fácil', portions:'2 pessoas', price:26.90, rating:4.7, reviews:157, kitPrice:41.00, kitsLeft:7, img:IMG.burger, restricao:'sem restrição',
    kit:[['Blend de cordeiro moído','300g'],['Pão brioche artesanal','2 un'],['Molho aioli da casa','80g'],['Batata rústica congelada','300g']],
    instrucoes:['Modele os hambúrgueres sem apertar demais a carne.','Sele em chapa bem quente, 3 min de cada lado.','Toste o pão brioche na manteiga.','Monte com aioli, hambúrguer e acompanhamentos.','Sirva com a batata rústica assada.'],
    testi:{quote:'Melhor hambúrguer que já fiz em casa, o blend faz toda diferença.', name:'Pedro L.'} },
  { id:'bowl-vegetariano', name:'Bowl Vegetariano de Grãos', chef:'verde', time:'30 min', difficulty:'fácil', portions:'2 pessoas', price:22.90, rating:4.8, reviews:132, kitPrice:33.00, kitsLeft:6, img:IMG.bowl, restricao:'vegano',
    kit:[['Quinoa cozida','200g'],['Legumes assados da estação','300g'],['Grão-de-bico temperado','150g'],['Molho tahine','60ml']],
    instrucoes:['Aqueça a quinoa e os legumes assados.','Monte o bowl distribuindo os ingredientes em seções.','Finalize com o grão-de-bico temperado por cima.','Regue com o molho tahine antes de servir.'],
    testi:{quote:'Colorido, leve e muito mais gostoso do que eu esperava.', name:'Beatriz C.'} },
  { id:'mousse-chocolate', name:'Mousse de Chocolate 70%', chef:'lume', time:'25 min + geladeira', difficulty:'fácil', portions:'4 pessoas', price:18.90, rating:4.9, reviews:189, kitPrice:27.00, kitsLeft:6, img:IMG.mousse, restricao:'vegetariano',
    kit:[['Chocolate 70% em gotas','200g'],['Creme de leite fresco','300ml'],['Ovos caipiras','3 un'],['Flor de sal','1 pitada']],
    instrucoes:['Derreta o chocolate em banho-maria.','Bata as claras em neve e o creme de leite em chantilly separadamente.','Misture as gemas ao chocolate morno.','Incorpore delicadamente o chantilly e depois as claras.','Leve à geladeira por pelo menos 3h antes de servir.'],
    testi:{quote:'Textura aerada, muito diferente da mousse de pacotinho.', name:'Isabela G.'} },
];

const categories = [
  { key:'alta', label:'Alta gastronomia', img:IMG.risoto, recipe:'risoto-funghi' },
  { key:'massas', label:'Massas', img:IMG.tagliatelle, recipe:'tagliatelle-ragu' },
  { key:'carnes', label:'Carnes', img:IMG.cordeiro, recipe:'cordeiro-porto' },
  { key:'brasileiras', label:'Brasileiras', img:IMG.feijoada, recipe:'feijoada-completa' },
  { key:'vegetarianas', label:'Vegetarianas', img:IMG.bowl, recipe:'bowl-vegetariano' },
  { key:'sobremesas', label:'Sobremesas', img:IMG.mousse, recipe:'mousse-chocolate' },
];

const recipeById = id => recipes.find(r => r.id === id) || recipes[0];
const brl = n => 'R$ ' + n.toFixed(2).replace('.', ',');
const AVATAR_TONES = ['var(--brick)','var(--olive)','var(--yolk)','#6b5b3e'];
const STARS5 = '★★★★★';
const favorites = new Set();

/* ---------------- THEME (dark mode) ---------------- */
let darkMode = false;
const SUN_ICON = '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M4.3 4.3l1.8 1.8M17.9 17.9l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.3 19.7l1.8-1.8M17.9 6.1l1.8-1.8"/></svg>';
const MOON_ICON = '<svg class="icon" viewBox="0 0 24 24"><path d="M20 14.2A8.5 8.5 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2z"/></svg>';
function applyTheme(){
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  const btn = document.getElementById('themeToggle');
  if(btn) btn.innerHTML = darkMode ? SUN_ICON : MOON_ICON;
  const drawerLabel = document.getElementById('drawerThemeLabel');
  if(drawerLabel) drawerLabel.textContent = darkMode ? 'Modo claro' : 'Modo escuro';
}
function toggleDarkMode(){ darkMode = !darkMode; applyTheme(); }
function initTheme(){
  try{ darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }catch(e){ darkMode = false; }
  applyTheme();
}

/* ---------------- AUTH STATE (RF05 / RF01 — no backend, in-memory only) ---------------- */
let currentUser = null; // { name, email, kind:'amador'|'criador', profileType, status }
let pendingAfterLogin = null; // {page,id} to resume after login
const unlockedRecipes = new Set();   // RF03 pay-per-view
const subscribedChefs = new Set();   // RF03 assinatura
const myOrders = [];                 // RF04 pedidos de kit

function renderAuthArea(){
  const area = document.getElementById('authArea');
  const drawerArea = document.getElementById('drawerAuthArea');
  if(currentUser){
    const html = `<div class="userchip" onclick="goToTab('${currentUser.kind==='criador' ? 'dashboard' : 'community'}')">
      <span class="av">${currentUser.name.charAt(0).toUpperCase()}</span>
      <span>${currentUser.name.split(' ')[0]}</span>
    </div>`;
    if(area) area.innerHTML = html;
    if(drawerArea) drawerArea.innerHTML = `<button class="ghost" onclick="closeDrawer(); goToTab('${currentUser.kind==='criador'?'dashboard':'community'}')">Minha conta</button><button class="primary" onclick="closeDrawer(); logout()">Sair</button>`;
  } else {
    if(area) area.innerHTML = `<button class="nav-btn-ghost" style="display:inline-block" onclick="goToTab('login')">Entrar</button><button class="nav-btn-solid" style="display:inline-block" onclick="goToTab('register-choice')">Criar conta</button>`;
    if(drawerArea) drawerArea.innerHTML = `<button class="ghost" onclick="closeDrawer(); goToTab('login')">Entrar</button><button class="primary" onclick="closeDrawer(); goToTab('register-choice')">Criar conta</button>`;
  }
}
function logout(){ currentUser = null; renderAuthArea(); showToast('Você saiu da sua conta.'); goToTab('home'); }
function requireLogin(action){
  if(currentUser){ action(); return; }
  pendingAfterLogin = action;
  showToast('Entre na sua conta para continuar.');
  goToTab('login');
}

/* ---------------- ROUTER ---------------- */
let currentPage = 'home';
let currentId = null;

function pushHistory(page, id){
  try{ history.pushState({page, id}, '', '#'+page+(id ? ('/'+id) : '')); }catch(e){ /* sandboxed iframe: ignore */ }
}
function goTo(page, id){ currentPage=page; currentId=id; pushHistory(page,id); render(); }
function goToTab(page){ currentPage=page; currentId=null; pushHistory(page,null); render(); }
function goBack(){
  try{ history.back(); }catch(e){ currentPage='home'; currentId=null; render(); }
}
window.addEventListener('popstate', (e)=>{
  const st = e.state;
  if(st){ currentPage = st.page; currentId = st.id; }
  else { currentPage = 'home'; currentId = null; }
  render();
});

function navScroll(anchorId){
  if(currentPage!=='home'){ goToTab('home'); setTimeout(()=>scrollToAnchor(anchorId), 120); }
  else scrollToAnchor(anchorId);
}
function scrollToAnchor(id){ const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); }
function topTabFor(page){ if(page==='community') return 'community'; if(page==='dashboard') return 'dashboard'; return 'home'; }

function openDrawer(){ document.getElementById('drawer').classList.add('open'); document.getElementById('drawerBackdrop').classList.add('open'); }
function closeDrawer(){ document.getElementById('drawer').classList.remove('open'); document.getElementById('drawerBackdrop').classList.remove('open'); }

/* ---------------- NAV SCROLLSPY (desktop yellow indicator) ---------------- */
let scrollSpyKey = 'home';
let spyObserver = null;
function currentNavKey(){
  if(currentPage==='home') return scrollSpyKey || 'home';
  if(currentPage==='community') return 'community';
  return null;
}
function initScrollSpy(){
  if(spyObserver){ spyObserver.disconnect(); spyObserver=null; }
  scrollSpyKey = 'home';
  const map = { 'hero-sec':'home', 'cat-grid':'receitas', 'chef-grid':'chefs', 'partner':'restaurantes' };
  const targets = Object.keys(map).map(id=>document.getElementById(id)).filter(Boolean);
  if(!targets.length || !('IntersectionObserver' in window)) return;
  spyObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ scrollSpyKey = map[e.target.id]; updateActiveTab(); } });
  }, { rootMargin:'-35% 0px -55% 0px', threshold:0 });
  targets.forEach(t=>spyObserver.observe(t));
}

function updateActiveTab(){
  const navKey = currentNavKey();
  document.querySelectorAll('.desktop-nav .tab-link[data-nav]').forEach(el => el.classList.toggle('active', el.dataset.nav === navKey));
  const nav = document.querySelector('.desktop-nav');
  const activeEl = nav ? nav.querySelector('.tab-link.active') : null;
  const indicator = document.getElementById('navIndicator');
  if (nav && activeEl && indicator){ indicator.style.left=activeEl.offsetLeft+'px'; indicator.style.width=activeEl.offsetWidth+'px'; indicator.style.opacity='1'; }
  else if(indicator){ indicator.style.opacity='0'; }
  const activePage = topTabFor(currentPage);
  document.querySelectorAll('.bt-item[data-page]').forEach(el => el.classList.toggle('active', el.dataset.page === activePage));
  const bt = document.getElementById('bottomTabs');
  const btActive = bt ? bt.querySelector('.bt-item.active') : null;
  const btIndicator = document.getElementById('btIndicator');
  if (bt && btActive && btIndicator){ btIndicator.style.left=btActive.offsetLeft+'px'; btIndicator.style.width=btActive.offsetWidth+'px'; }
  if (bt) bt.style.display = (currentPage === 'recipe' || currentPage==='login' || currentPage.startsWith('register')) ? 'none' : '';
}

function toggleChip(el){ el.parentElement.querySelectorAll('.chip').forEach(c=>c.classList.remove('on')); el.classList.add('on'); }

function showToast(msg){
  const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(window._toastTimer); window._toastTimer=setTimeout(()=>t.classList.remove('show'),3400);
}
function confirmOrder(name){
  const btn=document.getElementById('kitBuyBtn');
  if(btn){ btn.classList.add('confirmed'); btn.innerHTML='<svg class="check-draw" viewBox="0 0 24 24" width="17" height="17"><path d="M4 12l5 5L20 6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Pedido confirmado'; }
  setTimeout(()=>{ showToast('Pedido de "'+name+'" confirmado! Que tal compartilhar o resultado na comunidade?'); goToTab('community'); }, 650);
}
function toggleFav(ev, id){
  ev.stopPropagation();
  const el = ev.currentTarget;
  if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
  el.classList.toggle('fav', favorites.has(id));
  el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
}
function animateCounters(){
  document.querySelectorAll('[data-target]').forEach(el=>{
    const target=parseFloat(el.dataset.target); const prefix=el.dataset.prefix||''; const start=performance.now(); const duration=900;
    function tick(now){ const p=Math.min(1,(now-start)/duration); const eased=1-Math.pow(1-p,3); el.textContent=prefix+Math.round(target*eased).toLocaleString('pt-BR'); if(p<1) requestAnimationFrame(tick); }
    requestAnimationFrame(tick);
  });
}
function initReveals(){
  const els = document.querySelectorAll('.reveal:not(.in)');
  if(!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches){
    els.forEach(el=>el.classList.add('in')); return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold:.18 });
  els.forEach(el=>io.observe(el));
}

/* ---------------- HERO VIDEO (scroll-scrub effect) ---------------- */
let heroVideoReady = false;
function initHero(){
  const hero = document.querySelector('.hero');
  const bg = document.querySelector('.hero-bg');
  const media = document.getElementById('heroVideo');
  heroVideoReady = false;
  if(!hero) return;
  requestAnimationFrame(()=>{ bg && bg.classList.add('in'); hero.classList.add('in'); });
  if(media){
    media.addEventListener('loadedmetadata', ()=>{ heroVideoReady = true; media.pause(); updateHeroScroll(); }, { once:true });
    // start it briefly so the first frame is decoded, then pause and hand control to scroll
    media.play().then(()=>{ setTimeout(()=>{ media.pause(); heroVideoReady = true; updateHeroScroll(); }, 60); }).catch(()=>{ /* autoplay blocked — scroll scrub still works once user interacts */ });
  }
  initScrollSpy();
  updateHeroScroll();
}
function updateHeroScroll(){
  if(currentPage !== 'home') return;
  const hero = document.querySelector('.hero');
  const media = document.getElementById('heroVideo');
  const inner = document.querySelector('.hero-inner');
  if(!hero) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroH = hero.offsetHeight || window.innerHeight;
  const p = Math.min(1, Math.max(0, window.scrollY / heroH));
  if(inner) inner.style.opacity = String(1 - p*1.1);
  if(reduced) return;
  // scroll-scrubbed video: playback position follows scroll progress through the hero
  if(media && heroVideoReady && media.duration && isFinite(media.duration)){
    const target = p * media.duration;
    if(Math.abs(media.currentTime - target) > 0.05){ try{ media.currentTime = target; }catch(e){} }
  }
  if(media) media.style.transform = `scale(${1 + p*0.06})`;
}
function handleHeroPointerEnter(){
  // subtle motion cue: gently plays a couple of frames forward while hovering, like a "wake up" tick
  const media = document.getElementById('heroVideo');
  if(!media || !heroVideoReady || currentPage!=='home') return;
  media.play().then(()=>{ setTimeout(()=>{ media.pause(); }, 220); }).catch(()=>{});
}
function toggleSearch(open){ document.getElementById('searchSuggest').classList.toggle('open', open); }

/* ---------------- SMALL PARTIALS ---------------- */
function photoHtml(url, badge){
  return '<div class="photo-img" style="background-image:url(\'' + url + '\')"></div><div class="photo-shade"></div>' + (badge ? '<span class="badge">'+badge+'</span>' : '');
}
function avatarHtml(name, size){
  const initial = name.trim().charAt(0).toUpperCase();
  let sum=0; for(const ch of name) sum += ch.charCodeAt(0);
  const tone = AVATAR_TONES[sum % AVATAR_TONES.length];
  return '<div class="post-avatar" style="background:'+tone+'; width:'+size+'px; height:'+size+'px; font-size:'+Math.round(size*.42)+'px">'+initial+'</div>';
}
function ratingHtml(rating, reviews){ return '<span class="rating"><span class="stars">★</span>'+rating+(reviews?' <span style="opacity:.75">('+reviews+')</span>':'')+'</span>'; }
function heartHtml(id){
  const fav = favorites.has(id) ? ' fav' : '';
  return '<button class="heart'+fav+'" onclick="toggleFav(event,\''+id+'\')"><svg viewBox="0 0 24 24"><path d="M12 21s-7-4.4-9.6-9C.6 8.7 2 5 5.6 5c2 0 3.4 1.1 4.4 2.6C11 6.1 12.4 5 14.4 5 18 5 19.4 8.7 21.6 12 19 16.6 12 21 12 21z"/></svg></button>';
}
function cardHtml(r){
  const c = chefs[r.chef];
  return '<div class="mcard" onclick="goTo(\'recipe\',\''+r.id+'\')" role="button" tabindex="0" onkeydown="if(event.key===\'Enter\')goTo(\'recipe\',\''+r.id+'\')"><div class="mswatch photo">'+photoHtml(r.img, r.difficulty)+heartHtml(r.id)+'</div>'+
    '<h4>'+r.name+'</h4><p class="mby">'+c.name+'</p>'+
    '<div class="mcard-foot">'+ratingHtml(r.rating, r.reviews)+'<span class="mprice">'+brl(r.price)+'</span></div></div>';
}

/* ---------------- PAGE RENDERERS ---------------- */
function renderHome(){
  const featured = recipeById('risoto-funghi');
  const fc = chefs[featured.chef];
  const featSide = ['hamburguer-artesanal','mousse-chocolate','feijoada-completa'].map(recipeById);
  const trending = ['tagliatelle-ragu','bowl-vegetariano','curry-verde','pao-fermentacao'].map(recipeById);
  return `
  <section class="hero" id="hero-sec" onpointerenter="handleHeroPointerEnter()">
    <div class="hero-bg" id="heroBg">
      <video class="hero-video" id="heroVideo" muted loop playsinline preload="auto" poster="${IMG.hero}" onerror="this.style.display='none'">
        <source src="${IMG.heroVideo}" type="video/webm">
      </video>
      <div class="hero-bg-img" id="heroFallback" style="background-image:url('${IMG.hero}')"></div>
    </div>
    <div class="hero-shade"></div>
    <div class="hero-inner">
      <div class="hero-eyebrow">GASTROMATCH — EXPERIÊNCIAS GASTRONÔMICAS</div>
      <h1 class="hero-title">O próximo <i>prato</i> começa aqui.</h1>
      <p class="hero-sub">Aprenda com quem entende. Receitas exclusivas, técnicas profissionais e ingredientes na medida certa, direto do chef para a sua cozinha.</p>
      <div class="hero-ctas">
        <button class="btn-primary" onclick="navScroll('cat-grid')">Explorar experiências</button>
        <button class="btn-outline" onclick="goTo('recipe','${featured.id}')">Quero cozinhar</button>
      </div>
    </div>
    <div class="hero-scroll">role para descobrir ↓</div>
  </section>

  <div class="search-block reveal">
    <div class="search-row" onclick="document.getElementById('searchInput').focus()">
      <svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.6" y2="16.6"/></svg>
      <input id="searchInput" placeholder="O que você está com vontade de cozinhar?" onfocus="toggleSearch(true)" onblur="setTimeout(()=>toggleSearch(false),200)">
    </div>
    <div class="search-suggest" id="searchSuggest">
      <div class="suggest-chips">
        <span class="sugg" onclick="document.getElementById('searchInput').value=this.textContent">Quero algo rápido</span>
        <span class="sugg" onclick="document.getElementById('searchInput').value=this.textContent">Jantar especial</span>
        <span class="sugg" onclick="document.getElementById('searchInput').value=this.textContent">Quero impressionar</span>
        <span class="sugg" onclick="document.getElementById('searchInput').value=this.textContent">Até R$ 20</span>
        <span class="sugg" onclick="document.getElementById('searchInput').value=this.textContent">Receita vegetariana</span>
      </div>
    </div>
  </div>

  <div class="wrap">
    <div class="trust-row reveal" style="margin-top:56px">
      <div class="trust-item"><svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> chefs e restaurantes verificados</div>
      <div class="trust-item"><svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="1"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg> conteúdo protegido com marca d'água</div>
      <div class="trust-item"><svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg> kits com entrega georreferenciada</div>
    </div>

    <section class="sec" id="cat-grid">
      <div class="sec-head reveal"><h2>O que combina com o seu momento?</h2><p>Seis caminhos para começar — de um jantar rápido a uma técnica de alta gastronomia.</p></div>
      <div class="cat-grid">
        ${categories.map((c,i)=>`
        <div class="cat-tile reveal reveal${(i%4)+1} photo" onclick="goTo('recipe','${c.recipe}')">
          ${photoHtml(c.img)}
          <div class="cat-tile-label"><b>${c.label}</b><span>ver receitas →</span></div>
        </div>`).join('')}
      </div>
    </section>

    <section class="sec" style="padding-top:0">
      <div class="sec-head reveal"><h2>Receitas que estão fazendo sucesso</h2><p>Selecionadas pela comunidade nos últimos 30 dias.</p></div>
      <div class="success-grid">
        <div class="success-card photo reveal" onclick="goTo('recipe','${featured.id}')">
          ${photoHtml(featured.img)}${heartHtml(featured.id)}
          <div class="success-card-info">
            <div class="feat-meta" style="margin-bottom:8px">${ratingHtml(featured.rating, featured.reviews)}<span>${featured.time}</span><span>${featured.difficulty}</span></div>
            <h3>${featured.name}</h3>
            <span class="success-by">${fc.name} · ${brl(featured.price)}</span>
          </div>
        </div>
        ${featSide.map((r,i)=>`
        <div class="success-card photo reveal reveal${i+2}" onclick="goTo('recipe','${r.id}')">
          ${photoHtml(r.img)}${heartHtml(r.id)}
          <div class="success-card-info"><h3>${r.name}</h3><div class="feat-meta">${ratingHtml(r.rating)}<span>${r.time}</span></div></div>
        </div>`).join('')}
      </div>
    </section>
  </div>

  <section class="story reveal">
    <div class="wrap">
      <div class="story-img photo">${photoHtml(IMG.mise)}</div>
      <div>
        <div class="story-eyebrow">MISE EN PLACE</div>
        <h2>Do restaurante para a sua cozinha.</h2>
        <div class="story-steps">
          <div class="story-step"><span class="num">1</span><div><h4>Escolha o prato</h4><p>Navegue por receitas validadas por chefs com CNPJ e formação comprovada.</p></div></div>
          <div class="story-step"><span class="num">2</span><div><h4>Receba os ingredientes porcionados</h4><p>O restaurante prepara e envia o kit já higienizado, na medida exata da receita.</p></div></div>
          <div class="story-step"><span class="num">3</span><div><h4>Acompanhe o chef</h4><p>Vídeo-aula passo a passo, com marca d'água e sem opção de download.</p></div></div>
          <div class="story-step"><span class="num">4</span><div><h4>Finalize em casa</h4><p>Sem sobra de ingrediente, sem ida ao mercado no meio do preparo.</p></div></div>
          <div class="story-step"><span class="num">5</span><div><h4>Compartilhe o resultado</h4><p>Publique na comunidade e tire dúvidas direto com quem criou a receita.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <div class="wrap">
    <section class="sec" style="padding-bottom:0">
      <div class="geo-strip reveal">
        <div class="geo-left">
          <svg class="icon" viewBox="0 0 24 24"><path d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <div><b>Experiências disponíveis perto de você</b><span>Joinville, SC — raio de entrega definido por cada restaurante</span></div>
        </div>
        <div class="geo-stats">
          <div><b>12</b>restaurantes na região</div>
          <div><b>4,7 km</b>raio médio de entrega</div>
          <div><b>~35 min</b>tempo médio de preparo do kit</div>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="sec-head reveal"><h2>Conheça quem está por trás do prato.</h2><p>Cada perfil passa por curadoria — só chef formado ou restaurante com CNPJ ativo entra na plataforma.</p></div>
      <div class="chef-grid" id="chef-grid">
        ${Object.entries(chefs).map(([id,c],i)=>`
        <div class="chef-tile photo reveal reveal${(i%4)+1}" onclick="goTo('chef','${id}')">
          ${photoHtml(c.cover)}
          <span class="chef-verified"><svg class="icon" style="width:11px;height:11px" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> verificado</span>
          <div class="chef-tile-info"><b>${c.name}</b><span>${c.person} · ${c.stats.receitas} receitas</span></div>
        </div>`).join('')}
      </div>
    </section>

    <section class="sec" id="partner">
      <div class="partner reveal">
        <div>
          <div class="story-eyebrow" style="color:#c8a45e">PARA RESTAURANTES E CHEFS</div>
          <h2>Seu conhecimento pode ir muito além da cozinha.</h2>
          <p>Transforme técnica de salão em receita, aula e kit monetizável — com a marca do seu restaurante protegida em cada entrega.</p>
          <ul class="partner-list">
            <li><svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> Venda receitas, videoaulas e kits</li>
            <li><svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> Atraia novos clientes para o salão físico</li>
            <li><svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> Conteúdo protegido com marca d'água</li>
          </ul>
          <button class="btn-primary" onclick="goToTab('register-choice')">Quero ser um parceiro</button>
        </div>
        <div class="partner-visual photo">${photoHtml(chefs.torino.cover)}</div>
      </div>
    </section>

    <section class="sec">
      <div class="sec-head reveal"><h2>Quem já cozinhou</h2><p>Avaliações reais de quem já recebeu um kit ou assistiu a uma aula.</p></div>
      <div class="testi-grid reveal">
        <div class="testi-card"><span class="stars">${STARS5}</span><p>"${recipeById('risoto-funghi').testi.quote}"</p><span class="who">${recipeById('risoto-funghi').testi.name} · Risoto de Funghi</span></div>
        <div class="testi-card"><span class="stars">${STARS5}</span><p>"${recipeById('hamburguer-artesanal').testi.quote}"</p><span class="who">${recipeById('hamburguer-artesanal').testi.name} · Hambúrguer Artesanal de Cordeiro</span></div>
        <div class="testi-card"><span class="stars">${STARS5}</span><p>"${recipeById('feijoada-completa').testi.quote}"</p><span class="who">${recipeById('feijoada-completa').testi.name} · Feijoada Completa</span></div>
      </div>
    </section>

    <section class="sec" style="padding-top:0">
      <div class="sec-head reveal"><h2>Em alta na comunidade</h2><p>As receitas mais preparadas nesta semana.</p></div>
      <div class="card-grid">${trending.map(cardHtml).join('')}</div>
      <p class="photo-credit">fotos ilustrativas: Wikimedia Commons</p>
    </section>
  </div>
  `;
}

/* -------- RF03: comercialização flexível -------- */
function buyRecipe(id){
  requireLogin(()=>{
    if(currentUser.kind==='criador'){ showToast('Contas de criador não compram receitas — entre com uma conta de cozinheiro amador.'); return; }
    unlockedRecipes.add(id);
    showToast('Receita desbloqueada! Ingredientes e modo de preparo liberados.');
    render();
  });
}
function subscribeChef(chefId){
  requireLogin(()=>{
    if(currentUser.kind==='criador'){ showToast('Contas de criador não podem assinar catálogos.'); return; }
    subscribedChefs.add(chefId);
    recipes.filter(r=>r.chef===chefId).forEach(r=>unlockedRecipes.add(r.id));
    showToast('Assinatura de '+chefs[chefId].name+' ativada! Todo o catálogo foi liberado.');
    render();
  });
}
function isRecipeUnlocked(r){ return unlockedRecipes.has(r.id) || subscribedChefs.has(r.chef); }

function renderRecipe(id){
  const r = recipeById(id);
  const c = chefs[r.chef];
  const unlocked = isRecipeUnlocked(r);
  const bodyHtml = unlocked ? `
      <div class="unlocked-recipe-body">
        <h4>Ingredientes</h4>
        <ul>${r.kit.map(i=>'<li>'+i[0]+' — '+i[1]+'</li>').join('')}</ul>
        <h4>Modo de preparo</h4>
        <ol>${r.instrucoes.map(s=>'<li>'+s+'</li>').join('')}</ol>
        <button class="tiny-btn" style="margin-top:6px" onclick="downloadFichaPdf('${r.id}')">⬇ baixar ficha em PDF (com marca d'água)</button>
      </div>` : `
      <div class="locked-box"><b>Ingredientes e modo de preparo</b>protegidos com marca d'água — desbloqueie comprando a receita ou assinando o catálogo de ${c.name}</div>`;
  return `<div class="wrap" style="padding-top:120px">
  <button class="back-link" onclick="goBack()"><svg class="icon" style="width:14px;height:14px" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> voltar</button>
  <div class="detail-layout">
    <div class="detail-main">
      <div class="hero-photo photo">${photoHtml(r.img, r.difficulty+' · '+r.time)}${heartHtml(r.id)}</div>
      <h1 class="detail-title">${r.name}</h1>
      <p class="detail-by">por <span class="link-inline" onclick="goTo('chef','${r.chef}')">${c.person}</span> · <span class="link-inline" onclick="goTo('chef','${r.chef}')">${c.name}</span>, ${c.city}</p>
      ${ratingHtml(r.rating, r.reviews+' avaliações')}
      <div class="meta-strip" style="margin-top:16px">
        <div><b>${r.time}</b><small>preparo</small></div>
        <div><b>${r.portions}</b><small>rende</small></div>
        <div><b>${r.rating}</b><small>avaliação</small></div>
      </div>
      <div class="tabs"><span class="active">Receita</span><span>Vídeo</span><span>Avaliações</span></div>
      ${bodyHtml}
      ${unlocked ? `<video class="hero-photo" style="height:220px" controls controlsList="nodownload noremoteplayback" disablePictureInPicture oncontextmenu="return false" poster="${r.img}" src="${IMG.heroVideo}"></video><p class="video-locked-note"><svg class="icon" style="width:13px;height:13px" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="1"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg> vídeo protegido — download desabilitado</p>` : ''}
      <div class="testi-card"><span class="stars">${STARS5}</span><p>"${r.testi.quote}"</p><span class="who">${r.testi.name} · fez esta receita</span></div>
    </div>
    <div class="purchase-panel">
      <div class="buy-row"><div><span class="lab">Desbloquear receita</span><span class="sub">vídeo com marca d'água · sem download</span></div>${unlocked ? '<span style="color:var(--olive);font-family:\'IBM Plex Mono\',monospace;font-size:11px">✓ liberado</span>' : `<button class="tiny-btn" onclick="buyRecipe('${r.id}')">${brl(r.price)}</button>`}</div>
      <div class="buy-row"><div><span class="lab">Assinar ${c.name}</span><span class="sub">catálogo completo · mensal</span></div>${subscribedChefs.has(r.chef) ? '<span style="color:var(--olive);font-family:\'IBM Plex Mono\',monospace;font-size:11px">✓ assinante</span>' : `<button class="tiny-btn" onclick="subscribeChef('${r.chef}')">R$ 29/mês</button>`}</div>
      <div class="buy-row"><div><span class="lab">Pedir kit de ingredientes</span><span class="sub">entrega em até ${c.radius} · disponível</span><span class="scarcity">restam ${r.kitsLeft} kits para entrega hoje</span></div><button class="tiny-btn" onclick="requireLogin(()=>goTo('checkout','${r.id}'))">pedir</button></div>
      <div class="panel-guarantee">satisfação garantida · reembolso em até 7 dias</div>
    </div>
  </div>
  </div>
  <div class="sticky-cta"><div class="sp"><small>kit de ingredientes</small><b>${brl(r.kitPrice)}</b></div><button onclick="requireLogin(()=>goTo('checkout','${r.id}'))">Pedir agora</button></div>
  `;
}

/* -------- RNF03: geração de PDF com marca d'água dinâmica -------- */
let jspdfLoading = null;
function loadJsPDF(){
  if(window.jspdf) return Promise.resolve();
  if(jspdfLoading) return jspdfLoading;
  jspdfLoading = new Promise((resolve, reject)=>{
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
  return jspdfLoading;
}
function downloadFichaPdf(id){
  const r = recipeById(id);
  const c = chefs[r.chef];
  const email = currentUser ? currentUser.email : 'convidado@gastromatch.com';
  loadJsPDF().then(()=>{
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont('helvetica','bold'); doc.setFontSize(18);
    doc.text(r.name, 15, 20);
    doc.setFontSize(11); doc.setFont('helvetica','normal');
    doc.text('por ' + c.person + ' · ' + c.name, 15, 28);
    doc.text('Tempo: ' + r.time + '   Rende: ' + r.portions, 15, 36);
    doc.setFont('helvetica','bold'); doc.text('Ingredientes', 15, 48);
    doc.setFont('helvetica','normal');
    let y = 55;
    r.kit.forEach(i=>{ doc.text('• ' + i[0] + ' — ' + i[1], 17, y); y += 7; });
    y += 5;
    doc.setFont('helvetica','bold'); doc.text('Modo de preparo', 15, y); y += 7;
    doc.setFont('helvetica','normal');
    r.instrucoes.forEach((s,idx)=>{
      const lines = doc.splitTextToSize((idx+1)+'. '+s, 175);
      doc.text(lines, 17, y); y += 6*lines.length;
    });
    // marca d'água dinâmica vinculada ao usuário (RNF03)
    const pages = doc.internal.getNumberOfPages();
    for(let p=1;p<=pages;p++){
      doc.setPage(p);
      doc.setFontSize(9); doc.setTextColor(160,160,160);
      doc.text('Baixado por: ' + email + ' · GastroMatch © ' + new Date().getFullYear(), 15, 289);
      doc.saveGraphicsState && doc.saveGraphicsState();
      doc.setFontSize(46); doc.setTextColor(230,230,230);
      doc.text('GASTROMATCH · ' + email, 30, 160, { angle: 35 });
    }
    doc.save(r.id + '-ficha.pdf');
    showToast("Ficha em PDF baixada com marca d'água do seu usuário.");
  }).catch(()=>showToast('Não foi possível gerar o PDF agora — verifique sua conexão.'));
}

function renderChef(id){
  const c = chefs[id];
  const catalog = recipes.filter(r=>r.chef===id);
  return `<div class="wrap" style="padding-top:120px">
  <button class="back-link" onclick="goBack()"><svg class="icon" style="width:14px;height:14px" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> voltar</button>
  <div class="cover photo">${photoHtml(c.cover)}</div>
  <div class="chef-head"><div class="avatar">${c.initial}</div><div><p class="chef-name">${c.name}</p><div class="verified">✓ CNPJ verificado · ${c.city}</div></div></div>
  <div class="stat-row"><div><b>${c.stats.receitas}</b><small>receitas</small></div><div><b>${c.stats.alunos}</b><small>alunos</small></div><div><b>${c.stats.avaliacao}</b><small>avaliação</small></div></div>
  <p class="bio">${c.bio}</p>
  <button class="follow-btn" onclick="subscribeChef('${id}')">${subscribedChefs.has(id) ? '✓ Você é assinante' : 'Assinar catálogo · R$ 29/mês'}</button>
  <h2 style="font-family:'Fraunces',serif;font-size:19px;font-weight:500;margin:0 0 16px">Catálogo</h2>
  <div class="card-grid" style="margin-bottom:70px">${catalog.map(cardHtml).join('')}</div>
  </div>`;
}

/* -------- RF04: checkout com validação de raio por geolocalização -------- */
function pseudoDistanceKm(cep, chefId){
  let sum=0; for(const ch of (cep||'')+chefId) sum += ch.charCodeAt(0);
  return Math.round(((sum % 97) / 97) * 9 * 10) / 10; // 0.0 - 9.0 km determinístico
}
function checkCep(recipeId){
  const r = recipeById(recipeId);
  const c = chefs[r.chef];
  const cepInput = document.getElementById('cepInput');
  const cep = (cepInput.value||'').replace(/\D/g,'');
  const resultBox = document.getElementById('geoResult');
  if(cep.length < 8){ resultBox.innerHTML = '<div class="field-error">Digite um CEP válido (8 dígitos).</div>'; return; }
  const radiusKm = parseFloat(c.radius) || 5;
  const dist = pseudoDistanceKm(cep, r.chef);
  const ok = dist <= radiusKm;
  if(ok){
    resultBox.innerHTML = `<div class="geo-ok"><span class="geo-dot"></span> dentro do raio de ${c.radius} de ${c.name} (~${dist} km)</div>`;
    document.getElementById('kitBuyBtn').style.display='';
    document.getElementById('outOfRangeBox').style.display='none';
  } else {
    resultBox.innerHTML = `<div class="field-error">Endereço a ~${dist} km — fora do raio de ${c.radius} de ${c.name}.</div>`;
    document.getElementById('kitBuyBtn').style.display='none';
    document.getElementById('outOfRangeBox').style.display='';
  }
}
function allowPickup(){
  const resultBox = document.getElementById('geoResult');
  resultBox.innerHTML = '<div class="geo-ok"><span class="geo-dot"></span> retirada no estabelecimento — sem validação de raio necessária</div>';
  document.getElementById('kitBuyBtn').style.display='';
  document.getElementById('outOfRangeBox').style.display='none';
}
function renderCheckout(id){
  const r = recipeById(id);
  const c = chefs[r.chef];
  return `<div class="wrap" style="padding-top:120px">
  <button class="back-link" onclick="goBack()"><svg class="icon" style="width:14px;height:14px" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> voltar</button>
  <h2 style="font-family:'Fraunces',serif;font-size:22px;font-weight:500;margin:0 0 20px">Kit · ${r.name}</h2>
  <div class="checkout-layout" style="margin-bottom:70px">
    <div class="checkout-main">
      <div class="addr-box">
        <div class="addr-top"><span>Endereço de entrega</span></div>
        <div class="field" style="margin:10px 0 4px"><label>CEP</label><div style="display:flex;gap:8px"><input id="cepInput" placeholder="89200-000" style="padding:11px 13px;border:1px solid var(--line);background:var(--paper);color:var(--ink);border-radius:2px;flex:1"><button class="tiny-btn" onclick="checkCep('${r.id}')">verificar raio</button></div></div>
        <div id="geoResult"><div class="geo-ok"><span class="geo-dot"></span> informe o CEP para validar o raio de entrega de ${c.name} (${c.radius})</div></div>
        <div id="outOfRangeBox" style="display:none; margin-top:10px; font-size:12px; color:var(--ink-soft)">Você ainda pode <span class="link-inline" onclick="goTo('recipe','${r.id}')">comprar apenas a aula em vídeo</span> ou retirar no estabelecimento.</div>
      </div>
      <h3 style="font-family:'Fraunces',serif;font-size:16px;font-weight:500;margin:0 0 14px">Itens do kit</h3>
      ${r.kit.map(i=>'<div class="kit-line"><span>'+i[0]+'</span><span>'+i[1]+'</span></div>').join('')}
      <h3 style="font-family:'Fraunces',serif;font-size:16px;font-weight:500;margin:22px 0 14px">Entrega</h3>
      <div class="chip-row"><div class="chip on" onclick="toggleChip(this)">Hoje · 18h–20h</div><div class="chip" onclick="toggleChip(this)">Amanhã · 12h–14h</div><div class="chip" onclick="toggleChip(this); allowPickup()">Retirar no local</div></div>
      <div class="terms-row"><input type="checkbox" id="terms" checked><label for="terms">Declaro ciência de que os ingredientes seguem as normas locais de Vigilância Sanitária para manipulação e transporte.</label></div>
    </div>
    <div class="order-summary">
      <div class="kit-line"><span>${r.name}</span><span>${brl(r.kitPrice)}</span></div>
      <div class="kit-line" style="border-bottom:none"><span>Entrega</span><span>grátis</span></div>
      <div class="total-row"><span>Total</span><b>${brl(r.kitPrice)}</b></div>
      <button class="confirm-btn" id="kitBuyBtn" onclick="confirmOrder('${r.name}')" style="display:none">Confirmar pedido</button>
      <div class="summary-guarantee">pagamento processado com segurança · satisfação garantida</div>
    </div>
  </div>
  </div>`;
}

function renderCommunity(){
  const r1=recipeById('curry-verde'), r2=recipeById('cordeiro-porto'), r3=recipeById('mousse-chocolate'), r4=recipeById('bowl-vegetariano');
  const extra = communityPosts.map(p=>`
      <div class="post"><div class="post-photo photo">${p.img ? photoHtml(p.img) : photoHtml(recipeById(p.recipeId).img)}</div><div class="post-body">
        <div class="post-head">${avatarHtml(currentUser?currentUser.name:'Você',28)}<div><div class="post-name">${currentUser?currentUser.name:'Você'}</div><div class="post-tag" onclick="goTo('recipe','${p.recipeId}')">fez: ${recipeById(p.recipeId).name}</div></div></div>
        <p class="post-caption">${p.caption}</p>
        <div class="post-actions"><span>${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</span><span>♥ 0</span></div></div></div>`).join('');
  return `<div class="wrap" style="padding-top:120px; max-width:920px">
    <h2 style="font-family:'Fraunces',serif;font-size:22px;font-weight:500;margin:0 0 20px">Mostre o que você preparou.</h2>
    <div class="progress-widget">
      <div><b>Seu progresso gastronômico</b><span>Você já preparou ${8+communityPosts.length} receitas.</span></div>
      <div class="badges-row">
        <span class="badge-pill">🍝 Mestre das massas</span>
        <span class="badge-pill">🔥 5 receitas concluídas</span>
        <span class="badge-pill">👨‍🍳 1ª receita de chef</span>
      </div>
    </div>
    <div class="composer" onclick="openPostModal()">${avatarHtml(currentUser?currentUser.name:'Você',30)} Compartilhe o resultado da sua receita…</div>
    <div class="masonry">
      ${extra}
      <div class="post"><div class="post-photo photo">${photoHtml(r1.img)}</div><div class="post-body">
        <div class="post-head">${avatarHtml('Camila R.',28)}<div><div class="post-name">Camila R.</div><div class="post-tag" onclick="goTo('recipe','${r1.id}')">fez: ${r1.name}</div></div></div>
        <p class="post-caption">Pasta de curry fresquinha muda tudo, ficou tão bom quanto no restaurante 😍</p>
        <div class="post-actions"><span>♥ 42</span><span>💬 6</span></div></div></div>

      <div class="post qa-post">
        <div class="post-head">${avatarHtml('Diego F.',28)}<div><div class="post-name">Diego F.</div><div class="post-tag" onclick="goTo('recipe','${r2.id}')">fez: ${r2.name}</div></div></div>
        <div class="qa-box"><b>pergunta para chef renato</b>Posso trocar o vinho do Porto por um tinto seco?</div>
        <div class="qa-box reply"><b>respondido pelo chef renato</b>Pode sim — o resultado fica um pouco menos adocicado.</div>
        <div class="post-actions"><span>♥ 18</span><span>💬 3</span></div>
      </div>

      <div class="post"><div class="post-photo photo">${photoHtml(r3.img)}</div><div class="post-body">
        <div class="post-head">${avatarHtml('Ana P.',28)}<div><div class="post-name">Ana P.</div><div class="post-tag" onclick="goTo('recipe','${r3.id}')">fez: ${r3.name}</div></div></div>
        <p class="post-caption">Mousse com textura de restaurante, bem diferente da de pacotinho 😅</p>
        <div class="post-actions"><span>♥ 27</span><span>💬 4</span></div></div></div>

      <div class="post"><div class="post-photo photo" style="aspect-ratio:4/3">${photoHtml(r4.img)}</div><div class="post-body">
        <div class="post-head">${avatarHtml('Larissa T.',28)}<div><div class="post-name">Larissa T.</div><div class="post-tag" onclick="goTo('recipe','${r4.id}')">fez: ${r4.name}</div></div></div>
        <p class="post-caption">Bowl colorido, leve e muito mais saboroso do que eu esperava.</p>
        <div class="post-actions"><span>♥ 31</span><span>💬 2</span></div></div></div>
    </div>
  </div>`;
}

/* -------- RF06: comunidade — postar resultado -------- */
const communityPosts = [];
let postDraftImg = null;
let postDraftStars = 5;
function openPostModal(){
  requireLogin(()=>{
    postDraftImg = null; postDraftStars = 5;
    const opts = recipes.map(r=>'<option value="'+r.id+'">'+r.name+'</option>').join('');
    const backdrop = document.createElement('div');
    backdrop.className='modal-backdrop'; backdrop.id='postModalBackdrop';
    backdrop.innerHTML = `<div class="modal-box">
      <h3>Compartilhar resultado</h3>
      <div class="field"><label>Qual receita você fez?</label><select id="postRecipeSel">${opts}</select></div>
      <div class="field"><label>Foto do prato (opcional)</label><input type="file" accept="image/*" id="postFileInput" onchange="handlePostFile(event)"><img id="postPreview" class="preview-img" style="display:none"></div>
      <div class="field"><label>Sua nota</label><div class="star-pick" id="starPick">${[1,2,3,4,5].map(n=>'<span data-n="'+n+'" onclick="setPostStars('+n+')" class="'+(n<=postDraftStars?'on':'')+'">★</span>').join('')}</div></div>
      <div class="field"><label>Comentário</label><textarea id="postCaption" placeholder="Como foi preparar essa receita?"></textarea></div>
      <div class="modal-actions"><button class="cancel" onclick="closePostModal()">cancelar</button><button class="submit" onclick="submitPost()">publicar</button></div>
    </div>`;
    document.body.appendChild(backdrop);
  });
}
function closePostModal(){ const b=document.getElementById('postModalBackdrop'); if(b) b.remove(); }
function setPostStars(n){ postDraftStars=n; document.querySelectorAll('#starPick span').forEach(s=>s.classList.toggle('on', parseInt(s.dataset.n)<=n)); }
function handlePostFile(ev){
  const file = ev.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{ postDraftImg = reader.result; const img=document.getElementById('postPreview'); img.src=postDraftImg; img.style.display='block'; };
  reader.readAsDataURL(file);
}
function submitPost(){
  const recipeId = document.getElementById('postRecipeSel').value;
  const caption = document.getElementById('postCaption').value.trim();
  if(!caption){ showToast('Escreva um comentário antes de publicar.'); return; }
  communityPosts.unshift({ recipeId, caption, stars: postDraftStars, img: postDraftImg });
  closePostModal();
  showToast('Resultado publicado na comunidade!');
  goToTab('community');
}

function renderDashboard(){
  if(!currentUser){ return renderLoginGate('painel do criador'); }
  if(currentUser.kind!=='criador'){
    return `<div class="wrap" style="padding-top:140px; max-width:520px; text-align:center">
      <h2 style="font-family:'Fraunces',serif;font-size:22px;font-weight:500">Área exclusiva para criadores</h2>
      <p style="color:var(--ink-soft);font-size:13.5px;line-height:1.7;margin:12px 0 22px">Sua conta é de Cozinheiro Amador. Para publicar receitas e vender kits, cadastre-se como Chef ou Restaurante.</p>
      <button class="btn-primary" onclick="goToTab('register-criador')">Cadastrar como criador</button>
    </div>`;
  }
  const c = chefs.torino;
  const mine = recipes.filter(r=>r.chef==='torino');
  return `<div class="wrap" style="padding-top:120px; max-width:920px">
  <h2 style="font-family:'Fraunces',serif;font-size:22px;font-weight:500;margin:0 0 4px">${c.name} · painel do criador</h2>
  <p style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink-soft);margin:0 0 20px">logado como ${currentUser.name} (${currentUser.email}) · dados de vendas ilustrativos — protótipo sem banco de dados</p>
  <div class="rev-cards">
    <div class="rev-card"><small>receita do mês</small><b data-target="3842" data-prefix="R$ ">R$ 0</b><em>+18% vs. mês anterior</em></div>
    <div class="rev-card"><small>kits vendidos</small><b data-target="96">0</b><em>28 essa semana</em></div>
    <div class="rev-card"><small>assinantes</small><b data-target="214">0</b><em>+12 essa semana</em></div>
    <div class="rev-card"><small>raio de entrega</small><b>${c.radius}</b><em>configurar →</em></div>
  </div>
  <div class="alert-box">3 pedidos de kit aguardando confirmação de estoque para hoje às 18h.</div>
  <h3 style="font-family:'Fraunces',serif;font-size:16px;font-weight:500;margin:0 0 12px">Suas receitas</h3>
  ${mine.map(r=>`<div class="row-item" onclick="goTo('recipe','${r.id}')"><div><div class="ttl">${r.name}</div><span class="status">marca d'água ativa</span></div><div class="num">${brl(r.price*40)}</div></div>`).join('')}
  ${newlyPublished.map(r=>`<div class="row-item" onclick="goTo('recipe','${r.id}')"><div><div class="ttl">${r.name}</div><span class="status">${r.status==='rascunho'?'rascunho — não publicada':'publicada agora'}</span></div><div class="num">${r.status==='rascunho'?'—':brl(r.price)}</div></div>`).join('')}
  <div class="row-item" onclick="showToast('Receita em revisão de curadoria — disponível assim que aprovada.')"><div><div class="ttl">Osso Buco</div><span class="status">em revisão de curadoria</span></div><div class="num">—</div></div>
  <button class="new-recipe-btn" onclick="goTo('new-recipe')">+ Publicar nova receita</button>
  </div>`;
}

/* -------- RF02: publicar receita -------- */
const newlyPublished = [];
function renderNewRecipe(){
  if(!currentUser || currentUser.kind!=='criador'){ return renderLoginGate('publicação de receitas'); }
  return `<div class="auth-wrap" style="max-width:560px">
  <button class="back-link" onclick="goBack()"><svg class="icon" style="width:14px;height:14px" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> voltar</button>
  <div class="auth-card">
    <h1 class="auth-title">Publicar nova receita</h1>
    <p class="auth-sub">Categorize por restrição alimentar e tempo de preparo (RF02).</p>
    <div class="field"><label>Título da receita</label><input id="nrTitle" placeholder="Ex: Risoto de Camarão"></div>
    <div class="field"><label>Descrição</label><textarea id="nrDesc" placeholder="Conte um pouco sobre o prato..."></textarea></div>
    <div class="field"><label>Restrição alimentar</label><select id="nrRestricao"><option>sem restrição</option><option>vegano</option><option>vegetariano</option><option>sem glúten</option><option>sem lactose</option></select></div>
    <div class="field"><label>Tempo de preparo</label><input id="nrTempo" placeholder="Ex: 40 min"></div>
    <div class="field"><label>Preço de acesso avulso (Pay-Per-View)</label><input id="nrPreco" type="number" step="0.10" placeholder="29.90"></div>
    <div class="checkbox-row"><input type="checkbox" id="nrKit" checked><label for="nrKit">Vincular kit de ingredientes (Mise en Place)</label></div>
    <div class="field"><label>Link da videoaula</label><input id="nrVideo" placeholder="https://..."></div>
    <div class="modal-actions" style="justify-content:flex-start">
      <button class="auth-submit" style="width:auto" onclick="publishRecipe(false)">Publicar</button>
      <button class="cancel" style="padding:10px 16px" onclick="publishRecipe(true)">Salvar rascunho</button>
    </div>
  </div>
  </div>`;
}
function publishRecipe(asDraft){
  const title = document.getElementById('nrTitle').value.trim();
  if(!title){ showToast('Informe o título da receita.'); return; }
  const preco = parseFloat(document.getElementById('nrPreco').value) || 19.90;
  const id = 'nova-' + Date.now();
  const newR = { id, name:title, chef:'torino', time:document.getElementById('nrTempo').value||'30 min', difficulty:'fácil', portions:'2 pessoas',
    price:preco, rating:0, reviews:0, kitPrice:preco*1.3, kitsLeft:5, img:IMG.risoto, restricao:document.getElementById('nrRestricao').value,
    kit:[['Ingrediente principal','a definir']], instrucoes:[document.getElementById('nrDesc').value || 'Modo de preparo em edição.'],
    testi:{quote:'Em breve as primeiras avaliações.', name:'—'}, status: asDraft?'rascunho':'publicada' };
  recipes.push(newR);
  newlyPublished.push(newR);
  showToast(asDraft ? 'Receita salva como rascunho.' : 'Receita publicada no marketplace!');
  goToTab('dashboard');
}

/* -------- Login gate for protected pages -------- */
function renderLoginGate(what){
  return `<div class="auth-wrap"><div class="auth-card" style="text-align:center">
    <h1 class="auth-title">Entre para continuar</h1>
    <p class="auth-sub">Você precisa estar logado para acessar ${what}.</p>
    <button class="auth-submit" onclick="goToTab('login')">Ir para o login</button>
  </div></div>`;
}

/* -------- RF05 / RF01: Login e Cadastro -------- */
function renderLogin(){
  return `<div class="auth-wrap"><div class="auth-card">
    <h1 class="auth-title">Bem-vindo de volta</h1>
    <p class="auth-sub">Entre com seu e-mail e senha para acessar sua conta GastroMatch.</p>
    <div class="field"><label>E-mail</label><input id="loginEmail" type="email" placeholder="voce@email.com"></div>
    <div class="field"><label>Senha</label><input id="loginPass" type="password" placeholder="••••••••"></div>
    <div id="loginError"></div>
    <button class="auth-submit" onclick="doLogin()">Entrar</button>
    <p class="auth-switch">Não tem conta? <span class="link-inline" onclick="goToTab('register-choice')">Criar conta</span></p>
  </div></div>`;
}
function doLogin(){
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errBox = document.getElementById('loginError');
  if(!email || !pass){ errBox.innerHTML = '<div class="field-error">Preencha e-mail e senha.</div>'; return; }
  // Prototype without backend: any valid-looking credentials succeed.
  currentUser = { name: email.split('@')[0].replace(/[._]/g,' '), email, kind:'amador' };
  renderAuthArea();
  showToast('Login realizado com sucesso!');
  if(pendingAfterLogin){ const act=pendingAfterLogin; pendingAfterLogin=null; act(); }
  else goToTab('home');
}
function renderRegisterChoice(){
  return `<div class="auth-wrap"><div class="auth-card">
    <h1 class="auth-title">Criar conta</h1>
    <p class="auth-sub">Escolha o tipo de perfil que combina com você (RF01 / RF05).</p>
    <div class="type-choice">
      <div class="type-card" onclick="goToTab('register-amador')">
        <svg class="icon" viewBox="0 0 24 24" width="28" height="28"><path d="M12 21s-7-4.4-9.6-9C.6 8.7 2 5 5.6 5c2 0 3.4 1.1 4.4 2.6C11 6.1 12.4 5 14.4 5 18 5 19.4 8.7 21.6 12 19 16.6 12 21 12 21z"/></svg>
        <b>Cozinheiro Amador</b><span>quero cozinhar em casa com receitas de chefs</span>
      </div>
      <div class="type-card" onclick="goToTab('register-criador')">
        <svg class="icon" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 1 5H8a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4h-1c0-2 1-3 1-5a4 4 0 0 0-4-4z"/><path d="M9 21h6"/></svg>
        <b>Chef / Restaurante</b><span>quero publicar receitas, aulas e kits</span>
      </div>
    </div>
    <p class="auth-switch">Já tem conta? <span class="link-inline" onclick="goToTab('login')">Entrar</span></p>
  </div></div>`;
}
function renderRegisterAmador(){
  return `<div class="auth-wrap"><div class="auth-card">
    <button class="back-link" onclick="goToTab('register-choice')"><svg class="icon" style="width:14px;height:14px" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> voltar</button>
    <h1 class="auth-title">Cadastro · Cozinheiro Amador</h1>
    <p class="auth-sub">Registro simples (RF05) — navegue pelo catálogo, compre aulas e kits.</p>
    <div class="field"><label>Nome</label><input id="regName" placeholder="Seu nome completo"></div>
    <div class="field"><label>E-mail</label><input id="regEmail" type="email" placeholder="voce@email.com"></div>
    <div class="field"><label>Senha</label><input id="regPass" type="password" placeholder="mín. 6 caracteres"></div>
    <div id="regError"></div>
    <button class="auth-submit" onclick="doRegisterAmador()">Criar conta</button>
    <p class="auth-switch">Já tem conta? <span class="link-inline" onclick="goToTab('login')">Entrar</span></p>
  </div></div>`;
}
function doRegisterAmador(){
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPass').value;
  const err = document.getElementById('regError');
  if(!name || !email || !pass){ err.innerHTML = '<div class="field-error">Preencha todos os campos.</div>'; return; }
  if(pass.length < 6){ err.innerHTML = '<div class="field-error">A senha deve ter ao menos 6 caracteres.</div>'; return; }
  currentUser = { name, email, kind:'amador' };
  renderAuthArea();
  showToast('Conta criada! Bem-vindo(a), '+name.split(' ')[0]+'.');
  if(pendingAfterLogin){ const act=pendingAfterLogin; pendingAfterLogin=null; act(); }
  else goToTab('home');
}
let regDocAttached = false;
function renderRegisterCriador(){
  regDocAttached = false;
  return `<div class="auth-wrap" style="max-width:520px"><div class="auth-card">
    <button class="back-link" onclick="goToTab('register-choice')"><svg class="icon" style="width:14px;height:14px" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> voltar</button>
    <h1 class="auth-title">Cadastro · Chef / Restaurante</h1>
    <p class="auth-sub">Curadoria profissional (RN01) — apenas chefs com formação comprovada ou restaurantes com CNPJ ativo podem publicar conteúdo monetizado.</p>
    <div class="field"><label>Tipo de perfil</label><select id="regTipo"><option value="chef">Chef Profissional</option><option value="restaurante">Restaurante</option></select></div>
    <div class="field"><label>Nome / Razão social</label><input id="regCName" placeholder="Ex: Osteria Torino"></div>
    <div class="field"><label>E-mail</label><input id="regCEmail" type="email" placeholder="contato@restaurante.com"></div>
    <div class="field"><label>Senha</label><input id="regCPass" type="password" placeholder="mín. 6 caracteres"></div>
    <div class="field"><label>Raio de entrega para kits (km)</label><input id="regCRadius" type="number" placeholder="5"></div>
    <div class="field"><label>Diploma (Chef) ou CNPJ/Alvará (Restaurante)</label>
      <div class="file-drop" id="fileDrop" onclick="document.getElementById('regCDoc').click()">clique para anexar o comprovante (PDF/imagem)</div>
      <input type="file" id="regCDoc" style="display:none" onchange="markDocAttached()">
    </div>
    <div class="checkbox-row"><input type="checkbox" id="regCSanit"><label for="regCSanit">Declaro ciência e aceito o Termo de Conformidade Sanitária (RN03) para manipulação e transporte de ingredientes frescos.</label></div>
    <div id="regCError"></div>
    <button class="auth-submit" onclick="doRegisterCriador()">Enviar cadastro para curadoria</button>
    <p class="auth-switch">Já tem conta? <span class="link-inline" onclick="goToTab('login')">Entrar</span></p>
  </div></div>`;
}
function markDocAttached(){
  regDocAttached = true;
  const drop = document.getElementById('fileDrop');
  const f = document.getElementById('regCDoc').files[0];
  drop.classList.add('has-file');
  drop.textContent = '✓ ' + (f ? f.name : 'arquivo anexado');
}
function doRegisterCriador(){
  const name = document.getElementById('regCName').value.trim();
  const email = document.getElementById('regCEmail').value.trim();
  const pass = document.getElementById('regCPass').value;
  const sanit = document.getElementById('regCSanit').checked;
  const err = document.getElementById('regCError');
  if(!name || !email || !pass){ err.innerHTML = '<div class="field-error">Preencha todos os campos obrigatórios.</div>'; return; }
  // E1: recusa do termo sanitário
  if(!sanit){ err.innerHTML = '<div class="field-error">É obrigatório aceitar as normas da Vigilância Sanitária para prosseguir.</div>'; return; }
  // E2: documentação ausente
  if(!regDocAttached){ err.innerHTML = '<div class="field-error">Envie um Diploma válido ou Alvará/CNPJ para a curadoria profissional.</div>'; return; }
  currentUser = { name, email, kind:'criador', status:'pendente' };
  renderAuthArea();
  showToast('Cadastro enviado! Perfil "Pendente de Validação" — curadoria em até 48h.');
  goToTab('dashboard');
}

const pageRenderers = { home:renderHome, recipe:renderRecipe, chef:renderChef, checkout:renderCheckout, community:renderCommunity, dashboard:renderDashboard,
  login:renderLogin, 'register-choice':renderRegisterChoice, 'register-amador':renderRegisterAmador, 'register-criador':renderRegisterCriador, 'new-recipe':renderNewRecipe };

function render(){
  const el = document.getElementById('content');
  el.classList.remove('page-in');
  void el.offsetWidth;
  el.innerHTML = pageRenderers[currentPage](currentId);
  requestAnimationFrame(()=>{ el.classList.add('page-in'); initReveals(); if(currentPage==='home') initHero(); else { updateActiveTab(); } });
  if (currentPage === 'dashboard') animateCounters();
  window.scrollTo(0,0);
  updateActiveTab();
  renderAuthArea();
  const topbar = document.getElementById('topbar');
  topbar.classList.toggle('solid', currentPage !== 'home');
}

let heroTicking = false;
window.addEventListener('scroll', ()=>{
  const topbar = document.getElementById('topbar');
  if(currentPage === 'home') topbar.classList.toggle('solid', window.scrollY > window.innerHeight * 0.7);
  if(currentPage === 'home' && !heroTicking){
    heroTicking = true;
    requestAnimationFrame(()=>{ updateHeroScroll(); heroTicking = false; });
  }
}, { passive:true });
window.addEventListener('resize', updateActiveTab);

initTheme();
try{ history.replaceState({page:'home', id:null}, '', '#home'); }catch(e){}
render();
