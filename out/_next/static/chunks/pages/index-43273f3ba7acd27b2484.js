_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(s.AmpStateContext))};var i,r=(i=n("q1tI"))&&i.__esModule?i:{default:i},s=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,s=e.hasQuery,o=void 0!==s&&s;return n||r&&o}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var i,r=n("q1tI");var s=new(((i=n("SevZ"))&&i.__esModule?i:{default:i}).default),o=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")};var r=i.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){s.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},i}(r.Component);t.default=o},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=i?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(i=n("Xuae"))&&i.__esModule?i:{default:i},o=n("lwAK"),a=n("FYa8"),l=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var s=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(r.type){case"title":case"base":t.has(r.type)?s=!1:t.add(r.type);break;case"meta":for(var l=0,c=d.length;l<c;l++){var u=d[l];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var m=r.props[u],f=i[u]||new Set;"name"===u&&o||!f.has(m)?(f.add(m),i[u]=f):s=!1}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),i=(0,r.useContext)(a.HeadManagerContext);return r.default.createElement(s.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,l.isInAmpMode)(n)},t)}h.rewind=function(){};var p=h;t.default=p},"8oxB":function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"===typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,m=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):m=-1,c.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++m<t;)l&&l[m].run();m=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},MX0m:function(e,t,n){e.exports=n("3niX")},RIqP:function(e,t,n){var i=n("Ijbi"),r=n("EbDI"),s=n("ZhPi"),o=n("Bnag");e.exports=function(e){return i(e)||r(e)||s(e)||o()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var i=n("nKUr");function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(l){r=!0,s=l}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n("MX0m"),a=n.n(o),l=(n("g/15"),n("g4pe")),c=n.n(l),u=n("q1tI");const m={};var d={get(e,t){var n,i;try{return null!==(n=m[e])&&void 0!==n?n:"undefined"===(i=localStorage.getItem(e))?void 0:JSON.parse(null!==i&&void 0!==i?i:"")}catch(r){return t}},set(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),m[e]=void 0,!0}catch(n){return m[e]=t,!1}},remove(e){m[e]=void 0,localStorage.removeItem(e)}};const f=new Set;var h=function(e,t){const n=function(e,t){const[n]=Object(u.useState)((()=>"function"===typeof t?t():t)),i=Object(u.useCallback)((()=>({value:d.get(e,n),isPersistent:(()=>{if("undefined"===typeof window)return!0;try{return localStorage.setItem("__ulss","#"),localStorage.removeItem("__ulss"),!0}catch(e){return!1}})()})),[n,e]),[r,s]=Object(u.useState)(i),o=Object(u.useMemo)((()=>{const t=t=>{s("function"===typeof t?n=>({value:t(n.value),isPersistent:d.set(e,t(n.value))}):{value:t,isPersistent:d.set(e,t)})};return t.reset=()=>{d.remove(e),s((e=>({value:n,isPersistent:e.isPersistent})))},t}),[e,n]);Object(u.useEffect)((()=>{const t=t=>{t.storageArea===localStorage&&t.key===e&&s({value:d.get(e,n),isPersistent:!0})};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)}),[e,n]);const a=Object(u.useRef)(!0);return Object(u.useEffect)((()=>{a.current?a.current=!1:s(i())}),[i]),[r.value,o,r.isPersistent]}(e,t);return Object(u.useEffect)((()=>{if(f.has(e))throw new Error(`When using the same key in multiple places use createLocalStorageStateHook('${e}'): https://github.com/astoilkov/use-local-storage-state#create-local-storage-state-hook`);return f.add(e),()=>{f.delete(e)}}),[e]),n},p=[{name:"Assist Teammates with Eliminations",milestones:[5,20,50,100,250]},{name:"Catch Fish",milestones:[3,15,50,125,250]},{name:"Chop Down Trees",milestones:[100,250,500,1e3,2500]},{name:"Collect Blue XP Coins",milestones:[1,2,3,4,5]},{name:"Collect Bones",milestones:[25,50,500,1e3,2e3]},{name:"Collect Gold Bars",milestones:[1e3,2500,1e4,25e3,5e4]},{name:"Collect Gold XP Coins",milestones:[1,2,3,4,5]},{name:"Collect Green XP Coins",milestones:[1,2,3,4,5]},{name:"Collect Meat",milestones:[25,50,500,1e3,2500]},{name:"Collect Purple XP Coins",milestones:[1,2,3,4,5]},{name:"Complete Bounties",milestones:[5,25,50,75,100]},{name:"Complete Common Quests",milestones:[10,25,50,100,250]},{name:"Complete Epic Quests",milestones:[5,10,25,50,75]},{name:"Complete Legendary Quests",milestones:[3,10,20,40,80]},{name:"Complete Rare Quests",milestones:[10,25,50,100,200]},{name:"Complete Uncommon Quests",milestones:[10,25,50,100,250]},{name:"Consume Apples",milestones:[10,25,50,100,250]},{name:"Consume Bananas",milestones:[10,25,50,100,250]},{name:"Consume Foraged Items",milestones:[10,50,100,250,500]},{name:"Consume Mushrooms",milestones:[10,25,50,100,250]},{name:"Craft Weapons",milestones:[10,50,100,250,500]},{name:"Deal Damage from Above",milestones:[1e3,5e3,1e4,25e3,5e4]},{name:"Deal Damage to Opponents",milestones:[5e3,25e3,75e3,15e4,5e5]},{name:"Deal Damage to Vehicles with a Player Inside",milestones:[250,1e3,5e3,1e4,2e4]},{name:"Destroy Player Structures in a Vehicle",milestones:[3,25,75,150,300]},{name:"Destroy Shrubs",milestones:[25,50,100,250,500]},{name:"Destroy Sofas, Beds, or Chairs with a Pickaxe",milestones:[25,50,100,250,500]},{name:"Destroy Stones",milestones:[25,100,250,500,1e3]},{name:"Distance Traveled Gliding",milestones:[1e3,2500,1e4,25e3,5e4]},{name:"Distance Traveled in a Vehicle",milestones:[5e3,25e3,75e3,15e4,5e5]},{name:"Distance Traveled on Foot",milestones:[25e3,75e3,15e4,35e4,5e5]},{name:"Distance Traveled while Swimming",milestones:[1e3,2500,5e3,1e4,25e3]},{name:"Don Creature Disguises",milestones:[3,25,50,100,200]},{name:"Eliminate Players",milestones:[5,25,100,250,500]},{name:"Eliminations from 150 Meters or More",milestones:[3,10,25,50,100]},{name:"Eliminations while Driving or Riding in a Boat",milestones:[2,5,15,50,150]},{name:"Eliminations with Assault Rifles",milestones:[3,10,25,75,150]},{name:"Eliminations with Bows",milestones:[3,10,25,75,150]},{name:"Eliminations with Common or Uncommon Weapons",milestones:[5,25,100,250,500]},{name:"Eliminations with Explosives",milestones:[3,10,25,75,150]},{name:"Eliminations with Pistols",milestones:[3,10,25,75,150]},{name:"Eliminations with Shotguns",milestones:[3,10,25,75,150]},{name:"Eliminations with SMGs",milestones:[3,10,25,75,150]},{name:"Fish at Fishing Holes",milestones:[5,15,75,150,300]},{name:"Harpoon Eliminations",milestones:[1,3,10,25,50]},{name:"Harvest Stone",milestones:[2500,1e4,25e3,1e5,25e4]},{name:"Head Shot Eliminations",milestones:[3,25,50,100,200]},{name:"Hit Weakpoints",milestones:[100,1e3,2500,1e4,2e4]},{name:"Hunt Wildlife",milestones:[10,50,250,500,1e3]},{name:"Ignite Opponents with Fire",milestones:[3,10,25,50,75]},{name:"Ignite Structures with Fire",milestones:[25,50,100,250,500]},{name:"Lure Wildlife",milestones:[3,25,50,100,200]},{name:"Melee Damage to Player Structures",milestones:[500,2500,1e4,25e3,5e4]},{name:"Melee Eliminations",milestones:[5,25,50,75,100]},{name:"Place Top 10",milestones:[10,25,100,200,300]},{name:"Reboot Teammates",milestones:[2,5,10,25,50]},{name:"Refuel Vehicles",milestones:[5,25,50,100,200]},{name:"Revive Teammates",milestones:[5,25,50,100,250]},{name:"Search Ammo Boxes",milestones:[50,250,500,1e3,2500]},{name:"Search Chests",milestones:[50,250,500,1e3,2500]},{name:"Search Ice Machines",milestones:[5,25,75,150,300]},{name:"Search Supply Drops",milestones:[5,10,25,50,100]},{name:"Shakedown Opponents",milestones:[5,25,50,100,200]},{name:"Spend Gold Bars",milestones:[1e3,2500,5e3,25e3,1e5]},{name:"Sticky Kills",milestones:[3,10,25,50,75]},{name:"Tame Wildlife",milestones:[5,25,50,100,200]},{name:"Thank the Bus Driver",milestones:[10,25,50,100,200]},{name:"Upgrade Weapons",milestones:[5,10,25,50,100]},{name:"Use Bandages and Medkits",milestones:[25,100,250,500,1e3]},{name:"Use Campfires",milestones:[3,10,50,100,150]},{name:"Use Shield Potions",milestones:[25,100,250,500,1e3]}];function v(e){var t=e.name,n=e.milestones,r=s(h("milestone.".concat(t),-1),2),o=r[0],a=r[1];return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("p",{children:t}),Object(i.jsx)("div",{className:"milestones",children:n.map((function(e,t){return Object(i.jsx)("div",{className:"btn-milestone".concat(t<=o?" done":""),onClick:function(){return function(e,t,n){e===t&&(e-=1),n(e)}(t,o,a)},children:e},t)}))})]})}function y(){var e=Object(u.useState)(!1),t=e[0],n=e[1];return Object(u.useEffect)((function(){n(!0)}),[]),Object(i.jsxs)("div",{className:"jsx-3801299331 container",children:[Object(i.jsxs)(c.a,{children:[Object(i.jsx)("title",{className:"jsx-3801299331",children:"FN Tracker by ult_br"}),Object(i.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-3801299331"})]}),Object(i.jsxs)("main",{className:"jsx-3801299331",children:[Object(i.jsx)("h1",{className:"jsx-3801299331 title",children:"Fortnite Tracker"}),Object(i.jsx)("div",{className:"jsx-3801299331 grid",children:t&&p.map((function(e){var t=e.id,n=e.name,r=e.milestones;return Object(i.jsx)(v,{name:n,milestones:r},t)}))})]}),Object(i.jsxs)("footer",{className:"jsx-3801299331",children:["Made by\xa0",Object(i.jsx)("strong",{className:"jsx-3801299331",children:"ult_br"})]}),Object(i.jsx)(a.a,{id:"1072285485",children:[".container{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main{padding:2rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".title{margin:0;font-size:4rem;}",".title,.description{text-align:center;}",".description{font-size:1.5rem;}",".grid{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:1rem;}",".card{margin:0.5rem;width:100%;padding:1rem 1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card h3{margin:0 0 1rem 0;font-size:1.5rem;}",".card p{margin:0;font-size:1.25rem;}",".milestones{margin-top:0.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".btn-milestone{border:solid 1px white;-webkit-flex-basis:18%;-ms-flex-preferred-size:18%;flex-basis:18%;text-align:center;cursor:pointer;}",".btn-milestone.done{background:#00ca00;}",".logo{height:1em;}"]}),Object(i.jsx)(a.a,{id:"2853343079",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;background:#3e9afb;color:white;}","*{box-sizing:border-box;}"]})]})}p.forEach((function(e,t){return e.id=t}))},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=s(n("9kyW")),r=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var s=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=s,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),s=t+r;return e[s]||(e[s]="jsx-"+(0,i.default)(t+"-"+r)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=n+i;return t[r]||(t[r]=i.replace(e,n)),t[r]}},t.getIdAndRules=function(e){var t=this,n=e.children,i=e.dynamic,r=e.id;if(i){var s=this.computeId(r,i);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),r=n("lwsE"),s=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),a=n("a1gu"),l=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),m=function(e){o(n,e);var t=c(n);function n(e){var s;return r(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(i(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=m},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,s=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,l=void 0===a?i:a,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;o(r(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var m=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=m?m.getAttribute("content"):null}var t,s,a,l=e.prototype;return l.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,n){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(i,n):s.appendChild(i),i},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,n("8oxB"))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=r},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);