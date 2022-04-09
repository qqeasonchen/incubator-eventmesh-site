"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7631],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,v=m["".concat(c,".").concat(h)]||m[h]||l[h]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c="\u901a\u8fc7 Zipkin \u89c2\u5bdf Trace",p={unversionedId:"instructions/eventmesh-trace-Zipkin-instruction",id:"instructions/eventmesh-trace-Zipkin-instruction",title:"\u901a\u8fc7 Zipkin \u89c2\u5bdf Trace",description:"1\u3001\u4e0b\u8f7d\u548c\u8fd0\u884cZipkin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/instructions/eventmesh-trace-Zipkin-instruction.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-trace-Zipkin-instruction",permalink:"/zh/docs/instructions/eventmesh-trace-Zipkin-instruction",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-trace-Zipkin-instruction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eventmesh-store \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/instructions/eventmesh-store-quickstart"},next:{title:"Apache EventMesh (Incubating)",permalink:"/zh/docs/intro"}},u={},l=[{value:"1\u3001\u4e0b\u8f7d\u548c\u8fd0\u884cZipkin",id:"1\u4e0b\u8f7d\u548c\u8fd0\u884czipkin",level:3},{value:"2\u3001\u8fd0\u884ceventmesh",id:"2\u8fd0\u884ceventmesh",level:3},{value:"3\u3001\u76f8\u5173\u7684\u8bbe\u7f6e",id:"3\u76f8\u5173\u7684\u8bbe\u7f6e",level:3},{value:"4\u3001\u89c2\u5bdf",id:"4\u89c2\u5bdf",level:3}],m={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u901a\u8fc7-zipkin-\u89c2\u5bdf-trace"},"\u901a\u8fc7 Zipkin \u89c2\u5bdf Trace"),(0,o.kt)("h3",{id:"1\u4e0b\u8f7d\u548c\u8fd0\u884czipkin"},"1\u3001\u4e0b\u8f7d\u548c\u8fd0\u884cZipkin"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart.html"},"https://zipkin.io/pages/quickstart.html")),(0,o.kt)("h3",{id:"2\u8fd0\u884ceventmesh"},"2\u3001\u8fd0\u884ceventmesh"),(0,o.kt)("p",null,"\u8fd0\u884ceventmesh-starter(\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/instructions/eventmesh-runtime-quickstart"},"eventmesh-runtime-quickstart"),")"),(0,o.kt)("p",null,"\u8fd0\u884ceventmesh-example(\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/instructions/eventmesh-sdk-java-quickstart"},"eventmesh-sdk-java-quickstart"),")"),(0,o.kt)("h3",{id:"3\u76f8\u5173\u7684\u8bbe\u7f6e"},"3\u3001\u76f8\u5173\u7684\u8bbe\u7f6e"),(0,o.kt)("p",null,"eventmesh-runtime/conf/eventmesh.properties\u4e2d\uff1a"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684exporter\u662flog\uff0c\u9700\u8981\u624b\u52a8\u6539\u6210Zipkin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"#trace exporter\neventmesh.trace.exporter.type=Zipkin\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u5173\u4e8eZipkin\u7684\u5404\u79cd\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"#set the maximum batch size to use\neventmesh.trace.exporter.max.export.size=512\n#set the queue size. This must be >= the export batch size\neventmesh.trace.exporter.max.queue.size=2048\n#set the max amount of time an export can run before getting(TimeUnit=SECONDS)\neventmesh.trace.exporter.export.timeout=30\n#set time between two different exports(TimeUnit=SECONDS)\neventmesh.trace.exporter.export.interval=5\n\n#zipkin\neventmesh.trace.export.zipkin.ip=localhost\neventmesh.trace.export.zipkin.port=9411\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u90fd\u662f\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u5982\u679c\u4f60\u5341\u5206\u719f\u6089Zipkin\u7684\u8bdd\u53ef\u4ee5\u81ea\u884c\u4fee\u6539\u3002"),(0,o.kt)("h3",{id:"4\u89c2\u5bdf"},"4\u3001\u89c2\u5bdf"),(0,o.kt)("p",null,"\u6d4f\u89c8\u5668\u6253\u5f00\uff1a ",(0,o.kt)("strong",{parentName:"p"},"localhost:9411")))}h.isMDXComponent=!0}}]);