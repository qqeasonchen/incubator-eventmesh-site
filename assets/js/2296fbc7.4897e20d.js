"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6031],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(a),h=r,v=l["".concat(m,".").concat(h)]||l[h]||c[h]||s;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[l]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={title:"v1.2.0 Release",date:new Date("2021-08-01T11:14:52.000Z"),hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619",sidebar_position:4},i=void 0,o={unversionedId:"release-notes/v1.2.0",id:"release-notes/v1.2.0",title:"v1.2.0 Release",description:"Feature",source:"@site/events/release-notes/v1.2.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.2.0",permalink:"/events/release-notes/v1.2.0",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"v1.2.0 Release",date:"2021-08-01T11:14:52.000Z",hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"v1.3.0 Release",permalink:"/events/release-notes/v1.3.0"},next:{title:"v1.1.1 Release",permalink:"/events/release-notes/v1.1.1"}},m={},u=[{value:"Feature",id:"feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2},{value:"Document and code style improvement",id:"document-and-code-style-improvement",level:2}],p={toc:u};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/74"},"ISSUE #74")," Suggest support rocketmq as store"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/176"},"ISSUE #176")," Support Spi for extended implementation to accommodate a variety of MQ"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/190"},"ISSUE #190")," Support pub/sub ,heartbeat manage and subscribe manage for http"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/201"},"ISSUE #201")," Support running eventmesh in docker")),(0,r.kt)("h2",{id:"improvement"},"Improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/391"},"ISSUE #391")," Optimize interface design in eventmesh-connector-api"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/378"},"ISSUE #378")," downstream broadcast msg asynchronously"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/186"},"ISSUE #186")," Separate the eventmesh-connector-defibus and eventmesh-connector-rocketmq config from eventmesh-runtime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/366"},"ISSUE #366")," Clear some legacy concept"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/256"},"ISSUE #256")," Upgrade Openmessaging-api to 2.2.1-pubsub version")),(0,r.kt)("h2",{id:"bug"},"Bug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/397"},"ISSUE #397")," Remove subscription session failed error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/386"},"ISSUE #386")," ConsumerGroup Queue Offset is not synced up correctly after PullConsumer has consumer all the messages in the topic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/382"},"ISSUE #382")," java.lang.NumberFormatException when parsing Long"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/368"},"ISSUE #368")," Racing Condition problem in EventMesh SDK's LiteConsumer HTTP Client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/211"},"ISSUE #211")," Rocketmq-connector throw nullpointer exception"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/203"},"ISSUE #203")," The consumer pull request message's attribute 'bizSeqNo' is null"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/212"},"ISSUE #212")," For multiple listening instances, only the last started instance can receive messages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/216"},"ISSUE #216")," EventMesh ProxyTcpRetryer throws NumberFormatException"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/226"},"ISSUE #226")," eventMesh-rocketmq-connector tcp pub throw operation time out exception"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/188"},"ISSUE #188")," Test send sync RR(request-response) msg failed, just send one message, but receive msgs continuously"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/184"},"ISSUE #184")," Eventmesh-connector-rocketmq can not send and receive msg successfully"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/220"},"ISSUE #220")," pub/sub client fails to start"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/222"},"ISSUE #222")," When onChange is NEW, eventMesh occurred NullPointException")),(0,r.kt)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/393"},"ISSUE #393")," The topic name in test file is long and obscure"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/302"},"ISSUE #302"),' Add "Incubating" to the project name in docs'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/306"},"ISSUE #306")," Modify the package name to org.apache and improve the test cases"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/304"},"ISSUE #304")," Lack Notice file of eventmesh project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/295"},"ISSUE #295")," Lack of licenses in each source file under the eventmesh-runtime module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/265"},"ISSUE #265")," Specification of code structure and file naming"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/219"},"ISSUE #219")," Supply detail information or read.me for eventmesh running in docker"),(0,r.kt)("li",{parentName:"ul"},"[ISSUE #242]","(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/tocol"},"https://github.com/apache/eventmesh/tocol")," document in English")))}l.isMDXComponent=!0}}]);