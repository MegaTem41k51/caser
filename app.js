
function openAuth(){location.href='auth.html'}
function closeAuth(){location.href='index.html'}
function openLanguage(){location.href='languages.html'}
function demoToast(t){alert(t)}
function selectSide(n){document.querySelectorAll('.side-item').forEach(x=>x.style.outline='');event.currentTarget.style.outline='1px solid #44c987';alert('Выбран: '+n)}
function liveTab(btn,text){document.querySelectorAll('.side-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.getElementById('liveItems').dataset.tab=text}
function runUpgrade(){document.getElementById('chance').innerHTML='ДЕМО<small>апгрейд выполнен</small>'}
function setChance(p,btn){document.querySelectorAll('.mult button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.getElementById('chance').innerHTML=p+'.00%<small>Выбранный шанс</small>'}
function toggleSound(btn){btn.classList.toggle('active');btn.textContent=btn.classList.contains('active')?'🔇 Звук выключен':'🔊 Звук'}
function toggleTurbo(btn){btn.classList.toggle('active');btn.textContent=btn.classList.contains('active')?'⚡ Турбо включено':'⚡ Турбо'}
function filterItems(){const q=document.getElementById('search').value.toLowerCase();document.querySelectorAll('#items .item').forEach(x=>x.style.display=x.innerText.toLowerCase().includes(q)?'block':'none')}
function sortItems(){const g=document.getElementById('items');[...g.children].reverse().forEach(x=>g.appendChild(x))}
function chooseItem(name){const c=document.getElementById('chosen');const t=document.getElementById('target');if(c)c.textContent='Выбран предмет: '+name;if(t)t.textContent='Цель: '+name}
function makeItems(containerId){const g=document.getElementById(containerId);if(!g)return;['AURORA','NEON','NOVA','ECLIPSE','PHANTOM','VORTEX','EMBER','GLITCH','COSMOS','PULSE','SPECTRUM','VOID'].forEach((n,i)=>{const d=document.createElement('div');d.className='item';d.innerHTML='<div class="art"></div><b>'+n+'</b><small> · Demo</small>';d.onclick=()=>chooseItem(n);g.appendChild(d)})}
function addDemoItem(){const g=document.getElementById('inventoryList');const d=document.createElement('div');d.className='item';d.innerHTML='<div class="art"></div><b>NEW ITEM</b><small> · Demo</small>';g.appendChild(d);document.getElementById('profileCount')?.replaceChildren(document.querySelectorAll('#inventoryList .item').length)}
function clearDemoItems(){const g=document.getElementById('inventoryList');if(g)g.innerHTML=''}
function openCase(name){location.href='case.html?name='+encodeURIComponent(name)}
function claimReward(btn){btn.textContent='ПОЛУЧЕНО ✓';btn.disabled=true}
function setLang(x){alert('Выбран язык: '+x)}
document.addEventListener('DOMContentLoaded',()=>{makeItems('items');makeItems('inventoryList');const q=new URLSearchParams(location.search).get('name');if(q&&document.getElementById('caseTitle'))document.getElementById('caseTitle').textContent=q})
