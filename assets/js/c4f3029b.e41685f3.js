(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return O}));var a=n(3),r=n(8),b=(n(0),n(293)),c={custom_edit_url:null},l={unversionedId:"api/Renderer",id:"version-4.0.0/api/Renderer",isDocsHomePage:!1,title:"Renderer",description:"`ts",source:"@site/versioned_docs/version-4.0.0/api/Renderer.mdx",sourceDirName:"api",slug:"/api/Renderer",permalink:"/egjs-flicking/docs/4.0.0/api/Renderer",editUrl:null,version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"ExternalRenderer",permalink:"/egjs-flicking/docs/4.0.0/api/ExternalRenderer"},next:{title:"VanillaRenderer",permalink:"/egjs-flicking/docs/4.0.0/api/VanillaRenderer"}},i=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"panels",id:"panels",children:[]},{value:"panelCount",id:"panelCount",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"render",id:"render",children:[]},{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"getPanel",id:"getPanel",children:[]},{value:"updatePanelSize",id:"updatePanelSize",children:[]},{value:"batchInsert",id:"batchInsert",children:[]},{value:"batchRemove",id:"batchRemove",children:[]}]}],p={toc:i};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class Renderer\n")),Object(b.b)("p",null,"A component that manages ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," and its elements"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#panels"},"panels"),Object(b.b)("br",null),Object(b.b)("a",{href:"#panelCount"},"panelCount"),Object(b.b)("br",null),Object(b.b)("a",{href:"#align"},"align")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#render"},"render"),Object(b.b)("br",null),Object(b.b)("a",{href:"#init"},"init"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#getPanel"},"getPanel"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updatePanelSize"},"updatePanelSize"),Object(b.b)("br",null),Object(b.b)("a",{href:"#batchInsert"},"batchInsert"),Object(b.b)("br",null),Object(b.b)("a",{href:"#batchRemove"},"batchRemove")))),Object(b.b)("h2",{id:"constructor"},"Constructor"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"new Renderer(options, options.align)\n")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"},"{}"),Object(b.b)("td",{parentName:"tr",align:"center"},"An options object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.align"),Object(b.b)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An ",Object(b.b)("a",{parentName:"td",href:"Flicking#align"},"align")," value that will be applied to all panels")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"panels"},"panels"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Array of panels"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Array","<",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"See"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"Panel"},"Panel"))),Object(b.b)("h3",{id:"panelCount"},"panelCount"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Count of panels"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"align"},"align"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"A ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",Object(b.b)("a",{parentName:"p",href:"Panel#align"},"align")," value that applied to all panels"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"render"},"render"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Render panel elements inside the camera element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Initialize Renderer"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of ",Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Destroy Renderer and return to initial state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"getPanel"},"getPanel"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Return the ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," at the given index. ",Object(b.b)("inlineCode",{parentName:"p"},"null")," if it doesn't exists."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Panel at the given index")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"See"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"Panel"},"Panel"))),Object(b.b)("h3",{id:"updatePanelSize"},"updatePanelSize"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update all panel sizes"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"batchInsert"},"batchInsert"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Insert new panels at given index",Object(b.b)("br",{parentName:"p"}),"\n","This will increase index of panels after by the number of panels added"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Array","<",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"An array of prepended panels")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Index to insert new panels at")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"elements"),Object(b.b)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An array of element or framework component with element in it")))),Object(b.b)("h3",{id:"batchRemove"},"batchRemove"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Remove the panel at the given index",Object(b.b)("br",{parentName:"p"}),"\n","This will decrease index of panels after by the number of panels removed"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"An array of removed panels")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Index of panel to remove")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"deleteCount"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"},"1"),Object(b.b)("td",{parentName:"tr",align:"center"},"Number of panels to remove from index")))))}O.isMDXComponent=!0},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),O=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=O(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=O(n),j=a,m=o["".concat(c,".").concat(j)]||o[j]||d[j]||b;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<b;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);