var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let h;function p(t){h=t}const m=[],g=[],y=[],$=[],b=Promise.resolve();let v=!1;function w(t){y.push(t)}let x=!1;const _=new Set;function k(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];p(e),S(e.$$)}for(p(null),m.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];_.has(e)||(_.add(e),e())}y.length=0}while(m.length);for(;$.length;)$.pop()();v=!1,x=!1,_.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const E=new Set;function U(t,e){t&&t.i&&(E.delete(t),t.i(e))}function j(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push((()=>{E.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function A(t){t&&t.c()}function z(t,n,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,r),i||w((()=>{const n=c.map(e).filter(s);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(w)}function C(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,b.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,s,r,i,a,l,u,f=[-1]){const d=h;p(e);const m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||d.$$.root};u&&u(m.root);let g=!1;if(m.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),g&&T(e,t)),n})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();s.intro&&U(e.$$.fragment),z(e,s.target,s.anchor,s.customElement),k()}p(d)}class N{$destroy(){C(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class O{static buildFamilyQueryParam({family:t,variants:e}){if(!e||0===e.length)throw new Error("Font variants are required");return`family=${t.replace(/ /g,"+")}:ital,wght@${e.sort().map((t=>{const e=t.endsWith("italic");return`${e?"1":"0"},${e?t.slice(0,-6):t}`})).join(";")}`}static applySettingsToUrl({url:t,settings:e}){let n=t;return Object.entries(e).forEach((([t,e])=>{const o=!n.includes("?")?"?":"&",s=encodeURIComponent(t),r="effect"===t?"|":",",i=Array.isArray(e)?e.map(encodeURIComponent).join(r):encodeURIComponent(e);n+=`${o}${s}=${i}`})),n}static getStylesheet({font:t,fonts:e,settings:n={}}){if(!t&&!e)throw new Error("fonts or font is required");if(t&&e)throw new Error("fonts and font are mutually exclusive");if(e){if(!Array.isArray(e))throw new Error("fonts must be an array");return this.getMultipleStylesheet({fonts:e,settings:n})}return this.getSingleStyleSheet({font:t,settings:n})}static getSingleStyleSheet({font:t,settings:e={}}){const n=this.buildFamilyQueryParam(t);return this.applySettingsToUrl({url:`${this.baseUrl}?${n}`,settings:e})}static getMultipleStylesheet({fonts:t,settings:e={}}){const n=t.map(this.buildFamilyQueryParam);return this.applySettingsToUrl({url:`${this.baseUrl}?${n.join("&")}`,settings:e})}}function F(e){let n,o;return{c(){n=l("link"),d(n,"rel","stylesheet"),d(n,"href",o=e[0]+"}")},m(t,e){a(t,n,e)},p(t,[e]){1&e&&o!==(o=t[0]+"}")&&d(n,"href",o)},i:t,o:t,d(t){t&&c(n)}}}function M(t,e,n){let o,{font:s}=e,{fonts:r}=e,{display:i}=e,{subset:a}=e,{effect:c}=e,{text:l}=e;return t.$$set=t=>{"font"in t&&n(1,s=t.font),"fonts"in t&&n(2,r=t.fonts),"display"in t&&n(3,i=t.display),"subset"in t&&n(4,a=t.subset),"effect"in t&&n(5,c=t.effect),"text"in t&&n(6,l=t.text)},t.$$.update=()=>{126&t.$$.dirty&&n(0,o=O.getStylesheet({font:s,fonts:r,settings:{display:i,text:l,effect:c,subset:a}}))},[o,s,r,i,a,c,l]}O.baseUrl="https://fonts.googleapis.com/css2";class P extends N{constructor(t){super(),I(this,t,M,F,r,{font:1,fonts:2,display:3,subset:4,effect:5,text:6})}}function R(t){let e;return{c(){e=l("link"),d(e,"rel","stylesheet"),d(e,"href","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css")},m(t,n){a(t,e,n)},d(t){t&&c(e)}}}function q(e){let n,o,s=e[0]&&R();return{c(){n=l("link"),s&&s.c(),o=u(""),d(n,"rel","stylesheet"),d(n,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css")},m(t,e){i(document.head,n),s&&s.m(document.head,null),i(document.head,o)},p(t,[e]){t[0]?s||(s=R(),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:t,o:t,d(t){c(n),s&&s.d(t),c(o)}}}function B(t,e,n){let{icons:o=!0}=e;return t.$$set=t=>{"icons"in t&&n(0,o=t.icons)},[o]}class Q extends N{constructor(t){super(),I(this,t,B,q,r,{icons:0})}}function W(e){let n,o,s,r,i,u;return n=new Q({}),s=new P({props:{font:e[0]}}),{c(){A(n.$$.fragment),o=f(),A(s.$$.fragment),r=f(),i=l("div"),i.innerHTML='<div class="hero-row-content svelte-1tzra7i"><div class="hero-text svelte-1tzra7i"><div class="text-itself svelte-1tzra7i"><h1 class="svelte-1tzra7i">Cüneyt Kaya</h1> \n        <h2>Web Developer</h2> \n        <p>Hello! My name is Cüneyt, I am a student in the EU-Russia Studies\n          master program at Tartu University. As a front-end web developer and\n          WordPress developer for more than 2 years, I have been trying to\n          produce solutions for people&#39;s needs. If you want to follow my\n          adventure in web technologies and contact me, you can use the\n          communication channels below.</p></div> \n      <div class="hero-row-social svelte-1tzra7i"><a target="_blank" href="https://twitter.com/cueneytkaya" class="btn btn-outline-info mx-2"><i class="bi bi-twitter"></i></a> \n        <a target="_blank" href="https://github.com/kayacuneyd" class="btn btn-outline-info mx-2"><i class="bi bi-github"></i></a> \n        <a target="_blank" href="https://www.linkedin.com/in/kayacuneyd2019/" class="btn btn-outline-info mx-2"><i class="bi bi-linkedin"></i></a></div></div> \n    <div class="hero-photo svelte-1tzra7i"><img class="dev-photo svelte-1tzra7i" src="https://kayacuneyt.com/wp-content/uploads/2021/03/cropped-FOTOBEN.jpg" alt="developer kaya"/></div></div>',d(i,"class","main svelte-1tzra7i")},m(t,e){z(n,t,e),a(t,o,e),z(s,document.head,null),a(t,r,e),a(t,i,e),u=!0},p:t,i(t){u||(U(n.$$.fragment,t),U(s.$$.fragment,t),u=!0)},o(t){j(n.$$.fragment,t),j(s.$$.fragment,t),u=!1},d(t){C(n,t),t&&c(o),C(s),t&&c(r),t&&c(i)}}}function H(t){return[{family:"Bona Nova",serif:!0,variants:["400","700"]}]}return new class extends N{constructor(t){super(),I(this,t,H,W,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
