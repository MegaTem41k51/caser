const grid=document.getElementById("grid");
const names=["AURORA","NEON","NOVA","ECLIPSE","PHANTOM","VORTEX","EMBER","GLITCH","COSMOS","PULSE","SPECTRUM","VOID","CRYSTAL","RADIANT","FUSION","VECTOR"];
names.forEach((n,i)=>{
  const c=document.createElement("div");
  c.className="card";
  c.innerHTML=`<span class="price">${(4.34+i*.17).toFixed(2)} ◈</span><div class="art"></div><b>${n}</b><small> Digital Item · Demo</small>`;
  c.onclick=()=>document.querySelector(".right .empty").textContent=`Выбран предмет: ${n}`;
  grid.appendChild(c);
});
document.getElementById("upgradeBtn").onclick=()=>{
  document.querySelector(".chance").innerHTML="ДЕМО<small>кнопка отключена</small>";
};
