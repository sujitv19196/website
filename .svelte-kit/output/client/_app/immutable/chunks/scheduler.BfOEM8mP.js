var G=Object.defineProperty;var U=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>U(t,typeof e!="symbol"?e+"":e,n);function j(){}const _t=t=>t;function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function ht(){return Object.create(null)}function I(t){t.forEach(F)}function W(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function mt(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function pt(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t){let e;return L(t,n=>e=n)(),e}function bt(t,e,n){t.$$.on_destroy.push(L(e,n))}function gt(t,e,n,i){if(t){const s=M(t,e,n,i);return t[0](s)}}function M(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Et(t,e,n,i,s,l){if(s){const r=M(e,n,i,l);t.p(r,s)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function vt(t){return t&&W(t.destroy)?t.destroy:j}let b=!1;function At(){b=!0}function kt(){b=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:J(1,s,R=>e[n[R]].claim_order,a))-1;i[c]=n[u]+1;const k=u+1;n[k]=c,s=Math.max(k,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(r[c],u)}}function Q(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=N("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return Q(t.head||t,e),e.sheet}function Y(t,e){if(b){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){b&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function Ht(){return v(" ")}function jt(){return v("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:A(t,i,e[i])}function Mt(t,e){for(const n in e)A(t,n,e[n])}function nt(t,e){Object.keys(e).forEach(n=>{it(t,n,e[n])})}function it(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:A(t,e,n)}function St(t){return/-/.test(t)?nt:et}function Pt(t){return t.dataset.svelteH}function Ot(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,s=!1){P(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function q(t,e,n,i){return O(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function qt(t,e,n){return q(t,e,n,N)}function Bt(t,e,n){return q(t,e,n,S)}function st(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Rt(t){return st(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Gt(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);P(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const l=s.slice(1,s.length-1);if(l.length===0)return new g(e);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,l)}function Ut(t,e){e=""+e,t.data!==e&&(t.data=e)}function zt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ft(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ct{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=S(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class g extends ct{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function It(t,e){return new t(e)}let y;function x(t){y=t}function _(){if(!y)throw new Error("Function called outside component initialization");return y}function Wt(t){_().$$.before_update.push(t)}function Jt(t){_().$$.on_mount.push(t)}function Kt(t){_().$$.after_update.push(t)}function Qt(t){_().$$.on_destroy.push(t)}function Vt(){const t=_();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=rt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Xt(t,e){return _().$$.context.set(t,e),e}function Yt(t){return _().$$.context.get(t)}function Zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],D=[];let d=[];const H=[],B=Promise.resolve();let T=!1;function lt(){T||(T=!0,B.then(at))}function $t(){return lt(),B}function ot(t){d.push(t)}const E=new Set;let h=0;function at(){if(h!==0)return;const t=y;do{try{for(;h<m.length;){const e=m[h];h++,x(e),ut(e.$$)}}catch(e){throw m.length=0,h=0,e}for(x(null),m.length=0,h=0;D.length;)D.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];E.has(n)||(E.add(n),n())}d.length=0}while(m.length);for(;H.length;)H.pop()();T=!1,E.clear(),x(t)}function ut(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}function te(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{St as $,Ct as A,ot as B,rt as C,_t as D,ht as E,at as F,pt as G,te as H,y as I,x as J,F as K,m as L,lt as M,At as N,kt as O,z as P,Tt as Q,gt as R,Et as S,wt as T,xt as U,Xt as V,Yt as W,Nt as X,et as Y,vt as Z,Lt as _,dt as a,g as a0,Gt as a1,Dt as a2,mt as a3,Ft as a4,Pt as a5,yt as a6,Vt as a7,Zt as a8,S as a9,Bt as aa,Mt as ab,Qt as ac,Wt as ad,Ht as b,qt as c,Ot as d,N as e,st as f,w as g,Rt as h,W as i,$ as j,Y as k,Ut as l,bt as m,j as n,jt as o,Kt as p,Jt as q,I as r,L as s,v as t,A as u,zt as v,D as w,It as x,$t as y,V as z};
