import{c as d,B as s,r as c,a as t,g as r,H as h,U as p,b as i,P as b,F as w,L as f}from"./render-DtgAYoo9.js";const P=e=>{const{subscribe:g,notify:n}=d(),o=()=>window.location.pathname.replace(s,"")||"/",u=()=>e[o()],l=a=>{window.history.pushState(null,null,s+a),n()};return window.addEventListener("popstate",()=>n()),{get path(){return o()},push:l,subscribe:g,getTarget:u}};c.set(P({"/":h,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new w;return i(f,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new p;return i(b,null)}}));function m(){c.get().subscribe(t),r.subscribe(t),t()}m();
