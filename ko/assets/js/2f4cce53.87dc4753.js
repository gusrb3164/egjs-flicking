(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),c=(n(0),n(452)),i=n(455),o=n(456),l={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},s={unversionedId:"using-the-methods",id:"version-4.1.0/using-the-methods",isDocsHomePage:!1,title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.1.0/using-the-methods.mdx",sourceDirName:".",slug:"/using-the-methods",permalink:"/egjs-flicking/ko/docs/4.1.0/using-the-methods",editUrl:null,version:"4.1.0",frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},sidebar:"version-4.1.0/docs",previous:{title:"Quick Start",permalink:"/egjs-flicking/ko/docs/4.1.0/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-flicking/ko/docs/4.1.0/listening-to-events"}},u=[],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.a,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"js",mdxType:"TabItem"},Object(c.b)("p",null,"You can call methods directly from the Flicking instance."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#el", options);\n\nflicking.next();\n'))),Object(c.b)(o.a,{value:"react",mdxType:"TabItem"},Object(c.b)("p",null,"You can call methods of Flicking by getting a ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," of Flicking"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, Component } from "react";\nimport Flicking, { FlickingError } from "@egjs/react-flicking";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.flicking = createRef();\n    this.panels = [0, 1, 2];\n  }\n  render() {\n    return <Flicking ref={this.flicking}>\n      { this.panels.map(idx => <div className="panel" key={idx}>{idx}</div>) }\n    </Flicking>;\n  }\n  async moveToNextPanel() {\n    try {\n      await this.flicking.next();\n    } catch (e) {\n      console.log(e instanceof FlickingError); // true\n      console.log(e.code);\n    }\n  }\n}\n')),Object(c.b)("p",null,"See ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),Object(c.b)(o.a,{value:"vue",mdxType:"TabItem"},Object(c.b)("p",null,"You can access instance of Flicking component with the ",Object(c.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),Object(c.b)("p",null,"Then call methods of it like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),Object(c.b)(o.a,{value:"vue3",mdxType:"TabItem"},Object(c.b)("p",null,"You can access instance of Flicking component with the ",Object(c.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),Object(c.b)("p",null,"Then call methods of it like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),Object(c.b)(o.a,{value:"angular",mdxType:"TabItem"},Object(c.b)("p",null,"There're few ways to interact with child component in Angular.",Object(c.b)("br",{parentName:"p"}),"\n","See ",Object(c.b)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Flicking."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'@Component({\n  selector: \'flicking-parent\',\n  template: `\n    <button (click)="flick.prev()">Prev</button>\n    <button (click)="flick.next()">Next</button>\n    <ngx-flicking #flick></ngx-flicking>\n  `\n})\nexport class FlickingParent { }\n'))),Object(c.b)(o.a,{value:"preact",mdxType:"TabItem"},Object(c.b)("p",null,"You can call methods of Flicking by getting a ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," of Flicking"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, render } from "preact";\nimport Flicking, { FlickingError } from "@egjs/preact-flicking";\n\nconst ref = createRef();\nrender(<Flicking ref={ref}>{...}</Flicking>, dom);\n\nconst flicking = ref.current;\nflicking.next();\n')),Object(c.b)("p",null,"See ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info."))),Object(c.b)("p",null,"See all available methods at our ",Object(c.b)("a",{parentName:"p",href:"api/Flicking#methods"},"API")," page."))}b.isMDXComponent=!0},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||c;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},453:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},455:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(457),i=n(453),o=n(60),l=n.n(o);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,b=e.groupId,m=e.className,f=Object(c.a)(),d=f.tabGroupChoices,g=f.setTabGroupChoices,h=Object(r.useState)(o),v=h[0],j=h[1],O=r.Children.toArray(e.children),k=[];if(null!=b){var y=d[b];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&j(y)}var x=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;j(r),null!=b&&(g(b,r),setTimeout((function(){var e,n,r,a,c,i,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,c=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&c<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:x,onClick:x},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},456:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},457:function(e,t,n){"use strict";var r=n(0),a=n(459);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a}}]);