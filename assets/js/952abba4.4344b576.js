(window.webpackJsonp=window.webpackJsonp||[]).push([[116,48,145,188],{297:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return s}));var r=t(16),n=t(301);function l(){var e=Object(r.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=void 0===a?"/":a,l=e.url;return{withBaseUrl:function(e,a){return function(e,a,t,r){var l=void 0===r?{}:r,s=l.forcePrependBaseUrl,c=void 0!==s&&s,i=l.absolute,m=void 0!==i&&i;if(!t)return t;if(t.startsWith("#"))return t;if(Object(n.b)(t))return t;if(c)return a+t;var o=t.startsWith(a)?t:a+t.replace(/^\//,"");return m?e+o:o}(l,t,e,a)}}}function s(e,a){return void 0===a&&(a={}),(0,l().withBaseUrl)(e,a)}},301:function(e,a,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return n}))},302:function(e,a,t){"use strict";var r=t(8),n=t(0),l=t.n(n),s=t(10),c=t(301),i=t(7),m=Object(n.createContext)({collectLink:function(){}}),o=t(297);a.a=function(e){var a,t,u,g=e.isNavLink,E=e.to,f=e.href,d=e.activeClassName,p=e.isActive,v=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,k=void 0===b||b,w=Object(r.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(o.b)().withBaseUrl,h=Object(n.useContext)(m),x=E||f,j=Object(c.a)(x),y=null==x?void 0:x.replace("pathname://",""),O=void 0!==y?(t=y,k&&function(e){return e.startsWith("/")}(t)?N(t):t):void 0,P=Object(n.useRef)(!1),S=g?s.e:s.c,C=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!C&&j&&null!=O&&window.docusaurus.prefetch(O),function(){C&&u&&u.disconnect()}}),[O,C,j]);var I=null!==(a=null==O?void 0:O.startsWith("#"))&&void 0!==a&&a,F=!O||!j||I;return O&&j&&!I&&!v&&h.collectLink(O),F?l.a.createElement("a",Object.assign({href:O},x&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):l.a.createElement(S,Object.assign({},w,{onMouseEnter:function(){P.current||null==O||(window.docusaurus.preload(O),P.current=!0)},innerRef:function(e){var a,t;C&&e&&j&&(a=e,t=function(){null!=O&&window.docusaurus.prefetch(O)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(a),u.disconnect(),t())}))}))).observe(a))},to:O||""},g&&{isActive:p,activeClassName:d}))}},61:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(303),s=t(309);a.default=()=>{const e=[new s.b];return n.a.createElement("div",{className:"container main-logo-container mb-4"},n.a.createElement("div",{className:"main-logo-wrapper"},n.a.createElement(l.b,{plugins:e,circular:!0,onMove:e=>{const a=e.currentTarget.panels,t=e.currentTarget.camera,r=t.position-t.alignPosition-t.offset,n=e.currentTarget.viewport.width/2;t.element.style.perspectiveOrigin=`${r+n}px 50%`,a.forEach((e=>{e.element.style.transform=`translateZ(${100*Math.abs(e.outsetProgress)}px) rotateY(${15*e.outsetProgress}deg)`}))}},n.a.createElement("div",{className:"main-logo-box"},n.a.createElement("p",{className:"image is-1by1"})),n.a.createElement("div",{className:"main-logo-box"},n.a.createElement("p",{className:"image is-1by1"})),n.a.createElement("div",{className:"main-logo-box"},n.a.createElement("p",{className:"image is-1by1"})),n.a.createElement("div",{className:"main-logo-box"},n.a.createElement("p",{className:"image is-1by1"})),n.a.createElement("div",{className:"main-logo-box"},n.a.createElement("p",{className:"image is-1by1"})))),n.a.createElement("img",{className:"flicking-logo",src:"img/flicking.svg"}))}},62:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(302),s=t(297);a.default=()=>n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},n.a.createElement("figure",{className:"image is-32x32 mx-5"},n.a.createElement("img",{src:"img/icons/typescript.svg"})),n.a.createElement("span",{className:"subtitle has-text-black"},"Typescript")),n.a.createElement("div",{className:"block"},n.a.createElement("p",null,"Flicking is fully written in ",n.a.createElement("a",{href:"https://www.typescriptlang.org/",target:"_blank"},"Typescript"),", and every classes, properties, and events are correctly typed and exported."))),n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},n.a.createElement("figure",{className:"image is-32x32 mx-5"},n.a.createElement("img",{src:"img/icons/nuxt.svg"})),n.a.createElement("span",{className:"subtitle has-text-black"},"SSR")),n.a.createElement("div",{className:"block"},"Flicking is designed to support Server-Side Rendering(SSR), and can be used with famous SSR frameworks like ",n.a.createElement("a",{href:"https://nextjs.org/",target:"_blank"},"Next.js")," or ",n.a.createElement("a",{href:"https://nuxtjs.org/",target:"_blank"},"Nuxt.js"),"."))),n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},n.a.createElement("figure",{className:"image is-32x32 mx-5"},n.a.createElement("img",{src:"img/icons/books.svg"})),n.a.createElement("span",{className:"subtitle has-text-black"},"Rich API")),n.a.createElement("div",{className:"block"},n.a.createElement("p",null,"Flicking comes with a rich API. You can use it to create your own customized Flicking & Plugins."),n.a.createElement("p",null,"Check our ",n.a.createElement(l.a,{to:Object(s.a)("docs/api/Flicking")},"API Docs")))),n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},n.a.createElement("figure",{className:"image is-32x32 mx-5"},n.a.createElement("img",{src:"img/icons/extension.svg"})),n.a.createElement("span",{className:"subtitle has-text-black"},"Plugins")),n.a.createElement("div",{className:"block"},n.a.createElement("p",null,"Flicking can be enhanced with a set of plugins, like AutoPlay, Fade, and Parallax."),n.a.createElement("p",null,"See more at ",n.a.createElement(l.a,{to:Object(s.a)("plugins")},"Plugins"))))),n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},n.a.createElement("figure",{className:"image is-32x32 mx-5"},n.a.createElement("img",{src:"img/icons/internetexplorer.svg"})),n.a.createElement("span",{className:"subtitle has-text-black"},"Supports IE9+ (With polyfills)")),n.a.createElement("div",null,n.a.createElement("p",null,"With the Promise polyfill and flicking-inline CSS, Flicking can support Internet Explorer 9+"))),n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},n.a.createElement("figure",{className:"image is-32x32 mx-5"},n.a.createElement("img",{src:"img/icons/arrow_right.svg"})),n.a.createElement("span",{className:"subtitle has-text-black"},"Progress")),n.a.createElement("div",{className:"block"},n.a.createElement("p",null,"Flicking supports progress, which can help to create the most fluent & smooth animation along the panel movement."),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.a,{to:Object(s.a)("docs/api/Camera#progress")},"camera.progress")),n.a.createElement("li",null,n.a.createElement(l.a,{to:Object(s.a)("docs/api/Panel#progress")},"panel.progress")),n.a.createElement("li",null,n.a.createElement(l.a,{to:Object(s.a)("docs/api/Panel#outsetProgress")},"panel.outsetProgress")))))))},63:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(303),s=t(309),c=t(66),i=t.n(c);a.default=function(){var e=[new s.b];return n.a.createElement(l.b,{className:"mb-2",plugins:e,circular:!0},n.a.createElement("div",{className:"framework-logo button mr-2 is-danger"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/angular.svg"})),n.a.createElement("span",null,"@egjs/ngx-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 is-info"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/react.svg"})),n.a.createElement("span",null,"@egjs/react-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 is-success"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/vue.svg"})),n.a.createElement("span",null,"@egjs/vue-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 "+i.a["is-vue3"]},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/vue.svg"})),n.a.createElement("span",null,"@egjs/vue3-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 is-warning"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/preact.svg"})),n.a.createElement("span",null,"@egjs/preact-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 is-danger"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/angular.svg"})),n.a.createElement("span",null,"@egjs/ngx-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 is-info"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/react.svg"})),n.a.createElement("span",null,"@egjs/react-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 is-success"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/vue.svg"})),n.a.createElement("span",null,"@egjs/vue-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 "+i.a["is-vue3"]},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/vue.svg"})),n.a.createElement("span",null,"@egjs/vue3-flicking")),n.a.createElement("div",{className:"framework-logo button mr-2 is-warning"},n.a.createElement("div",{className:"framework-logo-wrapper mr-2"},n.a.createElement("img",{src:"img/icons/preact.svg"})),n.a.createElement("span",null,"@egjs/preact-flicking")))}},67:function(e,a,t){"use strict";t.r(a);var r,n,l=t(0),s=t.n(l),c=t(302),i=t(297);function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u,g,E=function(e){var a=e.title,t=e.titleId,s=o(e,["title","titleId"]);return l.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":t},s),a?l.createElement("title",{id:t},a):null,r||(r=l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),n||(n=l.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"})))};function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=function(e){var a=e.title,t=e.titleId,r=d(e,["title","titleId"]);return l.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":t},r),a?l.createElement("title",{id:t},a):null,u||(u=l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),g||(g=l.createElement("path",{d:"M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"})))},v=t(61),b=t(62),k=t(63);a.default=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"my-4"},s.a.createElement("div",{className:"hero",style:{overflow:"hidden"}},s.a.createElement(v.default,null),s.a.createElement("div",{className:"block is-flex is-justify-content-center"},s.a.createElement(c.a,{className:"button mr-2",to:Object(i.a)("docs/")},"\ud83d\ude80 Get Started"),s.a.createElement(c.a,{className:"button pl-5",to:"https://github.com/naver/egjs-flicking"},s.a.createElement("span",{className:"icon is-small mr-2"},s.a.createElement("img",{src:"img/icons/github.svg"})),s.a.createElement("span",null,"GitHub")),s.a.createElement(c.a,{className:"button",to:"https://github.com/naver/egjs-flicking/stargazers"},s.a.createElement("img",{src:"img/icons/star.svg"}),s.a.createElement("img",{alt:"GitHub Repo stars",src:"https://img.shields.io/github/stars/naver/egjs-flicking?color=%23ffffff&label=%20&style=for-the-badge"}))))),s.a.createElement("article",{className:"container mb-6"},s.a.createElement("div",{className:"block mb-6"},s.a.createElement("p",{className:"title"},s.a.createElement(E,{className:"main-icon"})," Framework Ready"),s.a.createElement("p",{className:"subtitle"},"Use Flicking in your favorite framework!"),s.a.createElement(k.default,null)),s.a.createElement("div",{className:"block my-6"},s.a.createElement("p",{className:"title"},s.a.createElement(p,{className:"main-icon"})," Features"),s.a.createElement(b.default,null))),s.a.createElement("footer",null,s.a.createElement("div",{className:"hero is-medium is-warning"},s.a.createElement("div",{className:"hero-body container"},s.a.createElement("p",{className:"title has-text-dark is-flex is-align-items-center"},s.a.createElement("img",{className:"icon is-medium mr-3",src:"img/icons/task_alt.svg"}),s.a.createElement("span",null,"Ready to get started?")),s.a.createElement("p",{className:"subtitle has-text-dark"},"Check our Options & Demos to see what you can do with Flicking"),s.a.createElement(c.a,{className:"button is-white m-1",to:Object(i.a)("docs/")},"\ud83d\ude80 Get Started"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("options/")},"\ud83d\udcc4 API"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("options/")},"\u2699\ufe0f Options"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("demos/")},"\u2728 Demos"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("plugins/")},"\ud83d\udee0\ufe0f Plugins"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("showcases/")},"\ud83c\udfad Showcases")))))}}]);