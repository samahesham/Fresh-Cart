"use strict";(self.webpackChunkE_commerce_Project=self.webpackChunkE_commerce_Project||[]).push([[949],{9949:(m,i,a)=>{a.r(i),a.d(i,{CategoryDetailsComponent:()=>d});var n=a(6814),r=a(756),t=a(4769),l=a(1120),_=a(7998);let d=(()=>{class c{constructor(s,e){this._ActivatedRoute=s,this._EcomdataService=e,this.categoryDetails={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{let e=s.get("id");this._EcomdataService.getCategoryDetails(e).subscribe({next:o=>{this.categoryDetails=o.data}})}})}static#t=this.\u0275fac=function(e){return new(e||c)(t.Y36(l.gz),t.Y36(_.w))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-category-details"]],standalone:!0,features:[t.jDz],decls:9,vars:3,consts:[[1,"w-50","rounded","mx-auto","my-5","shadow"],[1,"container"],[1,"row","align-items-center"],[1,"col-md-6","p-4"],[1,"w-100",3,"src","alt"],[1,"col-md-6"],[1,"h5","text-success","fw-bold","text-center"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"div")(7,"h3",6),t._uU(8),t.qZA()()()()()()),2&e&&(t.xp6(4),t.Q6J("src",o.categoryDetails.image,t.LSH)("alt",o.categoryDetails.name),t.xp6(4),t.hij(" ",o.categoryDetails.name," "))},dependencies:[n.ez,r.bB]})}return c})()}}]);