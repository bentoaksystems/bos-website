(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"L/j3":function(l,n,e){"use strict";e.d(n,"a",function(){return u}),e("v7F2");var t=e("y7y6"),u=function(){function l(l){this.dictionaryService=l,this.direction="ltr",this.direction=this.dictionaryService.getDirection()}return l.prototype.trl=function(l,n){return void 0===n&&(n=""),(this.dictionaryService.translate(l)||l)+" "+n},l.prototype.toLocaleString=function(l){return l||0===l?"fa"===this.dictionaryService.getLocaleSymbol()?t(l.toString()).englishNumber().toString():l.toLocaleString(this.dictionaryService.getLocaleSymbol(),{useGrouping:!1}):""},l.prototype.toLocaleCurrencyFormat=function(l){if(!l)return"";var n=l.replace(/,/g,"");return Number(n)?Number(n).toLocaleString("en"):l},l}()},ZaRm:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){},i=e("pMnS"),o=e("21Lb"),r=e("OzfB"),a=e("Ip0R"),s=e("mrSG"),c=e("Otf3"),p=e("v7F2"),d=e("L/j3"),f=function(l){function n(n,e){var t=l.call(this,e)||this;return t.responsiveService=n,t.isMobile=!1,t}return Object(s.__extends)(n,l),Object.defineProperty(n.prototype,"CICD_Info",{set:function(l){l&&(this.CICDInfo=l.filter(function(l){return"CI/CD"===l.title})[0],this.desc=this.CICDInfo.description)},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},n}(d.a),g=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 50px 15px 120px;position:relative;z-index:4}.img[_ngcontent-%COMP%]{height:auto;width:120%;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px 30px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,2,"div",[["fxFlex","40"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","page-section"],["fxFlex","60"]],null,null,null,null,null)),t["\u0275did"](7,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](8,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"],["id","CICD"],["style","margin-left: 150px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,[" "," "])),(l()(),t["\u0275eld"](10,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"40"),l(n,7,0,"60")},function(l,n){var e=n.component;l(n,5,0,t["\u0275inlineInterpolate"](1,"",null==e.CICDInfo?null:e.CICDInfo.background,"")),l(n,9,0,e.trl(null==e.CICDInfo?null:e.CICDInfo.title)),l(n,10,0,e.trl(e.desc))})}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,e.trl(null==e.CICDInfo?null:e.CICDInfo.title)),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.CICDInfo?null:e.CICDInfo.background,"")),l(n,5,0,e.trl(e.desc))})}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var x=function(l){function n(n,e){var t=l.call(this,e)||this;return t.responsiveService=n,t.isMobile=!1,t}return Object(s.__extends)(n,l),Object.defineProperty(n.prototype,"softwareDev_Info",{set:function(l){l&&(this.softwareDevInfo=l.filter(function(l){return"Software Development"===l.title})[0],this.desc=this.softwareDevInfo.description)},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},n}(d.a),v=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 100px 15px 15px;position:relative;z-index:4}.img[_ngcontent-%COMP%]{height:auto;width:100%;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px -100px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:20px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"],["style","margin-top: 10px"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,4,"div",[["class","page-section"],["fxFlex","60"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[" "," "])),(l()(),t["\u0275eld"](7,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"div",[["fxFlex","40"]],null,null,null,null,null)),t["\u0275did"](9,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](10,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"60"),l(n,9,0,"40")},function(l,n){var e=n.component;l(n,6,0,e.trl(null==e.softwareDevInfo?null:e.softwareDevInfo.title)),l(n,7,0,e.trl(e.desc)),l(n,10,0,t["\u0275inlineInterpolate"](1,"",null==e.softwareDevInfo?null:e.softwareDevInfo.background,""))})}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,e.trl(null==e.softwareDevInfo?null:e.softwareDevInfo.title)),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.softwareDevInfo?null:e.softwareDevInfo.background,"")),l(n,5,0,e.trl(e.desc))})}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var I=function(l){function n(n,e){var t=l.call(this,e)||this;return t.responsiveService=n,t.isMobile=!1,t}return Object(s.__extends)(n,l),Object.defineProperty(n.prototype,"webDev_Info",{set:function(l){l&&(this.webDevInfo=l.filter(function(l){return"Web Development"===l.title})[0],this.desc=this.webDevInfo.description)},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},n}(d.a),C=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 50px 15px 110px;position:relative;z-index:4;margin-top:10px}.img[_ngcontent-%COMP%]{height:auto;width:120%;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px 30px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:40px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"],["style","margin-top: 10px"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,2,"div",[["fxFlex","30"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","page-section"],["fxFlex","70"]],null,null,null,null,null)),t["\u0275did"](7,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](8,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"],["style","margin-left: 120px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,[" "," "])),(l()(),t["\u0275eld"](10,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"30"),l(n,7,0,"70")},function(l,n){var e=n.component;l(n,5,0,t["\u0275inlineInterpolate"](1,"",null==e.webDevInfo?null:e.webDevInfo.background,"")),l(n,9,0,e.trl(null==e.webDevInfo?null:e.webDevInfo.title)),l(n,10,0,e.trl(e.desc))})}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,e.trl(null==e.webDevInfo?null:e.webDevInfo.title)),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.webDevInfo?null:e.webDevInfo.background,"")),l(n,5,0,e.trl(e.desc))})}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var D=function(l){function n(n,e){var t=l.call(this,e)||this;return t.responsiveService=n,t.desc=null,t.isMobile=!1,t}return Object(s.__extends)(n,l),Object.defineProperty(n.prototype,"techsupp_Info",{set:function(l){l&&(this.techsuppInfo=l.filter(function(l){return"Technical Support"===l.title})[0],this.desc=this.techsuppInfo.description)},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var l=this;this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){return l.isMobile=n})},n}(d.a),P=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 100px 15px 15px;position:relative;z-index:4}.img[_ngcontent-%COMP%]{height:400px;width:600px;margin-top:50px}.img-section[_ngcontent-%COMP%]{margin:100px -100px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:20px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","center center"],["style","margin-top: 10px"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,4,"div",[["class","page-section"],["fxFlex","60"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[" "," "])),(l()(),t["\u0275eld"](7,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"div",[["fxFlex","40"]],null,null,null,null,null)),t["\u0275did"](9,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](10,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"center center"),l(n,4,0,"60"),l(n,9,0,"40")},function(l,n){var e=n.component;l(n,6,0,e.trl(null==e.techsuppInfo?null:e.techsuppInfo.title)),l(n,7,0,e.trl(e.desc)),l(n,10,0,t["\u0275inlineInterpolate"](1,"",null==e.techsuppInfo?null:e.techsuppInfo.background,""))})}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,e.trl(null==e.techsuppInfo?null:e.techsuppInfo.title)),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.techsuppInfo?null:e.techsuppInfo.background,"")),l(n,5,0,e.trl(e.desc))})}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,!e.isMobile),l(n,3,0,e.isMobile)},null)}var E=e("eQ9L"),T=e("ph+x"),F=e("AleK"),j=function(l){function n(n,e,t,u,i){var o=l.call(this,i)||this;return o.getJsonFileService=n,o.responsiveService=e,o.spinnerService=t,o.scrollService=u,o.results=null,o.desc=null,o.isMobile=!1,o}return Object(s.__extends)(n,l),n.prototype.ngOnInit=function(){var l=this;this.spinnerService.enable(),this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(n){l.isMobile=n}),this.getJsonFileService.getAboutUsData().then(function(n){l.results=n,l.bentoakData=l.results.filter(function(l){return"Bent Oak Systems"===l.title})[0],l.bentoakData.description=l.bentoakData.description,l.spinnerService.disable(),""!==l.scrollService.position&&l.scrollService.triggerScrollTo()}).catch(function(l){console.error("Cannot get data!",l)})},n}(d.a),N=t["\u0275crt"]({encapsulation:0,styles:[[".content-block[_ngcontent-%COMP%]{text-align:justify}.description-section[_ngcontent-%COMP%]{border:10px solid #f2f2f2;padding:15px 100px 15px 15px;position:relative;z-index:4;margin-top:10px}.img[_ngcontent-%COMP%]{height:auto;max-width:100%;margin-top:250px}.img-section[_ngcontent-%COMP%]{margin:150px -100px}.img-mobile[_ngcontent-%COMP%], .img-mobile-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.section-block-mobile[_ngcontent-%COMP%]{width:100%;border:10px solid #f2f2f2;padding:15px}.page-section[_ngcontent-%COMP%]{padding:10px;margin:65px 10px 10px}.shadow.tiny[_ngcontent-%COMP%]{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:.5s cubic-bezier(.25,.8,.25,1);overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.shadow.tiny[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}"]],data:{}});function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["fxLayout","row"],["fxLayout.sm","row"],["fxLayout.xs","column"],["fxLayoutAlign","start stretch"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,o.d,[r.h,t.ElementRef,r.l],{layout:[0,"layout"],layoutXs:[1,"layoutXs"],layoutSm:[2,"layoutSm"]},null),t["\u0275did"](2,737280,null,0,o.c,[r.h,t.ElementRef,[6,o.d],r.l],{align:[0,"align"]},null),(l()(),t["\u0275eld"](3,0,null,null,4,"div",[["class","page-section"],["fxFlex","50"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","t t-primary t-primary-hover title"],["style","font-family: aovel"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[" "," "])),(l()(),t["\u0275eld"](7,0,null,null,0,"div",[["class","t t-primary description-section content-block"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"div",[["fxFlex","50"]],null,null,null,null,null)),t["\u0275did"](9,737280,null,0,o.a,[r.h,t.ElementRef,[3,o.d],r.l,r.f],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](10,0,null,null,0,"img",[["class","img img-section shadow tiny"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,1,0,"row","column","row"),l(n,2,0,"start stretch"),l(n,4,0,"50"),l(n,9,0,"50")},function(l,n){var e=n.component;l(n,6,0,e.trl(null==e.bentoakData?null:e.bentoakData.title)),l(n,7,0,e.trl(null==e.bentoakData?null:e.bentoakData.description)),l(n,10,0,t["\u0275inlineInterpolate"](1,"",null==e.bentoakData?null:e.bentoakData.background,""))})}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","t t-primary t-primary-hover title"],["style","text-align: center; margin-top: 20px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","img-mobile-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"img",[["class","img-mobile"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","t t-primary section-block-mobile content-block"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,2,0,e.trl(null==e.bentoakData?null:e.bentoakData.title)),l(n,4,0,t["\u0275inlineInterpolate"](1,"",null==e.bentoakData?null:e.bentoakData.background,"")),l(n,5,0,e.trl(null==e.bentoakData?null:e.bentoakData.description))})}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","maxWidth"]],[[8,"dir",0]],null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,z)),t["\u0275did"](2,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](4,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["id","CICD"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"app-cicd",[],null,null,null,b,g)),t["\u0275did"](7,114688,null,0,f,[c.a,p.a],{CICD_Info:[0,"CICD_Info"]},null),(l()(),t["\u0275eld"](8,0,null,null,0,"div",[["id","SoftwareDev"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"app-software-development",[],null,null,null,_,v)),t["\u0275did"](10,114688,null,0,x,[c.a,p.a],{softwareDev_Info:[0,"softwareDev_Info"]},null),(l()(),t["\u0275eld"](11,0,null,null,0,"div",[["id","WebDev"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,1,"app-web-development",[],null,null,null,O,C)),t["\u0275did"](13,114688,null,0,I,[c.a,p.a],{webDev_Info:[0,"webDev_Info"]},null),(l()(),t["\u0275eld"](14,0,null,null,0,"div",[["id","TechSupp"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"app-technical-support",[],null,null,null,L,P)),t["\u0275did"](16,114688,null,0,D,[c.a,p.a],{techsupp_Info:[0,"techsupp_Info"]},null)],function(l,n){var e=n.component;l(n,2,0,!e.isMobile),l(n,4,0,e.isMobile),l(n,7,0,e.results),l(n,10,0,e.results),l(n,13,0,e.results),l(n,16,0,e.results)},function(l,n){l(n,0,0,n.component.direction)})}var $=t["\u0275ccf"]("app-about-us",j,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-about-us",[],null,null,null,V,N)),t["\u0275did"](1,114688,null,0,j,[E.a,c.a,T.a,F.a,p.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),H=e("gIcY"),X=e("rhjU"),U=e("ZYCi"),J=e("Fzqc"),B=e("hUWP"),W=e("3pJQ"),q=e("V9q+");e.d(n,"AboutUsModuleNgFactory",function(){return G});var G=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,$]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,H.FormBuilder,H.FormBuilder,[]),t["\u0275mpd"](4608,H["\u0275angular_packages_forms_forms_i"],H["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,r.j,r.i,[r.d,r.g]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(l,n){return[r.m(l,n)]},[a.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](4608,X.b,X.b,[a.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](1073742336,U.n,U.n,[[2,U.t],[2,U.l]]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,H["\u0275angular_packages_forms_forms_bb"],H["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,H.ReactiveFormsModule,H.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,r.e,r.e,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,o.b,o.b,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,W.a,W.a,[]),t["\u0275mpd"](1073742336,q.a,q.a,[[2,r.k],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,U.j,function(){return[[{path:"",component:j,children:[{path:"about-us",component:j}]}]]},[])])})},y7y6:function(l,n,e){var t;!function(){var e=void 0!==l&&l.exports,u=["\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669","\u0660"],i=["\u06f1","\u06f2","\u06f3","\u06f4","\u06f5","\u06f6","\u06f7","\u06f8","\u06f9","\u06f0"],o=["1","2","3","4","5","6","7","8","9","0"];function r(l){this._str=l}function a(l){if(l){for(var n="";n!=l;)n=l,l=l.replace(/(http\S+?)\%20/g,"$1\u200c\u200c\u200c_\u200c\u200c\u200c");return l=(l=l.replace(/(http\S+)/g,function(l,n){return decodeURI(n)})).replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g,"%20"),this._str=l,this}}var s=function(l){if(!l||""===l)throw new Error("Input is null or empty.");return new r(l)};s.version="0.4.0",s.fn=r.prototype={clone:function(){return s(this)},value:function(){return this._str},toString:function(){return this._str.toString()},set:function(l){return this._str=String(l),this},arabicChar:function(){return(function(l){if(l){for(var n=["\u064a","\u0643","\u200d","\u062f\u0650","\u0628\u0650","\u0632\u0650","\u0630\u0650","\u0650\u0634\u0650","\u0650\u0633\u0650","\u0649"],e=["\u06cc","\u06a9","","\u062f","\u0628","\u0632","\u0630","\u0634","\u0633","\u06cc"],t=0,u=n.length;t<u;t++)l=l.replace(new RegExp(n[t],"g"),e[t]);return this._str=l,this}}).call(this,this._str)},persianNumber:function(){return(function(l){if(l){for(var n=0,e=o.length;n<e;n++)l=l.replace(new RegExp(i[n],"g"),o[n]);return this._str=l,this}}).call(this,this._str)},arabicNumber:function(){return(function(l){if(l){l=l.toString();for(var n=0,e=u.length;n<e;n++)l=l.replace(new RegExp(u[n],"g"),i[n]);return this._str=l,this}}).call(this,this._str)},englishNumber:function(){return(function(l){if(l){l=l.toString();for(var n=["1","2","3","4","5","6","7","8","9","0"],e=["\u06f1","\u06f2","\u06f3","\u06f4","\u06f5","\u06f6","\u06f7","\u06f8","\u06f9","\u06f0"],t=0,u=n.length;t<u;t++)l=l.replace(new RegExp(n[t],"g"),e[t]);return this._str=l,this}}).call(this,this._str)},toEnglishNumber:function(){return(function(l){if(l){for(var n=0,e=o.length;n<e;n++)l=l.replace(new RegExp(i[n],"g"),o[n]).replace(new RegExp(u[n],"g"),o[n]);return this._str=l,this}}).call(this,this._str)},fixURL:function(){return a.call(this,this._str)},decodeURL:function(){return a.call(this,this._str)},switchKey:function(){return(function(l){if(l){for(var n=["\u0636","\u0635","\u062b","\u0642","\u0641","\u063a","\u0639","\u0647","\u062e","\u062d","\u062c","\u0686","\u0634","\u0633","\u06cc","\u0628","\u0644","\u0627","\u062a","\u0646","\u0645","\u06a9","\u06af","\u0638","\u0637","\u0632","\u0631","\u0630","\u062f","\u067e","\u0648","\u061f"],e=["q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",","?"],t=0,u=n.length;t<u;t++)l=l.replace(new RegExp(n[t],"g"),e[t]);return this._str=l,this}}).call(this,this._str)},digitsToWords:function(){return(function(l){var n,e,t,u,i,o,r,a;return isFinite(l)?("string"!=typeof l&&(l=l.toString()),i=["","\u0647\u0632\u0627\u0631","\u0645\u06cc\u0644\u06cc\u0648\u0646","\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f","\u062a\u0631\u06cc\u0644\u06cc\u0648\u0646","\u06a9\u0648\u0627\u062f\u0631\u06cc\u0644\u06cc\u0648\u0646","\u06a9\u0648\u06cc\u06cc\u0646\u062a\u06cc\u0644\u06cc\u0648\u0646","\u0633\u06a9\u0633\u062a\u06cc\u0644\u06cc\u0648\u0646"],u={0:["","\u0635\u062f","\u062f\u0648\u06cc\u0635\u062a","\u0633\u06cc\u0635\u062f","\u0686\u0647\u0627\u0631\u0635\u062f","\u067e\u0627\u0646\u0635\u062f","\u0634\u0634\u0635\u062f","\u0647\u0641\u062a\u0635\u062f","\u0647\u0634\u062a\u0635\u062f","\u0646\u0647\u0635\u062f"],1:["","\u062f\u0647","\u0628\u06cc\u0633\u062a","\u0633\u06cc","\u0686\u0647\u0644","\u067e\u0646\u062c\u0627\u0647","\u0634\u0635\u062a","\u0647\u0641\u062a\u0627\u062f","\u0647\u0634\u062a\u0627\u062f","\u0646\u0648\u062f"],2:["","\u06cc\u06a9","\u062f\u0648","\u0633\u0647","\u0686\u0647\u0627\u0631","\u067e\u0646\u062c","\u0634\u0634","\u0647\u0641\u062a","\u0647\u0634\u062a","\u0646\u0647"],two:["\u062f\u0647","\u06cc\u0627\u0632\u062f\u0647","\u062f\u0648\u0627\u0632\u062f\u0647","\u0633\u06cc\u0632\u062f\u0647","\u0686\u0647\u0627\u0631\u062f\u0647","\u067e\u0627\u0646\u0632\u062f\u0647","\u0634\u0627\u0646\u0632\u062f\u0647","\u0647\u0641\u062f\u0647","\u0647\u062c\u062f\u0647","\u0646\u0648\u0632\u062f\u0647"],zero:"\u0635\u0641\u0631"},valueParts=l.split("").reverse().join("").replace(/\d{3}(?=\d)/g,"$&,").split("").reverse().join("").split(",").map(function(l){return Array(4-l.length).join("0")+l}),""===(o=(o=(o=function(){var l;for(t in l=[],valueParts)a=valueParts[t],r=(r=function(){var l,t,i;for(i=[],e=l=0,t=a.length;l<t;e=++l)if(n=a[e],1===e&&"1"===n)i.push(u.two[a[2]]);else{if(2===e&&"1"===a[1]||""===u[e][n])continue;i.push(u[e][n])}return i}()).join(" \u0648 "),l.push(r+" "+i[valueParts.length-t-1]);return l}()).filter(function(l){return""!==l.trim()})).join(" \u0648 ").trim())&&(o=u.zero),this._str=o,this):""}).call(this,this._str)},halfSpace:function(){return(function(l){var n;if(l)return n=/((\s\u0645\u06CC)+( )+([\u0600-\u06EF]{1,}){1,})/g,l=l.replace(new RegExp(n),"$2\u200c$4"),n=/(([\u0600-\u06EF]{1,})+( )+(\u0627\u06cc|\u0627\u06cc\u06cc|\u0627\u0646\u062f|\u0627\u06cc\u0645|\u0627\u06cc\u062f|\u0627\u0645){1})/g,l=l.replace(new RegExp(n),"$2\u200c$4"),this._str=l,this}).call(this,this._str)}},e&&(l.exports=s),"undefined"==typeof ender&&(this.persianJs=s),void 0===(t=(function(){return s}).apply(n,[]))||(l.exports=t)}()}}]);