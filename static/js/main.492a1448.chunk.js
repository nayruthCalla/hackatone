(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/chef.953e3ce9.png"},18:function(e,t,a){e.exports=a.p+"static/media/hamburger.b072de2a.png"},22:function(e,t,a){e.exports=a.p+"static/media/catalogo.b148b6b7.pdf"},23:function(e,t,a){e.exports=a.p+"static/media/waitress.c07b0a75.png"},25:function(e,t,a){e.exports=a.p+"static/media/bq.505ee41b.jpg"},30:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(35),a(36),a(7)),s=a(1),i=a(18),m=a.n(i),u=a(19),d=a(20),p=new(function(){function e(){Object(u.a)(this,e),this.authenticated=!1}return Object(d.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),f=function(e){var t=e.logoutprop;return r.a.createElement("header",{"data-testid":"header",className:"width-100 mt-2 mb-4 d-flex height-60"},r.a.createElement("ul",{className:"width-100 nav nav-tabs justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{"data-testid":"burger",onClick:function(){p.login(function(){t.history.push("/home")})},className:"text-center align-self-start mb-4 border-none transparent cursor"},r.a.createElement("img",{src:m.a,alt:"img",className:"img-fluid max-50"}))),r.a.createElement("li",{className:"nav-item dropdown bars"},r.a.createElement("div",{className:"nav-link dropdown-toggle dropdown-color","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},r.a.createElement("a",{"data-testid":"close",onClick:function(){p.logout(function(){t.history.push("/")}),localStorage.setItem("token","")}},"Cerrar Sesi\xf3n")))))},g=function(e){var t=e.name,a=e.updateName,n=e.show,c=e.setShow;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(!0!==n)},className:"d-flex align-items-center form-val my-4","data-test-id":"div"},r.a.createElement("label",{className:"my-0 mr-2"},"Cliente: "),!0===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:t,onChange:a,placeholder:"Nombre",className:"name-value form-control"}),r.a.createElement("button",{"data-testid":"submit",className:"checkBtn ml-3 btn btn-color padding-10 mt-0"},r.a.createElement("i",{className:"fas fa-check"}))),!1===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{"data-testid":"change-name",className:"pValue my-0"},t),r.a.createElement("button",{"data-testid":"edit",className:"checkBtn ml-3 btn btn-color padding-10 mt-0"},"Editar")))},E=function(e){var t=e.address,a=e.updateAddress,n=e.show,c=e.setShow;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(!0!==n)},className:"d-flex align-items-center form-val my-4","data-test-id":"div"},r.a.createElement("label",{className:"my-0 mr-2"},"Direcci\xf3n: "),!0===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:t,onChange:a,placeholder:"Direcci\xf3n",className:"name-value form-control"}),r.a.createElement("button",{"data-testid":"submit",className:"checkBtn ml-3 btn btn-color padding-10 mt-0"},r.a.createElement("i",{className:"fas fa-check"}))),!1===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{"data-testid":"change-name",className:"pValue my-0"},t),r.a.createElement("button",{"data-testid":"edit",className:"checkBtn ml-3 btn btn-color padding-10 mt-0"},"Editar")))},h=function(e){var t=e.data,a=e.brand,n=e.add;return t.filter(function(e){return e.brand===a}).map(function(e){return r.a.createElement("div",{"data-testid":e._id,className:"card my-3",key:e._id,onClick:function(){n(e._id)}},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.nameOfProduct}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.nameOfProduct)),r.a.createElement("div",{className:"card-footer justify-content-center"},"S/. ",e.price))})},b=function(e){var t=e.item,a=e.remove,n=e.increase,c=e.decrease;return r.a.createElement("tr",{"data-testid":"list-".concat(t._id),className:"d-flex width-100 text-align border-bottom my-2"},r.a.createElement("td",{className:"d-flex col-4 text-align-left"},r.a.createElement("button",{"data-testid":"deleteItem",onClick:function(){a(t._id)},className:"border-none transparent padding-trash"},r.a.createElement("i",{className:"fas fa-trash-alt text-gray"})),r.a.createElement("p",{className:"my-0 text-gray"},t.nameOfProduct)),r.a.createElement("td",{className:"d-flex col-4 justify-content-center align-items-center"},r.a.createElement("button",{"data-testid":"takeQty",onClick:function(){return c(t._id)},className:"border-none transparent"},r.a.createElement("i",{className:"fas fa-minus-circle blue-color"})),r.a.createElement("span",{"data-testid":"qty",className:"text-gray"},t.qty),r.a.createElement("button",{"data-testid":"addQty",onClick:function(){return n(t._id)},className:"border-none transparent"},r.a.createElement("i",{className:"fas fa-plus-circle blue-color"}))),r.a.createElement("td",{className:"col-4"},r.a.createElement("p",{className:"my-0 text-gray"},"S/. ",t.total)))},v=function(e){var t=e.items,a=e.remove,n=e.increase,c=e.decrease,o=e.postOrder,l=t.reduce(function(e,t){return{total:e.total+t.total}},{total:0});return r.a.createElement("table",{className:"d-flex align-items-center column main-box my-2 col-md-6"},r.a.createElement("thead",{className:"width-100"},r.a.createElement("tr",{className:"d-flex width-100 text-align align-items-center my-2"},r.a.createElement("th",{className:"col-12"},r.a.createElement("h3",null,"Pedido"))),r.a.createElement("tr",{className:"d-flex width-100 text-align background-gray align-items-center my-2"},r.a.createElement("th",{className:"col-4 my-1"},"Nombre"),r.a.createElement("th",{className:"col-4 my-1"},"Cantidad"),r.a.createElement("th",{className:"col-4 my-1"},"Precio"))),r.a.createElement("tbody",{className:"width-100"},t.map(function(e){return r.a.createElement(b,{item:e,key:e._id,remove:a,increase:n,decrease:c})}),r.a.createElement("tr",{className:" d-flex width-100 text-align background-gray align-items-center border-top"},r.a.createElement("td",{className:"col-4 my-1"},"Total:"),r.a.createElement("td",{className:"col-4 my-1 blue-color"},"S/. ",l.total),r.a.createElement("td",{className:"col-4 my-1"},r.a.createElement("button",{"data-testid":"post-order",onClick:o,className:" btn btn-primary background-blue white-space padding-10"},"Confirmar Pedido")))))},N=function(e){var t=e.click,a=e.options,n=e.aClass;return r.a.createElement("li",{className:"nav-item",onClick:t},r.a.createElement("button",{"data-testid":a,className:n,"data-toggle":"tab",href:"#",role:"tab"},a))},y=function(e,t,a,n,r){return fetch("http://165.22.166.131:4000/orders",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify({consultoraId:r,client:e,direccion:t,products:a})}).then(function(e){return 200===e.status?e.json():400===e.status?Promise.reject({message:"Ingrese productos a la orden"}):401===e.status?Promise.reject({message:"No existe token v\xe1lido"}):Promise.reject({message:e.statusText})})},j=a(21),O=a(29);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var x={delete:function(e,t){return e.filter(function(e){return e._id!==t})},increase:function(e,t){return e.map(function(e){return e._id}).includes(t)?e.map(function(e){return e._id===t?{_id:t,qty:e.qty+1}:e}):[].concat(Object(O.a)(e),[{_id:t,qty:1}])},decrease:function(e,t){return e.filter(function(e){return e.qty>1}).map(function(e){return e._id}).includes(t)?e.map(function(e){return e._id===t?{_id:t,qty:e.qty-1}:e}):x.delete(e,t)},mix:function(e,t){var a=[];return e.forEach(function(e){return t.forEach(function(t){e._id===t._id&&a.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(j.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{qty:t.qty,total:t.qty*e.price}))})}),a}},k=x,S=(a(22),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)("ESIKA"),p=Object(s.a)(d,2),b=p[0],j=p[1],O=Object(n.useState)([]),w=Object(s.a)(O,2),x=w[0],S=w[1],C=Object(n.useState)([]),P=Object(s.a)(C,2),I=P[0],_=P[1],T=Object(n.useState)(!0),D=Object(s.a)(T,2),A=D[0],q=D[1],F=function(e){return function(t){_(e(I,t))}},B=F(k.increase),J=F(k.decrease),M=F(k.delete),V=JSON.parse(localStorage.getItem("user"))._id,G=localStorage.getItem("token");return Object(n.useEffect)(function(){fetch("http://165.22.166.131:4000/products",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(e){return e.json()}).then(function(e){S(e)})},[]),console.log(x),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logoutprop:e}),r.a.createElement("main",{id:"menu",className:"container-fluid d-flex flex-wrap align-content-around"},r.a.createElement(g,{name:c,updateName:function(e){o(e.target.value)},show:A,setShow:q}),r.a.createElement(E,{name:m,updateAddress:function(e){u(e.target.value)},show:A,setShow:q}),r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"nav nav-tabs w-100",role:"tablist"},r.a.createElement(N,{click:function(){return j("ESIKA")},options:"ESIKA",aClass:"nav-link active"}),r.a.createElement(N,{click:function(){return j("CYZONE")},options:"CYZONE",aClass:"nav-link"})),r.a.createElement("div",{"data-testid":"opt",className:"card-columns"},"ESIKA"===b&&r.a.createElement(h,{data:x,brand:"ESIKA",add:B}),"CYZONE"===b&&r.a.createElement(h,{data:x,brand:"CYZONE",add:B}))),r.a.createElement(v,{items:k.mix(x,I),remove:M,decrease:J,increase:B,postOrder:function(){y(c,m,I.map(function(e){return{product:e._id,qty:e.qty}}),G,V).then(function(e){console.log(e),_([]),o(""),u(""),q(!0)}).catch(console.error)}}))))}),C=function(e){var t=e.name,a=e.click,n=e.imgMenu;return r.a.createElement("div",{"data-testid":t,className:"container-menu",onClick:a},r.a.createElement("img",{src:n,alt:"Menu",className:"filter-img img-fluid mb-4 px-2"}),r.a.createElement("div",{className:"menu-opts"},t))},P=a(11),I=a.n(P),_=a(23),T=a.n(_),D=function(e){var t=JSON.parse(localStorage.getItem("user"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logoutprop:e}),r.a.createElement("section",{id:"home-menu",className:"fill-available mb-4 container-fluid d-flex flex-wrap align-content-around justify-content-center"},r.a.createElement(C,{click:function(){return p.login(function(){e.history.push("/orders")})},name:"CATALOGO",imgMenu:T.a}),r.a.createElement(C,{click:function(){return p.login(function(){e.history.push("/cocina")})},name:"ORDENES",imgMenu:I.a}),!0===t.roles.admin&&r.a.createElement(C,{click:function(){return p.login(function(){e.history.push("/admin")})},name:"ADMIN",imgMenu:I.a})))},A=a(12),q=a.n(A),F=a(24),B=function(e){var t=e.divInput,a=e.type,n=e.value,c=e.label,o=e.update,l=e.placeholder,s=e.icon,i=e.classValue,m=e.visibility;return r.a.createElement("div",{className:t},r.a.createElement("input",{type:a,value:n,onChange:o,className:i,"aria-label":c,placeholder:l,required:!0}),r.a.createElement("div",{className:m},r.a.createElement("div",{className:"btn btn-outline-secondary icon-color border-none radius-50",disabled:!0},r.a.createElement("i",{className:s}))))},J=function(e,t){return fetch("http://165.22.166.131:4000/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return 200===e.status?e.json():400===e.status?Promise.reject({message:"Ingrese su usuario y/o contrase\xf1a"}):401===e.status?Promise.reject({message:"Ingrese correctamente su usuario y/o contrase\xf1a"}):Promise.reject({message:e.statusText})})},M=function(e){return fetch("http://165.22.166.131:4000/users/".concat(e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(e){return 200===e.status?e.json():401===e.status?Promise.reject({message:"No hay cabecera de autenticaci\xf3n"}):Promise.reject({message:e.statusText})})},V=function(e){var t=e.logprop,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],d=m[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),E=g[0],h=g[1];return r.a.createElement("form",{onSubmit:function(){var e=Object(F.a)(q.a.mark(function e(a){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,J(o,u).then(function(e){localStorage.setItem("token",e.token)}).catch(function(e){h(e.message)});case 3:M(o).then(function(e){console.log(e),localStorage.setItem("user",JSON.stringify(e)),p.login(function(){t.history.push("/home")})}).catch(console.error);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),className:"col-12 flex-column d-flex form-group","data-testid":"form"},r.a.createElement(B,{divInput:"input-group form-group radius-50 white",type:"email",value:o,label:"Email",update:function(e){return l(e.target.value)},placeholder:"Email",classValue:"emailValue form-control border-none radius-50",visibility:"input-group-append border-none radius-50"}),r.a.createElement(B,{divInput:"input-group form-group radius-50 white",type:"password",value:u,label:"Password",update:function(e){return d(e.target.value)},placeholder:"Password",classValue:"passwordValue form-control border-none radius-50",visibility:"input-group-append border-none radius-50"}),r.a.createElement("button",{"data-testid":"login",type:"submit",className:"btn btn-color"},"Ingresar"),E&&r.a.createElement("p",{"data-testid":"errMsg",className:"pt-3 text-danger"},"*",E))},G=function(e){var t=e.imgSrc,a=e.cssClass,n=e.imgClass;return r.a.createElement("div",{className:a},r.a.createElement("img",{src:t,alt:"img",className:n}))},z=a(25),K=a.n(z),Y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-login"},r.a.createElement("main",{"data-testid":"login",className:"container d-flex fill-available justify-content-center align-items-center"},r.a.createElement("div",{className:"col-lg-6 border-login"},r.a.createElement("header",{className:""},r.a.createElement("h4",{className:"col-lg-6 justify-content-center align-items-center"},"Bienvenidx")),r.a.createElement("section",{className:"col-lg-12 opacyty-login opacyty-login-top opacyty-login-top"},r.a.createElement("div",{className:"col-lg-12 py-3 d-flex align-items-center form-style flex-column "},r.a.createElement(V,{logprop:e})))),r.a.createElement(G,{imgSrc:K.a,cssClass:"col-lg-6 justify-content-center text-align img",imgClass:"img-fluid"}))))},Z=function(e){var t=e.el,a=Object(n.useState)(!0),c=Object(s.a)(a,2),o=c[0],l=c[1];return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("label",{"data-testid":t.product.name,style:{textDecoration:o?"":"line-through"}},r.a.createElement("input",{"data-testid":t.product.productId,onChange:function(){return l(!o)},type:"checkbox"})," ",t.qty," unid. ",t.product.name))},Q=function(e,t,a,n,r,c){return fetch("http://165.22.166.131:4000/orders/".concat(c),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a},body:JSON.stringify({status:r})}).then(function(e){return 200===e.status?e.json():400===e.status?Promise.reject({message:"Propiedad inv\xe1lida a modificar"}):401===e.status?Promise.reject({message:"No existe token v\xe1lido"}):404===e.status?Promise.reject({message:"Orden inv\xe1lida"}):Promise.reject({message:e.statusText})})},U=function(e){var t=e.order,a=new Date(t.dateEntry),c=new Date(t.dateProcessed),o=t.products,l=Object(n.useState)(!0),i=Object(s.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)((Date.now()-a.getTime())/1e3),p=Object(s.a)(d,2),f=p[0],g=p[1],E=(c.getTime()-a.getTime())/1e3;return Object(n.useEffect)(function(){var e=null;return"delivered"===t.status&&u(!1),m&&(e=setInterval(function(){g(f+1)},1e3)),function(){return clearInterval(e)}},[m,f]),r.a.createElement("div",{"data-testid":t._id,className:"col-sm-6 mt-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{"data-testid":t.client,className:"border-card-right pr-2"},"Cliente: ",t.client),r.a.createElement("div",{"data-testid":t.direccion,className:"border-card-right pr-2"},"Direcci\xf3n: ",t.direccion)),!0===m&&r.a.createElement("div",null,Math.floor(f.toFixed()/60)%60,":",f.toFixed()%60),!1===m&&r.a.createElement("div",null,Math.floor(E.toFixed()/60)%60,":",E.toFixed()%60)),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},o&&o.map(function(e){return r.a.createElement(Z,{el:e,key:e.product.productId})}))),r.a.createElement("div",{className:"input-group card-footer"},r.a.createElement("select",{"data-testid":"name-".concat(t.client),onChange:function(e){Q(t.client,t.products,localStorage.getItem("token"),t.userId,e.target.value,t._id).then(console.log)},value:t.status,className:"custom-select",id:"inputGroupSelect02"},r.a.createElement("option",{value:"pending"},"Pending"),r.a.createElement("option",{value:"canceled"},"Canceled"),r.a.createElement("option",{"data-testid":"delivered-".concat(t.client),value:"delivered"},"Delivered")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect02"},"Status")))))},W=function(e,t){return fetch("http://165.22.166.131:4000/list/".concat(t),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then(function(e){return 200===e.status?e.json():401===e.status?Promise.reject({message:"Ingrese token v\xe1lido"}):Promise.reject({message:e.statusText})})},L=JSON.parse(localStorage.getItem("user")),R=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)("pending"),i=Object(s.a)(l,2),m=i[0],u=i[1];return Object(n.useEffect)(function(){var e=function(){W(localStorage.getItem("token"),L._id).then(function(e){console.log(e),o(e)})};e();var t=setInterval(e,2e3);return function(){return clearInterval(t)}},[]),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(f,{logoutprop:e}),r.a.createElement("div",{className:"w-100"},r.a.createElement("ul",{className:"nav nav-tabs w-100",role:"tablist"},r.a.createElement(N,{click:function(){return u("pending")},options:"Pendientes",aClass:"nav-link active"}),r.a.createElement(N,{click:function(){return u("delivered")},options:"Entregados",aClass:"nav-link"})),r.a.createElement("section",{"data-testid":"opt",className:"row w-100 justify-content-between"},0===c.length&&r.a.createElement("div",{className:"mt-5 w-100 text-align"},"No hay \xf3rdenes pendientes."),0!==c.length&&c.map(function(e){return"pending"!==e.status&&"canceled"!==e.status||"pending"!==m?"delivered"===e.status&&"delivered"===m?r.a.createElement(U,{order:e,key:e._id}):void 0:r.a.createElement(U,{order:e,key:e._id})}).sort(function(e,t){var a=e.props.order.dateEntry,n=t.props.order.dateEntry;return new Date(a)>new Date(n)?1:new Date(a)<new Date(n)?-1:0}))))},$=a(26),H=function(e){var t=e.component,a=Object($.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return p.isAuthenticated()||null!==localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"/home",state:{from:e.location}}})}}))},X=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:Y}),r.a.createElement(H,{exact:!0,path:"/orders",component:S}),r.a.createElement(H,{exact:!0,path:"/home",component:D}),r.a.createElement(H,{exact:!0,path:"/cocina",component:R}),r.a.createElement(l.b,{path:"*",component:function(){return"404 NOT FOUND"}}))},ee=function(){return r.a.createElement("div",{className:"container-fluid d-flex col-12 fill-available body-color align-items-center column padding-login"},r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(9);o.a.render(r.a.createElement(te.a,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.492a1448.chunk.js.map