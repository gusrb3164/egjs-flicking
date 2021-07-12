(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(302),l=a(305);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(l.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(l.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(l.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(310),d=a(295);function u(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(l.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,a=e.versionLabel;return r.a.createElement(l.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.a.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var t=e.versionLabel,a=e.to,n=e.onClick;return r.a.createElement(l.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:r.a.createElement("strong",null,r.a.createElement(i.a,{to:a,onClick:n},r.a.createElement(l.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var f=function(){var e=Object(o.default)().siteConfig.title,t=Object(c.useActivePlugin)({failfast:!0}).pluginId,a=Object(d.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(c.useActiveVersion)(t),i=Object(c.useDocVersionSuggestions)(t),l=i.latestDocSuggestion,s=i.latestVersionSuggestion;if(!s)return r.a.createElement(r.a.Fragment,null);var f,b=null!=l?l:(f=s).docs.find((function(e){return e.id===f.mainDocId}));return r.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},r.a.createElement("div",null,"current"===n.name?r.a.createElement(u,{siteTitle:e,versionLabel:n.label}):r.a.createElement(m,{siteTitle:e,versionLabel:n.label})),r.a.createElement("div",{className:"margin-top--md"},r.a.createElement(v,{versionLabel:s.label,to:b.path,onClick:function(){return a(s.name)}})))},b=a(331),p=a(98),g=a.n(p);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return r.a.createElement(l.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:g.a.lastUpdatedDate},a)}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return r.a.createElement(l.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.a.createElement("strong",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,n=e.lastUpdatedBy;return r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,r.a.createElement(l.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?r.a.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?r.a.createElement(E,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var L=a(378),N=a(3),O=a(8),U=a(294),k=a(99),_=a.n(k),j=function(e){var t=e.className,a=Object(O.a)(e,["className"]);return r.a.createElement("svg",Object(N.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(U.a)(_.a.iconEdit,t),"aria-label":"Edit page"},a),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function y(e){var t=e.editUrl;return r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(j,null),r.a.createElement(l.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var A=a(100),T=a.n(A);t.default=function(e){var t,a=e.content,n=a.metadata,i=a.frontMatter,l=i.image,o=i.keywords,d=i.hide_title,u=i.hide_table_of_contents,m=n.description,v=n.title,p=n.editUrl,g=n.lastUpdatedAt,h=n.formattedLastUpdatedAt,E=n.lastUpdatedBy,N=Object(c.useActivePlugin)({failfast:!0}).pluginId,O=Object(c.useVersions)(N),k=Object(c.useActiveVersion)(N),_=O.length>1;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:v,description:m,keywords:o,image:l}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(U.a)("col",(t={},t[T.a.docItemCol]=!u,t))},r.a.createElement(f,null),r.a.createElement("div",{className:T.a.docItemContainer},r.a.createElement("article",null,_&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",k.label)),!d&&r.a.createElement("header",null,r.a.createElement("h1",{className:T.a.docTitle},v)),r.a.createElement("div",{className:"markdown"},r.a.createElement(a,null))),(p||g||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},p&&r.a.createElement(y,{editUrl:p})),(g||E)&&r.a.createElement(w,{lastUpdatedAt:g,formattedLastUpdatedAt:h,lastUpdatedBy:E}))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:n})))),!u&&a.toc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(L.a,{toc:a.toc}))))}},297:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(16),r=a(301);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,l=i.forcePrependBaseUrl,s=void 0!==l&&l,o=i.absolute,c=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(i,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},301:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},302:function(e,t,a){"use strict";var n=a(8),r=a(0),i=a.n(r),l=a(10),s=a(301),o=a(7),c=Object(r.createContext)({collectLink:function(){}}),d=a(297);t.a=function(e){var t,a,u,m=e.isNavLink,v=e.to,f=e.href,b=e.activeClassName,p=e.isActive,g=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,E=void 0===h||h,w=Object(n.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),L=Object(d.b)().withBaseUrl,N=Object(r.useContext)(c),O=v||f,U=Object(s.a)(O),k=null==O?void 0:O.replace("pathname://",""),_=void 0!==k?(a=k,E&&function(e){return e.startsWith("/")}(a)?L(a):a):void 0,j=Object(r.useRef)(!1),y=m?l.e:l.c,A=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&U&&null!=_&&window.docusaurus.prefetch(_),function(){A&&u&&u.disconnect()}}),[_,A,U]);var T=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,C=!_||!U||T;return _&&U&&!T&&!g&&N.collectLink(_),C?i.a.createElement("a",Object.assign({href:_},O&&!U&&{target:"_blank",rel:"noopener noreferrer"},w)):i.a.createElement(y,Object.assign({},w,{onMouseEnter:function(){j.current||null==_||(window.docusaurus.preload(_),j.current=!0)},innerRef:function(e){var t,a;A&&e&&U&&(t=e,a=function(){null!=_&&window.docusaurus.prefetch(_)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:_||""},m&&{isActive:p,activeClassName:b}))}},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(26),l=a(295),s=a(297);function o(e){var t=e.title,a=e.description,n=e.keywords,o=e.image,c=Object(l.useThemeConfig)().image,d=Object(l.useTitleFormatter)(t),u=Object(s.a)(o||c,{absolute:!0});return r.a.createElement(i.a,null,r.a.createElement("title",null,d),r.a.createElement("meta",{property:"og:title",content:d}),a&&r.a.createElement("meta",{name:"description",content:a}),a&&r.a.createElement("meta",{property:"og:description",content:a}),n&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),u&&r.a.createElement("meta",{property:"og:image",content:u}),u&&r.a.createElement("meta",{name:"twitter:image",content:u}),u&&r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},378:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(294);var l=function(e,t,a){var r=Object(n.useState)(void 0),i=r[0],l=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=a(77),o=a.n(s),c="table-of-contents__link";function d(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(d,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(i.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(d,{toc:t}))}}}]);