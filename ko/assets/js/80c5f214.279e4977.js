(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(8),b=(a(0),a(293)),c={custom_edit_url:null},l={unversionedId:"api/Control",id:"version-4.1.0/api/Control",isDocsHomePage:!1,title:"Control",description:"`ts",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.1.0/api/Control.mdx",sourceDirName:"api",slug:"/api/Control",permalink:"/egjs-flicking/ko/docs/4.1.0/api/Control",editUrl:null,version:"4.1.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.0/api",previous:{title:"AxesController",permalink:"/egjs-flicking/ko/docs/4.1.0/api/AxesController"},next:{title:"FreeControl",permalink:"/egjs-flicking/ko/docs/4.1.0/api/FreeControl"}},i=[{value:"Properties",id:"properties",children:[{value:"controller",id:"controller",children:[]},{value:"activeIndex",id:"activeIndex",children:[]},{value:"activePanel",id:"activePanel",children:[]},{value:"animating",id:"animating",children:[]},{value:"holding",id:"holding",children:[]}]},{value:"Methods",id:"methods",children:[{value:"moveToPosition",id:"moveToPosition",children:[]},{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"enable",id:"enable",children:[]},{value:"disable",id:"disable",children:[]},{value:"updatePosition",id:"updatePosition",children:[]},{value:"updateInput",id:"updateInput",children:[]},{value:"resetActive",id:"resetActive",children:[]},{value:"moveToPanel",id:"moveToPanel",children:[]}]}],p={toc:i};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class Control\n")),Object(b.b)("p",null,"Flicking\uc758 \uc785\ub825 \uc7a5\uce58 & \uc560\ub2c8\uba54\uc774\uc158\uc744 \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#controller"},"controller"),Object(b.b)("br",null),Object(b.b)("a",{href:"#activeIndex"},"activeIndex"),Object(b.b)("br",null),Object(b.b)("a",{href:"#activePanel"},"activePanel"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animating"},"animating"),Object(b.b)("br",null),Object(b.b)("a",{href:"#holding"},"holding")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#moveToPosition"},"moveToPosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#init"},"init"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#enable"},"enable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#disable"},"disable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updatePosition"},"updatePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updateInput"},"updateInput"),Object(b.b)("br",null),Object(b.b)("a",{href:"#resetActive"},"resetActive"),Object(b.b)("br",null),Object(b.b)("a",{href:"#moveToPanel"},"moveToPanel")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"controller"},"controller"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"\uc758 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec \ucef4\ud3ec\ub10c\ud2b8"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"AxesController"},"AxesController")),Object(b.b)("h3",{id:"activeIndex"},"activeIndex"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel"),"\uc758 \uc778\ub371\uc2a4 \ubc88\ud638"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Default"),": 0"),Object(b.b)("h3",{id:"activePanel"},"activePanel"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"\ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("h3",{id:"animating"},"animating"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158 \ub3d9\uc791 \uc5ec\ubd80"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"holding"},"holding"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad/\ud130\uce58\uc911\uc778\uc9c0 \uc5ec\ubd80"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"moveToPosition"},"moveToPosition"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Emits"),": ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"position"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \uc88c\ud45c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc774\ub3d9 \uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"),"\uc758 ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"code"),Object(b.b)("th",{parentName:"tr",align:null},"condition"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),Object(b.b)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \ud328\ub110\uc774 \uc81c\uac70\ub418\uc5c8\uac70\ub098, Camera\uc758 ",Object(b.b)("a",{parentName:"td",href:"Camera#range"},"range")," \ubc16\uc5d0 \uc788\uc744 \uacbd\uc6b0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),Object(b.b)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),Object(b.b)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd\ub41c \uc774\ubca4\ud2b8\ub4e4 \uc911 \ud558\ub098\ub77c\ub3c4 ",Object(b.b)("inlineCode",{parentName:"td"},"stop()"),"\uc774 \ud638\ucd9c\ub41c \uacbd\uc6b0")))),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Control\uc744 \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Control\uc744 \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"enable"},"enable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"disable"},"disable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ub9c9\uc2b5\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"updatePosition"},"updatePosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-success"},"async")),Object(b.b)("p",null,"resize \uc774\ud6c4\uc5d0 position\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"progressInPanel"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Resize \uc774\uc804 \ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110 \ub0b4\uc5d0\uc11c\uc758 \uce74\uba54\ub77c progress \uac12")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",Object(b.b)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),Object(b.b)("h3",{id:"updateInput"},"updateInput"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"Control#controller"},"controller"),"\uc758 \ub0b4\ubd80 \uc0c1\ud0dc\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"resetActive"},"resetActive"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"Control#activePanel"},"activePanel"),"\uc640 ",Object(b.b)("a",{parentName:"p",href:"Control#activeAnchor"},"activeAnchor"),"\ub97c ",Object(b.b)("inlineCode",{parentName:"p"},"null"),"\ub85c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"moveToPanel"},"moveToPanel"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-success"},"async")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \ud574\ub2f9 \ud328\ub110 \uc704\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud574\ub2f9 \ud328\ub110 \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Emits"),": ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"panel"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \ud328\ub110")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"),"\uc758 ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"direction"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \ubc29\ud5a5. ",Object(b.b)("a",{parentName:"td",href:"Flicking#circular"},"circular")," \uc635\uc158 \ud65c\uc131\ud654\uc2dc\uc5d0\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"code"),Object(b.b)("th",{parentName:"tr",align:null},"condition"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),Object(b.b)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \ud328\ub110\uc774 \uc81c\uac70\ub418\uc5c8\uac70\ub098, Camera\uc758 ",Object(b.b)("a",{parentName:"td",href:"Camera#range"},"range")," \ubc16\uc5d0 \uc788\uc744 \uacbd\uc6b0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),Object(b.b)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),Object(b.b)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd\ub41c \uc774\ubca4\ud2b8\ub4e4 \uc911 \ud558\ub098\ub77c\ub3c4 ",Object(b.b)("inlineCode",{parentName:"td"},"stop()"),"\uc774 \ud638\ucd9c\ub41c \uacbd\uc6b0")))))}O.isMDXComponent=!0},293:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),O=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=O(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=O(a),m=n,d=o["".concat(c,".").concat(m)]||o[m]||j[m]||b;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);