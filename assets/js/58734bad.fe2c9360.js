(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),c=(r(0),r(293)),o={custom_edit_url:null},i={unversionedId:"api/FlickingError",id:"version-4.1.1/api/FlickingError",isDocsHomePage:!1,title:"FlickingError",description:"`ts",source:"@site/versioned_docs/version-4.1.1/api/FlickingError.mdx",sourceDirName:"api",slug:"/api/FlickingError",permalink:"/egjs-flicking/docs/api/FlickingError",editUrl:null,version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"AnchorPoint",permalink:"/egjs-flicking/docs/api/AnchorPoint"},next:{title:"Viewport",permalink:"/egjs-flicking/docs/api/Viewport"}},l=[{value:"Constructor",id:"constructor",children:[]}],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class FlickingError extends Error\n")),Object(c.b)("p",null,"Special type of known error that ",Object(c.b)("a",{parentName:"p",href:"Flicking"},"Flicking")," throws."),Object(c.b)("h2",{id:"constructor"},"Constructor"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"new FlickingError(message, code)\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"message"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"no"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Error message")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"code"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"no"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Error code")))))}b.isMDXComponent=!0},293:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);