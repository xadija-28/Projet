"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["react-code-view"],{10089:(e,r,t)=>{var o=t(77083),_=t(79953),s=t(85893),a=t(34232),n=t(32769),d=t(73968),i=t(69942),l=t(11117),c=t(67294),p=t(34493),m=t(90874);function u({children:e}){let r=(0,d.T)(),[t]=c.useState(r?.repo),[o]=c.useState(r?.currentUser),_=(0,c.useMemo)(()=>({}),[]);return(0,c.useEffect)(()=>{let e=document.querySelector(".footer");e&&(e.querySelector(".mt-6")?.classList.replace("mt-6","mt-0"),e.querySelector(".border-top")?.classList.remove("border-top"))},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{"data-hydrostats":"publish"}),(0,s.jsx)(i.xp,{initialValue:i._G.xxxlarge,children:(0,s.jsx)(a.n,{appName:"react-code-view",category:"",metadata:_,children:(0,s.jsx)(m.M,{user:o,children:(0,s.jsx)(n.d,{repository:t,children:(0,s.jsx)(l.K,{children:(0,s.jsx)(p.o,{children:e})})})})})})]})}try{u.displayName||(u.displayName="App")}catch{}var h=t(80895);(0,_.g)("react-code-view",()=>({App:u,routes:[(0,o.g)({path:"/:owner/:repo/tree/:branch/:path/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/blob/:branch/:path/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/blame/:branch/:path/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/edit/:branch/:path/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/new/:branch/:path/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/new/:branch/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/tree/delete/:branch/:path/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/delete/:branch/:path/*",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo",Component:h.Z,shouldNavigateOnError:!0}),(0,o.g)({path:"/:owner/:repo/tree/:branch/*",Component:h.Z,shouldNavigateOnError:!0})]}))},77083:(e,r,t)=>{t.d(r,{g:()=>o});function o({path:e,Component:r,shouldNavigateOnError:t,transitionType:o}){return{path:e,Component:r,coreLoader:async function({location:e}){let r;try{let t=`${e.pathname}${e.search}`;r=await window.fetch(t,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest","X-GitHub-Target":"dotcom"}})}catch(e){return{type:t?"route-handled-error":"error",error:{type:"fetchError"}}}if(r.redirected)return{type:"redirect",url:r.url};if(!r.ok)return{type:t?"route-handled-error":"error",error:{type:"httpError",httpStatus:r.status}};try{let e=await r.json();return{type:"loaded",data:e,title:e.title}}catch(e){return{type:t?"route-handled-error":"error",error:{type:"badResponseError"}}}},loadFromEmbeddedData:function({embeddedData:e}){return{data:e,title:e.title}},transitionType:o}}}},e=>{var r=r=>e(e.s=r);e.O(0,["react-lib","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_Overlay_Overlay_js-node_modules_primer_react_lib-es-fa1130","vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-85a14b","vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js","vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js","vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc0","vendors-node_modules_react-router-dom_dist_index_js","vendors-node_modules_primer_react_lib-esm_PageLayout_PageLayout_js","vendors-node_modules_github_relative-time-element_dist_index_js","vendors-node_modules_primer_react_lib-esm_ConfirmationDialog_ConfirmationDialog_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2","vendors-node_modules_primer_react_lib-esm_Dialog_js-node_modules_primer_react_lib-esm_Flash_F-ad64b6","vendors-node_modules_primer_react_lib-esm_TreeView_TreeView_js","vendors-node_modules_primer_react_lib-esm_UnderlineNav_index_js","vendors-node_modules_primer_react_lib-esm_AvatarStack_AvatarStack_js-node_modules_primer_reac-423237","vendors-node_modules_primer_react_lib-esm_Button_LinkButton_js-node_modules_primer_react_lib--cf1b7e","ui_packages_failbot_failbot_ts","ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92","ui_packages_react-core_register-app_ts","ui_packages_paths_index_ts","ui_packages_ref-selector_RefSelector_tsx","app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869","ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-390327","app_assets_modules_react-code-view_pages_CodeView_tsx"],()=>r(10089)),e.O()}]);
//# sourceMappingURL=react-code-view-395b3de0dbb8.js.map