(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237,4565],{1805:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var n=a(7294),r=a(1904),c=a(6010),l=a(6742),s=a(2263),o="title_ttk2",i="subtitle_3GeI",m="description_hzZe",u="heroBanner_FmNZ",f="buttons_2PKm",d="heroImage_3Lrn",h=a.p+"assets/images/eventmesh-17a17861a5ebbc3801f4ab45d552bb82.png",p=function(){var e=(0,s.Z)().siteConfig;return n.createElement("header",{className:(0,c.Z)("hero",u)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement("h1",{className:o},e.title),n.createElement("h2",{className:i},"Incubating"),n.createElement("p",{className:m},e.tagline),n.createElement("div",{className:f},n.createElement(l.Z,{className:"button button--primary button--lg",to:"/docs/intro"},"Get Started"),n.createElement(l.Z,{className:"button button--secondary button--outline button--lg",href:"https://github.com/apache/incubator-eventmesh"},"GitHub"))),n.createElement("div",{className:(0,c.Z)("col col--6",d)},n.createElement("img",{src:h,alt:"EventMesh"})))))},E="title_2D2I",b="description_KpAh",g="feature_3oKz",v="features_1kL8",_=[{title:"Orchestration",description:"Event Orchestration and Streaming",image:a.p+"assets/images/eventmesh-orchestration-c341b205c994f5863cb0c1c9da18fca9.png"},{title:"Federation",description:"Full Mesh and Federation Governance",image:a.p+"assets/images/eventmesh-federation-181ca97a0dc24278fc184e92d74e2bfe.png"}],N=function(e){var t=e.title,a=e.description,r=e.image;return n.createElement("div",{className:(0,c.Z)("col col--6 text--center",g)},n.createElement("p",{className:E},t),n.createElement("p",{className:b},a),n.createElement("img",{src:r,alt:t}))},Z=function(){return n.createElement("section",{className:v},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},_.map((function(e){var t=e.title,a=e.description,r=e.image;return n.createElement(N,{key:t,title:t,description:a,image:r})})))))},k=function(){return n.createElement(r.Z,{description:"Apache EventMesh (Incubating)"},n.createElement(p,null),n.createElement("main",null,n.createElement(Z,null)))}},4971:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var n=a(2122),r=a(9756),c=a(7294),l=a(6010),s=a(6742),o=a(941),i=a(4996),m=a(3919),u=a(8465),f=a(8617),d="footerLogoLink_qW4Z",h="subtitle_32k1",p=a.p+"assets/images/incubator-logo-8b9b2c54534acf0eb5aae24f4ac84b1a.png",E=function(){return c.createElement("div",{className:"container container--fluid"},c.createElement("img",{src:p,alt:"Apache Incubator Logo",width:"318px"}),c.createElement("p",{className:h},"Apache EventMesh (Incubating) is an effort undergoing incubation at The Apache Software Foundation, sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF."))},b=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,l=e.label,o=e.prependBaseUrlToHref,u=(0,r.Z)(e,b),d=(0,i.Z)(t),h=(0,i.Z)(a,{forcePrependBaseUrl:!0});return c.createElement(s.Z,(0,n.Z)({className:"footer__link-item"},a?{href:o?h:a}:{to:d},u),a&&!(0,m.Z)(a)?c.createElement("span",null,l,c.createElement(f.Z,null)):l)}var v=function(e){var t=e.sources,a=e.alt;return c.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var _=function(){var e=(0,o.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,f={light:(0,i.Z)(u.src),dark:(0,i.Z)(u.srcDark||u.src)};return e?c.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},c.createElement("div",{className:"container"},r&&r.length>0&&c.createElement("div",{className:"row footer__links"},r.map((function(e,t){return c.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.createElement("li",{key:e.href||e.to,className:"footer__item"},c.createElement(g,e))}))):null)}))),c.createElement(E,null),(u||a)&&c.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&c.createElement("div",{className:"margin-bottom--sm"},u.href?c.createElement(s.Z,{href:u.href,className:d},c.createElement(v,{alt:u.alt,sources:f})):c.createElement(v,{alt:u.alt,sources:f})),a?c.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);