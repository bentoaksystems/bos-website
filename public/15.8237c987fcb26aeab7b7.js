(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ZaRm:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){},i=e("pMnS"),o=e("21Lb"),r=e("OzfB"),a=e("Ip0R"),s=e("DlQD"),c=e("Otf3"),d=function(){function l(l){this.responsiveService=l,this.isMobile=!1}return Object.defineProperty(l.prototype,"CICD_Info",{set:function(l){l&&(this.CICDInfo=l.filter(function(l){return"CI/CD"===l.title})[0],this.desc=s(this.CICDInfo.description))},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},l}(),p=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 50px 15px 120px;position:relative;z-index:4}.img[_ngcontent-%COMP%]{height:auto;width:120%;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px 30px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,2,"div",[["fxFlex","40"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","page-section"],["fxFlex","60"]],null,null,null,null,null)),t["\u0275did"](7,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](8,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"],["id","CICD"],["style","margin-left: 150px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,[" "," "])),(l()(),t["\u0275eld"](10,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"40"),l(n,7,0,"60")},function(l,n){var e=n.component;l(n,5,0,t["\u0275inlineInterpolate"](1,"",null==e.CICDInfo?null:e.CICDInfo.background,"")),l(n,9,0,null==e.CICDInfo?null:e.CICDInfo.title),l(n,10,0,e.desc)})}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,null==e.CICDInfo?null:e.CICDInfo.title),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.CICDInfo?null:e.CICDInfo.background,"")),l(n,5,0,e.desc)})}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var b=function(){function l(l){this.responsiveService=l,this.isMobile=!1}return Object.defineProperty(l.prototype,"softwareDev_Info",{set:function(l){l&&(this.softwareDevInfo=l.filter(function(l){return"Software Development"===l.title})[0],this.desc=s(this.softwareDevInfo.description))},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},l}(),h=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 100px 15px 15px;position:relative;z-index:4}.img[_ngcontent-%COMP%]{height:auto;width:100%;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px -100px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:20px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"],["style","margin-top: 10px"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,4,"div",[["class","page-section"],["fxFlex","60"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[" "," "])),(l()(),t["\u0275eld"](7,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"div",[["fxFlex","40"]],null,null,null,null,null)),t["\u0275did"](9,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](10,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"60"),l(n,9,0,"40")},function(l,n){var e=n.component;l(n,6,0,null==e.softwareDevInfo?null:e.softwareDevInfo.title),l(n,7,0,e.desc),l(n,10,0,t["\u0275inlineInterpolate"](1,"",null==e.softwareDevInfo?null:e.softwareDevInfo.background,""))})}function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,null==e.softwareDevInfo?null:e.softwareDevInfo.title),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.softwareDevInfo?null:e.softwareDevInfo.background,"")),l(n,5,0,e.desc)})}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var y=e("AleK"),I=function(){function l(l,n){this.responsiveService=l,this.scrollService=n,this.isMobile=!1}return Object.defineProperty(l.prototype,"webDev_Info",{set:function(l){l&&(this.webDevInfo=l.filter(function(l){return"Web Development"===l.title})[0],this.desc=s(this.webDevInfo.description))},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},l}(),C=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 50px 15px 110px;position:relative;z-index:4;margin-top:10px}.img[_ngcontent-%COMP%]{height:auto;width:120%;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px 30px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:40px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"],["style","margin-top: 10px"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,2,"div",[["fxFlex","30"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","page-section"],["fxFlex","70"]],null,null,null,null,null)),t["\u0275did"](7,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](8,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"],["style","margin-left: 120px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,[" "," "])),(l()(),t["\u0275eld"](10,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"30"),l(n,7,0,"70")},function(l,n){var e=n.component;l(n,5,0,t["\u0275inlineInterpolate"](1,"",null==e.webDevInfo?null:e.webDevInfo.background,"")),l(n,9,0,null==e.webDevInfo?null:e.webDevInfo.title),l(n,10,0,e.desc)})}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,null==e.webDevInfo?null:e.webDevInfo.title),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.webDevInfo?null:e.webDevInfo.background,"")),l(n,5,0,e.desc)})}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var D=function(){function l(l){this.responsiveService=l,this.desc=null,this.isMobile=!1}return Object.defineProperty(l.prototype,"techsupp_Info",{set:function(l){l&&(this.techsuppInfo=l.filter(function(l){return"Technical Support"===l.title})[0],this.desc=s(this.techsuppInfo.description))},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},l}(),O=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 100px 15px 15px;position:relative;z-index:4}.img[_ngcontent-%COMP%]{height:400px;width:600px;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px -100px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:20px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"],["style","margin-top: 10px"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,4,"div",[["class","page-section"],["fxFlex","60"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[" "," "])),(l()(),t["\u0275eld"](7,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"div",[["fxFlex","40"]],null,null,null,null,null)),t["\u0275did"](9,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](10,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"60"),l(n,9,0,"40")},function(l,n){var e=n.component;l(n,6,0,null==e.techsuppInfo?null:e.techsuppInfo.title),l(n,7,0,e.desc),l(n,10,0,t["\u0275inlineInterpolate"](1,"",null==e.techsuppInfo?null:e.techsuppInfo.background,""))})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,null==e.techsuppInfo?null:e.techsuppInfo.title),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.techsuppInfo?null:e.techsuppInfo.background,"")),l(n,5,0,e.desc)})}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var L=e("eQ9L"),T=e("ph+x"),E=function(){function l(l,n,e,t){this.getJsonFileService=l,this.responsiveService=n,this.spinnerService=e,this.scrollService=t,this.results=null,this.desc=null,this.isMobile=!1}return l.prototype.ngOnInit=function(){var l=this;this.spinnerService.enable(),this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){l.isMobile=n}),this.getJsonFileService.getAboutUsData().then(function(n){l.results=n,l.bentoakData=l.results.filter(function(l){return"Bent Oak Systems"===l.title})[0],l.bentoakData.description=s(l.bentoakData.description),l.spinnerService.disable(),""!==l.scrollService.position&&l.scrollService.triggerScrollTo()}).catch(function(l){console.error("Cannot get data!",l)})},l}(),F=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 100px 15px 15px;position:relative;z-index:4;margin-top:10px}.img[_ngcontent-%COMP%]{height:auto;max-width:100%;margin-top:250px}.img-section[_ngcontent-%COMP%]{margin:150px -100px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:65px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","start stretch"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,4,"div",[["class","page-section"],["fxFlex","50"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[" "," "])),(l()(),t["\u0275eld"](7,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"div",[["fxFlex","50"]],null,null,null,null,null)),t["\u0275did"](9,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](10,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"start stretch"),l(n,4,0,"50"),l(n,9,0,"50")},function(l,n){var e=n.component;l(n,6,0,null==e.bentoakData?null:e.bentoakData.title),l(n,7,0,null==e.bentoakData?null:e.bentoakData.description),l(n,10,0,t["\u0275inlineInterpolate"](1,"",null==e.bentoakData?null:e.bentoakData.background,""))})}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,null==e.bentoakData?null:e.bentoakData.title),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.bentoakData?null:e.bentoakData.background,"")),l(n,5,0,null==e.bentoakData?null:e.bentoakData.description)})}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","maxWidth"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](2,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,z)),t["\u0275did"](4,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["id","CICD"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"app-cicd",[],null,null,null,m,p)),t["\u0275did"](7,114688,null,0,d,[c.a],{CICD_Info:[0,"CICD_Info"]},null),(l()(),t["\u0275eld"](8,0,null,null,0,"div",[["id","SoftwareDev"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"app-software-development",[],null,null,null,w,h)),t["\u0275did"](10,114688,null,0,b,[c.a],{softwareDev_Info:[0,"softwareDev_Info"]},null),(l()(),t["\u0275eld"](11,0,null,null,0,"div",[["id","WebDev"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,1,"app-web-development",[],null,null,null,k,C)),t["\u0275did"](13,114688,null,0,I,[c.a,y.a],{webDev_Info:[0,"webDev_Info"]},null),(l()(),t["\u0275eld"](14,0,null,null,0,"div",[["id","TechSupp"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"app-technical-support",[],null,null,null,S,O)),t["\u0275did"](16,114688,null,0,D,[c.a],{techsupp_Info:[0,"techsupp_Info"]},null)],function(l,n){var e=n.component;l(n,2,0,!e.isMobile),l(n,4,0,e.isMobile),l(n,7,0,e.results),l(n,10,0,e.results),l(n,13,0,e.results),l(n,16,0,e.results)},null)}var j=t["\u0275ccf"]("app-about-us",E,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-about-us",[],null,null,null,A,F)),t["\u0275did"](1,114688,null,0,E,[L.a,c.a,T.a,y.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=e("gIcY"),H=e("rhjU"),X=e("ZYCi"),U=e("Fzqc"),B=e("hUWP"),J=e("3pJQ"),$=e("V9q+");e.d(n,"AboutUsModuleNgFactory",function(){return W});var W=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,j]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,V.FormBuilder,V.FormBuilder,[]),t["\u0275mpd"](4608,V["\u0275angular_packages_forms_forms_i"],V["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,r.j,r.i,[r.d,r.g]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(l,n){return[r.m(l,n)]},[a.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](4608,H.b,H.b,[a.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](1073742336,X.n,X.n,[[2,X.t],[2,X.l]]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,V["\u0275angular_packages_forms_forms_bb"],V["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,V.ReactiveFormsModule,V.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,r.e,r.e,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,o.b,o.b,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,$.a,$.a,[[2,r.k],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,X.j,function(){return[[{path:"",component:E,children:[{path:"about-us",component:E}]}]]},[])])})}}]);