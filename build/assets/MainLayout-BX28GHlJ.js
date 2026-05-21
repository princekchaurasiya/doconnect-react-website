import{j as e,r as i,u as k,L as o,a as n,s as h}from"./app-pF38iy4k.js";function K({children:t,style:s,as:a="article"}){return e.jsx(a,{style:{background:"var(--color-surface)",borderRadius:"var(--radius)",boxShadow:"var(--shadow)",padding:"1.25rem 1.5rem",...s},children:t})}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(...t)=>t.filter((s,a,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,r)=>r?r.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t=>{const s=z(t);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1},L=i.createContext({}),$=()=>i.useContext(L),H=i.forwardRef(({color:t,size:s,strokeWidth:a,absoluteStrokeWidth:r,className:x="",children:l,iconNode:d,...m},c)=>{const{size:p=24,strokeWidth:y=2,absoluteStrokeWidth:C=!1,color:w="currentColor",className:N=""}=$()??{},W=r??C?Number(a??y)*24/Number(s??p):a??y;return i.createElement("svg",{ref:c,...j,width:s??p??j.width,height:s??p??j.height,stroke:t??w,strokeWidth:W,className:v("lucide",N,x),...!l&&!M(m)&&{"aria-hidden":"true"},...m},[...d.map(([A,S])=>i.createElement(A,S)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(t,s)=>{const a=i.forwardRef(({className:r,...x},l)=>i.createElement(H,{ref:l,iconNode:s,className:v(`lucide-${_(b(t))}`,`lucide-${t}`,r),...x}));return a.displayName=b(t),a};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],q=f("clock",T);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],E=f("mail",B);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],I=f("menu",F);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],g=f("phone",P);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],D=f("x",R),u={color:"#ffc9d0",textDecoration:"none"};function O(){const{site:t}=k().props,s=(t==null?void 0:t.phone)??null,a=(t==null?void 0:t.email)??null,r=(t==null?void 0:t.site_name)??"Doconnect";return e.jsx("footer",{className:"section-dark",style:{marginTop:0,padding:"2.75rem 0 1.5rem"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))"},children:[e.jsxs("div",{children:[e.jsx("strong",{style:{fontSize:"1.05rem"},children:r}),e.jsxs("p",{style:{margin:"0.5rem 0 0",maxWidth:"42ch",color:"#f3d1d6",lineHeight:1.55},children:["At ",r,", our priority is comprehensive, quality care at home in Mumbai. From doctor consultations and nebulisation to injections, wound care, and nursing—we help families get the right support when travel to a clinic is difficult."]})]}),e.jsxs("div",{children:[e.jsx("strong",{style:{fontSize:"1.05rem"},children:"Useful links"}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:"0.5rem 0 0",lineHeight:1.9},children:[e.jsx("li",{children:e.jsx(o,{href:n("/"),style:u,children:"Home"})}),e.jsx("li",{children:e.jsx(o,{href:n("/about"),style:u,children:"About us"})}),e.jsx("li",{children:e.jsx(o,{href:n("/services"),style:u,children:"Services"})}),e.jsx("li",{children:e.jsx(o,{href:n("/testimonials"),style:u,children:"Testimonials"})}),e.jsx("li",{children:e.jsx(o,{href:n("/faqs"),style:u,children:"FAQs"})}),e.jsx("li",{children:e.jsx(o,{href:n("/blog"),style:u,children:"Blogs"})})]})]}),e.jsxs("div",{children:[e.jsx("strong",{style:{fontSize:"1.05rem"},children:"Contact"}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:"0.5rem 0 0",color:"#f3d1d6"},children:[s&&e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"0.45rem",marginBottom:"0.35rem"},children:[e.jsx(g,{size:18,"aria-hidden":!0}),e.jsx("a",{href:`tel:${s.replace(/\s/g,"")}`,style:{color:"#fff",fontWeight:600},children:s})]}),a&&e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"0.45rem",marginBottom:"0.35rem"},children:[e.jsx(E,{size:18,"aria-hidden":!0}),e.jsx("a",{href:`mailto:${a}`,style:{color:"#fff",fontWeight:600},children:a})]}),t!=null&&t.open_hours?e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"0.45rem",marginTop:"0.35rem"},children:[e.jsx(q,{size:18,style:{flexShrink:0,marginTop:2},"aria-hidden":!0}),e.jsxs("span",{children:["Hours: ",t.open_hours]})]}):null,e.jsx("li",{style:{marginTop:"0.65rem"},children:e.jsx(o,{href:n("/contact"),style:u,children:"Request a callback"})})]})]})]}),e.jsxs("p",{style:{textAlign:"center",margin:"2rem 0 0",fontSize:"0.85rem",color:"#e8aeb5"},children:["© ",new Date().getFullYear()," ",r,". All rights reserved."]})]})})}const U=[{href:n("/"),label:"Home",match:t=>h(t)==="/"},{href:n("/about"),label:"About",match:t=>h(t).startsWith("/about")},{href:n("/services"),label:"Services",match:t=>h(t).startsWith("/services")},{href:n("/testimonials"),label:"Testimonials",match:t=>h(t).startsWith("/testimonials")},{href:n("/team"),label:"Team",match:t=>h(t).startsWith("/team")},{href:n("/faqs"),label:"FAQs",match:t=>h(t).startsWith("/faqs")},{href:n("/contact"),label:"Contact",match:t=>h(t).startsWith("/contact")},{href:n("/blog"),label:"Blogs",match:t=>h(t).startsWith("/blog")}];function Q(){const t=k(),{site:s}=t.props,a=t.url,r=(s==null?void 0:s.phone)??null,x=(s==null?void 0:s.site_name)??"Doconnect",[l,d]=i.useState(!1);i.useEffect(()=>{d(!1)},[a]),i.useEffect(()=>(document.body.style.overflow=l?"hidden":"",()=>{document.body.style.overflow=""}),[l]);const m=r?`tel:${r.replace(/\s/g,"")}`:null;return e.jsxs("header",{className:"site-header",children:[e.jsxs("div",{className:"container site-header-container",children:[e.jsx(o,{href:n("/"),className:"site-header-logo",children:x}),e.jsx("nav",{id:"site-nav",className:`site-header-nav${l?" is-open":""}`,"aria-label":"Main",children:U.map(c=>e.jsx(o,{href:c.href,className:c.match(a)?"site-header-link is-active":"site-header-link",onClick:()=>d(!1),children:c.label},c.href))}),e.jsxs("div",{className:"site-header-actions",children:[m?e.jsxs("a",{href:m,className:"site-header-phone",children:[e.jsx(g,{size:18,strokeWidth:2.25,"aria-hidden":!0}),e.jsx("span",{className:"site-header-phone-full",children:r}),e.jsx("span",{className:"site-header-phone-short",children:"Call"})]}):null,e.jsx("button",{type:"button",className:"site-header-menu-btn","aria-expanded":l,"aria-controls":"site-nav","aria-label":l?"Close menu":"Open menu",onClick:()=>d(c=>!c),children:l?e.jsx(D,{size:24,strokeWidth:2}):e.jsx(I,{size:24,strokeWidth:2})})]}),l&&m?e.jsxs("a",{href:m,className:"site-header-mobile-call",onClick:()=>d(!1),children:[e.jsx(g,{size:20,strokeWidth:2,"aria-hidden":!0}),"Call ",r]}):null]}),l?e.jsx("button",{type:"button",className:"site-header-backdrop","aria-label":"Close menu",onClick:()=>d(!1)}):null]})}function X({children:t}){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{}),e.jsx("main",{style:{minHeight:"60vh"},children:t}),e.jsx(O,{})]})}export{K as C,X as M,f as c};
