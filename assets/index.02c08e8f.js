var ue=Object.defineProperty;var H=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var J=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&J(e,o,t[o]);if(H)for(var o of H(t))pe.call(t,o)&&J(e,o,t[o]);return e};import{d as L,u as de,r as f,a as K,o as h,c as Y,w as u,b as l,e as a,N as me,f as fe,g as ve,z as he,h as ge,i as _e,j as q,k as ke,l as ye,m as we,n as Ne,p as Ee,q as xe,s as k,t as $e,v as Ce,x as Fe,y as E,A as b,B as Ie,C as Le,D as I,E as be,F as y,G as Ae,H as De,I as A,L as Pe,J as G,K as Oe,M as Te,O as Be,P as Se,Q as Re,R as Me,S as Ve,T as ze,U as Z,V as je,W as Ue,X as He,Y as Je,Z as We,_ as Ke,$ as Ye,a0 as qe,a1 as Ge}from"./vendor.60359f7c.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};Ze();const Xe=L({setup(e){return window.$message=de(),(t,o)=>null}}),Qe=L({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,r)=>{const s=K("router-view");return h(),Y(a(_e),{locale:a(he),"date-locale":a(ge),"theme-overrides":t.value},{default:u(()=>[l(a(ve),null,{default:u(()=>[l(a(me),null,{default:u(()=>[l(a(fe),null,{default:u(()=>[l(Xe),l(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",X={},tt="/pikpak/",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${tt}${r}`,r in X)return;X[r]=!0;const s=r.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":et,s||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),s)return new Promise((w,v)=>{c.addEventListener("load",w),c.addEventListener("error",v)})})).then(()=>t())};var ot="/pikpak/assets/logo1.08eb9157.png";const d=q.create({});d.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&$.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pikpak.playstar.workers.dev"))===-1&&(e.url="https://pikpak.playstar.workers.dev/"+e.url),e});let x=!1;d.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const r=window.localStorage.getItem("pikpakLoginData"),s=r?JSON.parse(r):{};return s.username&&s.password&&!x?(console.log("wait",o.url),x=!0,d.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(n=>(n.data&&n.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(n.data)),x=!1,d(o))).catch(()=>($.push("/login"),!1))):s.username&&s.password&&x?new Promise((n,c)=>{const w=setInterval(()=>{x||(clearInterval(w),n(d(o)))},100)}):($.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const Q=q.create({});Q.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pikpak.playstar.workers.dev"))===-1&&(e.url="https://pikpak.playstar.workers.dev/"+e.url),e});const yt=Q,ee=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let r=Math.floor(o/10);return e=e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[r]};const st=y("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[y("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),y("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},rt=E("\u4F1A\u5458\u7801"),nt={class:"bottom-user-info"},it={key:0,src:ot,class:"user-info-avatar"},lt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ut={class:"user-info-name"},ct={key:0},pt={class:"action"},dt=E(" \u9000\u51FA\u767B\u5F55 "),mt=E("\u6DFB\u52A0"),ft=L({setup(e){const t=f(!1),o=i=>()=>Z(A,null,{default:()=>Z(i)}),r=ke(),s=ye(),n=f([{label:"\u6587\u4EF6",key:"list",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(je)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),c=f(),w=()=>{d.get("https://user.mypikpak.com/v1/user/me").then(i=>{window.localStorage.setItem("pikpakUser",JSON.stringify(i.data)),c.value=i.data}).catch(i=>{console.log(i)})},v=f(),D=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/about").then(i=>{v.value=i.data}).catch(i=>{console.log(i)})},_=f(),te=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(i=>{var p;_.value=(p=i.data)==null?void 0:p.data})},oe=(i,p)=>{console.log(p),r.push("/"+p.key)};we(()=>{w(),D(),te()});const F=f(),N=f(!1),se=()=>{d.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:F.value}).then(i=>{window.$message.success("\u5151\u6362\u6210\u529F"),D()}).catch(i=>{console.log(i)}).finally(()=>{N.value=!1})},P=f(!1),ae=i=>{P.value=i<800,t.value||(t.value=i<800)};Ne(s,()=>{P.value&&(t.value=!0)});const re=Ee(),ne=()=>{re.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{d.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(i=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),r.push("/login")}).catch(i=>{console.log(i)})}})};return(i,p)=>{const ie=K("router-view"),le=xe("resize");return h(),k(ze,null,[$e(l(a(G),{"has-sider":"",onResize:ae},{default:u(()=>[l(a(Ce),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=m=>t.value=!0),onExpand:p[2]||(p[2]=m=>t.value=!1),bordered:""},{default:u(()=>{var m,O,T,B,S,R,M,V,z,j,U;return[st,l(a(Fe),{options:n.value,value:String(a(s).name),"onUpdate:value":oe},null,8,["options","value"]),t.value?I("",!0):(h(),k("div",at,[E(b(a(ee)((m=v.value)==null?void 0:m.quota.usage))+" / "+b(a(ee)((O=v.value)==null?void 0:O.quota.limit))+" ",1),l(a(Ie),{type:"primary",onClick:p[0]||(p[0]=gt=>N.value=!0)},{default:u(()=>[rt]),_:1}),((T=v.value)==null?void 0:T.quota)?(h(),Y(a(Le),{key:0,type:"line",percentage:Number((((B=v.value)==null?void 0:B.quota.usage)/((S=v.value)==null?void 0:S.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=_.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):I("",!0)])),t.value?I("",!0):(h(),k("div",{key:1,class:be(["sider-bottom",{vip:((M=_.value)==null?void 0:M.status)==="ok"}])},[y("div",nt,[((V=_.value)==null?void 0:V.status)==="ok"?(h(),k("img",it)):(h(),k("img",lt)),y("div",ut,[E(b((z=c.value)==null?void 0:z.name)+" ",1),((j=_.value)==null?void 0:j.status)==="ok"&&((U=_.value)==null?void 0:U.expire)?(h(),k("div",ct,[l(a(Ae),{time:new Date(_.value.expire),type:"datetime"},null,8,["time"])])):I("",!0)]),y("div",pt,[l(a(De),null,{trigger:u(()=>[l(a(A),{onClick:ne},{default:u(()=>[l(a(Pe))]),_:1})]),default:u(()=>[dt]),_:1})])])],2))]}),_:1},8,["collapsed"]),l(a(G),null,{default:u(()=>[l(a(Oe),{style:{height:"100vh"}},{default:u(()=>[l(a(Te),{style:{"max-height":"100vh"}},{default:u(()=>[l(ie)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),l(a(Ve),{show:N.value,"onUpdate:show":p[5]||(p[5]=m=>N.value=m)},{default:u(()=>[l(a(Be),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":u(()=>[l(a(A),{onClick:p[3]||(p[3]=m=>N.value=!1)},{default:u(()=>[l(a(Se))]),_:1})]),action:u(()=>[l(a(Re),{block:!0,type:"primary",disabled:!F.value,onClick:se},{default:u(()=>[mt]),_:1},8,["disabled"])]),default:u(()=>[l(a(Me),{placeholder:"\u4F1A\u5458\u7801",value:F.value,"onUpdate:value":p[4]||(p[4]=m=>F.value=m)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),vt=[{path:"/",name:"home",component:ft,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>g(()=>import("./list.8aafede7.js"),["assets/list.8aafede7.js","assets/list.b938c6ec.css","assets/vendor.60359f7c.js","assets/StreamSaver.55f74170.js","assets/StreamSaver.594f5e9d.css"])},{path:"trash",name:"trash",component:()=>g(()=>import("./trash.d21fe7e1.js"),["assets/trash.d21fe7e1.js","assets/trash.99a3677d.css","assets/vendor.60359f7c.js"])},{path:"setting",name:"setting",component:()=>g(()=>import("./setting.a7d5cc56.js"),["assets/setting.a7d5cc56.js","assets/setting.f947579c.css","assets/vendor.60359f7c.js"])},{path:"share",name:"share",component:()=>g(()=>import("./share.e19ad1af.js"),["assets/share.e19ad1af.js","assets/share.4f9c11c6.css","assets/vendor.60359f7c.js"])}]},{path:"/t/:id?",name:"test",component:()=>g(()=>import("./test.faa8acda.js"),["assets/test.faa8acda.js","assets/vendor.60359f7c.js"])},{path:"/s/:id",name:"shareInfo",component:()=>g(()=>import("./shareInfo.bb04565d.js"),["assets/shareInfo.bb04565d.js","assets/shareInfo.9e107d57.css","assets/vendor.60359f7c.js","assets/StreamSaver.55f74170.js","assets/StreamSaver.594f5e9d.css"])},{path:"/login",name:"login",component:()=>g(()=>import("./login.3f2d1acf.js"),["assets/login.3f2d1acf.js","assets/login.5735a7bc.css","assets/vendor.60359f7c.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/register",name:"register",component:()=>g(()=>import("./register.49a50768.js"),["assets/register.49a50768.js","assets/register.5588ce76.css","assets/vendor.60359f7c.js","assets/phone-pc2.dbf6d71e.js"])}],ht=We({history:Ke(),routes:vt});var $=ht;const C=Ye(Qe);C.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,r=>{let s=r.offsetWidth,n=r.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var c;(c=o.props)==null||c.onResize(s,n)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});C.config.globalProperties.$http=d;C.use($);C.use(Ge,{router:$,siteIdList:[1280510106]});C.mount("#app");export{ee as b,d as i,yt as n};
