"use strict";(self.webpackChunkE_commerce_Project=self.webpackChunkE_commerce_Project||[]).push([[577],{8577:(d,s,i)=>{i.r(s),i.d(s,{BlankLayoutComponent:()=>v});var o=i(6814),l=i(1120),t=i(4769),c=i(2333),u=i(2623);let p=(()=>{class e{constructor(n,a){this._AuthService=n,this._CartService=a,this.cartNumber=0}ngOnInit(){this._CartService.getUserCart().subscribe({next:n=>{this.cartNumber=n.numOfCartItems}}),this._CartService.cartNumber.subscribe({next:n=>{this.cartNumber=n}})}logOutUser(){this._AuthService.logOut()}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(c.e),t.Y36(u.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav-blank"]],standalone:!0,features:[t.jDz],decls:37,vars:1,consts:[[1,"navbar","navbar-expand-md","navbar-light","bg-light"],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","fresh cart logo","srcset","",1,"w-100"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","mx-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/cart",1,"nav-link"],["routerLinkActive","active-link","routerLink","/wishlist",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-link"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-2x"],[1,"badge","bg-main","position-absolute","top-0","end-0"],[1,"nav-link","cursor-pointer",3,"click"]],template:function(a,r){1&a&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"button",4),t._UZ(5,"span",5),t.qZA(),t.TgZ(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),t._uU(10,"Home"),t.qZA()(),t.TgZ(11,"li",8)(12,"a",10),t._uU(13,"Cart"),t.qZA()(),t.TgZ(14,"li",8)(15,"a",11),t._uU(16,"wish list"),t.qZA()(),t.TgZ(17,"li",8)(18,"a",12),t._uU(19,"Products"),t.qZA()(),t.TgZ(20,"li",8)(21,"a",13),t._uU(22,"Categories"),t.qZA()(),t.TgZ(23,"li",8)(24,"a",14),t._uU(25,"Brands"),t.qZA()()(),t.TgZ(26,"ul",15)(27,"li",8)(28,"a",16)(29,"li",8)(30,"a",17),t._UZ(31,"i",18),t.TgZ(32,"span",19),t._uU(33),t.qZA()()()()(),t.TgZ(34,"li",8)(35,"span",20),t.NdJ("click",function(){return r.logOutUser()}),t._uU(36," SignOut "),t.qZA()()()()()()),2&a&&(t.xp6(33),t.Oqu(r.cartNumber))},dependencies:[o.ez,l.rH,l.Od]})}return e})(),g=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:13,vars:0,consts:[[1,"bg-main-light","p-4"],[1,"container"],[1,"text-capitalize"],[1,"text-muted","text-capitalize"],[1,"d-flex","gap-3"],["type","email","placeholder","Email...",1,"form-control"],[1,"btn-main","flex-shrink-0"],[1,"h6","text-center"]],template:function(a,r){1&a&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"h2",2),t._uU(3,"get the fresh cart app"),t.qZA(),t.TgZ(4,"p",3),t._uU(5," We will send you a link, open it on your phone to download the app. "),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"input",5),t.TgZ(8,"button",6),t._uU(9,"Share App Link"),t.qZA()(),t._UZ(10,"hr"),t.TgZ(11,"h3",7),t._uU(12,"\xa9 2024 Sama Hesham All Right Reserved"),t.qZA()()())},dependencies:[o.ez],styles:["[_nghost-%COMP%]{margin-top:auto}"]})}return e})(),v=(()=>{class e{goUp(){scrollTo(0,0)}static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,""],[1,"btn-up",3,"click"],[1,"fas","fa-angle-up"]],template:function(a,r){1&a&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return r.goUp()}),t._UZ(5,"i",2),t.qZA())},dependencies:[o.ez,p,l.lC,g],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.btn-up[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;z-index:99;border-radius:30px;width:40px;height:40px;display:flex;align-items:center;justify-content:center;background-color:#0aad0a;border:unset;color:#fff;font-size:20px}"]})}return e})()}}]);