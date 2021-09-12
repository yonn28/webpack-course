(()=>{var e,r,t,n,o,a,i,l={853:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof HelloWorldApp)return e();t.l("http://localhost:9001/remoteEntry.js",(t=>{if("undefined"!=typeof HelloWorldApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))},735:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof KiwiApp)return e();t.l("http://localhost:9002/remoteEntry.js",(t=>{if("undefined"!=typeof KiwiApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"KiwiApp")})).then((()=>KiwiApp))}},s={};function p(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return l[e](t,t.exports,p),t.exports}p.m=l,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,p.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);p.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,p.d(o,a),o},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>e+".build.js",p.miniCssF=e=>{},p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="dashboard:",p.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={615:[615],811:[811]},a={615:["default","./KiwiPage",735],811:["default","./HelloWorldPage",853]},p.f.remotes=(e,r)=>{p.o(o,e)&&o[e].forEach((e=>{var t=p.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l[e]=()=>{throw r},n.p=0},i=(e,t,a,i,l,s)=>{try{var p=e(t,a);if(!p||!p.then)return l(p,i,s);var d=p.then((e=>l(e,i)),o);if(!s)return d;r.push(n.p=d)}catch(e){o(e)}},s=(e,r,o)=>i(r.get,n[1],t,0,d,o),d=r=>{n.p=1,l[e]=e=>{e.exports=r()}};i(p,n[2],0,0,((e,r,t)=>e?i(p.I,n[0],0,e,s,t):o()),1)}}))},(()=>{p.S={};var e={},r={};p.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];p.o(p.S,t)||(p.S[t]={}),p.S[t];var a=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=p(e);if(!o)return;var a=e=>e&&e.init&&e.init(p.S[t],n);if(o.then)return i.push(o.then(a,r));var l=a(o);if(l&&l.then)return i.push(l.catch(r))}catch(e){r(e)}},i=[];switch(t){case"default":a(853),a(735)}return i.length?e[t]=Promise.all(i).then((()=>e[t]=1)):e[t]=1}}})(),p.p="http://localhost:9000/",(()=>{var e={179:0};p.f.j=(r,t)=>{var n=p.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(179==r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=p.p+p.u(r),i=new Error;p.l(a,(t=>{if(p.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);l&&l(p)}for(r&&r(t);s<a.length;s++)o=a[s],p.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0},t=self.webpackChunkdashboard=self.webpackChunkdashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),"/hello-world"==(i=window.location.pathname)&&p.e(811).then(p.t.bind(p,811,23)).then((function(e){console.log("hello-world"),(new(0,e.default)).render()})),"/kiwi-page"==i&&p.e(615).then(p.t.bind(p,615,23)).then((function(e){console.log("kiwi-page"),(new(0,e.default)).render()}))})();