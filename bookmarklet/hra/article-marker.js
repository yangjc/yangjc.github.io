(function(){"use strict";const u="ynhra";var a=(e=>(e[e.ArticlePart=`data-${u}-article-part`]="ArticlePart",e[e.Title=`data-${u}-title`]="Title",e[e.Paragraph=`data-${u}-p`]="Paragraph",e[e.Translation=`data-${u}-t`]="Translation",e[e.Mark=`data-${u}-mark`]="Mark",e[e.LineIndex=`data-${u}-line-i`]="LineIndex",e[e.LineNumber=`data-${u}-line-n`]="LineNumber",e))(a||{}),f=(e=>(e[e.Highlight=`${u}-highlight`]="Highlight",e[e.HiddenParagraph=`${u}-p-h`]="HiddenParagraph",e[e.LineNumber=`${u}-line-n`]="LineNumber",e[e.GlobalStyle=`${u}-style`]="GlobalStyle",e))(f||{}),y=(e=>(e.TextContainerContainer="text container container",e))(y||{});function x(e){const t=window.getComputedStyle(e).visibility;return t!=="hidden"&&t!=="collapse"&&e.checkVisibility()}function N(e){return e.nodeType===Node.TEXT_NODE&&e.data?.trim().length>0}function T(e){if(!l(e))return!1;for(let t of e.childNodes)if(N(t))return!0;return!1}function A(e){if(!l(e)||!e.innerText||e.innerText.trim().length===0)return!1;const t=window.getComputedStyle(e);return!e.querySelector("p")&&x(e)&&t.display==="inline"}function L(e){return $(e)&&x(e)&&T(e)}function $(e){return l(e)?!e.querySelector("p")&&(e.tagName==="SPAN"||e.tagName==="DIV")&&g(e.parentNode).length===1:!1}function q(e){if(!$(e))return!1;if(T(e))return!0;const t=g(e);return t.length===1?q(t[0]):!1}function P(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;for(let t of e.childNodes){if(A(t))return E(t,"is inline text wrapper"),!0;if(L(t))return E(t,"is text component wrapper"),!0}return!1}function S(e){if(!l(e))return!1;for(let t of e.childNodes)if(w(t)&&x(t))return!0;return!1}function w(e){if(l(e)){const t=window.getComputedStyle(e),r=["list-item","flow-root","block","table","flex","grid"];if(t.float==="none"&&r.includes(t.display))return!0}return!1}function O(e){for(let t of e.childNodes)if(N(t)||!w(t))return!1;return!0}function g(e){const t=[];if(!e)return t;for(let r of e.childNodes)l(r)&&t.push(r);return t}function k(e,t){const r=document.createElement("style");r.className=e,r.innerHTML=t,document.head.appendChild(r)}function l(e){return e.nodeType===Node.ELEMENT_NODE}function E(e,t){l(e)&&e.setAttribute(a.Mark,t)}function M(){const e=["main",'[role="main"]'];for(let t of e){const r=document.querySelectorAll(t);if(r.length===1&&l(r[0]))return r[0]}return null}function D(e){return e.matches("footer")||e.className.indexOf("footer")>-1||e.matches('[role="contentinfo"]')}function v(e,t){if(t=t||[],e.nodeType===Node.TEXT_NODE)t.push(e);else for(let r=0;r<e.childNodes.length;r++)v(e.childNodes[r],t);return t}const j=Object.freeze(Object.defineProperty({__proto__:null,addStyleElement:k,allChildrenAreBlock:O,getAllTextNodes:v,getChildElements:g,getMainElement:M,isBlockElement:w,isComponentWrapper:$,isFooter:D,isHTMLElement:l,isInlineTextWrapper:A,isNestedTextWrapper:q,isNonEmptyTextNode:N,isTextComponentWrapper:L,markElement:E,nodeContainsBlockElement:S,nodeContainsTextDirectly:T,nodeContainsTextWrapperDirectly:P,textIsVisible:x},Symbol.toStringTag,{value:"Module"}));function B(e){return!e||typeof e!="string"?"":e.trim().replace(/(?<=[a-z])-[\r\n]+/gi,"-").replace(/[\r\n]+/g," ").replace(/\s+/g," ")}function I(e){return/^[\x00-\x40]*$/.test(e)}function V(e,t){H(e,"text/plain",t)}function W(e,t){H(JSON.stringify(e,null,2),"application/json",`${t}.json`)}function H(e,t,r){const n=new Blob([e],{type:t}),o=URL.createObjectURL(n),s=document.createElement("a");s.href=o,s.download=r,s.click()}function z(e){return`"${e.replace(/"/g,'""')}"`}function R(e){return e!==null}class h{textContainerContainers=[];articleParts=[];paragraphs=[];title="";pageData=null;constructor(){this.reset(),k(f.GlobalStyle,`
			ol>li[${a.Translation}] {
				display: inline;
			}

			[${a.Translation}] {
				opacity: 0.8;
			}
			`)}find(){return this.pageData?this.pageData:(this.findArticleParts().findParagraphs(),this.pageData=this.getPageData())}mark(){this.find(),k(f.GlobalStyle,`
			.${f.Highlight} {
				box-shadow: 0 0 5px 2px #aaa;
				background: #ffcc00;
			}
		`),document.querySelectorAll(`[${a.Paragraph}],[${a.Title}]`).forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&t.classList.add(f.Highlight)})}download(){W(this.find(),"page-data")}highlight(t){t.forEach(r=>{r=r.node||r,r.style.boxShadow="0 0 5px 2px #aaa",r.style.background="gray"})}reset(){this.textContainerContainers=[],this.articleParts=[],this.paragraphs=[],this.title="",[a.ArticlePart,a.Paragraph,a.Title,a.Mark].forEach(t=>{document.querySelectorAll(`[${t}]`).forEach(r=>{r.removeAttribute(t)})}),[`[${a.Translation}]`,`.${f.HiddenParagraph}`,`.${f.GlobalStyle}`].forEach(t=>{document.querySelectorAll(t).forEach(r=>{r.remove()})}),document.querySelectorAll(`.${f.Highlight}`).forEach(t=>{t.classList.remove(f.Highlight)}),document.querySelector(`#${f.Highlight}`)?.remove()}setArticleParts(t){const r=this.articleParts.length;this.articleParts.push(t),t.node.setAttribute(a.ArticlePart,`${r}`)}setTitle(t,r){this.title=r,t.setAttribute(a.Title,"")}setParagraph(t,r,n){const o=this.paragraphs.length;n||(n=/^h\d+$/i.test(t.tagName)?t.tagName.toLowerCase():""),this.paragraphs.push({text:r,type:n}),t.setAttribute(a.Paragraph,`${o}`)}getTextContainerContainers(t){t||(t=document.body.childNodes);for(let r of t)l(r)&&r.getAttribute(a.ArticlePart)||(h.isTextContainerContainer(r)?this.textContainerContainers.push({node:r,type:y.TextContainerContainer,textLength:r.innerText?.length||-1}):this.getTextContainerContainers(r.childNodes))}findFromTextContainerContainers(){if(this.getTextContainerContainers(),this.textContainerContainers.length!==0){this.textContainerContainers.sort((t,r)=>r.textLength-t.textLength),this.setArticleParts(this.textContainerContainers[0]);for(let t=1;t<this.textContainerContainers.length;t++){const r=this.textContainerContainers[t];r.node.querySelector("h1")&&this.setArticleParts(r)}}}findArticleParts(){const t=M();return t&&this.setArticleParts({node:t,type:y.TextContainerContainer,textLength:-1}),this.findFromTextContainerContainers(),this}getParagraphs(t,r){for(let n of t){const o=h.getTextFromNode(n);if(!(!o||I(o)||D(n)))switch(r){case y.TextContainerContainer:const s=n.querySelector(":scope>h1");s?this.getParagraphs(g(s.parentNode),r):n.matches("h1")?this.setTitle(n,o):T(n)?S(n)?(this.insertAfterTextNode(n),this.getParagraphs(g(n),r)):this.setParagraph(n,o):P(n)&&!S(n)?this.setParagraph(n,o):this.getParagraphs(g(n),r);break}}}insertAfterTextNode(t){for(let r of t.childNodes)if(N(r)){const n=document.createElement("span");n.style.display="none",n.innerText=r.data?.trim()||"",n.className=f.HiddenParagraph,r.parentNode.insertBefore(n,r.nextSibling),this.setParagraph(n,n.innerText)}}findParagraphs(){for(let{node:t,type:r}of this.articleParts)this.getParagraphs(g(t),r);return this.title||(this.title=document.title||""),this}getPageData(){return{url:`${location.protocol}//${location.host}${location.pathname}${location.search}`,language:document.documentElement.lang,title:{text:this.title,type:"title"},paragraphs:this.paragraphs}}static formatCodeText(t){return t?"`"+t+"`":""}static getTextFromNode(t){if(!x(t))return"";if(t.matches("code"))return h.formatCodeText(t.innerText?.trim());const r="ignore text",n=`pre,[${a.Mark}="${r}"]`;if(t.matches(n))return"";const o=document.createDocumentFragment(),s=t.querySelectorAll("code"),m=[];for(let i of s){const p=i.innerText?.trim();if(p&&i.parentNode){const d=document.createElement("code");d.innerText=h.formatCodeText(p),i.parentNode.insertBefore(d,i),o.appendChild(i),m.push([d,i])}}t.querySelectorAll("*").forEach(i=>{if(!l(i))return;const{width:p,height:d}=i.getBoundingClientRect();(p<=4||d<=4)&&i.setAttribute(a.Mark,r)});const c=[];t.querySelectorAll(n).forEach(i=>{l(i)&&c.push(i)});const C=[];for(let i of c)C.push(i.style.visibility),i.style.visibility="hidden";const b=t.innerText?.trim();for(let i=0;i<c.length;i++)c[i].style.visibility=C[i];for(let[i,p]of m)i.parentNode.insertBefore(p,i),i.parentNode.removeChild(i);return B(b)}static isTextContainerContainer(t){if(T(t)||!l(t)||t.querySelector(`[${a.ArticlePart}]`))return!1;if(t.querySelector(":scope>h2"))return!0;for(let r of t.childNodes)if(!(r.nodeType===Node.ELEMENT_NODE&&!x(r))){if(T(r))return r.setAttribute(a.Mark,`in ${y.TextContainerContainer}: contains text directly`),!0;if(P(r))return r.setAttribute(a.Mark,`in ${y.TextContainerContainer}: contains text wrapper directly`),!0}return!1}static t(t){if(!t.matches(`[${a.Translation}]`))return null;const r=t.querySelector("blockquote")?.innerText||"",n=t.querySelector("span"),o=n?.innerText||"";n&&(n.style.display="none");const s=t.innerText;return n&&(n.style.display=""),{index:t.getAttribute(a.Translation)||"",text:r,sep:o,translation:s}}static tGroups(t){let r=0;const n=Array.from(document.querySelectorAll(t)).filter(l).map(o=>Array.from(o.querySelectorAll(`[${a.Translation}]`)).filter(l).map(h.t).filter(R)).filter(o=>(o.length>r&&(r=o.length),o.length>0));return{size:r,groups:n}}static tGroupsTable(t,r){const{size:n,groups:o}=h.tGroups(t),s=[[]],m=r?.thead&&Array.isArray(r.thead)?r.thead:[];for(let c=0;c<n;c++)typeof m[c]=="string"?s[0].push(m[c]):s[0].push(`Column ${c+1}`);return o.reduce((c,C)=>{if(C.length===0)return c;const b=[],i=[];for(let p=0;p<n;p++){const d=C[p];d?(b.push(d.text),i.push(`${d.sep}${d.translation}`)):(b.push(""),i.push(""))}return c.push(b),c.push(i),c},s)}static downloadTGroupsTable(t,r,n){const o=typeof r=="object"?r:void 0;n=typeof r=="string"?r:n,V(h.tGroupsTable(t,o).map(s=>s.map(z).join(",")).join(`
`),`${n||"t-groups-table"}.csv`)}}const G=new h;G.mark(),window[u]={ArticleFinder:h,utilDOM:j,finder:G}})();