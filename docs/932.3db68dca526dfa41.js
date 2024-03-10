"use strict";(self.webpackChunkE_commerce_Project=self.webpackChunkE_commerce_Project||[]).push([[932],{6666:(I,m,s)=>{s.r(m),s.d(m,{LoginComponent:()=>L});var u=s(6814),r=s(95),_=s(1120),e=s(4769),p=s(2333);function d(o,a){1&o&&(e.TgZ(0,"p"),e._uU(1," Email Is Required "),e.qZA())}function c(o,a){1&o&&(e.TgZ(0,"p"),e._uU(1," Email Is Invalid "),e.qZA())}function f(o,a){if(1&o&&(e.TgZ(0,"div",13),e.YNc(1,d,2,0,"p",11),e.YNc(2,c,2,0,"p",11),e.qZA()),2&o){const t=e.oxw();let l,n;e.xp6(1),e.Q6J("ngIf",null==(l=t.loginForm.get("email"))?null:l.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=t.loginForm.get("email"))?null:n.getError("email"))}}function h(o,a){1&o&&(e.TgZ(0,"p"),e._uU(1," Password Is Required "),e.qZA())}function v(o,a){1&o&&(e.TgZ(0,"p"),e._uU(1," Password Must At Least 6 Characters "),e.qZA())}function Z(o,a){if(1&o&&(e.TgZ(0,"div",13),e.YNc(1,h,2,0,"p",11),e.YNc(2,v,2,0,"p",11),e.qZA()),2&o){const t=e.oxw();let l,n;e.xp6(1),e.Q6J("ngIf",null==(l=t.loginForm.get("password"))?null:l.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=t.loginForm.get("password"))?null:n.getError("pattern"))}}function T(o,a){1&o&&(e.TgZ(0,"span"),e._UZ(1,"i",14),e.qZA())}function A(o,a){if(1&o&&(e.TgZ(0,"p",15),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.errorMsg)}}let L=(()=>{class o{constructor(t,l,n){this._AuthService=t,this._Router=l,this._FormBuilder=n,this.errorMsg="",this.isLoading=!1,this.loginForm=this._FormBuilder.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.pattern(/^\w{6,}$/)]]})}handleForm(){this.isLoading=!0,this.loginForm.valid?this._AuthService.login(this.loginForm.value).subscribe({next:t=>{"success"==t.message&&(localStorage.setItem("eToken",t.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"]),this.isLoading=!1)},error:t=>{this.errorMsg=t.error.message,this.isLoading=!1}}):this.loginForm.markAllAsTouched()}static#e=this.\u0275fac=function(l){return new(l||o)(e.Y36(p.e),e.Y36(_.F0),e.Y36(r.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:6,consts:[[1,"container","shadow","bg-main-light","p-4","rounded","w-75","mx-auto","my-3"],[3,"formGroup","ngSubmit"],[1,"form-item","my-3"],["for","email"],["id","email","formControlName","email","type","email",1,"form-control"],["class","alert alert-danger my-3",4,"ngIf"],["for","password"],["id","password","formControlName","password","type","password",1,"form-control"],[1,"d-flex","justify-content-between","mt-4"],["routerLink","/forgetPassword",1,"cursor-pointer","fa-1x","fw-bold","text"],["type","submit",1,"btn-main",3,"disabled"],[4,"ngIf"],["class","alert alert-danger my-5 py-3",4,"ngIf"],[1,"alert","alert-danger","my-3"],[1,"fa-solid","fa-spinner","fa-spin"],[1,"alert","alert-danger","my-5","py-3"]],template:function(l,n){if(1&l&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"Login Now"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return n.handleForm()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",4),e.YNc(8,f,3,2,"div",5),e.qZA(),e.TgZ(9,"div",2)(10,"label",6),e._uU(11,"Password"),e.qZA(),e._UZ(12,"input",7),e.YNc(13,Z,3,2,"div",5),e.qZA(),e.TgZ(14,"div",8)(15,"p",9),e._uU(16," forget your password ? "),e.qZA(),e.TgZ(17,"button",10),e._uU(18," Login "),e.YNc(19,T,2,0,"span",11),e.qZA()(),e.YNc(20,A,2,1,"p",12),e.qZA()()),2&l){let i,g;e.xp6(3),e.Q6J("formGroup",n.loginForm),e.xp6(5),e.Q6J("ngIf",((null==(i=n.loginForm.get("email"))?null:i.touched)||(null==(i=n.loginForm.get("email"))||null==i.value?null:i.value.length)>0)&&(null==(i=n.loginForm.get("email"))?null:i.errors)),e.xp6(5),e.Q6J("ngIf",((null==(g=n.loginForm.get("password"))?null:g.touched)||(null==(g=n.loginForm.get("password"))||null==g.value?null:g.value.length)>0)&&(null==(g=n.loginForm.get("password"))?null:g.errors)),e.xp6(4),e.Q6J("disabled",n.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",n.errorMsg)}},dependencies:[u.ez,u.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,_.rH],styles:[".test[_ngcontent-%COMP%]{transition:color .8s}.text[_ngcontent-%COMP%]:hover{color:#0aad0a}"]})}return o})()}}]);