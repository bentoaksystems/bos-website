(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{I72P:function(n,t,r){"use strict";r.r(t);var i,e=r("CcnG"),o=r("Ip0R"),a=r("Otf3"),c=r("eQ9L"),l=r("iQ22"),s=r("ZYCi"),p=r("KupA"),d=r("ph+x"),u=r("v7F2"),f=r("L/j3"),g=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])},function(n,t){function r(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),m=function(n,t,r,i){var e,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,r,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(o<3?e(a):o>3?e(t,r,a):e(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},h=function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},y=function(n,t){return function(r,i){t(r,i,n)}},b=function(n){function t(t,r,i,e,o,a,c){var l=n.call(this,c)||this;return l.window=t,l.getJsonFileService=r,l.responsiveService=i,l.router=e,l.pricingService=o,l.spinnerService=a,l.waiting=!1,l.pricing=[],l.isMobile=!1,l.selected=!1,l.selectedPlan={},l.prices={},l.fields={x:[]},l.quantity={},l}return g(t,n),t.prototype.ngOnInit=function(){var n=this;this.spinnerService.enable(),this.isMobile=this.responsiveService.isMobile,this.responsiveService.switch$.subscribe(function(t){n.isMobile=t}),this.getJsonFileService.getPricingData().then(function(t){n.spinnerService.disable(),t.forEach(function(t){var r=Object.keys(t).filter(function(n){return n.includes("_price")&&t[n]}).map(function(n){return n.substr(0,n.length-6)});r.forEach(function(r){r in n.quantity||(n.quantity[r]={}),n.quantity[r][t.title]=t.title===n.pricingService.pricingInfo.title&&n.pricingService.pricingInfo[r]?n.pricingService.pricingInfo[r]:void 0,r in n.prices||(n.prices[r]={}),n.prices[r][t.title]=t[r+"_price"]}),n.fields[t.title]=r,n.selectedPlan[t.title]=t.title===n.pricingService.pricingInfo.title,n.selected=Object.keys(n.selectedPlan).map(function(t){return n.selectedPlan[t]}).reduce(function(n,t){return n||t},!1)}),n.pricing=t,n.waiting=!1}).catch(function(n){console.error("Cannot get data!",n)})},t.prototype.chgPlan=function(n){var t=this,r=function(r){i.selectedPlan.hasOwnProperty(r)&&r!==n&&(i.selectedPlan[r]=!1,i.fields[r].forEach(function(n){return t.quantity[n][r]=void 0}))},i=this;for(var e in this.selectedPlan)r(e);this.selected=Object.keys(this.selectedPlan).map(function(n){return t.selectedPlan[n]}).reduce(function(n,t){return n||t},!1),this.pricingService.pricingInfo=this.pricing.filter(function(t){return t.title===n})[0]},t.prototype.goToContactPage=function(){this.router.navigate(["/contact"])},t.prototype.totalPrice=function(n,t,r){var i=this;return void 0===r&&(r=this.quantity[n]?this.quantity[n][t.title]:null),n?r?r*t[n+"_price"]:null:this.fields[t.title]?this.fields[t.title].map(function(n){return i.totalPrice(n,t)}).filter(function(n){return+n}).reduce(function(n,t){return n+t},0):null},t.prototype.equity=function(n){var t=this;if(!n.equity_comp)return null;var r=this.pricing.find(function(t){return t.acronym===n.cash_plan});return this.selectedPlan[n.title]&&this.fields[n.title]&&r?this.fields[n.title].map(function(i){return t.totalPrice(i,r,t.quantity[i]?t.quantity[i][n.title]:0)-t.totalPrice(i,n)}).filter(function(n){return+n}).reduce(function(n,t){return n+t},0):null},t.prototype.setPricingInfoToService=function(n){this.selectedPlan[n]=!0,this.chgPlan(n),Object.assign(this.pricingService.pricingInfo,{planingHour:this.prices[n],programmingHour:this.prices[n],backingHour:this.prices[n]})},t=m([Object(e.Component)({selector:"app-pricing",template:r("SdpW"),styles:[r("kIyD")]}),y(0,Object(e.Inject)(l.a)),h("design:paramtypes",[Object,c.a,a.a,s.Router,p.a,d.a,u.a])],t)}(f.a),x=r("Id01"),v=[{path:"",component:b,children:[{path:"pricing",component:b}]}],P=s.RouterModule.forChild(v),w=(x.a.withRoutes(v),r("FVSy")),k=r("de3e"),S=r("b716"),I=r("Nsh5"),O=r("SMsm"),j=r("UodH"),M=r("o3x0"),q=r("Blfk"),R=r("0/Q6"),C=r("v9Dh"),_=r("jlZm"),F=r("gIcY"),L=r("9aqM"),z=r("V9q+");r.d(t,"PricingModule",function(){return T});var D=function(n,t,r,i){var e,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,r,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(o<3?e(a):o>3?e(t,r,a):e(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},T=function(){function n(){}return n=D([Object(e.NgModule)({imports:[P,o.CommonModule,F.ReactiveFormsModule,z.a,F.FormsModule,s.RouterModule,w.a,k.a,S.a,I.a,O.a,j.a,M.c,q.a,R.a,L.SharedModule,C.a,_.a],declarations:[b]})],n)}()},SdpW:function(n,t){n.exports='<div class="maxWidth">\r\n  \x3c!--Pricing--\x3e\r\n  <div fxLayout="column">\r\n    <div fxFlex="85">\r\n      <div style="margin-top: 15px" [class.center]="isMobile">\r\n        <h3 class="t t-primary t-primary-hover toolBox">{{trl(\'Pricing\')}}</h3>\r\n      </div>\r\n      <div class="center" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutAlign="center top">\r\n        <mat-card *ngFor="let pricingPlan of pricing" class="primary-lighter matCard shadow tiny"\r\n          [class.desktop]="!isMobile">\r\n          <mat-card-title class="title-box">\r\n            {{trl(pricingPlan.title)}} ({{trl(pricingPlan.acronym)}})\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            <div class="prosncons">\r\n              <mat-card-subtitle>{{trl(\'Pros/Cons\')}}</mat-card-subtitle>\r\n              <mat-list-item class="list-item" *ngFor="let pro of pricingPlan.pros">\r\n                <p mat-line>\r\n                  <mat-icon class="matIcon" style="color: darkgreen">done</mat-icon>\r\n                  <span>{{trl(pro)}}</span>\r\n                </p>\r\n              </mat-list-item>\r\n              <mat-list-item class="list-item" *ngFor="let con of pricingPlan.cons">\r\n                <p mat-line>\r\n                  <mat-icon class="matIcon" style="color: darkred">clear</mat-icon>\r\n                  <span>{{trl(con)}}</span>\r\n                </p>\r\n              </mat-list-item>\r\n            </div>\r\n            <div class="cost">\r\n              <mat-card-subtitle>{{trl(\'Cost\')}}</mat-card-subtitle>\r\n              <div *ngFor="let field of fields[pricingPlan.title]">\r\n                \x3c!-- TODO: currency --\x3e\r\n                <div class="price-div">\xa3\r\n                  {{prices[field][pricingPlan.title].toLocaleString()}} x\r\n                </div>\r\n                <mat-form-field [style.width.px]="quantity[field][pricingPlan.title] && !isMobile ? 30 : 114">\r\n                  <input matInput [placeholder]="field" [(ngModel)]="quantity[field][pricingPlan.title]"\r\n                    (keyup)="setPricingInfoToService(pricingPlan.title)">\r\n                </mat-form-field>\r\n                <span *ngIf="totalPrice(field, pricingPlan)"> = \xa3\r\n                  {{totalPrice(field, pricingPlan).toLocaleString()}}</span>\r\n              </div>\r\n              <div *ngIf="equity(pricingPlan)" class="accent-darker" style="border-radius: 3px;margin-bottom:2px">\r\n                {{trl(\'Total equity comp.\')}} \xa3 {{equity(pricingPlan).toLocaleString()}}\r\n              </div>\r\n              <div *ngIf="totalPrice(null, pricingPlan)" class="accent" style="border-radius: 3px">{{trl(\'Total cash price\')}} \xa3 {{totalPrice(null, pricingPlan).toLocaleString()}}\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <mat-checkbox [(ngModel)]="selectedPlan[pricingPlan.title]" (change)="chgPlan(pricingPlan.title)">\r\n              {{trl(pricingPlan.acronym)}}\r\n            </mat-checkbox>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div fxFlex="15" class="center" style="\r\n    margin-top: 10px">\r\n      <button mat-raised-button class="accent" (click)="goToContactPage()" [disabled]="!selected">{{trl(\'Contact us to start\')}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>'},kIyD:function(n,t){n.exports=".title {\r\n  font-weight: bold;\r\n  margin-left: 40px;\r\n  padding-top: 30px;\r\n}\r\n\r\n.title-box {\r\n  font-size: 24px;\r\n}\r\n\r\n.matCard {\r\n  display: inline-block;\r\n  margin: 10px;\r\n  position: relative;\r\n}\r\n\r\n.desktop .mat-card-content {\r\n  min-height: 1026px;\r\n  min-width: 220px;\r\n}\r\n\r\n.desktop .mat-card-actions {\r\n  min-width: 190px;\r\n}\r\n\r\n.mat-card-title {\r\n  min-height: 80px;\r\n}\r\n\r\n.desktop {\r\n  min-width: 250px;\r\n  width: 400px !important;\r\n}\r\n\r\n.desktop .prosncons {\r\n  min-height: 700px;\r\n}\r\n\r\n.desktop .cost {\r\n  min-height: 395px;\r\n}\r\n\r\n.shadow.tiny {\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: all 0.5s cubic-bezier(.25, .8, .25, 1);\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  -webkit-hyphens: auto;\r\n      -ms-hyphens: auto;\r\n          hyphens: auto;\r\n  min-height: 500px;\r\n}\r\n\r\n.shadow.tiny:hover {\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.toolBox {\r\n  margin-top: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.content {\r\n  text-align: justify;\r\n}\r\n\r\n.list-item {\r\n  text-align: left;\r\n  font-size: 7px;\r\n  /*padding: 10px;*/\r\n  margin-left: 50px;\r\n}\r\n\r\n.subtitle-box {\r\n  font-size: 30px;\r\n}\r\n\r\n.icon {\r\n  color: #14a4ff;\r\n  position: absolute;\r\n  left: 25px;\r\n}\r\n\r\n.input {\r\n  text-align: left;\r\n  font-size: 7px !important;\r\n  width: 75%;\r\n}\r\n\r\np span {\r\n  font-size: small !important;\r\n}\r\n\r\n.matIcon {\r\n  font-size: 18px !important;\r\n}\r\n\r\n.label {\r\n  text-align: center !important;\r\n  margin-top: 15px !important;\r\n}\r\n\r\n.price-div {\r\n  display: inline-block;\r\n  text-align: right;\r\n  margin-right: 10px;\r\n}\r\n\r\nmat-form-field {\r\n  display: inline-block;\r\n  text-align: left\r\n}\r\n\r\nmatInput {\r\n  width: 114px;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.matCard1 {\r\n  display: inline-block;\r\n  margin: 10px;\r\n  position: relative;\r\n  width: 300px;\r\n}\r\n"}}]);