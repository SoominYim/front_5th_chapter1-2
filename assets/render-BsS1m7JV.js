var F=Object.defineProperty;var $=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var E=(e,t,r)=>$(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();const q=()=>{const e=new Set;return{subscribe:o=>e.add(o),notify:()=>e.forEach(o=>o())}},T=(e,t)=>{const{subscribe:r,notify:o}=q();let s={...e};const l=c=>{s={...s,...c},o()},a=()=>({...s}),i=Object.fromEntries(Object.entries(t).map(([c,p])=>[c,(...y)=>l(p(a(),...y))]));return{getState:a,setState:l,subscribe:r,actions:i}},V=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:l=>t.setItem(e,JSON.stringify(l)),reset:()=>t.removeItem(e)}),n=(e,t,...r)=>({type:e,props:t,children:r.flat(1/0).filter(o=>o!=null&&o!==!1)}),m=new Map;let f=null;function B(e){f=e,m.forEach((t,r)=>{A(r)})}function A(e){f&&f.addEventListener(e,t=>{let r=t.target;const o=[];for(;r&&r!==f;)o.push(r),r=r.parentNode;o.push(f);for(let s=o.length-1;s>=0;s--){const l=o[s],a=m.get(e);if(a){const i=a.get(l);if(i){try{i(t)}catch(c){console.error("Error in event handler:",c)}if(t.isPropagationStopped)break}}}})}function O(e,t,r){m.has(t)||(m.set(t,new Map),A(t)),m.get(t).set(e,r)}function G(e,t){if(m.has(t)){const r=m.get(t);r.delete(e),r.size===0&&m.delete(t)}}function b(e){if(e==null||typeof e=="boolean"||typeof e>"u")return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(String(e));if(Array.isArray(e)){const t=document.createDocumentFragment();return e.forEach(r=>t.appendChild(b(r))),t}if(typeof e=="object"&&e.type){const t=document.createElement(e.type);return H(t,e.props),e.children&&e.children.forEach(r=>t.appendChild(b(r))),t}throw new Error("잘못된 VNode 타입입니다.")}function H(e,t){t&&Object.keys(t).forEach(r=>{if(r==="className")e.setAttribute("class",t[r]);else if(r.startsWith("on")){const o=r.slice(2).toLowerCase();O(e,o,t[r])}else e.setAttribute(r,t[r])})}function v(e){return e==null||typeof e=="boolean"||typeof e>"u"?"":typeof e=="string"||typeof e=="number"?String(e):typeof e.type=="function"?v(e.type({...e.props,children:e.children})):(Array.isArray(e.children)&&(e.children=e.children.map(v).filter(t=>t!=null&&t!==!1&&t!=="")),e)}function W(e,t,r){const o={...t},s={...r};Object.keys(s).forEach(l=>{if(l.startsWith("on")&&(!o[l]||o[l]!==s[l])){const a=l.toLowerCase().substring(2);G(e,a)}}),Object.keys(o).forEach(l=>{if(l.startsWith("on")){const a=l.toLowerCase().substring(2);O(e,a,o[l])}else l==="className"?e.setAttribute("class",o[l]):e.setAttribute(l,o[l])}),Object.keys(s).forEach(l=>{l in o||e.removeAttribute(l)})}function D(e,t,r,o=0){var i,c,p,y;const s=e.childNodes[o];if(!r){const d=b(t);e.appendChild(d);return}if(!t){e.removeChild(s);return}if(t.type!==r.type){const d=b(t);e.replaceChild(d,s);return}if(typeof t=="string"||typeof t=="number"){t!==r&&(s.textContent=t);return}W(s,t.props||{},r.props||{});const l=((i=t.children)==null?void 0:i.length)||0,a=((c=r.children)==null?void 0:c.length)||0;for(let d=0;d<Math.max(l,a);d++)D(s,(p=t.children)==null?void 0:p[d],(y=r.children)==null?void 0:y[d],d)}function z(e,t){const r=v(e),o=t._vNode;if(o)D(t,r,o);else{const s=b(r);t.appendChild(s),B(t)}t._vNode=r}const J=1e3,k=J*60,I=k*60,K=I*24,Y=e=>{const t=Date.now()-e;return t<k?"방금 전":t<I?`${Math.floor(t/k)}분 전`:t<K?`${Math.floor(t/I)}시간 전`:new Date(e).toLocaleString()},g=V("user"),Q=1e3,h=Q*60,R=h*60,u=T({currentUser:g.get(),loggedIn:!!g.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*h,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*h,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*h,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*h,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*R,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{login(e,t){const r={username:t,email:"",bio:""};return g.set(r),{...e,currentUser:r,loggedIn:!0}},logout(e){return g.reset(),{...e,currentUser:null,loggedIn:!1}},likePost(e,t){if(!e.loggedIn||!t)return e.loggedIn||alert("로그인 후 이용해주세요"),e;const r=e.posts.map(o=>{if(o.id===t){const s=Array.isArray(o.likeUsers)?[...o.likeUsers]:[],l=s.indexOf(e.currentUser.username);return l===-1?s.push(e.currentUser.username):s.splice(l,1),{...o,likeUsers:s}}return o});return{...e,posts:r}},addPost(e,t){if(!e.loggedIn||!e.currentUser||!t)return e;try{const r=e.currentUser.username;if(!r)return console.error("사용자 이름이 없습니다."),e;const l=[{id:e.posts.reduce((a,i)=>Math.max(a,i.id||0),0)+1,author:r,time:Date.now(),content:t,likeUsers:[]},...e.posts];return{...e,posts:l}}catch(r){return console.error("포스트 추가 중 오류 발생:",r),e}}}),X=({id:e,author:t,time:r,content:o,likeUsers:s=[],activationLike:l=!1})=>{const a=()=>{const{loggedIn:i}=u.getState();i?e&&u.actions.likePost(e):alert("로그인 후 이용해주세요")};return n("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},n("div",{className:"flex items-center mb-2"},n("div",null,n("div",{className:"font-bold"},t),n("div",{className:"text-gray-500 text-sm"},Y(r)))),n("p",null,o),n("div",{className:"mt-2 flex justify-between text-gray-500"},n("span",{className:`like-button cursor-pointer${l?" text-blue-500":""}`,onClick:a},"좋아요 ",s.length),n("span",null,"댓글"),n("span",null,"공유")))},Z=()=>n("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},n("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),n("button",{id:"post-submit",onClick:()=>{const t=document.getElementById("post-content").value.trim();t&&(u.actions.addPost(t),document.getElementById("post-content").value="")},className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded"},"게시")),C=()=>n("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},n("h1",{className:"text-2xl font-bold"},"항해플러스")),j=()=>n("footer",{className:"bg-gray-200 p-4 text-center"},n("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),x={value:null,get(){return this.value},set(e){this.value=e}},P=e=>window.location.pathname===e?"text-blue-600 font-bold":"text-gray-600";function N({onClick:e,children:t,...r}){return n("a",{onClick:s=>{s.preventDefault(),e==null||e(),x.get().push(s.target.href.replace(window.location.origin,""))},...r},t)}const M=()=>{const{loggedIn:e}=u.getState(),{logout:t}=u.actions;return n("nav",{className:"bg-white shadow-md p-2 sticky top-14"},n("ul",{className:"flex justify-around"},n("li",null,n(N,{href:"/",className:P("/")},"홈")),!e&&n("li",null,n(N,{href:"/login",className:P("/login")},"로그인")),e&&n("li",null,n(N,{href:"/profile",className:P("/profile")},"프로필")),e&&n("li",null,n("a",{href:"#",id:"logout",className:"text-gray-600",onClick:r=>{r.preventDefault(),t()}},"로그아웃"))))},re=()=>{const{posts:e,loggedIn:t,currentUser:r}=u.getState();return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(C,null),n(M,null),n("main",{className:"p-4"},t&&n(Z,null),n("div",{id:"posts-container",className:"space-y-4"},[...e].sort((o,s)=>s.time-o.time).map(o=>{const s=t&&r&&r.username&&o.likeUsers&&o.likeUsers.includes(r.username);return n(X,{key:o.id,...o,activationLike:s})}))),n(j,null)))},ne=()=>n("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},n("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),n("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const r=document.getElementById("username").value;r.trim()&&(u.actions.login(r),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate")))}},n("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),n("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),n("div",{className:"mt-4 text-center"},n("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),n("hr",{className:"my-6"}),n("div",{className:"text-center"},n("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),_=()=>n("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},n("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),n("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),n("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),n("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),n("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ee(e){const t={...u.getState().currentUser,...e};g.set(t),u.setState({currentUser:t}),setTimeout(()=>{alert("프로필이 업데이트되었습니다.")},100)}const se=()=>{const{loggedIn:e,currentUser:t}=u.getState(),{username:r="",email:o="",bio:s=""}=t??{};return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(C,null),n(M,{loggedIn:e}),n("main",{className:"p-4"},n("div",{className:"bg-white p-8 rounded-lg shadow-md"},n("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),n("form",{id:"profile-form",onSubmit:a=>{a.preventDefault();const i=new FormData(a.target),c=Object.fromEntries(i);ee(c)}},n("div",{className:"mb-4"},n("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),n("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:r,required:!0})),n("div",{className:"mb-4"},n("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),n("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:o,required:!0})),n("div",{className:"mb-6"},n("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),n("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},s)),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),n(j,null)))},w=class w extends Error{constructor(){super(w.MESSAGE)}};E(w,"MESSAGE","ForbiddenError");let U=w;const S=class S extends Error{constructor(){super(S.MESSAGE)}};E(S,"MESSAGE","UnauthorizedError");let L=S;function oe(){const e=x.get().getTarget()??_,t=document.querySelector("#root");try{z(n(e,null),t)}catch(r){if(r instanceof U){x.get().push("/");return}if(r instanceof L){x.get().push("/login");return}console.error(r)}}export{U as F,re as H,ne as L,se as P,L as U,oe as a,n as b,q as c,u as g,x as r};
