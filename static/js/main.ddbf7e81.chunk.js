(this["webpackJsonpapp-superheroes"]=this["webpackJsonpapp-superheroes"]||[]).push([[0],{13:function(e,t,r){"use strict";var c=r(53),n=r(0);t.a=function(){return Object(n.jsx)("div",{className:"bg-secondary d-flex justify-content-center",style:{height:"100vh"},children:Object(n.jsx)("section",{className:"align-self-center",children:Object(n.jsx)(c.a,{animation:"grow",role:"status",children:Object(n.jsx)("span",{className:"sr-only"})})})})}},52:function(e,t,r){"use strict";r.r(t);var c=r(2),n=r.n(c),s=r(22),a=r.n(s),o=r(13),l=r(4),i=r(11),u=r.n(i),d=r(6),j=r(0),b=function(){var e=Object(d.b)(),t=e.email,r=e.setEmail,n=e.password,s=e.setPassword,a=e.isLogin,o=e.setIslogin,i=Object(c.useState)(null),b=Object(l.a)(i,2),h=b[0],O=b[1],p=function(){o(!1),O(""),u.a.post("http://challenge-react.alkemy.org/",{email:t,password:n}).catch((function(e){O("\xa1El email y/o password son incorrectos!")})).then((function(e){e?(o(!0),O("")):o(null)}))};return Object(j.jsxs)("div",{className:"container lead m-auto d-flex flex-column justify-content-center",style:{height:"100vh"},children:[Object(j.jsx)("div",{className:"row align-self-center bg-dark rounded shadow-lg border border-primary border-bottom-0 p-4",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("form",{className:"form-group",children:[Object(j.jsx)("div",{className:"text-success",children:"correo: challenge@alkemy.org"}),Object(j.jsx)("div",{className:"text-success",children:"contrase\xf1a: react"}),Object(j.jsx)("input",{onChange:function(e){r(e.target.value),O("")},className:"form-control",type:"text",placeholder:"Introduce tu correo","aria-required":"true",required:!0}),Object(j.jsx)("input",{onChange:function(e){s(e.target.value),O("")},className:"form-control mt-4",type:"password",placeholder:"Introduce tu contrase\xf1a","aria-required":"true",required:!0})]}),null===a?Object(j.jsx)("button",{onClick:p,className:"btn btn-success btn-block w-100 mt-4",children:"Iniciar sesi\xf3n"}):Object(j.jsx)("button",{onClick:p,className:"btn btn-success btn-block w-100 mt-4",disabled:!0,children:Object(j.jsx)("div",{className:"spinner-border spinner-border-sm",role:"status",children:Object(j.jsx)("span",{class:"sr-only"})})})]})}),null!==h?Object(j.jsx)("p",{className:"text-warning text-center h6",children:h}):Object(j.jsx)("span",{})]})},h=function(){var e=Object(d.b)().setIslogin;return Object(j.jsxs)("div",{className:"container-fluid bg-dark py-2 d-flex justify-content-between",children:[Object(j.jsx)("section",{children:Object(j.jsx)("h2",{className:"text-white",children:"Superh\xe9roes Team"})}),Object(j.jsx)("section",{children:Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return e(null)},children:"Cerrar sesi\xf3n"})})]})},O=function(){var e=Object(d.b)(),t=e.searchHeros,r=e.agregarHero,n=e.setIsViewSearch,s=e.addHero,a=e.setAddHero,o=Object(c.useState)(!1),i=Object(l.a)(o,2),u=i[0],b=i[1];return Object(j.jsx)("div",{className:"d-flex py-2 justify-content-center items-content-center lead bg-secondary",children:Object(j.jsxs)("div",{className:"container p-3 rounded d-flex flex-column mt-4 overflow-auto shadow-white ".concat(t[0]?"bg-primary":u?"bg-success":"bg-danger"),style:{height:"100vh"},children:[Object(j.jsx)("section",{className:"mb-4 d-flex align-self-end ".concat(0!==t.length&&"position-fixed"),children:Object(j.jsx)("span",{onClick:function(){n(!1),a(!1)},className:"bg-danger text-white shadow border border-1 rounded-circle p-2 px-3 cursor-pointer",style:{cursor:"pointer"},children:"X"})}),Object(j.jsx)("div",{className:"container h-100 ",children:Object(j.jsx)("div",{className:"row d-flex",children:0!==t.length?t.map((function(e,t){return Object(j.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-4 my-3 bg-dark rounded",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(j.jsxs)("section",{children:[Object(j.jsx)("h5",{className:"text-center text-white",children:e.name}),Object(j.jsx)("div",{class:"text-center",style:{width:"100%",height:"9rem"},children:Object(j.jsx)("img",{className:"text-center",alt:"image de un h\xe9roe",style:{maxWidth:"100%",height:"9rem",borderRadius:"100%"},src:e.image.url})})]}),Object(j.jsx)("section",{className:"my-3",children:Object(j.jsx)("button",{className:"btn btn-primary w-100",onClick:function(){r(e,t),b(!0)},children:"Agregar al equipo"})})]})},e.id)})):s?Object(j.jsx)("div",{className:"col-12 mt-5 text-warning h4 text-center",children:"\xa1Superh\xe9roe agregado exitosamente!"}):Object(j.jsx)("div",{className:"col-12 mt-5 text-warning h4 text-center",children:"No se ha encontrado ning\xfan superh\xe9roe."})})})]})})},p=Object(c.lazy)((function(){return r.e(3).then(r.bind(null,56))})),m=function(){return Object(j.jsx)(d.a,{children:Object(j.jsx)(x,{})})},x=function(){var e=Object(d.b)(),t=e.isViewSearch,r=e.isLogin;return t?Object(j.jsx)(O,{}):r?Object(j.jsxs)(c.Suspense,{fallback:Object(j.jsx)(o.a,{}),children:[Object(j.jsx)(h,{}),Object(j.jsx)(p,{})]}):Object(j.jsx)(b,{})};var f=function(){return Object(j.jsx)("div",{className:"d-flex flex-column align-content-center justify-content-center bg-secondary",children:Object(j.jsx)(m,{})})};r(51);a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},6:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return O}));var c=r(5),n=r(12),s=r.n(n),a=r(24),o=r(7),l=r(4),i=r(2),u=r.n(i);r(11);function d(e,t){var r=t.payload;switch(t.type){case"GET_HEROS":return Object(c.a)(Object(c.a)({},e),{},{heros:r});case"GET_POWERSTATS":return Object(c.a)(Object(c.a)({},e),{},{powerstats:r});case"GET_ALL_HEROS":return Object(c.a)(Object(c.a)({},e),{},{allHeros:r});case"GET_HERO":return Object(c.a)(Object(c.a)({},e),{},{searchHeros:r});default:return e}}var j=r(0),b=u.a.createContext();function h(e){var t=Object(i.useState)(""),r=Object(l.a)(t,2),n=r[0],u=r[1],h=Object(i.useState)(""),O=Object(l.a)(h,2),p=O[0],m=O[1],x=Object(i.useState)(null),f=Object(l.a)(x,2),g=f[0],v=f[1],y=Object(i.useReducer)(d,{allHeros:[],heros:[],powerstats:[],searchHeros:[]}),w=Object(l.a)(y,2),N=w[0],H=w[1],S="super_heroes",E=function(){var e=JSON.parse(window.localStorage.getItem(S))||[];H({type:"GET_ALL_HEROS",payload:e})};Object(i.useEffect)((function(){E()}),[]);var k=function(){var e=Object(a.a)(s.a.mark((function e(){var t,r,c,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=1,r=[];case 3:if(732===t){e.next=12;break}return e.next=6,fetch("https://superheroapi.com/api/2870408559879754/".concat(t));case 6:c=e.sent,n=c.json(),r=[].concat(Object(o.a)(r),[n]),t++,e.next=3;break;case 12:return e.next=14,Promise.all(r);case 14:a=e.sent,window.localStorage.setItem(S,JSON.stringify(a)),H({type:"GET_ALL_HEROS",payload:a}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),T=Object(i.useState)(!1),_=Object(l.a)(T,2),L=_[0],C=_[1],R=Object(i.useState)(!1),G=Object(l.a)(R,2),I=G[0],A=G[1],q=function(){for(var e=[],t=[],r=[],c=["intelligence","strength","speed","durability","power","combat"],n=0;n<(null===(s=N.heros)||void 0===s?void 0:s.length);n++){for(var s,a=0;a<c.length;a++){for(var l=0;l<N.heros[n].length;l++){var i=c[a];e=[].concat(Object(o.a)(e),["null"===N.heros[n][l].powerstats[i]?"0":N.heros[n][l].powerstats[i]])}t=[].concat(Object(o.a)(t),[e.splice(0,6)])}r=[].concat(Object(o.a)(r),[t.splice(0,6)])}for(var u=0;u<r.length;u++)for(var d=0;d<r[u].length;d++)r[u][d]=r[u][d].reduce((function(e,t){return Number(e)+Number(t)}));for(var j=[],b=0;b<r.length;b++)j=[].concat(Object(o.a)(j),[[{type:"intelligence",level:r[b][0]},{type:"strength",level:r[b][1]},{type:"speed",level:r[b][2]},{type:"durability",level:r[b][3]},{type:"power",level:r[b][4]},{type:"combat",level:r[b][5]}]]);for(var h=[],O=0;O<j.length;O++)h=[].concat(Object(o.a)(h),[j[O].sort((function(e,t){return e.level>t.level?-1:null}))]);H({type:"GET_POWERSTATS",payload:h})};return Object(j.jsx)(b.Provider,Object(c.a)({value:{allHeros:N.allHeros,heros:N.heros,powerstats:N.powerstats,searchHeros:N.searchHeros,getAllHeros:k,getHeros:function(){try{for(var e=0,t=[];12!==e;)t=[].concat(Object(o.a)(t),[N.allHeros[e]]),e++;for(var r=[];0!==t.length;)r=[].concat(Object(o.a)(r),[t.splice(0,6)]);H({type:"GET_HEROS",payload:r})}catch(c){console.log(c)}},eliminarHero:function(e,t){var r=N.heros,c=r[t].filter((function(t){return!t.name.toLowerCase().includes(e.toLowerCase())}));r[t]=c,H({type:"GET_HEROS",payload:r}),q()},search:function(e,t){var r=N.allHeros.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));if(0!==r.length)for(var c=0;c<r.length;c++)r[c].equipo=t;C(!0),H({type:"GET_HERO",payload:r})},powerstatsLevel:q,isViewSearch:L,setIsViewSearch:C,agregarHero:function(e,t){var r=N.heros;r[N.searchHeros[t].equipo].push(e),H({type:"GET_HERO",payload:[]}),H({type:"GET_HEROS",payload:r}),A(!0)},addHero:I,setAddHero:A,email:n,setEmail:u,password:p,setPassword:m,isLogin:g,setIslogin:v,loadHerosInLocalStorage:E}},e))}function O(){var e=u.a.useContext(b);return e||console.log("Erroooor"),e}}},[[52,1,2]]]);
//# sourceMappingURL=main.ddbf7e81.chunk.js.map