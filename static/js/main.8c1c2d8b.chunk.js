(this.webpackJsonpEdvora_Task=this.webpackJsonpEdvora_Task||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(18),c=a.n(s),i=a(60),l=(a(92),a(14)),o=a(68),d=a.n(o),j=a(75),u=a(15),b=a(76),m=a.n(b),p=(a(106),a(179)),h=a(180),x=a(177),f=a(181),O=a(182),v=a(2);function g(e){var t=e.name,a=e.brand,r=e.price,n=e.date,s=e.location,c=e.discription,i=e.image,l={marginBottom:"10px"},o={marginBottom:"10px",color:"#f0f8ff82"};return Object(v.jsx)(p.a,{sx:{"& > :not(style)":{m:1,width:250,height:190,p:2}},children:Object(v.jsxs)(h.a,{style:{backgroundColor:"#232323",margin:"auto",color:"white"},elevation:3,children:[Object(v.jsxs)(x.a,{container:!0,spacing:2,children:[Object(v.jsxs)(x.a,{item:!0,xs:5,children:[Object(v.jsx)(f.a,{sx:{borderRadius:1,mt:.5},children:Object(v.jsx)(O.a,{children:Object(v.jsx)("img",{src:i,alt:"Cardimage",style:{width:"80px",height:"80px",marginBottom:"10px",borderRadius:"5px"}})})}),Object(v.jsxs)("div",{style:o,children:[s.state,",",Object(v.jsx)("br",{}),s.city]})]}),Object(v.jsxs)(x.a,{item:!0,xs:7,children:[Object(v.jsxs)("div",{style:l,children:[" ",t," "]}),Object(v.jsxs)("div",{style:o,children:[a," "]}),Object(v.jsxs)("div",{style:l,children:[" $ ",r]}),Object(v.jsxs)("div",{style:o,children:[" date: ",n.slice(0,10)]})]})]}),Object(v.jsxs)("div",{style:o,children:[" ",c," "]})]})})}var y={superLargeDesktop:{breakpoint:{max:4e3,min:2e3},items:5},desktoplarge:{breakpoint:{max:2e3,min:1500},items:4},desktop:{breakpoint:{max:1500,min:900},items:3},tablet:{breakpoint:{max:1125,min:900},items:2},phone:{breakpoint:{max:900,min:800},items:3},mobile:{breakpoint:{max:800,min:670},items:2},smobile:{breakpoint:{max:670,min:0},items:1}};function k(e){var t=e.data,a=e.productname;return Object(v.jsx)(p.a,{sx:{backgroundColor:"black",borderRadius:"15px",padding:2,marginTop:3},children:Object(v.jsx)(m.a,{responsive:y,children:t.filter((function(e){return e.product_name===a})).map((function(e){return Object(v.jsxs)("div",{children:[" ",Object(v.jsx)(g,{name:e.product_name,brand:e.brand_name,price:e.price,date:e.date,location:e.address,discription:e.discription,image:e.image})," "]},Math.random())}))})})}var C=a(175),w=a(174),_=a(178),T=a(173),P=a(169),S=Object(P.a)({select:{"&:before":{backgroundColor:"#232323",padding:10,borderRadius:"4.6px"},"&:after":{borderColor:"#232323",padding:"5px"},"&:not(.Mui-disabled):hover::before":{borderColor:"#232323"}},label:{color:"white",marginBottom:"10px","&.Mui-focused":{color:"white"}},icon:{fill:"white"},root:{color:"white"}});var N=function(e){var t=e.Products,a=e.handleproducts,r=e.States,n=e.handlestate,s=e.Cities,c=e.handlecity,i=e.data,l=i.map((function(e){return e.product_name})),o=l.filter((function(e,t){return l.indexOf(e)===t})),d=i.map((function(e){return e.address.state})),j=d.filter((function(e,t){return d.indexOf(e)===t})),u=i.map((function(e){return e.address.city})),b=u.filter((function(e,t){return u.indexOf(e)===t}));console.log(b);var m={marginTop:"20px"},h={marginLeft:10,top:"50%",transform:"translate(0,-50%"},x=S();return Object(v.jsxs)(p.a,{sx:{minWidth:75,backgroundColor:"black",borderRadius:"15px",padding:3,marginTop:3},children:[Object(v.jsx)("h3",{style:{color:"#f0f8ff82"},children:"Filters"}),Object(v.jsxs)(p.a,{sx:{borderTop:1,borderColor:"grey.700"},children:[Object(v.jsxs)(_.a,{fullWidth:!0,style:m,children:[Object(v.jsx)(C.a,{id:"demo-simple-select-label1",style:h,className:x.label,children:""===t?"Products":t}),Object(v.jsxs)(T.a,{value:t,className:x.select,inputProps:{classes:{icon:x.icon,root:x.root}},labelId:"demo-simple-select-label1",id:"demo-simple-select",label:"Products",onChange:a,children:[Object(v.jsx)(w.a,{value:"",children:"All"},"All"),o.map((function(e){return Object(v.jsx)(w.a,{value:e,children:e},e)}))]})]}),Object(v.jsxs)(_.a,{fullWidth:!0,style:m,children:[Object(v.jsx)(C.a,{id:"demo-simple-select-label2",style:h,className:x.label,children:""===r?"state":r}),Object(v.jsxs)(T.a,{className:x.select,inputProps:{classes:{icon:x.icon,root:x.root}},labelId:"demo-simple-select-label2",id:"demo-simple-select",value:r,label:"State",onChange:n,children:[Object(v.jsx)(w.a,{value:"",children:"All"},"All"),j.map((function(e){return Object(v.jsx)(w.a,{value:e,children:e},e)}))]})]}),Object(v.jsxs)(_.a,{fullWidth:!0,style:m,children:[Object(v.jsx)(C.a,{id:"demo-simple-select-label3",style:h,className:x.label,children:""===s?"City":s}),Object(v.jsxs)(T.a,{className:x.select,inputProps:{classes:{icon:x.icon,root:x.root}},labelId:"demo-simple-select-label3",id:"demo-simple-select",value:s,label:"Cities",onChange:c,children:[Object(v.jsx)(w.a,{value:"",children:"All"},"All"),b.map((function(e){return Object(v.jsx)(w.a,{value:e,children:e},e)}))]})]})]})]})},A=a(78),E=a.n(A);var R=function(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),a=t[0],s=t[1];Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://assessment-edvora.herokuapp.com/");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,s(t),o(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var c=Object(r.useState)([]),i=Object(u.a)(c,2),l=i[0],o=i[1];console.log(a);var b=l.map((function(e){return e.product_name})),m=b.filter((function(e,t){return b.indexOf(e)===t}));console.log(m);var h=n.a.useState(""),f=Object(u.a)(h,2),O=f[0],g=f[1],y=n.a.useState(""),C=Object(u.a)(y,2),w=C[0],_=C[1],T=n.a.useState(""),P=Object(u.a)(T,2),S=P[0],A=P[1];return Object(v.jsx)(v.Fragment,{children:a?Object(v.jsx)(p.a,{sx:{margin:3},children:Object(v.jsxs)(x.a,{container:!0,spacing:3,children:[Object(v.jsx)(x.a,{item:!0,xs:12,md:2,children:Object(v.jsx)(N,{Products:O,handleproducts:function(e){g(e.target.value);var t=a.filter((function(t){return(t.product_name===e.target.value||""===e.target.value)&&(""===w||t.address.state===w)&&(""===S||t.address.city===S)}));o(t)},States:w,handlestate:function(e){_(e.target.value);var t=a.filter((function(t){return(t.product_name===O||""===O)&&(t.address.state===e.target.value||""===e.target.value)&&(""===S||t.address.city===S)}));o(t)},Cities:S,handlecity:function(e){A(e.target.value);var t=a.filter((function(t){return(t.product_name===O||""===O)&&(""===w||t.address.state===w)&&(t.address.city===e.target.value||""===e.target.value)}));o(t)},data:l})}),Object(v.jsxs)(x.a,{item:!0,xs:12,md:10,children:[Object(v.jsx)("h1",{children:"Edvora"}),Object(v.jsx)("h2",{style:{color:"#f0f8ff82"},children:"Products"}),0!==m.length?m.map((function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:e}),Object(v.jsx)(p.a,{sx:{borderTop:1,borderColor:"grey.700"},children:Object(v.jsx)(k,{data:l,productname:e})})]},Math.random())})):Object(v.jsx)("h2",{children:"No Results"})]})]})}):Object(v.jsx)(p.a,{style:{marginLeft:"42%",marginTop:"10%"},children:Object(v.jsx)(E.a,{type:"bars",color:"#fff",width:150})})})};var B=function(){return Object(v.jsx)(i.a,{children:Object(v.jsx)(l.c,{children:Object(v.jsx)(l.a,{path:"/",component:R})})})};c.a.render(Object(v.jsx)(i.a,{basename:"/Edvora_Task",children:Object(v.jsx)(B,{})}),document.getElementById("root"))},92:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.8c1c2d8b.chunk.js.map