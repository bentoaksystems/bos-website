(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/VVS":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),a=function(){},i=t("pMnS"),o=t("t68o"),r=t("bujt"),d=t("UodH"),u=t("dWZg"),c=t("lLAP"),m=t("wFw1"),p=t("Ip0R"),s=t("lzlj"),g=t("FVSy"),h=t("2OBX"),f=t("cRei"),x=function(){function n(n,l,t){this.langService=n,this.dialog=l,this.window=t,this.width=500,this.images={},this.images={github:"assets/images/social/github.png",linkedin:"assets/images/social/linkedin.png",slack:"assets/images/social/slack.png",email:"assets/images/social/email.png"}}return n.prototype.ngOnInit=function(){var n=this;this.width=this.window.innerWidth,this.window.onresize=function(l){n.width=n.window.innerWidth}},n.prototype.showDetails=function(){var n=this.window.innerWidth,l=this.window.innerHeight;this.dialog.open(f.a,{width:.8*n+"px",height:.8*l+"px",data:{person:this.person,width:.8*n,height:.8*l}})},n.prototype.getKeys=function(n){return Object.keys(n)},n}(),b=t("o3x0"),w=t("iQ22"),v=e["\u0275crt"]({encapsulation:0,styles:[[".personal-image[_ngcontent-%COMP%]{max-height:120px;max-width:120px;margin:30px}.shadow[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);cursor:pointer}.links-wrapper[_ngcontent-%COMP%]{text-align:center;position:relative;top:-10px}.tiny-button[_ngcontent-%COMP%]{border-radius:30px}.tiny-img[_ngcontent-%COMP%]{max-width:30px}button[_ngcontent-%COMP%]:focus{outline:0}.container[_ngcontent-%COMP%]{display:inline-block;margin:15px;width:310px;height:520px;font-size:3px;padding:0!important;margin-bottom:20px!important}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.image[_ngcontent-%COMP%]{height:100%;width:100%}.item-title[_ngcontent-%COMP%]{margin:auto;text-align:center;top:-40px;left:-25px;background-color:#b9b7b7;border-radius:10px}.newi[_ngcontent-%COMP%]{height:60%;text-align:center;padding:15px}.text[_ngcontent-%COMP%]{margin:0;color:#000;font-size:28px;font-family:'Trebuchet MS','Lucida Sans Unicode','Lucida Grande','Lucida Sans',Arial,sans-serif}.text[_ngcontent-%COMP%]:hover{color:#0288d1}"]],data:{}});function y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"button",[["class","tiny-button"],["mat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),e["\u0275did"](1,180224,null,0,d.b,[e.ElementRef,u.a,c.d,[2,m.a]],null,null),(n()(),e["\u0275eld"](2,0,null,0,0,"img",[["class","tiny-img"]],[[8,"src",4]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,e["\u0275nov"](l,1).disabled||null,"NoopAnimations"===e["\u0275nov"](l,1)._animationMode),n(l,2,0,e["\u0275inlineInterpolate"](1,"",t.images[l.parent.context.$implicit.toLowerCase()],""))})}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"a",[["rel","noopener noreferrer"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](2,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.person.social[l.context.$implicit])},function(n,l){n(l,0,0,e["\u0275inlineInterpolate"](1,"",l.component.person.social[l.context.$implicit],""))})}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,14,"mat-card",[["class","primary-lighter container shadow tiny mat-card"]],null,null,null,s.b,s.a)),e["\u0275did"](1,49152,null,0,g.a,[],null,null),(n()(),e["\u0275eld"](2,0,null,0,12,"div",[["style","display: block; height: 100%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","newi"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,0,"img",[["class","image"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,6,"div",[["style","height: 25%;margin: 10px;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,5,"a",[["aria-hidden","true"],["style","text-decoration: none;"]],[[8,"href",4]],null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","t t-light t-light-hover "]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,1,"h5",[["class","text"]],null,null,null,null,null)),(n()(),e["\u0275ted"](9,null,["",""])),(n()(),e["\u0275eld"](10,0,null,null,1,"div",[["style","font-family:Trebuchet MS;color:black;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](11,null,["",""])),(n()(),e["\u0275eld"](12,0,null,null,2,"div",[["class","links-wrapper"],["style","height: 7%; margin:20px;"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](14,278528,null,0,p.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,14,0,t.getKeys(t.person.social))},function(n,l){var t=l.component;n(l,4,0,e["\u0275inlineInterpolate"](1,"",t.person.image,""),e["\u0275inlineInterpolate"](1,"",t.person.fullname+" image","")),n(l,6,0,e["\u0275inlineInterpolate"](1,"","mailto:"+t.person.email,"")),n(l,9,0,t.person.fullname),n(l,11,0,t.person.responsibility)})}var O=t("21Lb"),C=t("OzfB"),k=t("eQ9L"),F=t("Otf3"),P=t("ph+x"),R=function(){function n(n,l,t){this.getJsonService=n,this.responsiveService=l,this.spinnerService=t,this.people=[],this.isMobile=!1}return n.prototype.ngOnInit=function(){var n=this;this.spinnerService.enable(),this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(l){n.isMobile=l}),this.getJsonService.getPeopleData().then(function(l){n.people=l,n.spinnerService.disable()}).catch(function(n){return console.error("people data fetch failed",n)})},n}(),S=e["\u0275crt"]({encapsulation:0,styles:[[".person-item[_ngcontent-%COMP%]{margin:1em auto}.title[_ngcontent-%COMP%]{font-weight:700;margin-left:40px;padding-top:30px}"]],data:{}});function I(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-person",[],null,null,null,M,v)),e["\u0275did"](1,114688,null,0,x,[h.a,b.e,w.b],{person:[0,"person"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function L(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,15,"div",[["class","maxWidth"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"]],[[4,"text-align",null]],null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Who we are "])),(n()(),e["\u0275eld"](3,0,null,null,12,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"],["style","margin-top: 25px"]],null,null,null,null,null)),e["\u0275did"](4,737280,null,0,O.d,[C.h,e.ElementRef,C.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),e["\u0275did"](5,737280,null,0,O.c,[C.h,e.ElementRef,[6,O.d],C.l],{align:[0,"align"]},null),(n()(),e["\u0275eld"](6,0,null,null,2,"div",[["fxFlex","10"]],null,null,null,null,null)),e["\u0275did"](7,737280,null,0,O.a,[C.h,e.ElementRef,[3,O.d],C.l,C.f],{flex:[0,"flex"]},null),(n()(),e["\u0275ted"](-1,null,["\xa0"])),(n()(),e["\u0275eld"](9,0,null,null,3,"div",[["fxFlex","80"],["style","text-align: center"]],null,null,null,null,null)),e["\u0275did"](10,737280,null,0,O.a,[C.h,e.ElementRef,[3,O.d],C.l,C.f],{flex:[0,"flex"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](12,278528,null,0,p.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](13,0,null,null,2,"div",[["fxFlex","10"]],null,null,null,null,null)),e["\u0275did"](14,737280,null,0,O.a,[C.h,e.ElementRef,[3,O.d],C.l,C.f],{flex:[0,"flex"]},null),(n()(),e["\u0275ted"](-1,null,["\xa0"]))],function(n,l){var t=l.component;n(l,4,0,"row","column","row"),n(l,5,0,"center center"),n(l,7,0,"10"),n(l,10,0,"80"),n(l,12,0,t.people),n(l,14,0,"10")},function(n,l){n(l,1,0,l.component.isMobile?"center":"left")})}var z=e["\u0275ccf"]("app-people",R,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-people",[],null,null,null,L,S)),e["\u0275did"](1,114688,null,0,R,[k.a,F.a,P.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),N=t("gIcY"),T=t("eDkP"),E=t("Fzqc"),A=t("ZYCi"),D=t("hUWP"),j=t("3pJQ"),W=t("V9q+"),V=t("Wf4p"),B=t("SMsm"),J=t("4c35"),U=t("qAlS");t.d(l,"PeopleModuleNgFactory",function(){return $});var $=e["\u0275cmf"](a,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,o.a,z]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[e.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,N.FormBuilder,N.FormBuilder,[]),e["\u0275mpd"](4608,N["\u0275angular_packages_forms_forms_i"],N["\u0275angular_packages_forms_forms_i"],[]),e["\u0275mpd"](4608,C.j,C.i,[C.d,C.g]),e["\u0275mpd"](5120,e.APP_BOOTSTRAP_LISTENER,function(n,l){return[C.m(n,l)]},[p.DOCUMENT,e.PLATFORM_ID]),e["\u0275mpd"](4608,T.a,T.a,[T.g,T.c,e.ComponentFactoryResolver,T.f,T.d,e.Injector,e.NgZone,p.DOCUMENT,E.c]),e["\u0275mpd"](5120,T.h,T.i,[T.a]),e["\u0275mpd"](5120,b.c,b.d,[T.a]),e["\u0275mpd"](4608,b.e,b.e,[T.a,e.Injector,[2,p.Location],[2,b.b],b.c,[3,b.e],T.c]),e["\u0275mpd"](1073742336,A.m,A.m,[[2,A.s],[2,A.k]]),e["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),e["\u0275mpd"](1073742336,N["\u0275angular_packages_forms_forms_bb"],N["\u0275angular_packages_forms_forms_bb"],[]),e["\u0275mpd"](1073742336,N.ReactiveFormsModule,N.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,C.e,C.e,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,O.b,O.b,[]),e["\u0275mpd"](1073742336,D.a,D.a,[]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,W.a,W.a,[[2,C.k],e.PLATFORM_ID]),e["\u0275mpd"](1073742336,V.n,V.n,[[2,V.f]]),e["\u0275mpd"](1073742336,g.d,g.d,[]),e["\u0275mpd"](1073742336,B.b,B.b,[]),e["\u0275mpd"](1073742336,u.b,u.b,[]),e["\u0275mpd"](1073742336,V.z,V.z,[]),e["\u0275mpd"](1073742336,d.c,d.c,[]),e["\u0275mpd"](1073742336,J.f,J.f,[]),e["\u0275mpd"](1073742336,U.b,U.b,[]),e["\u0275mpd"](1073742336,T.e,T.e,[]),e["\u0275mpd"](1073742336,b.h,b.h,[]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](1024,A.i,function(){return[[{path:"",component:R,children:[{path:"people",component:R}]}]]},[])])})},lzlj:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return i});var e=t("CcnG"),a=(t("FVSy"),t("Fzqc"),t("Wf4p"),e["\u0275crt"]({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:24px;border-radius:2px}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.mat-card.mat-card-flat{box-shadow:none}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle,.mat-card-title{display:block;margin-bottom:16px}.mat-card-actions{margin-left:-16px;margin-right:-16px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 48px);margin:0 -24px 16px -24px}.mat-card-footer{display:block;margin:0 -24px -24px -24px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 4px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header-text{margin:0 8px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0}.mat-card-lg-image,.mat-card-md-image,.mat-card-sm-image,.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}.mat-card-title-group{display:flex;justify-content:space-between;margin:0 -8px}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}@media (max-width:599px){.mat-card{padding:24px 16px}.mat-card-actions{margin-left:-8px;margin-right:-8px}.mat-card-image{width:calc(100% + 32px);margin:16px -16px}.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}.mat-card-header{margin:-8px 0 0 0}.mat-card-footer{margin-left:-16px;margin-right:-16px}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-24px}.mat-card>.mat-card-actions:last-child{margin-bottom:-16px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function i(n){return e["\u0275vid"](2,[e["\u0275ncd"](null,0),e["\u0275ncd"](null,1)],null,null)}}}]);