(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c(1),a=c(0);const n=Object(i.createContext)(),l=e=>{let{children:t}=e;const[c,s]=Object(i.useState)("light");Object(i.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",(e=>{s(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(n.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),s(e)}}],children:t})},r={homepage:"https://anirudhkanneganti.github.io/",title:"AK."},o={name:"Anirudh Kanneganti",role:"Machine Learning Engineer",description:"Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",resume:"https://1drv.ms/b/s!AtaCrYYZxkXPlR_sL6brF8wm-kF4?e=uvtTuH",social:{linkedin:"https://linkedin.com/in/anirudhkanneganti",github:"https://github.com/anirudhkanneganti"}},j=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],h=["HTML","CSS","JavaScript","TypeScript","React","Redux","SASS","Material UI","Git","CI/CD","Jest","Enzyme"],b="johnsmith@mail.com";var m=c(13),d=c.n(m),u=c(11),p=c.n(u),O=c(15),x=c.n(O),k=c(14),v=c.n(k);c(25);var g=()=>{const[{themeName:e,toggleTheme:t}]=Object(i.useContext)(n),[c,s]=Object(i.useState)(!1),l=()=>s(!c);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,h.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,b?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(a.jsx)(p.a,{}):Object(a.jsx)(d.a,{})}),Object(a.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(a.jsx)(v.a,{}):Object(a.jsx)(x.a,{})})]})};c(29);var f=()=>{const{homepage:e,title:t}=r;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(g,{})]})},N=c(8),_=c.n(N),S=c(16),C=c.n(S);c(30);var w=()=>{const{name:e,role:t,description:c,resume:s,social:i}=o;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[s&&Object(a.jsx)("a",{href:s,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(C.a,{})})]})]})]})},y=c(6),A=c.n(y),q=c(17),P=c.n(q);c(32);var E=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},A()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(P.a,{})})]})};c(33);var R=()=>j.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(a.jsx)(E,{project:e},A()())))})]}):null;c(34);var T=()=>h.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:h.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())))})]}):null,I=c(18),L=c.n(I);c(35);var M=()=>{const[e,t]=Object(i.useState)(!1);return Object(i.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(L.a,{fontSize:"large"})})}):null};c(36);var F=()=>b?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(b),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(37);var J=()=>Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})});c(38);var H=()=>{const[{themeName:e}]=Object(i.useContext)(n);return Object(a.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(a.jsx)(f,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(w,{}),Object(a.jsx)(R,{}),Object(a.jsx)(T,{}),Object(a.jsx)(F,{})]}),Object(a.jsx)(M,{}),Object(a.jsx)(J,{})]})};c(39);Object(s.render)(Object(a.jsx)(l,{children:Object(a.jsx)(H,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e7a1016a.chunk.js.map