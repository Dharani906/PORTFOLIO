// Theme toggle
var root=document.documentElement;
try{var saved=localStorage.getItem('theme');if(saved)root.setAttribute('data-theme',saved);}catch(e){}
document.getElementById('themeBtn').addEventListener('click',function(){
  var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
  var next=dark?'light':'dark';
  root.setAttribute('data-theme',next);
  try{localStorage.setItem('theme',next);}catch(e){}
});

// Mobile menu
var menu=document.getElementById('menu');
document.getElementById('menuBtn').addEventListener('click',function(){menu.classList.toggle('open');});
menu.addEventListener('click',function(e){if(e.target.tagName==='A')menu.classList.remove('open');});

// Typing effect
var words=['Cyber Security Enthusiast','Web Developer','UI/UX Designer','Cloud Learner'];
var el=document.getElementById('typed'),w=0,c=0,del=false;
function type(){
  var word=words[w];
  el.textContent=word.substring(0,c);
  if(!del&&c<word.length){c++;setTimeout(type,80);}
  else if(!del){del=true;setTimeout(type,1400);}
  else if(c>0){c--;setTimeout(type,40);}
  else{del=false;w=(w+1)%words.length;setTimeout(type,300);}
}
type();

// Scroll reveal
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(n){io.observe(n);});

// Active nav link
var links=document.querySelectorAll('nav a');
var so=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id);});}
  });
},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(function(s){so.observe(s);});

document.getElementById('yr').textContent=new Date().getFullYear();
