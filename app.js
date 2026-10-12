// Посилання на Telegram — замініть на нік Любові, напр. https://t.me/konate_liubov
const TELEGRAM_URL='';
document.querySelectorAll('.tgLink').forEach(a=>{if(TELEGRAM_URL){a.href=TELEGRAM_URL}else{a.href='https://www.instagram.com/konate_liubov_psy/'}});
function setLang(l){document.body.classList.toggle('en',l==='en');document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));document.documentElement.lang=l;document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));try{localStorage.setItem('lk-lang',l)}catch(e){}}document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));let _l='uk';try{_l=localStorage.getItem('lk-lang')||'uk'}catch(e){}setLang(_l);const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});document.querySelectorAll('section>.wrap,.kbcard,.card,.article').forEach(x=>{x.classList.add('reveal');ob.observe(x)});const q=document.querySelector('#kbSearch');if(q)q.addEventListener('input',()=>{let v=q.value.toLowerCase();document.querySelectorAll('.kbcard').forEach(c=>c.style.display=c.innerText.toLowerCase().includes(v)?'flex':'none')});
const nav=document.querySelector('.nav');const progress=document.createElement('div');progress.className='progress';document.body.appendChild(progress);window.addEventListener('scroll',()=>{nav?.classList.toggle('scrolled',scrollY>30);const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:0)+'%'});document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop())a.classList.add('active')});if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const g=document.createElement('div');g.className='cursorGlow';document.body.appendChild(g);addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';document.documentElement.style.setProperty('--mx',e.clientX/innerWidth*100+'%');document.documentElement.style.setProperty('--my',e.clientY/innerHeight*100+'%')})}
document.querySelectorAll('a[target="_blank"]').forEach(a=>{a.rel='noopener noreferrer'});


// Ethical self-navigation: orientation, not diagnosis
const routeCopy={
 anxiety:'Схоже, варто почати з матеріалу про тривогу: як вона працює, що її підтримує і коли варто звернутися по допомогу. <br><br><a class="btn" href="knowledge-anxiety.html">Про тривогу →</a> <a class="btn" href="contact.html">Обговорити з психологом →</a>',
 panic:'Почніть із матеріалу про панічні атаки. Він пояснює механізм паніки та містить посилання на першоджерела. <br><br><a class="btn" href="knowledge-panic.html">Про панічні атаки →</a> <a class="btn" href="contact.html">Записатися →</a>',
 relations:'Для теми стосунків краще почати з консультації: контекст тут важливіший за універсальні чеклісти. <br><br><a class="btn" href="work.html">Як проходить робота →</a> <a class="btn" href="contact.html">Почати розмову →</a>',
 exhaustion:'Виснаження може мати різні причини. Якщо воно пов’язане з роботою — прочитайте коректне визначення burnout; якщо є стійке зниження настрою чи втрата інтересу — матеріал про депресію. <br><br><a class="btn" href="knowledge-burnout.html">Burnout →</a> <a class="btn" href="knowledge-depression.html">Про депресію →</a>'
};
document.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');const out=document.getElementById('navResult');if(out){out.innerHTML=routeCopy[btn.dataset.route]||'';out.classList.add('show')}}));

// Mobile menu: open/close, Esc, close on link tap, lock page scroll
(function(){const btn=document.querySelector('.menu'),links=document.getElementById('siteMenu');if(!btn||!links)return;
function set(o){links.classList.toggle('open',o);document.body.classList.toggle('menuOpen',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Закрити меню':'Відкрити меню')}
btn.addEventListener('click',()=>set(!links.classList.contains('open')));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>set(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
addEventListener('resize',()=>{if(innerWidth>900)set(false)});})();
// Floating booking button: show after the first screen, hide near the footer
(function(){const fb=document.querySelector('.floatingBook'),foot=document.querySelector('.footer');if(!fb)return;
function upd(){const nearFoot=foot&&foot.getBoundingClientRect().top<innerHeight;fb.classList.toggle('show',scrollY>innerHeight*0.6&&!nearFoot)}
addEventListener('scroll',upd,{passive:true});upd();})();
// Motion: staggered reveals + gentle hero parallax (skipped for reduced motion)
(function(){const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const groups='.certGrid,.cards,.readingPath,.offerGrid,.steps,.objections,.signalGrid,.journey,.terms,.legalGrid,.eduList,.kbgrid,.processGrid,.trustRow,.softCards,.permissionList,.credStrip ul,.choiceGrid,.durations,.roles,.chips,.natureChoices';
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll(groups).forEach(g=>{[...g.children].forEach((c,i)=>{c.classList.remove('reveal');c.classList.add('rv');c.style.setProperty('--d',Math.min(i,8)*0.08+'s');if(reduce)c.classList.add('in');else io.observe(c)})});
document.querySelectorAll('.story,.archPhoto,.footCta').forEach(el=>{el.classList.add('rv');reduce?el.classList.add('in'):io.observe(el)});
if(reduce)return;
const arch=document.querySelector('.heroLux .archWrap');
if(arch&&innerWidth>900){let t=false;addEventListener('scroll',()=>{if(t)return;t=true;requestAnimationFrame(()=>{const y=Math.min(scrollY,900);arch.style.transform=`translateY(${y*0.08}px)`;t=false})},{passive:true})}
})();
// Certificates: collapse on load, lightbox with keyboard + swipe
(function(){const grid=document.querySelector('.certGrid');if(!grid)return;
const items=[...grid.querySelectorAll('.certItem')],more=document.querySelector('.certMore'),lb=document.querySelector('.lightbox');
grid.classList.add('collapsed');more&&more.addEventListener('click',()=>{grid.classList.remove('collapsed');items.slice(6).forEach((it,i)=>{it.classList.remove('in');it.style.setProperty('--d',i*0.05+'s');requestAnimationFrame(()=>it.classList.add('in'))})});
const img=lb.querySelector('img'),cap=lb.querySelector('figcaption');let cur=0,last=null;
function show(i){cur=(i+items.length)%items.length;const it=items[cur];img.src=it.dataset.full;img.alt=it.dataset.cap;cap.textContent=it.dataset.cap}
function open(i){last=document.activeElement;show(i);lb.hidden=false;document.body.classList.add('menuOpen');requestAnimationFrame(()=>lb.classList.add('show'));lb.querySelector('.lbClose').focus()}
function close(){lb.classList.remove('show');document.body.classList.remove('menuOpen');setTimeout(()=>{lb.hidden=true;img.removeAttribute('src')},300);last&&last.focus()}
items.forEach((it,i)=>it.addEventListener('click',()=>open(i)));
lb.querySelector('.lbClose').onclick=close;lb.querySelector('.lbPrev').onclick=()=>show(cur-1);lb.querySelector('.lbNext').onclick=()=>show(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb)close()});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
let x0=null;lb.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});lb.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)show(cur+(dx<0?1:-1));x0=null});
})();
