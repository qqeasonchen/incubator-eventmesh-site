"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,s(s({ref:t},l),{},{components:r})):n.createElement(k,s({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},s="eventmesh-store \u5feb\u901f\u5165\u95e8\u8bf4\u660e",c={unversionedId:"instruction/store-with-docker",id:"version-v1.7.0/instruction/store-with-docker",title:"eventmesh-store \u5feb\u901f\u5165\u95e8\u8bf4\u660e",description:"\u4f9d\u8d56",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7.0/instruction/01-store-with-docker.md",sourceDirName:"instruction",slug:"/instruction/store-with-docker",permalink:"/zh/docs/v1.7.0/instruction/store-with-docker",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.7.0/instruction/01-store-with-docker.md",tags:[],version:"v1.7.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe",permalink:"/zh/docs/v1.7.0/roadmap"},next:{title:"eventmesh-store \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/v1.7.0/instruction/store"}},i={},p=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eventmesh-store-\u5feb\u901f\u5165\u95e8\u8bf4\u660e"},"eventmesh-store \u5feb\u901f\u5165\u95e8\u8bf4\u660e"),(0,o.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux/Unix\uff1b\n64\u4f4dJDK 1.8+;\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u83507.0.*\n4g+\u53ef\u7528\u78c1\u76d8\u7528\u4e8eeventmesh-store\u670d\u52a1\u5668\neventmesh\u5728\u975estandalone\u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56RocketMQ\u4f5c\u4e3a\u5b58\u50a8\u5c42\uff1b\u82e5\u91c7\u7528standalone\u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884cruntime\u7684\u90e8\u7f72\n")),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u76f4\u63a5\u4ece docker hub \u4e0a\u83b7\u53d6 RocketMQ \u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#\u83b7\u53d6 namesrv \u955c\u50cf\nsudo docker pull rocketmqinc/rocketmq-namesrv:4.5.0-alpine\n#\u83b7\u53d6 broker \u955c\u50cf\nsudo docker pull rocketmqinc/rocketmq-broker:4.5.0-alpine\n")),(0,o.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884cnamerv\u5bb9\u5668\u548cbroker\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'#\u8fd0\u884c namerv \u5bb9\u5668\nsudo docker run -d -p 9876:9876 -v `pwd`/data/namesrv/logs:/root/logs -v `pwd`/data/namesrv/store:/root/store --name rmqnamesrv  rocketmqinc/rocketmq-namesrv:4.5.0-alpine sh mqnamesrv\n\n#\u8fd0\u884c broker \u5bb9\u5668\nsudo docker run -d -p 10911:10911 -p 10909:10909 -v `pwd`/data/broker/logs:/root/logs -v `pwd`/data/broker/store:/root/store --name rmqbroker --link rmqnamesrv:namesrv -e "NAMESRV_ADDR=namesrv:9876" rocketmqinc/rocketmq-broker:4.5.0-alpine sh mqbroker -c ../conf/broker.conf\n')),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,o.kt)("strong",{parentName:"p"},"rocketmq-broker ip")," \u662f ",(0,o.kt)("strong",{parentName:"p"},"pod ip"),", \u5982\u679c\u4f60\u60f3\u4fee\u6539\u8fd9\u4e2aip, \u53ef\u4ee5\u901a\u8fc7\u6302\u8f7d\u5bb9\u5668\u4e2d ",(0,o.kt)("strong",{parentName:"p"},"broker.conf")," \u6587\u4ef6\u7684\u65b9\u5f0f\u5e76\u4fee\u6539\u6587\u4ef6\u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},"brokerIP1")," \u914d\u7f6e\u9879\u4e3a\u81ea\u5b9a\u4e49\u503c"),(0,o.kt)("p",null,"\u81f3\u6b64eventmesh-store\u7684\u90e8\u7f72\u5df2\u5b8c\u6210\uff0c\u8bf7\u8f6c\u81f3\u4e0b\u4e00\u6b65\u5b8c\u6210 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/docs/zh/instruction/02-runtime-with-docker.md"},"eventmesh-runtime")," \u7684\u90e8\u7f72"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("p",null,"\u5173\u4e8eRocketMQ\u7684\u5176\u4ed6\u66f4\u591a\u8d44\u6599\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"https://rocketmq.apache.org/docs/quick-start/")))}u.isMDXComponent=!0}}]);