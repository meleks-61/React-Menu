(this.webpackJsonpasian=this.webpackJsonpasian||[]).push([[0],{20:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var i,c,a,o,r,s,d,p,l,g,u,b,j=t(0),h=t.n(j),m=t(11),w=t.n(m),x=(t(20),t(7)),f=t(2),O=t(15),y=t(3),k=t(1),v=y.a.div(i||(i=Object(f.a)([""]))),C=y.a.h1(c||(c=Object(f.a)([""]))),D=function(){return Object(k.jsx)(v,{children:Object(k.jsx)(C,{children:"Asian Kitchen Menu"})})},F=y.a.div(a||(a=Object(f.a)([""]))),A=y.a.button(o||(o=Object(f.a)(["\nmargin:5px;\nwidth:100px;\nheight:50px;\nborder-radius: 10px;\nborder-style: hidden;\ncursor: pointer;\n"]))),B=function(e){var n=e.categoryList,t=e.changeList;return Object(k.jsx)(F,{children:n.map((function(e){return Object(k.jsx)(A,{onClick:function(){return t(e)},children:e})}))})},S=y.a.div(r||(r=Object(f.a)(["\ndisplay: flex;\nflex-wrap: wrap;\nmargin-top: 30px;\n"]))),L=y.a.div(s||(s=Object(f.a)(["\ndisplay:flex;\nwidth: 50%;\n\n"]))),J=y.a.img(d||(d=Object(f.a)(["\nwidth:30%;\nheight: 175px;\nborder:0.25rem solid black;\nborder-radius: 10px;\nobject-fit:cover;\nmargin-left:10px;\nmargin-bottom:10px;"]))),E=y.a.div(p||(p=Object(f.a)(["\ndisplay: flex;\nflex-direction: column;\npadding-left: 10px;\n"]))),I=y.a.div(l||(l=Object(f.a)(["\ndisplay:flex;\n/* flex-direction: row; */\njustify-content:space-between;\nborder-bottom:2px solid gray;"]))),K=y.a.h4(g||(g=Object(f.a)(["\ncursor: pointer;\n"]))),R=y.a.p(u||(u=Object(f.a)([""]))),M=y.a.p(b||(b=Object(f.a)(["\nmargin-top:20px;"])));var Y,z=function(e){var n=e.menuItems,t=Object(j.useState)(!1),i=Object(x.a)(t,2),c=i[0],a=i[1],o=function(){a(!c)};return Object(k.jsx)(S,{children:n.map((function(e){return Object(k.jsxs)(L,{children:[Object(k.jsx)(J,{src:e.img}),Object(k.jsxs)(E,{children:[Object(k.jsxs)(I,{children:[Object(k.jsx)(K,{onClick:o,children:e.title}),Object(k.jsx)(R,{children:e.price})]}),Object(k.jsx)(M,{style:c?{display:"none"}:null,children:e.desc})]})]},e.id)}))})},N=[{id:1,title:"Tteokbokki",category:"Korea",price:10.99,img:"https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",desc:"Spicy rice cakes, serving with fish cake."},{id:2,title:"Chicken Ramen",category:"Japan",price:7.99,img:"https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",desc:"Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. "},{id:3,title:"Bibimbap",category:"Korea",price:8.99,img:"https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",desc:"Boiling vegetables, serving with special hot sauce"},{id:4,title:"Dan Dan Mian",category:"China",price:5.99,img:"https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",desc:"Dan dan noodle, serving with green onion "},{id:5,title:"Yangzhou Fried Rice",category:"China",price:12.99,img:"https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",desc:"Yangzhou style fried rice, serving with bean and pickles "},{id:6,title:"Onigiri",category:"Japan",price:9.99,img:"https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",desc:"Rice Sandwich, serving with soy sauce"},{id:7,title:"Jajangmyeon",category:"Korea",price:15.99,img:"https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",desc:"Black bean sauce noodle, serving with green onion "},{id:8,title:"Ma Yi Shang Shu",category:"China",price:12.99,img:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",desc:"Hot pepper sauce noodle, serving with soy bean and onion"},{id:9,title:"Doroyaki",category:"Japan",price:3.99,img:"https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",desc:"Red bean paste dessert, serving with honey."}],T=["All"].concat(Object(O.a)(new Set(N.map((function(e){return e.category}))))),H=y.a.div(Y||(Y=Object(f.a)(["\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\nbackground-color: orange;\n"])));var P=function(){var e=Object(j.useState)(N),n=Object(x.a)(e,2),t=n[0],i=n[1];return Object(k.jsxs)(H,{children:[Object(k.jsx)(D,{}),Object(k.jsx)(B,{changeList:function(e){i("All"===e?N:N.filter((function(n){return n.category===e})))},categoryList:T}),Object(k.jsx)(z,{menuItems:t})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),i(e),c(e),a(e),o(e)}))};w.a.render(Object(k.jsx)(h.a.StrictMode,{children:Object(k.jsx)(P,{})}),document.getElementById("root")),W()}},[[24,1,2]]]);
//# sourceMappingURL=main.db84d44a.chunk.js.map