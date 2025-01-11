(function(n){function e(e){for(var a,o,s=e[0],r=e[1],u=e[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&h.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],a=!0,o=1;o<t.length;o++){var r=t[o];0!==c[r]&&(a=!1)}a&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var a={},c={app:0},i=[];function o(n){return s.p+"js/"+({}[n]||n)+"."+{"chunk-2d0a3726":"bebe5116","chunk-2d0c0c86":"cf098d4b","chunk-2d0c8321":"78ca1407","chunk-2d0c9378":"fb16a6a2","chunk-2d0cc2b4":"6cd43049","chunk-2d0cfa15":"4b2166d6","chunk-2d0e4bf5":"fac73388","chunk-2d20faf8":"c983e105","chunk-2d215cd3":"f0d8ba06","chunk-2d2245cf":"ea4d33bd","chunk-2d22d432":"91ebbe55","chunk-3c0d118e":"e3f2944c"}[n]+".js"}function s(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(n){var e=[],t=c[n];if(0!==t)if(t)e.push(t[2]);else{var a=new Promise((function(e,a){t=c[n]=[e,a]}));e.push(t[2]=a);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=o(n);var u=new Error;i=function(e){r.onerror=r.onload=null,clearTimeout(d);var t=c[n];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,t[1](u)}c[n]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:r})}),12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(e)},s.m=n,s.c=a,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)s.d(t,a,function(e){return n[e]}.bind(null,a));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/",s.oe=function(n){throw console.error(n),n};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"0114":function(n,e,t){},"10f2":function(n,e,t){"use strict";t("0114")},"56d7":function(n,e,t){"use strict";t.r(e);var a=t("2b0e"),c=(t("14d9"),function(){var n=this,e=n._self._c;return e("div",{staticClass:"backend-container off-canvas off-canvas-sidebar-show"},[n._m(0),e("div",{staticClass:"backend-sidebar off-canvas-sidebar",attrs:{id:"sidebar"}},[e("div",{staticClass:"backend-brand"},[e("h2",{staticClass:"title",on:{click:function(e){return n.goto_frontend()}}},[n._v(n._s(n.title))]),n.current_version?e("span",{staticClass:"version"},[n._v(n._s(n.current_version))]):n._e()]),e("div",{staticClass:"backend-nav"},[e("div",{staticClass:"accordion-container"},[e("div",{staticClass:"accordion"},[e("input",{attrs:{id:"accordion-configuration",type:"checkbox",name:"backend-accordion-checkbox",hidden:""}}),e("label",{staticClass:"accordion-header c-hand",attrs:{for:"accordion-configuration"}},[n._v("Manage Device")]),e("div",{staticClass:"accordion-body"},[e("ul",{staticClass:"menu menu-nav"},[e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/device/configuration")}}},[n._v("Device config")])]),e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/engine/configuration")}}},[n._v("Analysis engine")])]),e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/device/network")}}},[n._v("Network config")])]),e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/device/db")}}},[n._v("Manage database")])])])])]),e("div",{staticClass:"accordion"},[e("input",{attrs:{id:"accordion-iocs",type:"checkbox",name:"backend-accordion-checkbox",hidden:""}}),e("label",{staticClass:"accordion-header c-hand",attrs:{for:"accordion-iocs"}},[n._v("Manage IOCs")]),e("div",{staticClass:"accordion-body"},[e("ul",{staticClass:"menu menu-nav"},[e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/iocs/manage")}}},[n._v("Manage IOCs")])]),e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/iocs/search")}}},[n._v("Search IOCs")])])])])]),e("div",{staticClass:"accordion"},[e("input",{attrs:{id:"accordion-whitelist",type:"checkbox",name:"backend-accordion-checkbox",hidden:""}}),e("label",{staticClass:"accordion-header c-hand",attrs:{for:"accordion-whitelist"}},[n._v("Manage Whitelist")]),e("div",{staticClass:"accordion-body"},[e("ul",{staticClass:"menu menu-nav"},[e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/whitelist/manage")}}},[n._v("Manage elements")])]),e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/whitelist/search")}}},[n._v("Search elements")])])])])]),e("div",{staticClass:"accordion"},[e("input",{attrs:{id:"accordion-instances",type:"checkbox",name:"backend-accordion-checkbox",hidden:""}}),e("label",{staticClass:"accordion-header c-hand",attrs:{for:"accordion-instances"}},[n._v("External sources")]),e("div",{staticClass:"accordion-body"},[e("ul",{staticClass:"menu menu-nav"},[e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/instances/watchers")}}},[n._v("Watchers Instances")])]),e("li",{staticClass:"menu-item"},[e("span",{on:{click:function(e){return n.$router.push("/instances/misp")}}},[n._v("MISP Instances")])])])])])])])]),e("a",{staticClass:"off-canvas-overlay",attrs:{href:"#close"}}),e("div",{staticClass:"off-canvas-content"},[n.update_available?e("div",{attrs:{id:"update-banner"},on:{click:function(e){return n.$router.push("/update")}}},[n._v("A new version is available, click on the banner to install it.")]):n._e(),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)])}),i=[function(){var n=this,e=n._self._c;return e("div",{staticClass:"backend-navbar"},[e("a",{staticClass:"off-canvas-toggle btn btn-link btn-action",attrs:{href:"#sidebar"}},[e("i",{staticClass:"icon icon-menu"})])])}],o=t("bc3a"),s=t.n(o);document.title="Spydetector Backend";var r={name:"backend",components:{},data(){return{title:"SPYDETECTOR",current_version:!1,jwt:"",update_available:!1,letters:["SSS§ṠSSSSS","PPPþ⒫PPPP","YYYÿYYYÿYȲYY","DDDDDDDDD-DD","EEEEEEEEE-EE","TTTTTTTT-TTT","EEEEEEEEE-EEEEE","CCCCCCCCCCC-CC","TTTTTTTTTT-TTT","OOOOOOOOOOO","RR-RRRRRRRRRR"]}},methods:{generate_random:function(n=0,e=1e3){let t=e-n,a=Math.random();return a=Math.floor(a*t),a+=n,a},goto_frontend:function(){window.location.href=`http://${location.hostname}:8000`},async get_jwt(){await s.a.get("/api/get-token",{timeout:1e4}).then(n=>{n.data.token&&(this.jwt=n.data.token)}).catch(n=>console.log(n))},get_version:function(){s.a.get("/api/update/get-version",{timeout:6e4,headers:{"X-Token":this.jwt}}).then(n=>{n.data.status&&(this.current_version=n.data.current_version)}).catch(n=>{console.log(n)})},check_update:function(){s.a.get("/api/update/check",{timeout:6e4,headers:{"X-Token":this.jwt}}).then(n=>{"A new version is available"==n.data.message&&(this.update_available=!0)}).catch(n=>{console.log(n)})}},created:function(){this.get_jwt().then(()=>{this.get_version(),this.check_update()}),setInterval(function(){let n="";this.letters.forEach(e=>{n+=e.charAt(this.generate_random(0,9))}),this.title=n,setTimeout(function(){this.title="SPYDETECTOR"}.bind(this),this.generate_random(30,100))}.bind(this),this.generate_random(500,1e4))}},u=r,d=(t("10f2"),t("2877")),l=Object(d["a"])(u,c,i,!1,null,null,null),h=l.exports,p=t("8c4f");a["a"].use(p["a"]);const f=[{path:"/",name:"default",component:()=>t.e("chunk-2d0cfa15").then(t.bind(null,"6511")),props:!0},{path:"/device/configuration",name:"device-configuration",component:()=>t.e("chunk-2d0c8321").then(t.bind(null,"549e")),props:!0},{path:"/engine/configuration",name:"engine-configuration",component:()=>t.e("chunk-2d22d432").then(t.bind(null,"f76a")),props:!0},{path:"/device/network",name:"device-network",component:()=>t.e("chunk-3c0d118e").then(t.bind(null,"7e11")),props:!0},{path:"/device/db",name:"db-manage",component:()=>t.e("chunk-2d0e4bf5").then(t.bind(null,"9217")),props:!0},{path:"/iocs/manage",name:"iocs-manage",component:()=>t.e("chunk-2d0c0c86").then(t.bind(null,"42f8")),props:!0},{path:"/instances/misp",name:"instance-misp",component:()=>t.e("chunk-2d0c9378").then(t.bind(null,"57cc")),props:!0},{path:"/instances/watchers",name:"instance-watchers",component:()=>t.e("chunk-2d20faf8").then(t.bind(null,"b54c")),props:!0},{path:"/iocs/search",name:"iocs-search",component:()=>t.e("chunk-2d0cc2b4").then(t.bind(null,"4d7e")),props:!0},{path:"/whitelist/manage",name:"whitelist-manage",component:()=>t.e("chunk-2d215cd3").then(t.bind(null,"c06f")),props:!0},{path:"/whitelist/search",name:"whitelist-search",component:()=>t.e("chunk-2d2245cf").then(t.bind(null,"e08f")),props:!0},{path:"/update",name:"update",component:()=>t.e("chunk-2d0a3726").then(t.bind(null,"01e4")),props:!0}],m=new p["a"]({mode:"history",base:"/",routes:f});var v=m;a["a"].config.productionTip=!0,a["a"].config.devtools=!0,new a["a"]({router:v,render:n=>n(h)}).$mount("#app")}});
//# sourceMappingURL=app.a3c6f292.js.map
