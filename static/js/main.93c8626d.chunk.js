(this["webpackJsonpjm-react"]=this["webpackJsonpjm-react"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/beauty-products.9840c506.jpg"},19:function(e,t,a){e.exports=a(63)},24:function(e,t,a){},5:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),l=(a(24),a(3)),i=a.n(l),s=(a(5),a(16)),u=a.n(s);var m=function(){return c.a.createElement("div",{className:"Grid"},c.a.createElement("div",{className:"Block"},c.a.createElement("div",{className:"text"},"This is a page for beauty Product search")),c.a.createElement("img",{className:"Block",src:u.a}))},d=a(4),h=a(17),p=a(18),f=a.n(p);var E=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(d.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(!1),p=Object(d.a)(m,2),E=p[0],v=p[1],b=Object(n.useState)(!1),g=Object(d.a)(b,2),N=g[0],w=g[1];return c.a.createElement("div",{className:"SearchBox"},c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Product Name",onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{className:"button",onClick:function(){w(!0),function(e){return i.a.get("/product?q=".concat(e))}(s).then((function(e){e.data.length>0?(r(e.data),v(!1)):v(!0),w(!1)})).catch((function(){v(!0)}))}},"Search")),c.a.createElement("div",{className:N?"Loader":"pagination"},N?c.a.createElement(f.a,{type:"Puff",color:"#FFF",height:100,width:100}):E?c.a.createElement("div",{className:"Loader"},"Product not found, search with another keyword"):c.a.createElement(h.a,{data:a,pageSize:5,renderItem:function(e){return c.a.createElement("div",{className:"list",key:e.id},c.a.createElement("li",null,c.a.createElement("text",{className:"listItem"},e.brand)," ",c.a.createElement("text",null,"- ",e.name)))}})))};var v=function(){return c.a.useEffect((function(){document.title="JoliMoi"})),c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.defaults.withCredentials=!1,i.a.defaults.baseURL="https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com",o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.93c8626d.chunk.js.map