const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
function toast(message){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function money(n){return '₹'+new Intl.NumberFormat('en-IN').format(n)}
function getStore(k,d=[]){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}}
function setStore(k,v){localStorage.setItem(k,JSON.stringify(v))}
function favorite(id){let a=getStore('favorites');a=a.includes(id)?a.filter(x=>x!==id):[...a,id];setStore('favorites',a);toast(a.includes(id)?'Added to favorites ♥':'Removed from favorites');renderPropertyGrids?.();return a}
function isFav(id){return getStore('favorites').includes(id)}
function compare(id){let a=getStore('compare');if(a.includes(id))a=a.filter(x=>x!==id);else if(a.length<4)a.push(id);else return toast('You can compare up to 4 properties');setStore('compare',a);toast(a.includes(id)?'Added to compare':'Removed from compare');renderPropertyGrids?.()}
document.addEventListener('DOMContentLoaded',()=>{const b=$('#themeBtn');if(b){if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');b.onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')}}});