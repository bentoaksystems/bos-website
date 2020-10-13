(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"70jC":function(n,e){n.exports='<div class="maxWidth">\r\n    <h3 class="t t-primary t-primary-hover title" [style.text-align]="isMobile ? \'center\' : \'left\'">\r\n        {{trl(\'Who we are\')}}\r\n    </h3>\r\n    <div style="text-align: center; margin-top: 25px">\r\n        <app-person *ngFor="let person of people" [person]="person"></app-person>\r\n    </div>\r\n</div>\r\n\r\n'},Ih7D:function(n,e){n.exports=".person-item {\r\n  margin: auto;\r\n  margin-bottom: 1em;\r\n  margin-top: 1em;\r\n}\r\n\r\n.title {\r\n  font-weight: bold;\r\n  margin-left: 40px;\r\n  padding-top: 30px;\r\n}\r\n"},NPmT:function(n,e){n.exports='<mat-card class="primary-lighter container shadow tiny">\r\n  <div style="display: block; height: 100%">\r\n    <div class="newi">\r\n      <img src="{{person.image}}" alt="{{trl(person.fullname) + \' image\'}}" class="image">\r\n    </div>\r\n\r\n<div style="height: 25%;margin: 10px;">\r\n    <div>\r\n      <h5 class="text">{{trl(person.fullname)}}</h5>\r\n      <div style="font-family:Trebuchet MS;color:black;">{{trl(person.responsibility)}}</div>\r\n    </div>\r\n</div>\r\n \x3c!-- <div style="height: 23%;">\r\n\r\n    </div>  --\x3e\r\n    \x3c!-- <div style="height: 33%; text-align: justify; padding: 10px">\r\n      <p>{{person.description}}</p>\r\n    </div> --\x3e\r\n    <div style="height: 7%; margin:20px;" class="links-wrapper">\r\n      <a *ngFor="let s of getKeys(person.social)" href="{{person.social[s]}}" target="_blank" rel="noopener noreferrer">\r\n        <button mat-button *ngIf="person.social[s]" class="tiny-button">\r\n          <img class="tiny-img" src="{{images[s.toLowerCase()]}}">\r\n        </button>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n'},OQMr:function(n,e,t){"use strict";t.r(e);var r,i=t("CcnG"),o=t("Ip0R"),a=t("eQ9L"),s=t("Otf3"),p=t("ph+x"),c=t("v7F2"),l=t("L/j3"),d=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),f=function(n,e,t,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var s=n.length-1;s>=0;s--)(i=n[s])&&(a=(o<3?i(a):o>3?i(e,t,a):i(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a},u=function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},h=function(n){function e(e,t,r,i){var o=n.call(this,i)||this;return o.getJsonService=e,o.responsiveService=t,o.spinnerService=r,o.people=[],o.isMobile=!1,o}return d(e,n),e.prototype.ngOnInit=function(){var n=this;this.spinnerService.enable(),this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(e){n.isMobile=e}),this.getJsonService.getPeopleData().then(function(e){n.people=e,n.spinnerService.disable()}).catch(function(n){return console.error("people data fetch failed",n)})},e=f([Object(i.Component)({selector:"app-people",template:t("70jC"),styles:[t("Ih7D")]}),u("design:paramtypes",[a.a,s.a,p.a,c.a])],e)}(l.a),g=t("ZYCi"),m=t("Id01"),b=[{path:"",component:h,children:[{path:"people",component:h}]}],y=g.RouterModule.forChild(b),v=(m.a.withRoutes(b),t("FVSy")),w=t("SMsm"),x=t("UodH"),O=t("o3x0"),j=t("gIcY"),R=t("V9q+"),k=t("2OBX"),_=t("cRei"),M=t("iQ22"),S=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),P=function(n,e,t,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var s=n.length-1;s>=0;s--)(i=n[s])&&(a=(o<3?i(a):o>3?i(e,t,a):i(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a},I=function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},C=function(n,e){return function(t,r){e(t,r,n)}},D=function(n){function e(e,t,r,i){var o=n.call(this,i)||this;return o.langService=e,o.dialog=t,o.window=r,o.width=500,o.images={},o.images={github:"assets/images/social/github.png",linkedin:"assets/images/social/linkedin.png",slack:"assets/images/social/slack.png",email:"assets/images/social/email.png"},o}return S(e,n),e.prototype.ngOnInit=function(){var n=this;this.width=this.window.innerWidth,this.window.onresize=function(e){n.width=n.window.innerWidth}},e.prototype.showDetails=function(){var n=this.window.innerWidth,e=this.window.innerHeight;this.dialog.open(_.a,{width:.8*n+"px",height:.8*e+"px",data:{person:this.person,width:.8*n,height:.8*e}})},e.prototype.getKeys=function(n){return Object.keys(n)},P([Object(i.Input)(),I("design:type",Object)],e.prototype,"person",void 0),e=P([Object(i.Component)({selector:"app-person",template:t("NPmT"),styles:[t("uavZ")]}),C(2,Object(i.Inject)(M.a)),I("design:paramtypes",[k.a,O.b,Object,c.a])],e)}(l.a);t.d(e,"PeopleModule",function(){return F});var L=function(n,e,t,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var s=n.length-1;s>=0;s--)(i=n[s])&&(a=(o<3?i(a):o>3?i(e,t,a):i(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a},F=function(){function n(){}return n=L([Object(i.NgModule)({imports:[y,o.CommonModule,j.ReactiveFormsModule,R.a,g.RouterModule,v.a,w.a,x.a,O.c],declarations:[h,D]})],n)}()},uavZ:function(n,e){n.exports=".personal-image {\r\n  max-height: 120px;\r\n  max-width: 120px;\r\n  margin: 30px;\r\n}\r\n\r\n.shadow:hover {\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  cursor: pointer;\r\n}\r\n\r\n.links-wrapper {\r\n\r\n  text-align: center;\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n\r\n.tiny-button {\r\n  border-radius: 30px;\r\n}\r\n\r\n.tiny-img {\r\n  max-width: 30px;\r\n}\r\n\r\nbutton:focus {\r\n  outline: 0;\r\n}\r\n\r\n.container {\r\n  display: inline-block;\r\n  margin: 15px;\r\n  width: 310px;\r\n  height: 520px;\r\n  font-size: 3px;\r\n  padding: 0 !important;\r\n  margin-bottom: 20px !important;\r\n}\r\n\r\n.shadow.tiny {\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: all 0.5s cubic-bezier(.25, .8, .25, 1);\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  -webkit-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n          hyphens: auto;\r\n}\r\n\r\n.image {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.item-title {\r\n  margin: auto;\r\n  text-align: center;\r\n  top: -40px;\r\n  left: -25px;\r\n  background-color: rgb(185, 183, 183);\r\n  border-radius: 10px;\r\n}\r\n\r\n.newi{\r\n  height: 60%;\r\n  text-align: center;\r\n  padding: 15px;\r\n\r\n}\r\n\r\n.text{\r\n  margin: 0;\r\n  color:black;\r\n  font-size: 28px;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n"}}]);