(this["webpackJsonpapp-superheroes"]=this["webpackJsonpapp-superheroes"]||[]).push([[3],{55:function(e,t,s){"use strict";var c=this&&this.__assign||function(){return(c=Object.assign||function(e){for(var t,s=1,c=arguments.length;s<c;s++)for(var i in t=arguments[s])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,s,c){void 0===c&&(c=s),Object.defineProperty(e,c,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,c){void 0===c&&(c=s),e[c]=t[s]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.hasOwnProperty.call(e,s)&&i(t,e,s);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var n=r(s(2)),a=s(2),o=function(e){var t=e.cardStyles,s=t.back,i=t.front,l=e.cardZIndex,r=e.containerStyle,o=e.flipDirection,d=e.flipSpeedFrontToBack,b=e.flipSpeedBackToFront,j=e.infinite,h=a.useState(e.isFlipped),u=h[0],m=h[1],p=a.useState(0),x=p[0],f=p[1];a.useEffect((function(){e.isFlipped!==u&&(m(e.isFlipped),f((function(e){return e+180})))}),[e.isFlipped]);var O=function(t){if(2!==e.children.length)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[t]},g="rotateY("+(j?x:u?180:0)+"deg)",v="rotateX("+(j?x:u?180:0)+"deg)",y={back:c({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:u?"relative":"absolute",top:"0",transform:"horizontal"===o?"rotateY("+(j?x+180:u?0:-180)+"deg)":"rotateX("+(j?x+180:u?0:-180)+"deg)",transformStyle:"preserve-3d",transition:d+"s",width:"100%"},s),container:{perspective:"1000px",zIndex:""+l},flipper:{height:"100%",position:"relative",width:"100%"},front:c({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:u?"absolute":"relative",top:"0",transform:"horizontal"===o?g:v,transformStyle:"preserve-3d",transition:b+"s",width:"100%",zIndex:"2"},i)};return n.createElement("div",{className:"react-card-flip",style:c(c({},y.container),r)},n.createElement("div",{className:"react-card-flipper",style:y.flipper},n.createElement("div",{className:"react-card-front",style:y.front},O(0)),n.createElement("div",{className:"react-card-back",style:y.back},O(1))))};o.defaultProps={cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t.default=o},56:function(e,t,s){"use strict";s.r(t);var c=s(4),i=s(2),l=s(55),r=s.n(l),n=s(6),a=s(0),o=function(e){var t=e.index,s=Object(n.b)(),c=s.powerstatsLevel,l=s.heros,r=s.powerstats;return Object(i.useEffect)((function(){c()}),[l]),0!==r.length?Object(a.jsxs)("div",{className:"container mb-5 border-rounded bg-dark",children:[Object(a.jsxs)("h2",{className:"text-center my-3 text-primary",style:{display:0!==l.length?"block":"none"},children:["Nivel de poder del ",t+1,"\xb0 equipo"]}),Object(a.jsxs)("section",{className:"row text-center",children:[Object(a.jsxs)("div",{className:"col-sm-6 col-md-4 col-lg-2 list-group-item",children:[Object(a.jsxs)("b",{children:["1. ",r[t][0].type,":"]})," ",r[t][0].level]}),Object(a.jsxs)("div",{className:"col-sm-6 col-md-4 col-lg-2 list-group-item",children:[Object(a.jsxs)("b",{children:["2. ",r[t][1].type,":"]})," ",r[t][1].level]}),Object(a.jsxs)("div",{className:"col-sm-6 col-md-4 col-lg-2 list-group-item",children:[Object(a.jsxs)("b",{children:["3. ",r[t][2].type,":"]})," ",r[t][2].level]}),Object(a.jsxs)("div",{className:"col-sm-6 col-md-4 col-lg-2 list-group-item",children:[Object(a.jsxs)("b",{children:["4. ",r[t][3].type,":"]})," ",r[t][3].level]}),Object(a.jsxs)("div",{className:"col-sm-6 col-md-4 col-lg-2 list-group-item",children:[Object(a.jsxs)("b",{children:["5. ",r[t][4].type,":"]})," ",r[t][4].level]}),Object(a.jsxs)("div",{className:"col-sm-6 col-md-4 col-lg-2 list-group-item",children:[Object(a.jsxs)("b",{children:["6. ",r[t][5].type,":"]})," ",r[t][5].level]})]})]}):null},d=function(e){var t=e.hero;return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"list-group ",children:[Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Race:"})," ",t.appearance.race]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Height:"})," ",t.appearance.height[1]]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Weight:"})," ",t.appearance.weight[1]]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Hair color:"})," ",t.appearance["hair-color"]]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Eyes color:"})," ",t.appearance["eye-color"]]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Work:"})," ",t.work.occupation]})]})})},b=s(13),j=function(e){var t=e.index,s=Object(i.useState)(),l=Object(c.a)(s,2),r=l[0],o=l[1],d=Object(n.b)(),b=d.search;return d.heros&&Object(a.jsx)("div",{className:"container-fluid justify-content-center py-2",children:Object(a.jsxs)("section",{className:"row d-flex",children:[Object(a.jsx)("div",{className:"col-md-7 offset-md-2 col-sm-12",children:Object(a.jsx)("label",{htmlFor:"searchBar",className:"d-flex align-content-end border-0 mb-sm-2",style:{height:"2.5rem"},children:Object(a.jsx)("input",{className:"shadow border border-light rounded-pill p-2 w-100 ",style:{outline:"none"},type:"text",placeholder:"Buscar superh\xe9roes",onChange:function(e){o(e.target.value)}})})}),Object(a.jsx)("div",{className:"col-md-2 col-sm-12 d-flex justify-content-center",children:Object(a.jsx)("section",{style:{height:"2.5rem"},children:r?Object(a.jsx)("button",{className:"btn btn-white bg-success rounded-circle h-100",onClick:function(){b(r,t)},children:"Buscar"}):Object(a.jsx)("button",{className:"btn btn-white bg-success rounded-circle h-100",disabled:!0,children:"Buscar"})})})]})})};t.default=function(){var e=Object(n.b)(),t=e.getAllHeros,s=e.eliminarHero,l=e.allHeros,h=e.heros,u=e.getHeros;e.loadHerosInLocalStorage;Object(i.useEffect)((function(){0===l.length?t():0===h.length&&u()}),[l]);var m=Object(i.useState)(""),p=Object(c.a)(m,2),x=p[0],f=p[1],O=function(e){f(x===e?"":e)};return h[0]?Object(a.jsx)("div",{className:"w-100 d-flex py-3",children:Object(a.jsx)("div",{className:"container",children:h.map((function(e,t){return Object(a.jsxs)("div",{className:"row bg-dark d-flex justify-content-center my-3 px-2 rounded",children:[6!==e.length&&Object(a.jsx)(j,{index:t}),Object(a.jsxs)("h1",{className:"text-center text-white rounded-pill bg-primary pb-2 mt-2 mx-2",style:{display:0!==h.length?"block":"none"},children:[t+1,"\xb0 Equipo de superh\xe9roes"]}),e.map((function(c){var i;return Object(a.jsxs)("div",{className:"col-sm-5 col-md-4 col-lg-3 col-xl-3 bg-dark mx-1 mx-md-0 mx-lg-0 ml-md-auto mt-2 rounded py-1 shadow-lg",children:[Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("h5",{className:"text-center text-white",children:c.name}),Object(a.jsx)("div",{class:"text-center",style:{width:"100%",height:"9rem"},children:Object(a.jsx)("img",{className:"text-center",alt:"image de un h\xe9roe",style:{maxWidth:"100%",height:"9rem",borderRadius:"100%"},src:null===(i=c.image)||void 0===i?void 0:i.url})})]}),Object(a.jsx)("section",{className:"mt-3",children:Object(a.jsxs)(r.a,{isFlipped:x===c.name,children:[Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"list-group",children:[Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Combat:"})," ",c.powerstats.combat]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Durability:"})," ",c.powerstats.durability]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Intelligence:"})," ",c.powerstats.intelligence]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Power:"})," ",c.powerstats.power]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Speed:"})," ",c.powerstats.speed]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("b",{children:"Strength:"})," ",c.powerstats.strength]})]})}),Object(a.jsx)(d,{hero:c})]})})]}),Object(a.jsxs)("div",{children:[x===c.name?Object(a.jsx)("button",{onClick:function(){return O(c.name)},className:"btn btn-secondary w-100",children:"Ver poderes"}):Object(a.jsx)("button",{onClick:function(){return O(c.name)},className:"btn btn-success w-100",children:"Ver detalles"}),6!==e.length?Object(a.jsx)("button",{className:"btn btn-danger w-100",disabled:!0,children:"Eliminar"}):Object(a.jsx)("button",{className:"btn btn-danger w-100",onClick:function(){s(c.name,t)},children:"Eliminar"})]})]},c.id)})),Object(a.jsx)(o,{index:t})]},t)}))})}):Object(a.jsx)(b.a,{})}}}]);
//# sourceMappingURL=3.6aface6f.chunk.js.map