"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{7309:function(e,s,a){a.d(s,{I8:function(){return t},RZ:function(){return h},tO:function(){return d}});var l=a(3977),r=a(1259),i=a(9828),n=a(6650);let c=(0,l.ZF)({apiKey:"AIzaSyAxMvQrEVvVODwMnC-PKh6haLPk4w3lAxI",authDomain:"car-dealership-9bbbe.firebaseapp.com",projectId:"car-dealership-9bbbe",storageBucket:"car-dealership-9bbbe.appspot.com",messagingSenderId:"1088203370503",appId:"1:1088203370503:web:3aa620d2ec46fc9bd17aa2"}),t=(0,r.v0)(c),h=(0,i.ad)(c),d=(0,n.cF)(c)},5700:function(e,s,a){var l=a(5893);a(7294);var r=a(2489),i=a(3024);let n=()=>(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"footer-logo",style:{height:"200px",lineHeight:"200px",textAlign:"center"},children:(0,l.jsx)("img",{src:"/images/logo.jpg",alt:"Logo",style:{width:"150px",height:"auto"}})}),(0,l.jsxs)("div",{className:"footer-col",children:[(0,l.jsx)("h4",{children:"Luxe Motors"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/aboutUs",children:"about us"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/contactUs",children:"Contact us"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:"our services"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:"privacy policy"})})]})]}),(0,l.jsxs)("div",{className:"footer-col",children:[(0,l.jsx)("h4",{children:"get help"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/faq ",children:"FAQ"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/ProductsPage",children:"Products page"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/compareCar",children:"Compare Cars"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:" ",children:"News"})})]})]}),(0,l.jsxs)("div",{className:"footer-col",children:[(0,l.jsx)("h4",{children:"follow us"}),(0,l.jsxs)("div",{className:"social-links",children:[(0,l.jsx)("a",{href:"#",children:(0,l.jsx)(r.G,{icon:i.neY})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)(r.G,{icon:i.mdU})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)(r.G,{icon:i.Zzi})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)(r.G,{icon:i.hwn})})]})]})]})}),(0,l.jsx)("div",{className:"footer__copyright",children:"Copyright \xa9 2023 luxe Motor"})]});s.Z=n},831:function(e,s,a){var l=a(5893);a(7294),a(1664),a(2529);let r=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"navbar",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"active",href:"/home/homescreen",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/ProductsPage",children:"Products"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/compareCar",children:"Compare Cars"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/testScheduling",children:"Request Test Drive"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/contactUs",children:"Contact Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/home/aboutUs",children:"About"})})]})})});s.Z=r},2529:function(e,s,a){a.r(s);var l=a(5893),r=a(7294),i=a(2489),n=a(9417),c=a(9828),t=a(7309);let h=e=>{let{onClick:s}=e;return(0,l.jsx)("div",{className:"avatar",onClick:s,children:(0,l.jsx)("img",{src:"/images/profile.jpg",alt:"Profile Picture"})})},d=e=>{let{onClose:s}=e,[a,h]=(0,r.useState)(null),[d,o]=(0,r.useState)({firstName:"",lastName:"",email:"",number:""}),[m,x]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=async()=>{let e=(0,c.ad)(),s=(0,c.JU)(e,"users",t.I8.currentUser.uid),a=await (0,c.QT)(s);a.exists()?(h(a.data()),o(a.data())):console.log("No such user document!")};t.I8.currentUser&&e()},[t.I8.currentUser]);let j=(e,s)=>{o(a=>({...a,[e]:s}))},u=async()=>{let e=(0,c.ad)(),s=(0,c.JU)(e,"users",t.I8.currentUser.uid);await (0,c.pl)(s,d,{merge:!0}),h(d),x(!1)},f=()=>{x(!0)};return(0,l.jsx)("div",{className:"user-info-page",children:(0,l.jsx)("div",{className:"user-info",children:(0,l.jsxs)("div",{className:"info-paper",children:[(0,l.jsx)("div",{className:"avatar",children:a&&a.firstName[0]}),(0,l.jsxs)("div",{className:"username",children:[(0,l.jsxs)("h3",{className:"name",children:[a&&a.firstName," ",a&&a.lastName]}),!m&&(0,l.jsx)("button",{className:"edit-button",onClick:f,children:(0,l.jsx)(i.G,{icon:n.UJf,style:{color:"#000000"}})})]}),m?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"inputs",children:[(0,l.jsx)("label",{htmlFor:"firstName",className:"Uname",children:"Name"}),(0,l.jsx)("input",{id:"firstName",type:"text",value:d.firstName,onChange:e=>j("firstName",e.target.value)})]}),(0,l.jsxs)("div",{className:"inputs",children:[(0,l.jsx)("label",{htmlFor:"lastName",className:"Uname",children:"Family"}),(0,l.jsx)("input",{id:"lastName",type:"text",value:d.lastName,onChange:e=>j("lastName",e.target.value)})]}),(0,l.jsxs)("div",{className:"inputs",children:[(0,l.jsx)("label",{htmlFor:"email",className:"Umail",children:"Email"}),(0,l.jsx)("input",{id:"email",type:"email",value:d.email,onChange:e=>j("email",e.target.value)})]}),(0,l.jsxs)("div",{className:"inputs",children:[(0,l.jsx)("label",{htmlFor:"number",className:"Uphone",children:"Phone"}),(0,l.jsx)("input",{id:"number",type:"tel",value:d.number,onChange:e=>j("number",e.target.value)})]}),(0,l.jsx)("button",{className:"save-button",onClick:u,children:"Save changes"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["Email: ",a&&a.email]}),(0,l.jsxs)("p",{children:["Phone: ",a&&a.number]}),(0,l.jsxs)("p",{children:["First Name: ",a&&a.firstName]}),(0,l.jsxs)("p",{children:["Last Name: ",a&&a.lastName]}),(0,l.jsx)("button",{className:"save-button",onClick:s,children:"Close"})]})]})})})},o=()=>{let[e,s]=(0,r.useState)(!1),a=()=>{s(!0)},i=()=>{s(!1)};return(0,l.jsxs)("div",{className:"user-profile",children:[(0,l.jsx)(h,{onClick:a}),e&&(0,l.jsx)(d,{onClose:i})]})};s.default=o}}]);