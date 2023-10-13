(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),s=t(667),c=t.n(s),l=new URL(t(466),t.b),d=i()(a());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);"]);var p=c()(l);d.push([n.id,`\n:root {\n  --background-color: #d1ecd3;\n  --color-ligth-gray: #efefef;\n  --card-color: #e4ecdf;\n  --font-color: #000;\n  --font-title-name: 'Lato';\n  --font-title-size: 1.2rem;\n  --font-comment-size: 1.5rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  width: 100%;\n  height: 100px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.logo {\n  background: url(${p});\n  width: 250px;\n  height: 90px;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.nav-bar {\n  display: flex;\n  gap: 20px;\n  flex-grow: 2;\n  justify-content: space-evenly;\n  list-style: none;\n}\n\n.nav-bar li a {\n  text-decoration: none;\n  font-size: 1.2rem;\n  color: var(--font-color);\n  font-family: 'Roboto', sans-serif;\n}\n\n.nav-link {\n  transition: color ease 600ms, font-size ease 600ms;\n}\n\n.nav-link:hover {\n  color: #29ab82;\n  font-size: 1.5rem;\n  text-shadow: 14px 8px 9px #c4e6cbfe;\n}\n\n.homepage {\n  background-image: linear-gradient(to top, #a7e8bb 0%, #e7fdea 100%);\n}\n\n.main {\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  gap: 40px;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.pokemon {\n  width: 250px;\n  height: 350px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 5px 10px 20px 10px;\n  border-radius: 30px;\n  background-image: linear-gradient(to top, #a3edd2 0%, #72c95c 100%);\n  transition: transform ease 600ms;\n  -webkit-box-shadow: 11px 14px 22px 0 rgba(10, 10, 10, 0.62);\n  box-shadow: 11px 14px 22px 0 rgba(15, 15, 15, 0.62);\n}\n\n.pokemon:hover {\n  transform: scale(1.1);\n}\n\n.img-container {\n  background-image: linear-gradient(to top, #ebefea 0%, #daefd1 1%, #dff5d1 31%, #d0e9d0 75%, #7fddbd 100%);\n  border-radius: 10%;\n}\n\n.poke-img {\n  width: 180px;\n  height: 180px;\n  object-fit: contain;\n}\n\n.poke-title {\n  width: 70%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.poke-name {\n  font-family: var(--font-title-name);\n  font-size: var(--font-title-size);\n}\n\n.far.fa-heart {\n  font-size: var(--font-title-size);\n  cursor: pointer;\n  transition: color ease 600ms;\n}\n\n.far.fa-heart:hover {\n  color: #07a40a;\n}\n\n.poke-like {\n  display: flex;\n  margin-top: 5px;\n  width: 50%;\n  justify-content: flex-end;\n  gap: 5px;\n}\n\n.likes {\n  font-family: var(--font-title-name);\n  font-size: 0.9rem;\n}\n\n.lk-counter {\n  font-family: var(--font-title-name);\n  font-size: 0.9rem;\n}\n\n.btn-container {\n  width: 100%;\n  display: flex;\n  margin-top: 40px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.com-btn {\n  width: 80%;\n  padding: 12px;\n  background-image: radial-gradient(73% 147%, #cfc2da 59%, #ecdfec 100%), radial-gradient(91% 146%, rgba(255, 255, 255, 0.5) 47%, rgba(0, 0, 0, 0.5) 100%);\n  background-blend-mode: screen;\n  border-radius: 12px;\n  transition: background ease 600ms, border ease 600ms;\n}\n\n.com-btn:hover {\n  background: #d2d6d0a4;\n  border: solid 1px #90c769;\n}\n\n.footer {\n  width: 100%;\n  height: 10vh;\n  padding: 10px;\n  background: var(--background-color);\n  border-top: 3px solid var(--font-color);\n}\n\n.footer p {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  font-size: 1.1rem;\n  font-family: 'Roboto', sans-serif;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(3px);\n  z-index: 5;\n}\n\n.com-contain {\n  height: 85%;\n  padding: 15px;\n  background-image: linear-gradient(to top, #d8dfcf 0%, #e9f0e2 100%);\n  border-radius: 6px;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.close-popUp {\n  position: absolute;\n  background: var(--background-color);\n  top: 10px;\n  right: 10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  transition: background ease 600ms, color ease 600ms;\n}\n\n.close-popUp:hover {\n  background: #03ddb1;\n  color: var(--background-color);\n}\n\n.img-div-contain {\n  width: 200px;\n  height: 200px;\n  background-color: var(--background-color);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.description {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 15px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.description p {\n  font-family: var(--font-title-name);\n  font-size: var(--font-title-size);\n  margin-right: 20px;\n  border: solid 2px var(--background-color);\n  padding: 5px;\n  border-radius: 8px;\n  color: #296d11;\n}\n\n.Add-comment {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\n\n.comments {\n  background-color: #eee;\n  margin-top: 20px;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 50px;\n  gap: 5px;\n  overflow-y: scroll;\n}\n\n.comment {\n  background-color: white;\n  padding: 10px;\n  border-radius: 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.3s;\n  border: 1px solid #ccc;\n}\n\n.label {\n  font-family: var(--font-title-name);\n  font-size: var(--font-comment-size);\n  text-decoration: underline;\n  color: #0c6636;\n}\n\n.label2 {\n  font-family: var(--font-title-name);\n  font-size: var(--font-comment-size);\n  margin-left: 20px;\n  margin-top: 20px;\n  color: #435711;\n  text-decoration: underline;\n}\n\n.input-name,\n.input-area {\n  padding: 10px;\n  border: 2px solid rgb(10, 9, 9);\n  border-radius: 6px;\n  flex: 1;\n  width: 300px;\n  height: 8px;\n}\n\n.input-name:focus {\n  outline: none;\n}\n\n.input-area:focus {\n  outline: none;\n}\n\n.btn {\n  width: 50%;\n  padding: 12px;\n  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%), radial-gradient(91% 146%, rgba(255, 255, 255, 0.5) 47%, rgba(0, 0, 0, 0.5) 100%);\n  background-blend-mode: screen;\n  border-radius: 12px;\n  transition: background ease 600ms, border ease 600ms;\n}\n\n.btn:hover {\n  background: #dfdcdc8a;\n  border: solid 1px #69c79b;\n}\n`,""]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var c=o(n,a),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},466:(n,e,t)=>{n.exports=t.p+"907dcf3a592a0e37e0dd.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=class{static pokeList=[]},h=async n=>{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WtRU0pkCN8fwvlF713ba/comments?item_id=${n}`);return await e.json()},v=async(n,e,t)=>{await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WtRU0pkCN8fwvlF713ba/comments",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({item_id:`${n}`,username:`${e}`,comment:`${t}`})})},b=n=>n.length,x="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/",y="WtRU0pkCN8fwvlF713ba",k=document.querySelector(".header"),w=document.getElementById("pokedex"),$=async n=>{let e="";const t=await(async()=>{const n=await fetch(`${x}${y}/likes/`);return await n.json()})();n.forEach(((o,a)=>{e+=`<div class="pokemon" id="${n[a].id}">\n      <div class="img-container">\n      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${n[a].id}.png" class="poke-img">\n      </div>\n      <div class="poke-title">\n      <p class="poke-name">${n[a].name}</p>\n      <i class="far fa-heart lk"></i></div>\n      <div class="poke-like">\n      <span class ="lk-counter">${t[a].likes}</span>\n      <p class="likes">Likes</p></div>\n      <div class="btn-container">\n      <button class="com-btn">Comments</button>\n      </div>\n      </div>`,w.innerHTML=e}));const o=document.querySelectorAll(".lk"),a=document.querySelectorAll(".lk-counter");o.forEach((async(n,e)=>{n.addEventListener("click",(async()=>{a[e].textContent=Number(a[e].textContent)+1,await(async n=>{const e=await fetch(`${x}${y}/likes/`,{method:"POST",body:JSON.stringify({item_id:n}),headers:{"Content-type":"application/JSON"}});return await e.text()})(e)}))}));const r=document.querySelectorAll(".com-btn");r.forEach(((e,t)=>{r[t].addEventListener("click",(async e=>{const o=e.target.parentNode.parentNode.id;((n,e,t)=>{const o=document.createElement("div");o.classList.add("modal-bg");const a=document.createElement("div");a.classList.add("com-contain");let r="";r+=`\n  <button class="close-popUp">X</button>\n  <div class="img-div-contain">\n  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${n[e].id}.png" class="poke-img">\n  </div>\n  <div class="description">\n     <p>weight: ${n[e].weight} kg</p>\n     <p>height: ${n[e].height} m</p>\n     <p>species: ${n[e].species.name}</p>\n     <p>type: ${n[e].types[0].type.name}</p>\n     </div>\n     <div>\n     <p class="label2"> All the Comments [<span class="counter"> </span>]</p>\n     <div class="comments">\n     \n     </div>\n      <div class="Add-comment">\n      <form class="form">\n      <label class="label">Add a comment ✍\n      </label>\n      <input class="input-name" id="name" type="text" placeholder="Your name">\n      <textarea class="input-area" id="txtArea" cols="8" rows="3" placeholder="Your insights"></textarea>\n      <button class="btn" type="submit">Comment</button\n      ></form>\n      </div>\n      </div>`,a.innerHTML=r,o.appendChild(a),document.body.appendChild(o),document.querySelector(".close-popUp").addEventListener("click",(()=>{o.remove()}));const i=document.querySelector(".input-name"),s=document.querySelector(".input-area"),c=document.querySelectorAll(".form"),l=document.querySelector(".comments"),d=document.querySelector(".counter"),p=async n=>{await h(n).then((n=>{!function(n){l.innerHTML="",d.textContent=b(n),n.forEach((n=>{const e=document.createElement("div");e.className="comment";const t=document.createElement("p");t.className="comment";const o=`${n.creation_date} ${n.username} : ${n.comment}`;t.textContent=o,e.appendChild(t),l.appendChild(e)}))}(n)}))};for(let n=0;n<c.length;n+=1)c[n].addEventListener("submit",(n=>{n.preventDefault();const e=Number(t),o=document.getElementById("name").value,a=document.getElementById("txtArea").value;v(e,o,a).then((()=>{p(e)})),i.value="",s.value="",i.focus()}))})(n,t,o);const a=document.querySelector(".comments"),r=await h(o);document.querySelector(".counter").textContent=b(r),r.forEach((n=>{const e=document.createElement("div");e.className="comment";const t=document.createElement("p");t.className="comment";const o=`${n.creation_date} ${n.username} : ${n.comment}`;t.textContent=o,e.appendChild(t),a.appendChild(e)}))}))}))};(async()=>{for(let n=1;n<=20;n+=1){const e=`https://pokeapi.co/api/v2/pokemon/${n}`,t=await fetch(e),o=await t.json();g.pokeList.push(o)}$(g.pokeList),(n=>{const e=`<div class="logo"></div><ul class="nav-bar"><li><a href="#" class="nav-link">Pokemons (${(n=>n.length)(n)})</a></li><li><a href="#" class="nav-link">Game List</a></li><li><a href="#"class="nav-link">Players</a></li></ul>`;k.innerHTML=e})(g.pokeList),g.pokeList})()})()})();