webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},"1L11":function(e,t){e.exports="<p>\n  about-us works!\n</p>\n"},"1WKT":function(e,t){e.exports="<p>\n  contact works!\n</p>\n"},"3JmR":function(e,t,n){"use strict";var i=n("/oeL"),o=n("fFD6");n.n(o);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s={space:"yati6i04nkb8",accessToken:"6f55cd79a0e3812ea24a362ff18894f4792d08ea62f2d8628c6329b4fc4bf87c",contentTypeIds:{projects:"projects",people:"people",about:"about",home:"homeData",contact:"contact"}},c=function(){function e(){this.cdaClient=null,this.cdaClient=n.i(o.createClient)({space:s.space,accessToken:s.accessToken})}return e.prototype.getContactData=function(e){return this.cdaClient.getEntries(Object.assign({content_type:s.contentTypeIds.contact},e)).then(function(e){return e.items}).catch(function(e){console.log(e)})},e.prototype.getHomeData=function(e){return this.cdaClient.getEntries(Object.assign({content_type:s.contentTypeIds.home},e)).then(function(e){return e.items}).catch(function(e){console.log(e)})},e.prototype.getProjects=function(e){return this.cdaClient.getEntries(Object.assign({content_type:s.contentTypeIds.projects},e)).then(function(e){return e.items}).catch(function(e){console.log(e)})},e.prototype.getPeople=function(e){return this.cdaClient.getEntries(Object.assign({content_type:s.contentTypeIds.people},e)).then(function(e){return e.items}).catch(function(e){console.log(e)})},e}();c=a([n.i(i.Injectable)(),r("design:paramtypes",[])],c)},"3ulq":function(e,t,n){"use strict";var i=n("/oeL"),o=n("GXd5"),a=n("Z04r");n.d(t,"a",function(){return l});var r=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},l=function(){function e(e,t,n){this.langService=e,this.dialogRef=t,this.data=n}return e.prototype.ngOnInit=function(){this.data.width-=24},e}();l=r([n.i(i.Component)({selector:"app-project-dialog",template:n("yELp"),styles:[n("GNGq")]}),c(2,n.i(i.Inject)(a.h)),s("design:paramtypes",["function"==typeof(f=void 0!==o.a&&o.a)&&f||Object,"function"==typeof(d=void 0!==a.i&&a.i)&&d||Object,Object])],l);var f,d},"5arN":function(e,t,n){"use strict";var i=n("/oeL"),o=n("Z04r"),a=n("GXd5"),r=n("BQbL"),s=n("3ulq");n.d(t,"a",function(){return f});var c=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e,t,n){this.langService=e,this.windowService=t,this.dialog=n,this.width=500}return e.prototype.ngOnInit=function(){var e=this;this.width=this.windowService.getWindow().innerWidth,this.windowService.getWindow().onresize=function(t){e.width=e.windowService.getWindow().innerWidth}},e.prototype.showDetails=function(){var e=this.windowService.getWindow().innerWidth,t=this.windowService.getWindow().innerHeight;this.dialog.open(s.a,{width:.8*e+"px",height:.8*t+"px",data:{project:this.project,width:.8*e,height:.8*t}})},e}();c([n.i(i.Input)("project"),l("design:type",Object)],f.prototype,"project",void 0),f=c([n.i(i.Component)({selector:"app-project",template:n("9Sco"),styles:[n("ANXK")]}),l("design:paramtypes",["function"==typeof(d=void 0!==a.a&&a.a)&&d||Object,"function"==typeof(p=void 0!==r.a&&r.a)&&p||Object,"function"==typeof(u=void 0!==o.j&&o.j)&&u||Object])],f);var d,p,u},"6msW":function(e,t,n){"use strict";var i=n("/oeL"),o=n("Z04r"),a=n("GXd5"),r=n("Hv2f"),s=n("BQbL");n.d(t,"a",function(){return f});var c=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e,t,n){this.langService=e,this.dialog=t,this.windowService=n,this.width=500}return e.prototype.ngOnInit=function(){var e=this;this.width=this.windowService.getWindow().innerWidth,this.windowService.getWindow().onresize=function(t){e.width=e.windowService.getWindow().innerWidth},this.langService.lang$.subscribe(function(t){return e.lang=t})},e.prototype.showDetails=function(){var e=this.windowService.getWindow().innerWidth,t=this.windowService.getWindow().innerHeight;this.dialog.open(r.a,{width:.8*e+"px",height:.8*t+"px",data:{person:this.person,width:.8*e,height:.8*t}})},e}();c([n.i(i.Input)("person"),l("design:type",Object)],f.prototype,"person",void 0),f=c([n.i(i.Component)({selector:"app-person",template:n("dtiO"),styles:[n("v4fZ")]}),l("design:paramtypes",["function"==typeof(d=void 0!==a.a&&a.a)&&d||Object,"function"==typeof(p=void 0!==o.j&&o.j)&&p||Object,"function"==typeof(u=void 0!==s.a&&s.a)&&u||Object])],f);var d,p,u},"9Sco":function(e,t){e.exports='<div>\n  <div class="flex-container" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutAlign="center center">\n    <div class="flex-item" fxFlex="25">\n      <img src="{{project.mainImage.url}}" alt="{{project.title}}" class="project-image">\n    </div>\n    <div class="flex-item" fxFlex="75">\n      <h3 class="width-center" *ngIf="langService.lang === \'english\'">{{project.title_en}}</h3>\n      <h3 class="width-center" *ngIf="langService.lang === \'farsi\'">{{project.title_fa}}</h3>\n      <h4 class="width-center" *ngIf="langService.lang === \'english\'">{{project.shortDescription_en}}</h4>\n      <h4 class="width-center" *ngIf="langService.lang === \'farsi\'">{{project.shortDescription_fa}}</h4>\n      <a class="show-more link" (click)="showDetails()">{{langService.translate(\'More...\')}}</a>\n      <div class="show-details">\n        <hr/>\n        <div class="center" *ngIf="langService.lang === \'english\'">{{project.title_en}}</div>\n        <div class="center" *ngIf="langService.lang === \'farsi\'">{{project.title_fa}}</div>\n        <div>\n          <p *ngIf="langService.lang === \'english\'">{{project.description_en}}</p>\n          <p *ngIf="langService.lang === \'farsi\'">{{project.description_fa}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},ANXK:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".project-image{max-height:120px;max-width:120px;margin:30px}",""]),e.exports=e.exports.toString()},B91n:function(e,t,n){"use strict";var i=n("/oeL"),o=n("3JmR");n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.contentfulService=e,this.people=[],this.waiting=!1}return e.prototype.ngOnInit=function(){var e=this;this.waiting=!0,this.contentfulService.getPeople().then(function(t){console.log(t);for(var n=0,i=t;n<i.length;n++){var o=i[n];e.people.push({title:o.fields.title,fullName_en:o.fields.fullNameEn,fullName_fa:o.fields.fullNameFa,image:o.fields.image.fields.file.url,cover:o.fields.cover.fields.file.url,linkedin:o.fields.linkedin,favorites_en:o.fields.favoritesEn,favorites_fa:o.fields.favoritesFa,responsibility_en:o.fields.responsibilityEn,responsibility_fa:o.fields.responsibilityFa,email:o.fields.email,phone:o.fields.phone})}console.log(e.people),e.waiting=!1}).catch(function(e){console.log(e)})},e}();s=a([n.i(i.Component)({selector:"app-people",template:n("ceTX"),styles:[n("ZM2E")]}),r("design:paramtypes",["function"==typeof(c=void 0!==o.a&&o.a)&&c||Object])],s);var c},BQbL:function(e,t,n){"use strict";function i(){return window}var o=n("/oeL");n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e.prototype.getWindow=function(){return i()},e}();s=a([n.i(o.Injectable)(),r("design:paramtypes",[])],s)},ECCM:function(e,t,n){"use strict";var i=n("/oeL"),o=n("3JmR"),a=n("GXd5"),r=n("BQbL");n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.langService=e,this.contentfulService=t,this.windowService=n,this.images=[],this.waiting=!1,this.technologies_1=[],this.technologies_2=[]}return e.prototype.ngOnInit=function(){var e=this;this.waiting=!0,this.height=this.windowService.getWindow().innerHeight-283,this.windowService.getWindow().onresize=function(t){e.height=e.windowService.getWindow().innerHeight-283},this.width=this.windowService.getWindow().innerWidth-100,this.windowService.getWindow().onresize=function(t){e.width=e.windowService.getWindow().innerWidth-100},this.contentfulService.getHomeData().then(function(t){console.log(t);for(var n=t[0].fields.slideShow,i=t[1].fields.technologies,o=0,a=n;o<a.length;o++){var r=a[o];e.images.push({source:r.fields.file.url,alt:r.fields.description,title:r.fields.title})}for(var s=0;s<i.length;s++){var c=i[s];s<7?e.technologies_1.push({source:c.fields.file.url,link:c.fields.description,alt:c.fields.title}):e.technologies_2.push({source:c.fields.file.url,link:c.fields.description,alt:c.fields.title})}e.waiting=!1}).catch(function(e){console.log(e)})},e.prototype.openPage=function(e){this.windowService.getWindow().open(e,"_blank")},e}();l=s([n.i(i.Component)({selector:"app-home",template:n("PpIx"),styles:[n("Fp1G")]}),c("design:paramtypes",["function"==typeof(f=void 0!==a.a&&a.a)&&f||Object,"function"==typeof(d=void 0!==o.a&&o.a)&&d||Object,"function"==typeof(p=void 0!==r.a&&r.a)&&p||Object])],l);var f,d,p},Fp1G:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".tile{background-color:#d6dcda}.technology-item{display:inline-block}.title-wrapper{opacity:0;max-width:80px;max-height:80px;margin-top:-80px;visibility:hidden;background:#dce2e0;color:#000}.technology-item:hover .title-wrapper{opacity:1;visibility:visible}.row-tile{margin:1px}.tile-img{max-width:200px;max-height:200px}.img-link{width:80px;height:80px;cursor:pointer;margin:5px}.slide-show{text-align:-webkit-center}.image-without-slideshow{width:80%;margin-top:10px;margin-bottom:10px}.image-wrapper{margin-top:30px;margin-bottom:30px}",""]),e.exports=e.exports.toString()},GNGq:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".logo-image{position:relative;max-width:10%;border-radius:50%;z-index:2}",""]),e.exports=e.exports.toString()},GXd5:function(e,t,n){"use strict";var i=n("/oeL"),o=n("gvep");n.n(o);n.d(t,"a",function(){return s});var a=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){this.lang="english",this.langSubject=new o.BehaviorSubject("english"),this.lang$=this.langSubject.asObservable(),this._translation={"tel - uk: ":"تلفن انگلستان: ","tel - ir: ":"تلفن ایران: ",contact:"تماس با ما","about us":"درباره ما",people:"افراد",projects:"پروژه ها","all rights reserved for bentoaksystems":"تمامی حقوق سایت متعلق به شرکت بنتوک سامانه می باشد","follow us in ":"صفحه ما در","best technologies, less time":"بهترین تکنولوژی ها، کمترین زمان","the only limit to your impact is your imagination and commitment":"تنها محدودیت مؤثر بر شما، تصورات و تعهداتتان است","tony robbins":"تونی رابینز","trust us to make better world":"به ما اعتماد کنید تا دنیایی بهتر بسازیم","more...":"بیشتر...","you can see my skills and experience at linkedin ":"شما می توانید تجربیات و مهارت های من را در LinkedIn ببینید","my favorites are ":"علاقه مندی های من ","contact me":"راه های ارتباط با من","email: ":"ایمیل: ","phone: ":"تلفن: ","bent oak systems":"بُنـتوک سـامانه"}}return e.prototype.changeLanguage=function(){this.lang="english"===this.lang?"farsi":"english",this.langSubject.next(this.lang)},e.prototype.translate=function(e){return"english"===this.lang?e:this._translation[e.toLowerCase()]?this._translation[e.toLowerCase()]:e},e}();s=a([n.i(i.Injectable)(),r("design:paramtypes",[])],s)},HOZw:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".project{margin:10px}",""]),e.exports=e.exports.toString()},Hv2f:function(e,t,n){"use strict";var i=n("/oeL"),o=n("Z04r"),a=n("GXd5");n.d(t,"a",function(){return l});var r=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},l=function(){function e(e,t,n){this.dialogRef=e,this.data=t,this.langService=n}return e.prototype.ngOnInit=function(){var e=this;this.data.width-=24,this.langService.lang$.subscribe(function(t){return e.lang=t})},e}();l=r([n.i(i.Component)({selector:"app-person-dialog",template:n("ImQ9"),styles:[n("UcOt")]}),c(1,n.i(i.Inject)(o.h)),s("design:paramtypes",["function"==typeof(f=void 0!==o.i&&o.i)&&f||Object,Object,"function"==typeof(d=void 0!==a.a&&a.a)&&d||Object])],l);var f,d},ImQ9:function(e,t){e.exports='<div [ngClass]="[lang]">\n  <div>\n    <img src="{{data.person.cover}}" class="img-fluid">\n  </div>\n  <div>\n    <img src="{{data.person.image}}" class="img-fluid personal-image">\n  </div>\n  <md-card>\n    <br/>\n    <md-card-title *ngIf="langService.lang === \'english\'">{{data.person.fullName_en}}</md-card-title>\n    <md-card-title *ngIf="langService.lang === \'farsi\'">{{data.person.fullName_fa}}</md-card-title>\n    <md-card-content>\n      <h5 *ngIf="langService.lang === \'english\'">{{data.person.responsibility_en}}</h5>\n      <h4 *ngIf="langService.lang === \'farsi\'">{{data.person.responsibility_fa}}</h4>\n      <div class="section">\n        {{langService.translate(\'You can see my skills and experience at LinkedIn \')}}\n        <a *ngIf="langService.lang === \'english\'" href="{{data.person.linkedin}}" target="_blank" style="text-decoration: none; cursor: pointer;">{{data.person.fullName_en}}</a>\n        <a *ngIf="langService.lang === \'farsi\'" href="{{data.person.linkedin}}" target="_blank" style="text-decoration: none; cursor: pointer;">{{data.person.fullName_fa}}</a>\n      </div>\n      <div class="section">\n        <h4>{{langService.translate(\'My favorites are \')}}</h4>\n        <md-list *ngIf="langService.lang === \'english\'">\n          <md-list-item *ngFor="let favorite of data.person.favorites_en">{{favorite}}</md-list-item>\n        </md-list>\n        <md-list *ngIf="langService.lang === \'farsi\'">\n          <md-list-item *ngFor="let favorite of data.person.favorites_fa">{{favorite}}</md-list-item>\n        </md-list>\n      </div>\n      <div class="section">\n        <h4>{{langService.translate(\'Contact me\')}}</h4>\n        <md-list>\n          <md-list-item *ngIf="data.person.email">\n            <md-icon md-list-icon>\n              <i class="fa fa-envelope" aria-hidden="true"></i>\n            </md-icon>\n            <p md-line>{{data.person.email}}</p>\n          </md-list-item>\n          <md-list-item *ngIf="data.person.phone">\n            <md-icon md-list-icon>\n              <i class="fa fa-phone" aria-hidden="true"></i>\n            </md-icon>\n            <p md-line>{{data.person.phone}}</p>\n          </md-list-item>\n        </md-list>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n'},LGU3:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".footer{height:140px;margin:0;padding:10px;margin-top:100px;font-size:.8em!important}.footer-back{background-color:#171717!important}.footer-content{color:hsla(160,4%,70%,.71)!important}.socket-area{text-align:center;background-color:#000}.socket-content{color:#fff;font-size:.6em}",""]),e.exports=e.exports.toString()},OrcU:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".second-header{margin-top:30px}.header{height:80px;margin:0;padding:10px;position:relative}.header-back{background-color:#fff}.header-content{color:#000;cursor:pointer;top:auto;bottom:10px;text-decoration:none}.burger-menu{top:unset;bottom:unset}.header-content:hover{color:rgba(0,0,0,.49)}.menu{list-style-type:none}.menu-button{position:absolute;top:20px}.side-menu{background-color:#fff}.header-item{display:inline-block;margin-left:5px;margin-right:5px}.english .header-item{float:right}.farsi .header-item{float:left}.logo{padding:10px}.logo .english{direction:ltr;float:left}.logo .farsi{direction:rtl;float:right}.lang-nav{margin-top:80px;direction:ltr!important}",""]),e.exports=e.exports.toString()},PpIx:function(e,t){e.exports='<div class="page">\n  <div *ngIf="!waiting">\n    <div class="flex-container visible-slideshow" fxLayout="row" fxLayoutAlign="center center">\n      <div class="flex-item" fxFlex="20" fxFlex.sm="0" fxFlex.xs="0"></div>\n      <div class="flex-item slide-show" fxFlex="60" fxFlex.sm="100" fxFlex.xs="100">\n        <p-galleria [images]="images" panelWidth="500" panelHeight="313" [showCaption]="true" [showFilmstrip]="false"></p-galleria>\n      </div>\n      <div class="flex-item" fxFlex="20" fxFlex.sm="0" fxFlex.xs="0"></div>\n    </div>\n    <div class="invisible-slideshow">\n      <div *ngFor="let image of images" class="center image-wrapper">\n        <img src="{{image.source}}" alt="{{image.title}}" class="image-without-slideshow">\n        <p class="jumbotron">{{image.alt}}</p>\n      </div>\n    </div>\n    <div class="vertical-space"></div>\n    <div class="center container">\n      <div class="jumbotron">\n        <h3>\n          "{{langService.translate(\'The only limit to your impact is your imagination and commitment\')}}"\n        </h3>\n        <div style="font-size: 0.8em;">{{langService.translate(\'Tony Robbins\')}}</div>\n      </div>\n    </div>\n    <div class="vertical-space"></div>\n    <div>\n      <h2 class="center">\n        {{langService.translate(\'Trust us to make better world\')}}\n      </h2>\n      <div class="center">\n        <div fxLayout="column" fxLayoutAlign="center center">\n          <div class="flex-item" fxFlex="50" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column">\n            <div *ngFor="let technology of technologies_1" class="flex-item" fxFlex="14">\n              <img (click)="openPage(technology.link)" src="{{technology.source}}" alt="{{technology.alt}}" class="img-link">\n            </div>\n          </div>\n          <div class="flex-item" fxFlex="50" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column">\n            <div *ngFor="let technology of technologies_2" class="flex-item" fxFlex="14">\n              <img (click)="openPage(technology.link)" src="{{technology.source}}" alt="{{technology.alt}}" class="img-link">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="waiting">\n    <md-spinner class="align-spinner"></md-spinner>\n  </div>\n</div>\n'},RNTh:function(e,t,n){"use strict";var i=n("/oeL"),o=n("GXd5"),a=n("3JmR"),r=n("BQbL");n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.langService=e,this.contentfulService=t,this.windowService=n,this.projects=[],this.waiting=!1}return e.prototype.ngOnInit=function(){var e=this;this.width=this.windowService.getWindow().innerWidth,this.windowService.getWindow().onresize=function(t){e.width=e.windowService.getWindow().innerWidth},this.waiting=!0,this.contentfulService.getProjects().then(function(t){console.log(t);for(var n=0,i=t;n<i.length;n++){var o=i[n],a={title_en:o.fields.displayNameEn,title_fa:o.fields.displayNameFa,shortDescription_en:o.fields.shortDescriptionEn,shortDescription_fa:o.fields.shortDescriptionFa,description_en:o.fields.descriptionEn,description_fa:o.fields.descriptionFa,mainImage:{url:o.fields.mainImage.fields.file.url,title:o.fields.mainImage.fields.title}};if(o.fields.screenShots)for(var r=0,s=o.fields.screenShots;r<s.length;r++){var c=s[r];a[c].push({url:c.fields.file.url,title:c.fields.file.title,description:c.fields.file.description})}e.projects.push(a)}e.waiting=!1}).catch(function(e){console.log(e)})},e}();l=s([n.i(i.Component)({selector:"app-projects",template:n("zCp4"),styles:[n("HOZw")]}),c("design:paramtypes",["function"==typeof(f=void 0!==o.a&&o.a)&&f||Object,"function"==typeof(d=void 0!==a.a&&a.a)&&d||Object,"function"==typeof(p=void 0!==r.a&&r.a)&&p||Object])],l);var f,d,p},UcOt:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".personal-image{position:relative;top:-50px;right:10px;float:right;max-width:10%;border-radius:50%;z-index:2}.section{margin-top:8px;margin-bottom:8px}",""]),e.exports=e.exports.toString()},XV61:function(e,t,n){"use strict";var i=n("/oeL"),o=n("GXd5"),a=n("BQbL");n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.langService=e,this.windowService=t,this.height=500,this.width=500}return e.prototype.ngOnInit=function(){var e=this;this.height=this.windowService.getWindow().innerHeight-250,this.windowService.getWindow().onresize=function(t){e.height=e.windowService.getWindow().innerHeight-250},this.width=this.windowService.getWindow().innerWidth-30,this.windowService.getWindow().onresize=function(t){e.width=e.windowService.getWindow().innerWidth-30},this.langService.lang$.subscribe(function(t){return e.lang=t})},e.prototype.switchLang=function(){this.langService.changeLanguage()},e}();c=r([n.i(i.Component)({selector:"app-header",template:n("Z+qE"),styles:[n("OrcU")]}),s("design:paramtypes",["function"==typeof(l=void 0!==o.a&&o.a)&&l||Object,"function"==typeof(f=void 0!==a.a&&a.a)&&f||Object])],c);var l,f},"Z+qE":function(e,t){e.exports='<div class="header-back header">\n  <div class="flex-container" fxLayout="row" fxLayoutAlign="center center">\n    <div class="flex-item" fxFlex="15" fxFlex.md="10" fxFlex.sm="0" fxflex.xs="0"></div>\n    <div class="flex-item" fxFlex="70" fxFlex.md="80" fxFlex.sm="100" fxflex.xs="100">\n      <div class="lang-nav">\n        <a class="header-content" (click)="switchLang()">En/Fa</a>\n      </div>\n      <div>\n        <div class="flex-container"\n             fxLayout="row" fxLayoutAlign="center center"\n             fxLayout.sm="column" fxLayout.xs="column">\n          <div fxFlex="50" fxFlex.sm="100" fxFlex.xs="100" class="flex-item">\n            <a routerLink="/home" class="link logo">\n              <h1 [ngClass]="[lang]">{{langService.translate(\'Bent Oak Systems\')}}</h1>\n            </a>\n          </div>\n          <div fxFlex="50" fxFlex.sm="100" fxFlex.xs="100" class="flex-item" [ngClass]="[lang]">\n            <div class="usual-menu">\n              <span class="header-item">\n                <a class="header-content" routerLink="/contact">{{langService.translate(\'Contact\')}}</a>\n              </span>\n                    <span class="header-item">\n                <a class="header-content" routerLink="/about-us">{{langService.translate(\'About us\')}}</a>\n              </span>\n                    <span class="header-item">\n                <a class="header-content" routerLink="/people">{{langService.translate(\'People\')}}</a>\n              </span>\n                    <span class="header-item">\n                <a class="header-content" routerLink="/projects">{{langService.translate(\'Projects\')}}</a>\n              </span>\n            </div>\n            <div class="flex-container column-menu" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">\n              <div class="flex-item center" fxFlex="25">\n                <span class="header-item">\n                  <a class="header-content" routerLink="/contact">{{langService.translate(\'Contact\')}}</a>\n                </span>\n              </div>\n              <div class="flex-item center" fxFlex="25">\n                <span class="header-item">\n                  <a class="header-content" routerLink="/about-us">{{langService.translate(\'About us\')}}</a>\n                </span>\n              </div>\n              <div class="flex-item center" fxFlex="25">\n                <span class="header-item">\n                  <a class="header-content" routerLink="/people">{{langService.translate(\'People\')}}</a>\n                </span>\n              </div>\n              <div class="flex-item center" fxFlex="25">\n                <span class="header-item">\n                  <a class="header-content" routerLink="/projects">{{langService.translate(\'Projects\')}}</a>\n                </span>\n              </div>\n            </div>\n            <span class="fill-remaining-space"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="flex-item" fxFlex="15" fxFlex.md="10" fxFlex.sm="0" fxflex.xs="0"></div>\n  </div>\n</div>\n'},ZM2E:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".person{margin:10px}",""]),e.exports=e.exports.toString()},"aR8+":function(e,t,n){"use strict";var i=n("fc+i"),o=n("/oeL"),a=n("BkNc"),r=n("fL27"),s=n("Z04r"),c=n("LUBl"),l=(n.n(c),n("r0ix")),f=n("wQAS"),d=n("nVho"),p=n("XV61"),u=n("3JmR"),g=n("ECCM"),h=n("RNTh"),v=n("acOl"),m=n("B91n"),y=n("GXd5"),x=n("BQbL"),w=n("egH5"),b=n("6msW"),j=n("Hv2f"),S=n("5arN"),_=n("3ulq");n.d(t,"a",function(){return O});var R=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},O=function(){function e(){}return e}();O=R([n.i(o.NgModule)({declarations:[f.a,d.a,p.a,g.a,h.a,v.a,m.a,w.a,b.a,j.a,S.a,_.a],imports:[r.a,i.BrowserModule,s.a,s.b,s.c,s.d,s.e,s.f,s.g,l.a,c.GalleriaModule,c.ToggleButtonModule,a.RouterModule.forRoot([{path:"",component:g.a},{path:"home",component:g.a},{path:"people",component:m.a},{path:"projects",component:h.a},{path:"about-us",component:v.a},{path:"contact",component:w.a}])],providers:[u.a,y.a,x.a],bootstrap:[f.a],entryComponents:[j.a,_.a]})],O)},acOl:function(e,t,n){"use strict";var i=n("/oeL");n.d(t,"a",function(){return r});var o=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){}return e.prototype.ngOnInit=function(){},e}();r=o([n.i(i.Component)({selector:"app-about-us",template:n("1L11"),styles:[n("eMA3")]}),a("design:paramtypes",[])],r)},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("/oeL"),o=n("Qa4U"),a=n("aR8+");n("p5Ee").a.production&&n.i(i.enableProdMode)(),n.i(o.a)().bootstrapModule(a.a)},ceTX:function(e,t){e.exports='<div class="page">\n  <div *ngIf="!waiting">\n    <div *ngFor="let person of people" class="person">\n      <app-person [person]="person"></app-person>\n    </div>\n  </div>\n  <div *ngIf="waiting">\n    <md-spinner class="align-spinner"></md-spinner>\n  </div>\n</div>\n'},dtiO:function(e,t){e.exports='<div>\n  <div class="flex-container" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutAlign="center center">\n    <div class="flex-item" fxFlex="30">\n      <img src="{{person.image}}" alt="{{person.title}}" class="personal-image">\n    </div>\n    <div class="flex-item" fxFlex="70">\n      <h3 class="width-center" *ngIf="langService.lang === \'english\'">{{person.fullName_en}}</h3>\n      <h3 class="width-center" *ngIf="langService.lang === \'farsi\'">{{person.fullName_fa}}</h3>\n      <h4 class="width-center" *ngIf="langService.lang === \'english\'">{{person.responsibility_en}}</h4>\n      <h4 class="width-center" *ngIf="langService.lang === \'farsi\'">{{person.responsibility_fa}}</h4>\n      <a class="show-more link" (click)="showDetails()">{{langService.translate(\'More...\')}}</a>\n      <div class="show-details">\n        <hr/>\n        <div>\n          {{langService.translate(\'You can see my skills and experience at LinkedIn \')}}\n          <a *ngIf="langService.lang === \'english\'" href="{{person.linkedin}}" target="_blank" class="link">{{person.fullName_en}}</a>\n          <a *ngIf="langService.lang === \'farsi\'" href="{{person.linkedin}}" target="_blank" class="link">{{person.fullName_fa}}</a>\n        </div>\n        <div>\n          <h4>{{langService.translate(\'My favorites are \')}}</h4>\n          <div *ngIf="langService.lang === \'english\'">\n            <div *ngFor="let favorite of person.favorites_en">{{favorite}}</div>\n          </div>\n          <div *ngIf="langService.lang === \'farsi\'">\n            <div *ngFor="let favorite of person.favorites_fa">{{favorite}}</div>\n          </div>\n        </div>\n        <div>\n          <h4>{{langService.translate(\'Contact me\')}}</h4>\n          <md-list>\n            <md-list-item class="center" *ngIf="person.email">{{langService.translate(\'Email: \')}}{{person.email}}</md-list-item>\n            <md-list-item class="center" *ngIf="person.phone">{{langService.translate(\'Phone: \')}}{{person.phone}}</md-list-item>\n          </md-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},eMA3:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,"",""]),e.exports=e.exports.toString()},efyd:function(e,t){e.exports='<div [ngClass]="[lang]">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer style="width:100%;"></app-footer>\n</div>\n'},egH5:function(e,t,n){"use strict";var i=n("/oeL");n.d(t,"a",function(){return r});var o=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){}return e.prototype.ngOnInit=function(){},e}();r=o([n.i(i.Component)({selector:"app-contact",template:n("1WKT"),styles:[n("hbhV")]}),a("design:paramtypes",[])],r)},hbhV:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,"",""]),e.exports=e.exports.toString()},hxJY:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,"",""]),e.exports=e.exports.toString()},n7du:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="n7du"},nVho:function(e,t,n){"use strict";var i=n("/oeL"),o=n("3JmR"),a=n("GXd5");n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.contentfulService=e,this.langService=t,this.address={},this.phone={}}return e.prototype.ngOnInit=function(){var e=this;this.contentfulService.getContactData().then(function(t){e.address.en=t[0].fields.addressEn,e.address.fa=t[0].fields.addressFa,e.phone.uk=t[0].fields.phoneUk,e.phone.ir=t[0].fields.phoneIr})},e.prototype.openLinkedIn=function(){window.open("http://linkedin.com","_blank")},e}();c=r([n.i(i.Component)({selector:"app-footer",template:n("t2c6"),styles:[n("LGU3")]}),s("design:paramtypes",["function"==typeof(l=void 0!==o.a&&o.a)&&l||Object,"function"==typeof(f=void 0!==a.a&&a.a)&&f||Object])],c);var l,f},p5Ee:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i={production:!1}},t2c6:function(e,t){e.exports='<div class="footer-back footer row">\n  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">\n    <div class="footer-content" *ngIf="langService.lang === \'farsi\'">{{address.fa}}</div>\n    <div class="footer-content" *ngIf="langService.lang === \'english\'">{{address.en}}</div>\n    <div class="footer-content">{{langService.translate(\'Tel - UK: \')}}{{phone.uk}}</div>\n    <div class="footer-content">{{langService.translate(\'Tel - IR: \')}}{{phone.ir}}</div>\n  </div>\n  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 center">\n    <div class="footer-content">\n      {{langService.translate(\'Follow us in \')}}\n      <a class="link" target="_blank" href="https://www.linkedin.com/company/18228521/"><i class="fa fa-linkedin link" style="padding:3px;border-radius:5px;background:#008CC9;color:white" aria-hidden="true"></i></a>\n    </div>\n  </div>\n  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">\n\n  </div>\n</div>\n<div class="socket-area">\n  <label class="socket-content">\n    {{langService.translate(\'All rights reserved for BentOakSystems\')}} &copy;\n  </label>\n</div>\n'},v4fZ:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".personal-image{max-height:120px;max-width:120px;margin:30px}",""]),e.exports=e.exports.toString()},wQAS:function(e,t,n){"use strict";var i=n("/oeL"),o=n("rgUS"),a=(n.n(o),n("GXd5")),r=n("BQbL");n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t){this.langService=e,this.windowService=t,this.lang="english"}return e.prototype.ngOnInit=function(){var e=this;this.height=this.windowService.getWindow().innerHeight-283,this.windowService.getWindow().onresize=function(t){e.height=e.windowService.getWindow().innerHeight-283},this.langService.lang$.subscribe(function(t){return e.lang=t})},e}();l=s([n.i(i.Component)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]}),c("design:paramtypes",["function"==typeof(f=void 0!==a.a&&a.a)&&f||Object,"function"==typeof(d=void 0!==r.a&&r.a)&&d||Object])],l);var f,d},yELp:function(e,t){e.exports='<div>\n  <div class="center">\n    <img src="{{data.project.mainImage.url}}" alt="{{data.project.mainImage.title}}" class="logo-img">\n  </div>\n  <md-card>\n    <br/>\n    <md-card-title class="center" *ngIf="langService.lang === \'english\'">{{data.project.title_en}}</md-card-title>\n    <md-card-title class="center" *ngIf="langService.lang === \'farsi\'">{{data.project.title_fa}}</md-card-title>\n    <md-card-content>\n      <div *ngIf="langService.lang === \'english\'">{{data.project.description_en}}</div>\n      <div *ngIf="langService.lang === \'farsi\'">{{data.project.description_fa}}</div>\n    </md-card-content>\n  </md-card>\n</div>\n'},zCp4:function(e,t){e.exports='<div class="page">\n  <div *ngIf="!waiting">\n    <div *ngFor="let project of projects" class="project">\n      <app-project [project]="project"></app-project>\n    </div>\n  </div>\n  <div *ngIf="waiting">\n    <md-spinner class="align-spinner"></md-spinner>\n  </div>\n</div>\n'}},[0]);