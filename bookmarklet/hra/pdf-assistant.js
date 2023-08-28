(function(){"use strict";const Ee=(n,t)=>n===t,k=Symbol("solid-proxy"),Ce=Symbol("solid-dev-component"),M={equals:Ee};let ne=re;const S=1,O=2,ie={owned:null,cleanups:null,context:null,owner:null};var m=null;let U=null,h=null,g=null,x=null,F=0;function Ge(n,t){const e=h,i=m,s=n.length===0,o=s?ie:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},r=s?n:()=>n(()=>T(()=>W(o)));m=o,h=null;try{return v(r,!0)}finally{h=e,m=i}}function j(n,t){t=t?Object.assign({},M,t):M;const e={value:n,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(e.value)),se(e,s));return[oe.bind(e),i]}function Pe(n,t,e){const i=B(n,t,!0,S);E(i)}function N(n,t,e){const i=B(n,t,!1,S);E(i)}function Te(n,t,e){ne=De;const i=B(n,t,!1,S);(!e||!e.render)&&(i.user=!0),x?x.push(i):E(i)}function I(n,t,e){e=e?Object.assign({},M,e):M;const i=B(n,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=e.equals||void 0,E(i),oe.bind(i)}function T(n){if(h===null)return n();const t=h;h=null;try{return n()}finally{h=t}}function oe(){if(this.sources&&this.state)if(this.state===S)E(this);else{const n=g;g=null,v(()=>_(this),!1),g=n}if(h){const n=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(n)):(h.sources=[this],h.sourceSlots=[n]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function se(n,t,e){let i=n.value;return(!n.comparator||!n.comparator(i,t))&&(n.value=t,n.observers&&n.observers.length&&v(()=>{for(let s=0;s<n.observers.length;s+=1){const o=n.observers[s],r=U&&U.running;r&&U.disposed.has(o),(r?!o.tState:!o.state)&&(o.pure?g.push(o):x.push(o),o.observers&&le(o)),r||(o.state=S)}if(g.length>1e6)throw g=[],new Error},!1)),t}function E(n){if(!n.fn)return;W(n);const t=m,e=h,i=F;h=m=n,ve(n,n.value,i),h=e,m=t}function ve(n,t,e){let i;try{i=n.fn(t)}catch(s){return n.pure&&(n.state=S,n.owned&&n.owned.forEach(W),n.owned=null),n.updatedAt=e+1,ue(s)}(!n.updatedAt||n.updatedAt<=e)&&(n.updatedAt!=null&&"observers"in n?se(n,i):n.value=i,n.updatedAt=e)}function B(n,t,e,i=S,s){const o={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:e};return m===null||m!==ie&&(m.owned?m.owned.push(o):m.owned=[o]),o}function H(n){if(n.state===0)return;if(n.state===O)return _(n);if(n.suspense&&T(n.suspense.inFallback))return n.suspense.effects.push(n);const t=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<F);)n.state&&t.push(n);for(let e=t.length-1;e>=0;e--)if(n=t[e],n.state===S)E(n);else if(n.state===O){const i=g;g=null,v(()=>_(n,t[0]),!1),g=i}}function v(n,t){if(g)return n();let e=!1;t||(g=[]),x?e=!0:x=[],F++;try{const i=n();return Ae(e),i}catch(i){e||(x=null),g=null,ue(i)}}function Ae(n){if(g&&(re(g),g=null),n)return;const t=x;x=null,t.length&&v(()=>ne(t),!1)}function re(n){for(let t=0;t<n.length;t++)H(n[t])}function De(n){let t,e=0;for(t=0;t<n.length;t++){const i=n[t];i.user?n[e++]=i:H(i)}for(t=0;t<e;t++)H(n[t])}function _(n,t){n.state=0;for(let e=0;e<n.sources.length;e+=1){const i=n.sources[e];if(i.sources){const s=i.state;s===S?i!==t&&(!i.updatedAt||i.updatedAt<F)&&H(i):s===O&&_(i,t)}}}function le(n){for(let t=0;t<n.observers.length;t+=1){const e=n.observers[t];e.state||(e.state=O,e.pure?g.push(e):x.push(e),e.observers&&le(e))}}function W(n){let t;if(n.sources)for(;n.sources.length;){const e=n.sources.pop(),i=n.sourceSlots.pop(),s=e.observers;if(s&&s.length){const o=s.pop(),r=e.observerSlots.pop();i<s.length&&(o.sourceSlots[r]=i,s[i]=o,e.observerSlots[i]=r)}}if(n.owned){for(t=n.owned.length-1;t>=0;t--)W(n.owned[t]);n.owned=null}if(n.cleanups){for(t=n.cleanups.length-1;t>=0;t--)n.cleanups[t]();n.cleanups=null}n.state=0,n.context=null}function ke(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function ue(n,t=m){throw ke(n)}function X(n,t){return T(()=>n(t||{}))}function z(){return!0}const K={get(n,t,e){return t===k?e:n.get(t)},has(n,t){return t===k?!0:n.has(t)},set:z,deleteProperty:z,getOwnPropertyDescriptor(n,t){return{configurable:!0,enumerable:!0,get(){return n.get(t)},set:z,deleteProperty:z}},ownKeys(n){return n.keys()}};function J(n){return(n=typeof n=="function"?n():n)?n:{}}function Me(){for(let n=0,t=this.length;n<t;++n){const e=this[n]();if(e!==void 0)return e}}function Oe(...n){let t=!1;for(let o=0;o<n.length;o++){const r=n[o];t=t||!!r&&k in r,n[o]=typeof r=="function"?(t=!0,I(r)):r}if(t)return new Proxy({get(o){for(let r=n.length-1;r>=0;r--){const l=J(n[r])[o];if(l!==void 0)return l}},has(o){for(let r=n.length-1;r>=0;r--)if(o in J(n[r]))return!0;return!1},keys(){const o=[];for(let r=0;r<n.length;r++)o.push(...Object.keys(J(n[r])));return[...new Set(o)]}},K);const e={},i={},s=new Set;for(let o=n.length-1;o>=0;o--){const r=n[o];if(!r)continue;const l=Object.getOwnPropertyNames(r);for(let u=0,a=l.length;u<a;u++){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(r,c);if(!s.has(c))f.get?(s.add(c),Object.defineProperty(e,c,{enumerable:!0,configurable:!0,get:Me.bind(i[c]=[f.get.bind(r)])})):(f.value!==void 0&&s.add(c),e[c]=f.value);else{const d=i[c];d?f.get?d.push(f.get.bind(r)):f.value!==void 0&&d.push(()=>f.value):e[c]===void 0&&(e[c]=f.value)}}}return e}function ce(n,...t){if(k in n){const s=new Set(t.length>1?t.flat():t[0]),o=t.map(r=>new Proxy({get(l){return r.includes(l)?n[l]:void 0},has(l){return r.includes(l)&&l in n},keys(){return r.filter(l=>l in n)}},K));return o.push(new Proxy({get(r){return s.has(r)?void 0:n[r]},has(r){return s.has(r)?!1:r in n},keys(){return Object.keys(n).filter(r=>!s.has(r))}},K)),o}const e={},i=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(n)){const o=Object.getOwnPropertyDescriptor(n,s),r=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let l=!1,u=0;for(const a of t)a.includes(s)&&(l=!0,r?i[u][s]=o.value:Object.defineProperty(i[u],s,o)),++u;l||(r?e[s]=o.value:Object.defineProperty(e,s,o))}return[...i,e]}const Fe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],je=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Fe]),Be=new Set(["innerHTML","textContent","innerText","children"]),He=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),_e=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function We(n,t){const e=_e[n];return typeof e=="object"?e[t]?e.$:void 0:e}const ze=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Re=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),qe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ve(n,t,e){let i=e.length,s=t.length,o=i,r=0,l=0,u=t[s-1].nextSibling,a=null;for(;r<s||l<o;){if(t[r]===e[l]){r++,l++;continue}for(;t[s-1]===e[o-1];)s--,o--;if(s===r){const c=o<i?l?e[l-1].nextSibling:e[o-l]:u;for(;l<o;)n.insertBefore(e[l++],c)}else if(o===l)for(;r<s;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===e[o-1]&&e[l]===t[s-1]){const c=t[--s].nextSibling;n.insertBefore(e[l++],t[r++].nextSibling),n.insertBefore(e[--o],c),t[s]=e[o]}else{if(!a){a=new Map;let f=l;for(;f<o;)a.set(e[f],f++)}const c=a.get(t[r]);if(c!=null)if(l<c&&c<o){let f=r,d=1,P;for(;++f<s&&f<o&&!((P=a.get(t[f]))==null||P!==c+d);)d++;if(d>c-l){const V=t[r];for(;l<c;)n.insertBefore(e[l++],V)}else n.replaceChild(e[l++],t[r++])}else r++;else t[r++].remove()}}}const ae="_$DX_DELEGATE";function Ue(n,t,e,i={}){let s;return Ge(o=>{s=o,t===document?n():L(t,n(),t.firstChild?null:void 0,e)},i.owner),()=>{s(),t.textContent=""}}function $(n,t,e){let i;const s=()=>{const r=document.createElement("template");return r.innerHTML=n,e?r.content.firstChild.firstChild:r.content.firstChild},o=t?()=>T(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return o.cloneNode=o,o}function fe(n,t=window.document){const e=t[ae]||(t[ae]=new Set);for(let i=0,s=n.length;i<s;i++){const o=n[i];e.has(o)||(e.add(o),t.addEventListener(o,nt))}}function Q(n,t,e){e==null?n.removeAttribute(t):n.setAttribute(t,e)}function Xe(n,t,e,i){i==null?n.removeAttributeNS(t,e):n.setAttributeNS(t,e,i)}function Ke(n,t){t==null?n.removeAttribute("class"):n.className=t}function Je(n,t,e,i){if(i)Array.isArray(e)?(n[`$$${t}`]=e[0],n[`$$${t}Data`]=e[1]):n[`$$${t}`]=e;else if(Array.isArray(e)){const s=e[0];n.addEventListener(t,e[0]=o=>s.call(n,e[1],o))}else n.addEventListener(t,e)}function Qe(n,t,e={}){const i=Object.keys(t||{}),s=Object.keys(e);let o,r;for(o=0,r=s.length;o<r;o++){const l=s[o];!l||l==="undefined"||t[l]||(he(n,l,!1),delete e[l])}for(o=0,r=i.length;o<r;o++){const l=i[o],u=!!t[l];!l||l==="undefined"||e[l]===u||!u||(he(n,l,!0),e[l]=u)}return e}function Ye(n,t,e){if(!t)return e?Q(n,"style"):t;const i=n.style;if(typeof t=="string")return i.cssText=t;typeof e=="string"&&(i.cssText=e=void 0),e||(e={}),t||(t={});let s,o;for(o in e)t[o]==null&&i.removeProperty(o),delete e[o];for(o in t)s=t[o],s!==e[o]&&(i.setProperty(o,s),e[o]=s);return e}function Ze(n,t={},e,i){const s={};return i||N(()=>s.children=C(n,t.children,s.children)),N(()=>t.ref&&t.ref(n)),N(()=>et(n,t,e,!0,s,!0)),s}function L(n,t,e,i){if(e!==void 0&&!i&&(i=[]),typeof t!="function")return C(n,t,i,e);N(s=>C(n,t(),s,e),i)}function et(n,t,e,i,s={},o=!1){t||(t={});for(const r in s)if(!(r in t)){if(r==="children")continue;s[r]=ge(n,r,null,s[r],e,o)}for(const r in t){if(r==="children"){i||C(n,t.children);continue}const l=t[r];s[r]=ge(n,r,l,s[r],e,o)}}function tt(n){return n.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function he(n,t,e){const i=t.trim().split(/\s+/);for(let s=0,o=i.length;s<o;s++)n.classList.toggle(i[s],e)}function ge(n,t,e,i,s,o){let r,l,u,a,c;if(t==="style")return Ye(n,e,i);if(t==="classList")return Qe(n,e,i);if(e===i)return i;if(t==="ref")o||e(n);else if(t.slice(0,3)==="on:"){const f=t.slice(3);i&&n.removeEventListener(f,i),e&&n.addEventListener(f,e)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);i&&n.removeEventListener(f,i,!0),e&&n.addEventListener(f,e,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=ze.has(f);if(!d&&i){const P=Array.isArray(i)?i[0]:i;n.removeEventListener(f,P)}(d||e)&&(Je(n,f,e,d),d&&fe([f]))}else if(t.slice(0,5)==="attr:")Q(n,t.slice(5),e);else if((c=t.slice(0,5)==="prop:")||(u=Be.has(t))||!s&&((a=We(t,n.tagName))||(l=je.has(t)))||(r=n.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?Ke(n,e):r&&!l&&!u?n[tt(t)]=e:n[a||t]=e;else{const f=s&&t.indexOf(":")>-1&&qe[t.split(":")[0]];f?Xe(n,f,t,e):Q(n,He[t]||t,e)}return e}function nt(n){const t=`$$${n.type}`;let e=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==e&&Object.defineProperty(n,"target",{configurable:!0,value:e}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}});e;){const i=e[t];if(i&&!e.disabled){const s=e[`${t}Data`];if(s!==void 0?i.call(e,s,n):i.call(e,n),n.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function C(n,t,e,i,s){for(;typeof e=="function";)e=e();if(t===e)return e;const o=typeof t,r=i!==void 0;if(n=r&&e[0]&&e[0].parentNode||n,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),r){let l=e[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),e=G(n,e,i,l)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t;else if(t==null||o==="boolean")e=G(n,e,i);else{if(o==="function")return N(()=>{let l=t();for(;typeof l=="function";)l=l();e=C(n,l,e,i)}),()=>e;if(Array.isArray(t)){const l=[],u=e&&Array.isArray(e);if(Y(l,t,e,s))return N(()=>e=C(n,l,e,i,!0)),()=>e;if(l.length===0){if(e=G(n,e,i),r)return e}else u?e.length===0?pe(n,l,i):Ve(n,e,l):(e&&G(n),pe(n,l));e=l}else if(t.nodeType){if(Array.isArray(e)){if(r)return e=G(n,e,i,t);G(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}else console.warn("Unrecognized value. Skipped inserting",t)}return e}function Y(n,t,e,i){let s=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],u=e&&e[o],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))s=Y(n,l,u)||s;else if(a==="function")if(i){for(;typeof l=="function";)l=l();s=Y(n,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||s}else n.push(l),s=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?n.push(u):n.push(document.createTextNode(c))}}return s}function pe(n,t,e=null){for(let i=0,s=t.length;i<s;i++)n.insertBefore(t[i],e)}function G(n,t,e,i){if(e===void 0)return n.textContent="";const s=i||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(s!==l){const u=l.parentNode===n;!o&&!r?u?n.replaceChild(s,l):n.insertBefore(s,e):u&&l.remove()}else o=!0}}else n.insertBefore(s,e);return[s]}const it="http://www.w3.org/2000/svg";function ot(n,t=!1){return t?document.createElementNS(it,n):document.createElement(n)}function st(n){const[t,e]=ce(n,["component"]),i=I(()=>t.component);return I(()=>{const s=i();switch(typeof s){case"function":return Object.assign(s,{[Ce]:!0}),T(()=>s(e));case"string":const o=Re.has(s),r=ot(s,o);return Ze(r,e,o),r}})}const p="ynhra";var b=(n=>(n[n.ArticlePart=`data-${p}-article-part`]="ArticlePart",n[n.Title=`data-${p}-title`]="Title",n[n.Paragraph=`data-${p}-p`]="Paragraph",n[n.Translation=`data-${p}-t`]="Translation",n[n.Mark=`data-${p}-mark`]="Mark",n[n.LineIndex=`data-${p}-line-i`]="LineIndex",n[n.LineNumber=`data-${p}-line-n`]="LineNumber",n))(b||{}),y=(n=>(n[n.Highlight=`${p}-highlight`]="Highlight",n[n.HiddenParagraph=`${p}-p-h`]="HiddenParagraph",n[n.LineNumber=`${p}-line-n`]="LineNumber",n[n.GlobalStyle=`${p}-style`]="GlobalStyle",n))(y||{});const rt=`${p}t`,lt="en",de="zh-CN";async function ut(n,t,e){const i=new AbortController,s=setTimeout(()=>i.abort(),t);try{return await fetch(n,Object.assign({},e,{signal:i.signal}))}catch(o){throw o?.name==="AbortError"?new Error(`Request timed out after ${t} ms`):o}finally{clearTimeout(s)}}async function ct(n,t){if(n=n.trim(),!n||typeof n!="string")return"";const{source:e=document.documentElement.lang||lt,target:i=de}=t||{},s=`${rt}${i===de?"":`_${i}`} ${n}`,o=localStorage.getItem(s);if(o)return o;const r="https://translate.googleapis.com/translate_a/single?client=gtx&sl="+e+"&tl="+i+"&dt=t&q="+encodeURIComponent(n),u=(a=>a[0].map(c=>c[0]).join(""))(await(await ut(r,5e3)).json());return localStorage.setItem(s,u),u}function at(n){const[t,e]=ce(n,["tag","children","mode"]);let i=null;const s=X(st,Oe({ref(o){const r=i;typeof r=="function"?r(o):i=o},get component(){return n.tag||"div"}},e));return Pe(()=>{if(i){const o=i.attachShadow({mode:t.mode||"open"});L(o,I(()=>n.children))}}),s}const ft=$(`<style>
#root {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    padding: .5em 1em;
    background-color: #fff;
    height: calc(100vh);
    overflow-y: auto;
}
.tip {
    color: gray;
    font-size: 0.8em;
}
`),ht=$('<div id="root"><section>&emsp;&emsp;<em class="tip">Tip: Use (⇽) and (⇾) to switch groups.</em></section><hr>'),me=$("<p>"),be=$("<hr>"),ye=$("<br>"),gt=$("<pre>");function pt(n){const[t,e]=j(null),[i,s]=j(null);Te(()=>{ct(n.text).then(e).catch(s)});const o=1;return X(at,{get class(){return n.className},get children(){return[(()=>{const r=ft();return r.firstChild,L(r,()=>`#root {
                    width: calc(100vw - ${n.mainWidth}px - ${o*2+.5}em);
                }`,null),r})(),(()=>{const r=ht(),l=r.firstChild,u=l.firstChild;return l.nextSibling,L(l,()=>n.buttons,u),L(r,(()=>{const a=I(()=>!!n.text);return()=>a()?[(()=>{const c=me();return L(c,()=>n.text?.split(`
`).map(f=>[f,ye()])),c})(),be(),(()=>{const c=me();return L(c,()=>t()?.split(`
`).map(f=>[f,ye()])),c})()]:null})(),null),L(r,(()=>{const a=I(()=>!!i());return()=>a()?[be(),(()=>{const c=gt();return L(c,()=>JSON.stringify(i(),null,2)),c})()]:null})(),null),r})()]}})}function dt(n){return/[….。!！?？'’"”:：\]】}」)）]\s*$/.test(n)}function mt(n){return!n||typeof n!="string"?"":n.trim().replace(/(?<=[a-z])-[\r\n]+/gi,"-").replace(/[\r\n]+/g," ").replace(/\s+/g," ")}function Se(n){return/^(\d+|[a-zA-Z]|[IVXLCDMivxlcdm]+)($|\s*\.)/.test(n)}function bt(n){return/^[\u{2020}-\u{2023}\u{203b}\u{204b}-\u{204d}\u{2055}\u{2058}-\u{205e}]/u.test(n)}function yt(n){return/^(\d+|[IVXLCDMivxlcdm]+)$/.test(n)}function xe(n,t){const e=document.createElement("style");e.className=n,e.innerHTML=t,document.head.appendChild(e)}function Z(n){return n.nodeType===Node.ELEMENT_NODE}function Le(n,t){if(t=t||[],n.nodeType===Node.TEXT_NODE)t.push(n);else for(let e=0;e<n.childNodes.length;e++)Le(n.childNodes[e],t);return t}class R{options;scopeLineItemSelector;lineItemSelector;pages=[];groups={};groupIndex=1;currentGroupIndex=-1;constructor(t){this.options=Object.assign({lineSpacingDeviation:3,lineHeightDeviation:2,fontSizeDeviation:1,sameLineTopBottomDeviationRatio:.33,highlightColor:"#FFECB3",showLineNumber:!1,lineNumberColor:"#666",pageLoader:async()=>{},beforeParsePage:()=>{}},t),this.scopeLineItemSelector=`:scope > ${this.options.lineItemSelector}`,this.lineItemSelector=`${this.options.pageSelector} > ${this.options.lineItemSelector}`;const e=document.querySelector(this.lineItemSelector);if(!e)throw new Error(`line item not found by selector: ${this.lineItemSelector}`);if(!this.getPageElementByLineItem(e)?.querySelector(this.scopeLineItemSelector))throw new Error(`line item not found in page by selector: ${this.scopeLineItemSelector}`)}reset(){R.resetHighlight(),[`.${y.GlobalStyle}`,`.${y.LineNumber}`].forEach(t=>{document.querySelectorAll(t).forEach(e=>e.remove())}),[b.LineIndex,b.LineNumber].forEach(t=>{document.querySelectorAll(`[${t}]`).forEach(e=>{e.removeAttribute(t)})}),xe(y.GlobalStyle,`
			.${y.LineNumber} {
				position: absolute!important;
				color: ${this.options.lineNumberColor}!important;
			}
			.${y.Highlight} {
				background: ${this.options.highlightColor};
			}
			`)}isLineItemElement(t){return Z(t)&&t.matches(this.lineItemSelector)}getCurrentLineItem(t){if(this.isLineItemElement(t))return t;let e=t.parentElement;for(;e;){if(this.isLineItemElement(e))return e;e=e.parentElement}return null}getPageElementByLineItem(t){let e=t.parentElement;for(;e;){if(e.matches(this.options.pageSelector))return e;e=e.parentElement}return null}isSameLine(t,e,i){const s=e.left-t.right,o=Math.abs(e.top-t.top),r=Math.abs(e.bottom-t.bottom),l=Math.max(t.height,e.height)*this.options.sameLineTopBottomDeviationRatio;return s<=i&&(o<=l||r<=l)}getTextData(t,e,i){Le(t).forEach(s=>{if(!s.parentElement||s.parentElement.matches(`.${y.LineNumber}`))return;s.data&&i.push(s.data);const o=window.getComputedStyle(s.parentElement),r=o.fontSize,l=o.lineHeight,u=o.fontFamily,a=s.data?.length||0,c=s.parentElement.getBoundingClientRect();e.push({fontFamily:u,fontSize:r,lineHeight:l,charCount:a,rect:c})})}haveSameItem(t,e,i){const s={};return e.forEach(o=>{s[o[t]]=!0}),i.some(o=>s[o[t]]===!0)}getMostItem(t,e,i,s){s=s||(l=>`${l}`);const o={},r=[];return t.forEach(l=>{const u=l[i],a=s(l[e]),c=typeof o[a]=="number"?o[a]:r.length;r[c]=[l[e],(r[c]?.[1]||0)+u]}),r.sort((l,u)=>u[1]-l[1]),r[0]}updateLineData(t){t.lineHeight=this.getMostItem(t.textData,"lineHeight","charCount")[0],t.fontFamily=this.getMostItem(t.textData,"fontFamily","charCount")[0],t.fontSize=this.getMostItem(t.textData,"fontSize","charCount")[0];const e=this.getMostItem(t.textData,"rect","charCount",i=>`${i.top}-${i.bottom}`)[0];t.top=e.top,t.bottom=e.bottom,t.height=e.bottom-e.top,t.charWidth=this.getMostItem(t.itemData,"charWidth","charCount")[0],t.text=t.texts.join("").trim()}removeLineNumber(t,e){t.querySelectorAll(`[${b.LineNumber}="${e}"]`).forEach(i=>{i.removeAttribute(b.LineNumber),i.removeAttribute(b.LineIndex)})}checkLines(t,e){const i=e[e.length-1];i&&yt(i.text)&&(e.pop(),this.removeLineNumber(t,i.lineNumber))}updateLineSpacings(t,e){const i=[];return t.forEach((s,o)=>{const r=o===0?-e:s.bottom-s.height/2-(t[o-1].bottom-t[o-1].height/2);if(s.upperLineSpacing=r,o===0)i.push([r,1]);else{const l=i[i.length-1];l[0]===r?l[1]++:i.push([r,1])}}),i.sort((s,o)=>s[0]===o[0]?o[1]-s[1]:s[0]-o[0]),i.filter((s,o)=>o===0?!0:Math.abs(s[0]-i[o-1][0])>this.options.lineSpacingDeviation),i.sort((s,o)=>o[1]-s[1]),i}updateMainSize(t){const e={fontSize:-1,lineHeight:-1},i=":",s=this.groupLinesValue(t,["fontSize","lineHeight"],i)[0];if(s){const[o,r]=s.split(i);e.fontSize=parseFloat(o),e.lineHeight=parseFloat(r)}return e}compareWithMainSize(t,e){const i=parseFloat(t.fontSize),s=parseFloat(t.lineHeight),o=Math.abs(i-e.fontSize)<=this.options.fontSizeDeviation,r=Math.abs(s-e.lineHeight)<=this.options.lineHeightDeviation;return o&&r?0:o&&s>e.lineHeight||r&&i>e.fontSize||s>e.lineHeight&&i>e.fontSize?1:-1}newLineData(t){return Object.assign({left:NaN,top:NaN,bottom:NaN,height:NaN,upperLineSpacing:NaN,charWidth:NaN,lineHeight:"",fontSize:"",fontFamily:"",itemData:[],textData:[],lineNumber:NaN,texts:[],text:"",tags:new Set},t)}getPageData(t){const e=t.getBoundingClientRect();if(e.width<=0||e.height<=0)return null;let i=null;const s=[];let o=-1;const r="WWWMMM",l=document.createElement("span");l.innerText=r,l.style.display="inline-block",t.querySelectorAll(this.scopeLineItemSelector).forEach(c=>{if(!Z(c))return;const f=c.getBoundingClientRect(),d=window.getComputedStyle(c),P=c.innerText.length;c.appendChild(l);const V=l.getBoundingClientRect().width/r.length;c.removeChild(l);let Ie=!1;i&&(Ie=this.isSameLine(i.rect,f,V)),Ie||(o++,c.setAttribute(b.LineIndex,o.toString())),c.setAttribute(b.LineNumber,(o+1).toString()),s[o]||(s[o]=this.newLineData({left:f.left,lineNumber:o+1}));const{itemData:wt,textData:$t,texts:Nt}=s[o];wt.push({charWidth:V,charCount:P}),this.getTextData(c,$t,Nt),i={rect:f,style:d}});for(let c of s)this.updateLineData(c);this.checkLines(t,s);const u=this.updateLineSpacings(s,e.height),a=this.updateMainSize(s);return{width:e.width,height:e.height,lines:s,lineSpacings:u,groupIndexList:[],mainSize:a}}async parseFromPage(t){const e=typeof t=="number"?t:this.options.pageIndexGetter(t);if(isNaN(e))return NaN;const i=6;for(let s=0;s<i;s++){const o=e+s;if(this.pages[o])continue;let r=this.getPageElement(o);if(!r)break;await this.options.pageLoader(o),this.options.beforeParsePage(o);const l=this.pages[o]=this.getPageData(r);if(l&&this.markGroupByPage(o,l),this.showLineNumber(r),s>0){const u=this.pages[o-1];u&&l&&!u.checked&&(u.checked=!0,this.checkGroupComplete(u,o))}}return e}showLineNumber(t){this.options.showLineNumber&&(t.querySelectorAll(`.${y.LineNumber}`).forEach(e=>e.remove()),t.querySelectorAll(`[${b.LineIndex}]`).forEach(e=>{const i=document.createElement("span");i.innerText=e.getAttribute(b.LineNumber)||"?",i.style.left=`-${i.innerText.length*.5+.5}em`,i.classList.add(y.LineNumber),e.insertBefore(i,e.firstChild)}))}isLineStart(t){return bt(t.text)||Se(t.text)}maybeSameGroup(t,e){const i=Math.max(t.charWidth,e.charWidth)*.5;return e.left-t.left>i&&!this.isLineStart(t)?(e.isGroupStart=!0,!1):this.maybeSameGroupAcrossPages(t,e,{ignoreFontFamily:!0})}maybeSameGroupAcrossPages(t,e,i){if(!this.haveSameItem("fontSize",t.textData,e.textData))return i.verbose&&console.log(`line ${t.lineNumber} and ${e.lineNumber} are not in same group: total different font size`),!1;if(!i.ignoreFontFamily&&!this.haveSameItem("fontFamily",t.textData,e.textData))return i.verbose&&console.log(`line ${t.lineNumber} and ${e.lineNumber} are not in same group: total different font family`),!1;if(!e.text)return i.verbose&&console.log(`line ${t.lineNumber} and ${e.lineNumber} are not in same group: line ${e.lineNumber} is empty`),!1;if(this.isLineStart(e))return e.isGroupStart=!0,i.verbose&&console.log(`line ${t.lineNumber} and ${e.lineNumber} are not in same group:`),console.log(`line ${e.lineNumber} is list item
${e.text}`),!1;if(Se(e.texts[0]?.trim())){const{fontFamily:s,fontSize:o}=e.textData[0];if(s!==e.fontFamily||o!==e.fontSize)return e.isGroupStart=!0,i.verbose&&console.log(`line ${t.lineNumber} and ${e.lineNumber} are not in same group:`),console.log(`line ${e.lineNumber} starts with numbering marker
${e.text}`),!1}return!0}resetGroupIndex(t,e){const i=this.groups[t],s=this.groups[e];if(!(!i||!s)){for(let o of i){for(let l of o.lineIndexList){const u=this.pages[o.pageIndex]?.lines[l];u&&(u.groupIndex=e)}s.push(o);const r=this.pages[o.pageIndex];r&&(r.groupIndexList=r.groupIndexList.filter(l=>l!==t))}delete this.groups[t]}}setGroupIndex(t,e,i){t.groupIndex=e,this.groups[e]||(this.groups[e]=[]);let s=this.groups[e].length;for(let o=0;o<s;o++)if(this.groups[e][o].pageIndex===i){s=o;break}this.groups[e][s]||(this.groups[e][s]={pageIndex:i,lineIndexList:[]}),this.groups[e][s].lineIndexList.push(t.lineNumber-1)}markGroupByPage(t,e){if(e.lines.length===0||e.lines[0].groupIndex!==void 0)return!1;const i=e.lines;for(let[s,o]of e.lineSpacings)if(!(o<=1))for(let r=1;r<i.length;r++){const l=i[r-1],u=i[r];Math.abs(u.upperLineSpacing-s)<=this.options.lineSpacingDeviation?u.groupIndex===void 0&&(this.maybeSameGroup(l,u)?(l.groupIndex===void 0&&this.setGroupIndex(l,this.groupIndex,t),this.setGroupIndex(u,l.groupIndex,t)):this.shouldSetNextGroup()):this.shouldSetNextGroup()}this.shouldSetNextGroup();for(let s of i)s.groupIndex===void 0&&(this.setGroupIndex(s,this.groupIndex,t),this.shouldSetNextGroup()),s.groupIndex!==void 0&&s.groupIndex!==e.groupIndexList[e.groupIndexList.length-1]&&e.groupIndexList.push(s.groupIndex);return this.markSemanteme(e),this.checkGroupComplete(e),!0}getLineFromGroup(t,e){const i=e===0?0:t.length-1,{lineIndexList:s,pageIndex:o}=t[i],r=s[e===0?0:s.length-1];return this.pages[o]?.lines[r]||null}getLinesFromGroup(t){t=t||this.currentGroupIndex;const e=this.groups[t];if(!e)return[];const i=[];for(let s of e)for(let o of s.lineIndexList){const r=this.pages[s.pageIndex]?.lines[o];r&&i.push(r)}return i}findContinuedLineByGroup(t,e,i){for(let s=i;s<e.length;s++){const o=this.groups[e[s]],r=o?this.getLineFromGroup(o,0):null;if(typeof r?.groupIndex=="number"){if(r.tags.has("title or subtitle"))return t.isComplete=!0,console.log(`find continued for line ${t.lineNumber} break because line ${r.lineNumber} is title or subtitle`),-1;if(this.maybeSameGroupAcrossPages(t,r,{verbose:!0,ignoreFontFamily:!1}))return this.isLineStart(r)||r.isGroupStart?(t.isComplete=!0,console.log(`find continued for line ${t.lineNumber} break because line ${r.lineNumber} is group start`),-1):r.groupIndex}}return-1}markSemanteme(t){for(let e of t.groupIndexList){const i=this.groups[e];if(i&&i.length===1&&i[0].lineIndexList.length===1){const{pageIndex:s,lineIndexList:o}=i[0],r=this.pages[s]?.lines[o[0]];r&&this.compareWithMainSize(r,t.mainSize)>0&&(r.isGroupStart=!0,r.isComplete=!0,r.tags.add("title or subtitle"),console.log(`line ${r.lineNumber} is title or subtitle`))}}}checkGroupComplete(t,e){const i=e?this.pages[e]:t;if(i)for(let s=0;s<t.groupIndexList.length;s++){const o=t.groupIndexList[s],r=this.groups[o];if(!r)continue;const l=this.getLineFromGroup(r,-1);if(l&&!l.isComplete&&!dt(l.text)){console.log(`group last line ${l.lineNumber} not complete, check in ${e?`page[${e}]`:"current page"}:
${l.text}`);const u=this.findContinuedLineByGroup(l,i.groupIndexList,e?0:s+1);u!==-1&&(console.log(`reset group ${u} to ${o}`),this.resetGroupIndex(u,o))}}}async showGroupByLineItem(t){const e=this.getPageElementByLineItem(t);if(!e)return console.log("showGroupByLineItem failed: page not found"),null;const i=await this.parseFromPage(e),s=parseInt(t.getAttribute(b.LineNumber)||""),o=s-1,r=this.pages[i],l=r?.lines[o]?.groupIndex;return!r||l===void 0?(console.log("showGroupByLineItem failed: group not found"),null):(this.currentGroupIndex=l,this.highlightGroup(l),{pageIndex:i,lineNumber:s,groupIndex:l})}getEdgeLineOfGroup(t,e){const i=this.groups[t];if(!i)return null;const s=i[e<0?i.length-1:0];if(!s)return null;const{pageIndex:o,lineIndexList:r}=s,l=e<0?r[r.length-1]:r[0];return{pageIndex:o,lineIndex:l}}async showNextGroup(t=1){const e=this.currentGroupIndex===-1?0:this.groups[this.currentGroupIndex]?.[0]?.pageIndex;if(typeof e!="number"){console.log("get page index for next group failed");return}this.parseFromPage(e),this.currentGroupIndex===-1?this.currentGroupIndex=this.pages[e]?.groupIndexList[0]||-1:this.getNextGroup(t),console.log(`show group[${this.currentGroupIndex}] from page[${e}]`),this.highlightGroup(this.currentGroupIndex);const i=this.getEdgeLineOfGroup(this.currentGroupIndex,0);i&&this.getPageElement(i.pageIndex)?.querySelector(`[${b.LineIndex}="${i.lineIndex}"]`)?.scrollIntoView()}getNextGroup(t){const e=this.currentGroupIndex;if(!this.groups[e])return;const s=this.getEdgeLineOfGroup(e,t>0?-1:0);if(!s)return;let{pageIndex:o,lineIndex:r}=s,l=this.pages[o]?.lines;if(!l||(t>0?r<l.length-1?r++:(o++,r=0):r>0?r--:(o--,r=-1),l=this.pages[o]?.lines,!l))return;r===-1&&(r=l.length-1);const u=l[r]?.groupIndex;typeof u=="number"&&(this.currentGroupIndex=u)}getPageElement(t){const e=document.querySelector(`${this.options.pageSelector}${this.options.indexedPageSelector(t)}`);return e&&Z(e)?e:null}highlightGroup(t){const e=this.groups[t];if(e){R.resetHighlight();for(let{pageIndex:i,lineIndexList:s}of e){const o=this.getPageElement(i);if(o)for(let r of s)o.querySelectorAll(`[${b.LineNumber}="${r+1}"]`).forEach(l=>{l.classList.add(y.Highlight)})}}}getGroupText(t){return mt(this.getLinesFromGroup(t).map(e=>e.text).join(`
`))}groupLinesValue(t,e,i){const s=Object.entries(t.map(o=>e.map(r=>`${o[r]}`).join(i)).reduce((o,r)=>(o[r]=(o[r]||0)+1,o),{}));return s.sort((o,r)=>r[1]-o[1]),s.map(o=>o[0])}getLinesValue(t,e,i){const s=this.pages[t]?.lines.map(o=>[o.lineNumber,o[e]]);if(!s)return null;if(i){const o=Object.entries(s?.reduce((r,l)=>{const u=`${l[1]}`;return r[u]=(r[u]||0)+1,r},{}));return i[0]==="k"?o.sort((r,l)=>{const u=parseFloat(r[0]),a=parseFloat(l[0]);return isNaN(u)||isNaN(a)?l[1]===r[1]?0:l[1]>r[1]?1:-1:a-u}):o.sort((r,l)=>l[1]-r[1]),o}else return s}shouldSetNextGroup(){this.groups[this.groupIndex]&&this.groupIndex++}static resetHighlight(){document.querySelectorAll(`.${y.Highlight}`).forEach(t=>t.classList.remove(y.Highlight))}}const St=$("<button>Table of Contents"),ee=window,we="#sidebar",A="opened",$e="#page-container > .pf",D=ee.pdf2htmlEX.defaultViewer,w=new R({pageSelector:$e,indexedPageSelector:n=>`[data-page-no="${n.toString(16)}"]`,pageIndexGetter:n=>parseInt(n.dataset.pageNo||"0",16),lineItemSelector:".pc > .t",showLineNumber:!0,pageLoader:n=>new Promise(function(t){D.pages[n].loaded?t(D.pages[n].page):(console.log(`loading page ${n}`),D.load_page(n,1,e=>{console.log(`page ${n} loaded`,e),t(D.pages[n].page)}))}),beforeParsePage:n=>{D.pages[n].show()}}),[xt,te]=j(""),Ne=n=>{if(n.target instanceof HTMLElement){const t=w.getCurrentLineItem(n.target);console.log("line item clicked"),t&&w.showGroupByLineItem(t).then(e=>{console.log(JSON.stringify(e));const i=w.getGroupText();i&&te(i)})}};function q(){return(document.querySelector(`${$e}:has(>.${A})`)?.getBoundingClientRect()?.width||0)+(document.querySelector(`${we}.${A}`)?.getBoundingClientRect()?.width||0)}function Lt(){let n;const t=u=>{if(u.key==="ArrowLeft")w.showNextGroup(-1).then(()=>{const a=w.getGroupText();a&&te(a)});else if(u.key==="ArrowRight")w.showNextGroup(1).then(()=>{const a=w.getGroupText();a&&te(a)});else if(u.ctrlKey||u.metaKey)switch(u.keyCode){case 61:case 107:case 187:case 173:case 109:case 189:case 48:n=window.setTimeout(()=>{n&&clearTimeout(n),n=void 0;const c=q();console.log(`mainWidth: ${c}`),o(c)},200);break}},e={finder:w,bodyClickListener:Ne,keydownListener:t,getMainWidth:q},i=ee[p];i?.bodyClickListener&&document.body.removeEventListener("click",i.bodyClickListener),i?.keydownListener&&document.removeEventListener("keydown",i.keydownListener),w.reset(),xe(y.GlobalStyle,`
		.pf {margin: 0;}
		`);const[s,o]=j(window.innerWidth*.6),r=u=>{const a=document.querySelector(we);a&&(typeof u!="boolean"&&(u=!a.classList.contains(A)),u?(a.classList.add(A),o(q())):(a.classList.remove(A),o(q())))};r(!1),document.body.addEventListener("click",Ne),document.addEventListener("keydown",t);const l=`${p}-sidebar`;return document.querySelector(`.${l}`)?.remove(),Ue(()=>X(pt,{get mainWidth(){return s()},className:l,get text(){return xt()},get buttons(){return(()=>{const u=St();return u.$$click=()=>r(),u})()}}),document.body),e}ee[p]=Lt(),fe(["click"])})();
