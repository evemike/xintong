import{d as B,t as E,o as s,c as a,a as r,u as t,b as m,M as P,e as c,f as i,F as f,r as b,n as k,g as T,w as x,h as z,i as D,E as R,j as V,k as A,l as F,m as M,p as S,q as I,s as j,v as N,x as w,y as q,z as G,A as H,B as J}from"./index-5201a9d5.js";const L={class:"_header"},O={key:0,class:"h-icon"},W={class:"h-text"},K={key:0,class:"title"},Q={key:1,class:"subhead"},U={key:2,class:"desc"},X={class:"_content"},C=B({__name:"card",props:{icon:null,title:null,subhead:null,desc:null,content:{default:()=>[]},mode:{default:"card"}},setup($){const g=$,{mode:p,icon:d,title:u,subhead:h,desc:_,content:v}=E(g);return(n,y)=>(s(),a("div",{class:k(["_content-card",`mode-${t(p)}`])},[r("div",L,[t(d)?(s(),a("div",O,[m(t(P),{id:t(d)},null,8,["id"])])):c("",!0),r("div",W,[t(u)?(s(),a("div",K,i(t(u)),1)):c("",!0),t(h)?(s(),a("div",Q,i(t(h)),1)):c("",!0),t(_)?(s(),a("div",U,i(t(_)),1)):c("",!0)])]),r("div",X,[(s(!0),a(f,null,b(t(v),o=>(s(),a("div",{key:o,class:"c-item"},i(o),1))),128))])],2))}});const Y={class:"template-introduce"},Z={class:"_text"},ee={class:"_title"},te={class:"_desc"},se={key:0,class:"_link"},ae={class:"_img"},ne={key:0,class:"item-tabs panel-item"},oe={class:"_header"},de={key:0,class:"title"},ce={key:1,class:"subhead"},ie={key:2,class:"desc"},le={key:0,class:k(["_tab-data","cards"])},re={key:1,class:"item-card panel-item"},ue={class:"_header"},_e={key:0,class:"title"},he={key:1,class:"subhead"},me={key:2,class:"desc"},pe={key:0,class:k(["cards"])},ve=B({__name:"index",props:{header:null,items:{default:()=>[]}},setup($){const g=$,p=N(),{header:d,items:u}=E(g),h=_=>{/^http/.test(_)?window.open(_,"_blank"):p.push(_)};return(_,v)=>(s(),a("div",Y,[t(d)?(s(),a("div",{key:0,class:"_header",style:T({background:t(d).background})},[r("div",Z,[r("div",ee,i(t(d).title),1),r("div",te,i(t(d).desc),1),t(d).link?(s(),a("div",se,[m(t(R),{onClick:v[0]||(v[0]=D(()=>{var n;return h((n=t(d))==null?void 0:n.link)},["stop"]))},{default:x(()=>[z(i(t(d).linkText),1)]),_:1})])):c("",!0)]),r("div",ae,[m(t(V),{fit:"cover",src:t(d).img},null,8,["src"])])],4)):c("",!0),(s(!0),a(f,null,b(t(u),(n,y)=>(s(),a("div",{key:`items-${y}`,class:k(["_panel",`_item-${y}`,`mode-${n.mode}`])},[n.mode=="tabs"?(s(),a("div",ne,[r("div",oe,[n.title?(s(),a("div",de,i(n.title),1)):c("",!0),n.subhead?(s(),a("div",ce,i(n.subhead),1)):c("",!0),n.desc?(s(),a("div",ie,i(n.desc),1)):c("",!0)]),m(t(I),{"model-value":n.data[0].title},{default:x(()=>[(s(!0),a(f,null,b(n.data,o=>(s(),A(t(S),{key:o.title,label:o.title,name:o.title},{default:x(()=>[o.data&&o.mode!="tabs"?(s(),a("div",le,[(s(!0),a(f,null,b(o.data,(e,l)=>(s(),a("div",{key:`data-tab-${l}`,class:k(["data-item",`data-item-${l}`])},[m(C,F(M(e)),null,16)],2))),128))])):c("",!0)]),_:2},1032,["label","name"]))),128))]),_:2},1032,["model-value"])])):(s(),a("div",re,[r("div",ue,[n.title?(s(),a("div",_e,i(n.title),1)):c("",!0),n.subhead?(s(),a("div",he,i(n.subhead),1)):c("",!0),n.desc?(s(),a("div",me,i(n.desc),1)):c("",!0)]),n.data?(s(),a("div",pe,[(s(!0),a(f,null,b(n.data,(o,e)=>(s(),a("div",{key:`data-item-${e}`,class:k(["data-item",`data-item-${e}`])},[m(C,j({mode:n.mode},o),null,16,["mode"])],2))),128))])):c("",!0)]))],2))),128))]))}});const ke={class:"page-introduce"},ye=B({__name:"index",setup($){const g=N(),p=H(),d=w(()=>p.params.name+""),u=q({}),h=async()=>{const o=t(d);try{const e=await J("introduce"),{SHOW:l}=e;if(!l.includes(o))return g.go(-1);u.value=e[o]}catch(e){console.error(e)}};(()=>{Promise.all([h()])})(),G(d,o=>{o&&p.path.includes("/introduce")&&h()});const v=w(()=>{var l;const o=t(d),e=((l=t(u))==null?void 0:l.header)||{};return e.linkText||(e.linkText="进入控制台"),e.background||(e.background="#014ACA"),e.img||(e.img=o),e.img=y(e.img),e}),n=w(()=>{const o=t(u);return(o.layout||[]).map(l=>({...o[l]||{}}))}),y=o=>{if(!o)return;let e=o;return/^.*?\.(png|jpg|jpeg|bmp|gif)$/.test(e)||(e=e+".png"),!/^\//.test(e)&&!/^http/.test(e)&&(e="/image/page/introduce/"+e),e};return(o,e)=>(s(),a("div",ke,[m(ve,{header:t(v),items:t(n)},null,8,["header","items"])]))}});export{ye as default};
