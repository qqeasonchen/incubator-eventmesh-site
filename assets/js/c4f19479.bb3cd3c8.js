"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[8321],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||c;return t?o.createElement(f,i(i({ref:n},m),{},{components:t})):o.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},60211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const c={},i="WeCom",a={unversionedId:"design-document/connect/wecom-connector",id:"design-document/connect/wecom-connector",title:"WeCom",description:"WecomSinkConnector: From EventMesh to WeCom",source:"@site/docs/design-document/03-connect/08-wecom-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/wecom-connector",permalink:"/docs/next/design-document/connect/wecom-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/08-wecom-connector.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DingTalk",permalink:"/docs/next/design-document/connect/dingtalk-connector"},next:{title:"Slack",permalink:"/docs/next/design-document/connect/slack-connector"}},l={},s=[{value:"WecomSinkConnector: From EventMesh to WeCom",id:"wecomsinkconnector-from-eventmesh-to-wecom",level:2},{value:"CloudEvent Attributes",id:"cloudevent-attributes",level:3}],m={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wecom"},"WeCom"),(0,r.kt)("h2",{id:"wecomsinkconnector-from-eventmesh-to-wecom"},"WecomSinkConnector: From EventMesh to WeCom"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"launch your EventMesh Runtime."),(0,r.kt)("li",{parentName:"ol"},"enable sinkConnector and check ",(0,r.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"."),(0,r.kt)("li",{parentName:"ol"},"send a message to EventMesh with the topic defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:\n  # default port 10000\n  meshAddress: your.eventmesh.server:10000\n  subject: TEST-TOPIC-WECOM\n  idc: FT\n  env: PRD\n  group: weComSink\n  appId: 5034\n  userName: weComSinkUser\n  passWord: weComPassWord\nsinkConnectorConfig:\n  connectorName: weComSink\n  # Please refer to: https://developer.work.weixin.qq.com/document/path/90236\n  robotWebhookKey: weComRobotWebhookKey\n")),(0,r.kt)("h3",{id:"cloudevent-attributes"},"CloudEvent Attributes"),(0,r.kt)("p",null,"When using the eventmesh-connector-wecom sinking event, you need to add the corresponding extension filed in CloudEvent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When key=",(0,r.kt)("inlineCode",{parentName:"li"},"wecomtemplatetype"),", value=",(0,r.kt)("inlineCode",{parentName:"li"},"text"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"markdown"),", indicating the text type of the event.")))}u.isMDXComponent=!0}}]);