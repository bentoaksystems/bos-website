(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{FQys:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=function(){},o=t("pMnS"),a=t("NcP4"),r=t("lzlj"),u=t("FVSy"),d=t("bujt"),c=t("UodH"),p=t("dWZg"),s=t("lLAP"),m=t("wFw1"),h=t("2OBX"),g=t("qRoW"),f=function(){function n(n,l,t){this.langService=n,this.window=l,this.dialog=t,this.width=500}return n.prototype.ngOnInit=function(){var n=this;this.width=this.window.innerWidth,this.window.onresize=function(l){n.width=n.window.innerWidth}},n.prototype.showDetails=function(){var n=this.window.innerWidth,l=this.window.innerHeight;this.dialog.open(g.a,{width:.8*n+"px",height:.7*l+"px",data:{project:this.project,width:.8*n,height:.7*l}})},n}(),b=t("iQ22"),w=t("o3x0"),v=e["\u0275crt"]({encapsulation:0,styles:[['.container[_ngcontent-%COMP%]{display:inline-block;margin:5px;width:310px;height:300px;padding:0!important}p[_ngcontent-%COMP%]{text-align:center;margin-top:5px;padding-left:4px;padding-right:4px}.image[_ngcontent-%COMP%]{height:75%;width:50%;margin-top:15px;border-radius:5px}.middle[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%]{z-index:1}.container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%]{opacity:1}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.square[_ngcontent-%COMP%]{position:relative;width:50%}.square[_ngcontent-%COMP%]:after{content:"";display:block;padding-bottom:100%}.content[_ngcontent-%COMP%]{position:absolute;width:100%;height:auto;padding:10px}']],data:{}});function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,13,"mat-card",[["class","primary-lighter container shadow tiny mat-card"]],null,null,null,r.b,r.a)),e["\u0275did"](1,49152,null,0,u.a,[],null,null),(n()(),e["\u0275eld"](2,0,null,0,11,"div",[["style","display: block; height: 100%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","square"],["style","height: 50%; text-align: center;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,0,"img",[["class","content"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,4,"div",[["class","middle"],["style","height: 33%;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,1,"h5",[["class","t t-dark t-caption"],["style","font-weight: bold;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](7,null,["",""])),(n()(),e["\u0275eld"](8,0,null,null,1,"p",[["class","t t-dark t-caption"]],null,null,null,null,null)),(n()(),e["\u0275ted"](9,null,["",""])),(n()(),e["\u0275eld"](10,0,null,null,3,"div",[["class","middle"],["style","height: 17%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](11,0,null,null,2,"button",[["class","accent"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.showDetails()&&e),e},d.b,d.a)),e["\u0275did"](12,180224,null,0,c.b,[e.ElementRef,p.a,s.d,[2,m.a]],null,null),(n()(),e["\u0275ted"](13,0,[" "," "]))],null,function(n,l){var t=l.component;n(l,4,0,e["\u0275inlineInterpolate"](1,"",t.project.mainImage.url,""),e["\u0275inlineInterpolate"](1,"",t.project.title,"")),n(l,7,0,t.project.title),n(l,9,0,t.project.shortDescription),n(l,11,0,e["\u0275nov"](l,12).disabled||null,"NoopAnimations"===e["\u0275nov"](l,12)._animationMode),n(l,13,0,"More...")})}var x=t("Ip0R"),M=t("DlQD"),y=t("eQ9L"),O=t("Otf3"),C=t("ph+x"),P=function(){function n(n,l,t,e){this.getJsonFileService=n,this.responsiveService=l,this.window=t,this.spinnerService=e,this.projects=[],this.details=[],this.isMobile=!1}return n.prototype.ngOnInit=function(){var n=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(l){n.isMobile=l}),this.spinnerService.enable(),this.getJsonFileService.getProjectData().then(function(l){n.details=l;for(var t=0,e=n.details;t<e.length;t++){var i=e[t],o={title:i.displayName,shortDescription:i.shortDescription,description:M(i.description),mainImage:{url:i.mainImage.url,title:i.mainImage.title}};n.projects.push(o)}n.spinnerService.disable()}).catch(function(n){console.log(n)})},n}(),j=e["\u0275crt"]({encapsulation:0,styles:[[".title[_ngcontent-%COMP%]{font-weight:700;margin-left:40px;padding-top:30px}"]],data:{}});function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-project",[],null,null,null,_,v)),e["\u0275did"](1,114688,null,0,f,[h.a,b.b,w.e],{project:[0,"project"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function F(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","maxWidth"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"]],[[4,"text-align",null]],null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Our Projects "])),(n()(),e["\u0275eld"](3,0,null,null,2,"div",[["style","text-align: center; margin-top: 25px"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](5,278528,null,0,x.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,5,0,l.component.projects)},function(n,l){n(l,1,0,l.component.isMobile?"center":"left")})}var D=e["\u0275ccf"]("app-projects",P,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-projects",[],null,null,null,F,j)),e["\u0275did"](1,114688,null,0,P,[y.a,O.a,b.b,C.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),I=t("gIcY"),R=t("OzfB"),S=t("M2Lx"),L=t("eDkP"),N=t("Fzqc"),z=t("v9Dh"),A=t("ZYCi"),T=t("21Lb"),W=t("hUWP"),q=t("3pJQ"),B=t("V9q+"),E=t("Wf4p"),J=t("Blfk"),Q=t("7LN8"),U=t("4c35"),Z=t("qAlS"),V=t("YhbO"),Y=t("jlZm");t.d(l,"ProjectsModuleNgFactory",function(){return H});var H=e["\u0275cmf"](i,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,a.a,D]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,x.NgLocalization,x.NgLocaleLocalization,[e.LOCALE_ID,[2,x["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,I.FormBuilder,I.FormBuilder,[]),e["\u0275mpd"](4608,I["\u0275angular_packages_forms_forms_i"],I["\u0275angular_packages_forms_forms_i"],[]),e["\u0275mpd"](4608,R.j,R.i,[R.d,R.g]),e["\u0275mpd"](5120,e.APP_BOOTSTRAP_LISTENER,function(n,l){return[R.m(n,l)]},[x.DOCUMENT,e.PLATFORM_ID]),e["\u0275mpd"](4608,S.c,S.c,[]),e["\u0275mpd"](4608,L.a,L.a,[L.g,L.c,e.ComponentFactoryResolver,L.f,L.d,e.Injector,e.NgZone,x.DOCUMENT,N.c]),e["\u0275mpd"](5120,L.h,L.i,[L.a]),e["\u0275mpd"](5120,z.a,z.b,[L.a]),e["\u0275mpd"](1073742336,A.m,A.m,[[2,A.s],[2,A.k]]),e["\u0275mpd"](1073742336,x.CommonModule,x.CommonModule,[]),e["\u0275mpd"](1073742336,I["\u0275angular_packages_forms_forms_bb"],I["\u0275angular_packages_forms_forms_bb"],[]),e["\u0275mpd"](1073742336,I.ReactiveFormsModule,I.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,R.e,R.e,[]),e["\u0275mpd"](1073742336,N.a,N.a,[]),e["\u0275mpd"](1073742336,T.b,T.b,[]),e["\u0275mpd"](1073742336,W.a,W.a,[]),e["\u0275mpd"](1073742336,q.a,q.a,[]),e["\u0275mpd"](1073742336,B.a,B.a,[[2,R.k],e.PLATFORM_ID]),e["\u0275mpd"](1073742336,E.n,E.n,[[2,E.f]]),e["\u0275mpd"](1073742336,u.d,u.d,[]),e["\u0275mpd"](1073742336,p.b,p.b,[]),e["\u0275mpd"](1073742336,E.z,E.z,[]),e["\u0275mpd"](1073742336,c.c,c.c,[]),e["\u0275mpd"](1073742336,J.c,J.c,[]),e["\u0275mpd"](1073742336,Q.SharedModule,Q.SharedModule,[]),e["\u0275mpd"](1073742336,S.d,S.d,[]),e["\u0275mpd"](1073742336,s.a,s.a,[]),e["\u0275mpd"](1073742336,U.f,U.f,[]),e["\u0275mpd"](1073742336,Z.b,Z.b,[]),e["\u0275mpd"](1073742336,L.e,L.e,[]),e["\u0275mpd"](1073742336,z.c,z.c,[]),e["\u0275mpd"](1073742336,V.c,V.c,[]),e["\u0275mpd"](1073742336,Y.c,Y.c,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,A.i,function(){return[[{path:"",component:P,children:[{path:"project",component:P}]}]]},[])])})}}]);