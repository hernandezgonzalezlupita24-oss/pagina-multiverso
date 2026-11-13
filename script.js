const screens = [...document.querySelectorAll('.screen')];
const navLinks = [...document.querySelectorAll('nav a[data-screen]')];
const nav = document.getElementById('mainNav');
function showScreen(name, updateHash=true){
  const target = document.getElementById(name);
  if(!target) return;
  screens.forEach(screen=>screen.classList.toggle('active',screen.id===name));
  navLinks.forEach(link=>link.classList.toggle('active',link.dataset.screen===name));
  nav.classList.remove('open');
  if(updateHash) history.pushState({screen:name},'',`#${name}`);
  window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('[data-screen]').forEach(link=>{
  link.addEventListener('click',event=>{
    const name=link.dataset.screen;
    if(name){event.preventDefault();showScreen(name);}
  });
});
window.addEventListener('popstate',()=>showScreen(location.hash.slice(1)||'inicio',false));
document.getElementById('menuToggle').addEventListener('click',()=>nav.classList.toggle('open'));
document.getElementById('contactForm').addEventListener('submit',event=>{
  event.preventDefault();
  document.getElementById('formMessage').style.display='block';
  event.target.reset();
});
document.getElementById('subscribeForm').addEventListener('submit',event=>{
  event.preventDefault();
  document.getElementById('subscribeMessage').style.display='block';
  event.target.reset();
});
