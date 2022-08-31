"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[509],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={},o="How to Write Unit Test",u={unversionedId:"write-unit-test",id:"write-unit-test",title:"How to Write Unit Test",description:"- Each unit test case should use assertions instead of System.out output or if statement",source:"@site/community/03-write-unit-test.md",sourceDirName:".",slug:"/write-unit-test",permalink:"/community/write-unit-test",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Release",permalink:"/community/release"},next:{title:"Contact Us",permalink:"/community/contact"}},c={},p=[{value:"Location and Naming Rules",id:"location-and-naming-rules",level:2},{value:"Assertion Usage",id:"assertion-usage",level:2},{value:"Common Assertion",id:"common-assertion",level:3},{value:"Example",id:"example",level:3},{value:"<code>assertEquals()</code>",id:"assertequals",level:4},{value:"<code>assertTrue()</code>",id:"asserttrue",level:4},{value:"<code>assertFalse()</code>",id:"assertfalse",level:4},{value:"<code>assertNull()</code>",id:"assertnull",level:4},{value:"<code>assertNotNull()</code>",id:"assertnotnull",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-write-unit-test"},"How to Write Unit Test"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each unit test case should use assertions instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"System.out")," output or ",(0,l.kt)("inlineCode",{parentName:"li"},"if")," statement"),(0,l.kt)("li",{parentName:"ul"},"Each unit test case shouldn't call other cases or depend on the order of execution."),(0,l.kt)("li",{parentName:"ul"},"Each unit test case should be repeatable and not depend on the external environment because the test might be executed in the continuous integration."),(0,l.kt)("li",{parentName:"ul"},"The scope of each unit test should be small enough to help locate the problem at the method level.")),(0,l.kt)("h2",{id:"location-and-naming-rules"},"Location and Naming Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The unit test should be placed in ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/java"),"."),(0,l.kt)("li",{parentName:"ul"},"The unit test configuration file should be placed in ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/resources"),". For example:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Class to be tested: ",(0,l.kt)("inlineCode",{parentName:"li"},"src/main/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBody.java")),(0,l.kt)("li",{parentName:"ul"},"Unit test: ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBodyTest.java")),(0,l.kt)("li",{parentName:"ul"},"Unit test configuration: ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/resources/configuration.properties")))),(0,l.kt)("li",{parentName:"ul"},"The package name of the unit test class should be identical to the class to be tested."),(0,l.kt)("li",{parentName:"ul"},"The name of the unit test class should be ",(0,l.kt)("inlineCode",{parentName:"li"},"{class or interface to be tested}Test"),". For example:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Class to be tested: ",(0,l.kt)("inlineCode",{parentName:"li"},"EventMeshUtil")),(0,l.kt)("li",{parentName:"ul"},"Unit test class: ",(0,l.kt)("inlineCode",{parentName:"li"},"EventMeshUtilTest")))),(0,l.kt)("li",{parentName:"ul"},"The name of each test case should be ",(0,l.kt)("inlineCode",{parentName:"li"},"test{method name}"),". For example:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Method to be tested: ",(0,l.kt)("inlineCode",{parentName:"li"},"addProp(String key, String val)")),(0,l.kt)("li",{parentName:"ul"},"Unit test case: ",(0,l.kt)("inlineCode",{parentName:"li"},"testAddProp"))))),(0,l.kt)("h2",{id:"assertion-usage"},"Assertion Usage"),(0,l.kt)("h3",{id:"common-assertion"},"Common Assertion"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Methods"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Instructions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"assertEquals")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether two objects or primitive types are equal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"assertNotEquals")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether two objects or primitive types are not equal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"assertTrue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given Boolean value is ",(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"assertFalse")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given Boolean value is ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"assertNull")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given object reference is ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"assertNotNull")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given object reference is not ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"assertAll")),(0,l.kt)("td",{parentName:"tr",align:"left"},"When multiple decision logic are processed together if only one error is reported, the whole test will fail")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("h4",{id:"assertequals"},(0,l.kt)("inlineCode",{parentName:"h4"},"assertEquals()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'configuration.init();\nAssert.assertEquals("value1", configuration.eventMeshEnv);\n')),(0,l.kt)("h4",{id:"asserttrue"},(0,l.kt)("inlineCode",{parentName:"h4"},"assertTrue()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BaseResponseHeader header = BaseResponseHeader.buildHeader("200");\nAssert.assertTrue(header.toMap().containsKey(ProtocolKey.REQUEST_CODE));\n')),(0,l.kt)("h4",{id:"assertfalse"},(0,l.kt)("inlineCode",{parentName:"h4"},"assertFalse()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Class<NacosRegistryService> nacosRegistryServiceClass = NacosRegistryService.class;\nField initStatus = nacosRegistryServiceClass.getDeclaredField("INIT_STATUS");\ninitStatus.setAccessible(true);\nObject initStatusField = initStatus.get(nacosRegistryService);\nAssert.assertFalse((Boolean.parseBoolean(initStatusField.toString())));\n')),(0,l.kt)("h4",{id:"assertnull"},(0,l.kt)("inlineCode",{parentName:"h4"},"assertNull()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"DefaultFullHttpResponse response = httpCommand.httpResponse();\nAssert.assertNull(response);\n")),(0,l.kt)("h4",{id:"assertnotnull"},(0,l.kt)("inlineCode",{parentName:"h4"},"assertNotNull()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Codec.Decoder cd = new Codec.Decoder();\nArrayList<Object> result = new ArrayList<>();\ncd.decode(null, buf, result);\nAssert.assertNotNull(result.get(0));\n")))}m.isMDXComponent=!0}}]);