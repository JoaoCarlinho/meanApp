(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.adminVisibility\">\n  <!--**********************************************Login Form**************************************************************-->\n  <div *ngIf=\"this.loginFormVisibility\">\n    <form class=\"form-signin\" novalidate>\n      <table class=\"text-left\">\n        <tr><th colspan=\"2\">Please enter credentials to view admin panel</th></tr>\n        <tr>\n          <td>username:</td><td><input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"userName\" required/></td>\n        </tr>\n        <tr>\n          <td>Password:</td><td><input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" required/></td>\n        </tr>\n      </table>\n    </form>\n    <p>\n      <button class=\"btn-success\" type=\"submit\" (click)=\"Submit(); UpdateVisibility();\">Submit</button>&nbsp;&nbsp;<button class=\"btn-danger\" (click)=\"ShowAdminPanel(); UpdateVisibility();\">Cancel</button>\n    </p>\n  </div>\n  <div *ngIf=\"this.loginSuccess\">\n<!--**********************************************Update Form**************************************************************-->\n    <div *ngIf=\"this.editingService\" id=\"editService\">\n      <form *ngIf=\"this.serviceInfo\">\n          <table class=\"text-left\" class=\"table table-striped table-hover \">\n            <tr><th colspan=\"2\">Please enter information to edit or add services</th></tr>\n            <tr>\n              <td>Name:</td><td><input placeholder=\"{{this.serviceInfo.name}}\"  [(ngModel)]=\"this.serviceInfo.name\" [ngModelOptions]=\"{standalone:\n                true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n              <td>Price:</td><td><input placeholder=\"{{this.serviceInfo.price}}\" [(ngModel)]=\"this.serviceInfo.price\" [ngModelOptions]=\"{standalone:\n                true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n              <td>Schedule:</td>\n              <td>\n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['minimum delivery']}}\" [(ngModel)]=\"this.serviceInfo.schedule['minimum delivery']\" [ngModelOptions]=\"{standalone:\n                      true}\" />\n                    <label >Total Delivery</label>\n                </span><br/>\n        \n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Review']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Review']\" [ngModelOptions]=\"{standalone:\n                      true}\"/>\n                    <label >Review Period</label>\n                </span><br/>\n        \n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Implementation/Confirmation']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Implementation/Confirmation']\" [ngModelOptions]=\"{standalone:\n                      true}\"/>\n                    <label >Implementation/SIT period</label>\n                </span><br/>\n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Test/Development']}}\"  [(ngModel)]=\"this.serviceInfo.schedule['Test/Development']\" [ngModelOptions]=\"{standalone:\n                      true}\"/>\n                    <label >Development/UAT period</label>\n                </span><br/>\n        \n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Planning/Issue Tracking']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Planning/Issue Tracking']\"  [ngModelOptions]=\"{standalone:\n                      true}\"/>\n                    <label >Planning/Issue Tracking</label>\n                </span><br/>\n        \n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Research/Planning']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Research/Planning']\" [ngModelOptions]=\"{standalone:\n                      true}\"/>\n                    <label >Research/Planning</label>\n                </span><br/>\n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Design']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Design']\" [ngModelOptions]=\"{standalone:\n                      true}\"/>\n                    <label >Design</label>\n                </span><br/>\n        \n                <span>\n                    <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Development']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Development']\" [ngModelOptions]=\"{standalone:\n                      true}\"/>\n                    <label >Development</label>\n                </span>\n              </td>\n            </tr>\n            <tr>\n              <td>Description:</td><td><textarea placeholder=\"{{this.serviceInfo.description}}\" [(ngModel)]=\"this.serviceInfo.description\" [ngModelOptions]=\"{standalone:\n                true}\" ></textarea></td>\n            </tr>\n            <tr>\n              <td>Maintenance:</td><td><textarea  placeholder=\"{{this.serviceInfo.maintenance}}\"[(ngModel)]=\"this.serviceInfo.maintenance\" [ngModelOptions]=\"{standalone:\n                true}\" ></textarea></td>\n            </tr>\n            <tr>\n              <td>Type:</td><td><input type=\"text\" placeholder=\"{{this.serviceInfo.serviceType}}\" [(ngModel)]=\"this.serviceInfo.serviceType\" [ngModelOptions]=\"{standalone:\n                true}\"/></td><!-- select-->\n            </tr>\n  \n          </table>\n            <p>\n              <button class=\"btn-success\" (click)=\"ConfirmUpdate()\">update service list</button><button class=\"btn-danger\" (click)=\"EditService()\">cancel</button>\n            </p>\n        </form>\n    </div>\n<!--**********************************************Create Form**************************************************************-->\n    <div *ngIf=\"this.creatingService\" id=\"createService\">\n        <form #frm=\"ngForm\" class=\"text-left\" (ngSubmit)=\"ConfirmCreate(frm)\">\n          <div class=\"form-group\">\n            <label>Name:</label><input type=\"text\" class=\"form.control\" name=\"serviceName\" ngModel required #serviceName=\"ngModel\"/><br/>\n            <label>Price:</label><input type=\"text\" class=\"form.control\" name=\"servicePrice\" ngModel required #servicePrice=\"ngModel\"/><br/>\n            <ul>\n              <li><label>Min Delivery:</label><input type=\"text\" class=\"form.control\" name=\"serviceDelivery\" ngModel required #serviceDelivery=\"ngModel\"/></li>\n              <li><label>Design:</label><input type=\"text\" class=\"form.control\" name=\"serviceDesign\" ngModel required #serviceDesign=\"ngModel\"/></li>\n              <li><label>Development:</label><input type=\"text\" class=\"form.control\" name=\"serviceDevelopment\" ngModel required #serviceDevelopment=\"ngModel\"/></li>\n              <li><label>Test:</label><input type=\"text\" class=\"form.control\" name=\"serviceTest\" ngModel #serviceTest=\"ngModel\"/></li>\n              <li><label>Review:</label><input type=\"text\" class=\"form.control\" name=\"serviceReview\" ngModel #serviceReview=\"ngModel\"/></li>\n            </ul><br/>\n            <label>Description:</label><input type=\"text\" class=\"form.control\" name=\"serviceDescription\" ngModel required #serviceDescription=\"ngModel\"/><br/>\n            <label>Maintenance:</label><input type=\"text\" class=\"form.control\" name=\"serviceMaintain\" ngModel required #serviceMaintain=\"ngModel\"/><br/>\n            <label>Category:</label><input type=\"text\" class=\"form.control\" name=\"serviceType\" ngModel required #serviceType=\"ngModel\"/><br/>\n          </div>\n           <!--\n          <table class=\"text-left\" class=\"table table-striped table-hover \">\n              <tr><th colspan=\"2\">Please enter information to edit or add services</th></tr>\n              <tr>\n                <td>Name:</td><td><input placeholder=\"{{this.serviceInfo.name}}\"  [(ngModel)]=\"this.serviceInfo.name\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n              </tr>\n              <tr>\n                <td>Price:</td><td><input placeholder=\"{{this.serviceInfo.price}}\" [(ngModel)]=\"this.serviceInfo.price\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n              </tr>\n              <tr>\n                <td>Schedule:</td>\n                <td>\n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['minimum delivery']}}\" [(ngModel)]=\"this.serviceInfo.schedule['minimum delivery']\" [ngModelOptions]=\"{standalone:\n                        true}\" />\n                      <label >Total Delivery</label>\n                  </span><br/>\n          \n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Review']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Review']\" [ngModelOptions]=\"{standalone:\n                        true}\"/>\n                      <label >Review Period</label>\n                  </span><br/>\n          \n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Implementation/Confirmation']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Implementation/Confirmation']\" [ngModelOptions]=\"{standalone:\n                        true}\"/>\n                      <label >Implementation/SIT period</label>\n                  </span><br/>\n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Test/Development']}}\"  [(ngModel)]=\"this.serviceInfo.schedule['Test/Development']\" [ngModelOptions]=\"{standalone:\n                        true}\"/>\n                      <label >Development/UAT period</label>\n                  </span><br/>\n          \n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Planning/Issue Tracking']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Planning/Issue Tracking']\"  [ngModelOptions]=\"{standalone:\n                        true}\"/>\n                      <label >Planning/Issue Tracking</label>\n                  </span><br/>\n          \n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Research/Planning']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Research/Planning']\" [ngModelOptions]=\"{standalone:\n                        true}\"/>\n                      <label >Research/Planning</label>\n                  </span><br/>\n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Design']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Design']\" [ngModelOptions]=\"{standalone:\n                        true}\"/>\n                      <label >Design</label>\n                  </span><br/>\n          \n                  <span>\n                      <input type=\"text\" placeholder=\"{{this.serviceInfo.schedule['Development']}}\" [(ngModel)]=\"this.serviceInfo.schedule['Development']\" [ngModelOptions]=\"{standalone:\n                        true}\"/>\n                      <label >Development</label>\n                  </span>\n                </td>\n              </tr>\n              <tr>\n                <td>Description:</td><td><textarea placeholder=\"{{this.serviceInfo.description}}\" [(ngModel)]=\"this.serviceInfo.description\" [ngModelOptions]=\"{standalone:\n                  true}\" ></textarea></td>\n              </tr>\n              <tr>\n                <td>Maintenance:</td><td><textarea  placeholder=\"{{this.serviceInfo.maintenance}}\"[(ngModel)]=\"this.serviceInfo.maintenance\" [ngModelOptions]=\"{standalone:\n                  true}\" ></textarea></td>\n              </tr>\n              <tr>\n                <td>Type:</td><td><input type=\"text\" placeholder=\"{{this.serviceInfo.serviceType}}\" [(ngModel)]=\"this.serviceInfo.serviceType\" [ngModelOptions]=\"{standalone:\n                  true}\"/></td><!-- select\\->\n              </tr>\n    \n            </table>\n          -->\n              <p>\n                <button type=\"submit\" class=\"btn-success\">update service list</button><button class=\"btn-danger\" (click)=\"EditService()\">cancel</button>\n              </p>\n          </form>\n      </div>\n<!--*********************************************Table displaying services**************************************************************-->\n    <p><button (click)=\"CreateService()\" class=\"btn-success\">Add New</button></p>\n    <div *ngFor=\"let service of serviceList\" id=\"listView\">\n      <table class=\"text-left table table-striped table-hover \">\n        <tr>\n          <th>Service:</th><th>{{service.name}}</th>\n        </tr>\n        <tr>\n          <td>Price:</td><td>{{service.price}}</td>\n        </tr>\n        <tr>\n          <td>Schedule:</td>\n          <td>\n            <ul style=\"list-style: none;\">\n                <li *ngIf=\"service.schedule['minimum delivery']\">{{service.schedule['minimum delivery']}}</li>     \n              <!-- \n                <li *ngIf=\"service.schedule['Review']\">{{service.schedule['Review']}}</li>\n                <li *ngIf=\"service.schedule['Implementation/Confirmation']\">{{service.schedule['Test Development']}}</li>\n                <li *ngIf=\"service.schedule['Implementation/Confirmation']\">{{service.schedule['Implementation/Confirmation']}}</li>\n                <li *ngIf=\"service.schedule['Planning/Issue Tracking']\">{{service.schedule['Planning/Issue Tracking']}}</li>\n                <li *ngIf=\"service.schedule['Research/Planning']\">{{service.schedule['Research/Planning']}}</li>\n                <li *ngIf=\"service.schedule['Design']\">{{service.schedule['Design']}}</li>\n                <li *ngIf=\"service.schedule['Development']\">{{service.schedule['Development']}}</li>\n              -->\n            </ul>\n        </td>\n        </tr>\n        <tr>\n          <td>Dscription:</td><td>{{service.description}}</td>\n        </tr>\n        <tr>\n          <td>Maintenance:</td><td>{{service.maintenance}}</td>\n        </tr>\n        <tr>\n          <td>Type:</td><td>{{service.serviceType}}</td>\n        </tr>\n      </table>\n      <button class=\"btn-primary\" (click)=\"EditService(service)\">edit</button>\n    </div>\n<!--*********************************************Confirmation Form**************************************************************-->\n    <div *ngIf=\"this.confirmService\" id=\"confirmService\">\n      <table class=\"text-left\" *ngIf=\"this.serviceInfo\">\n          <tr><th colspan=\"2\">Please confirm details of update to service list</th></tr>\n        <tr>\n          <td>name:</td><td>{{this.serviceInfo.name}}</td>\n        </tr>\n        <tr>\n          <td>price:</td><td>{{this.serviceInfo.price}}</td>\n        </tr>\n        <tr>\n          <td>schedule:</td>\n          <td>\n              <span>\n                  {{this.serviceInfo.schedule['minimum delivery']}}\n              </span>\n      \n              <span>\n                  {{this.serviceInfo.schedule['Review']}}\n              </span>\n      \n              <span>\n                  {{this.serviceInfo.schedule['Implementation/Confirmation']}}\n              </span>\n              <span>\n                  {{this.serviceInfo.schedule['Test/Development']}}\n              </span>\n      \n              <span>\n                  {{this.serviceInfo.schedule['Planning/Issue Tracking']}}\n              </span>\n      \n              <span>\n                  {{this.serviceInfo.schedule['Research/Planning']}}\n              </span>\n              <span>\n                  {{this.serviceInfo.schedule['Design']}}\n              </span>\n      \n              <span>\n                  {{this.serviceInfo.schedule['Development']}}\n              </span>\n            </td>\n        </tr>\n        <tr>\n          <td>description:</td><td>{{this.serviceInfo.description}}</td>\n        </tr>\n        <tr>\n          <td>maintenance:</td><td>{{this.serviceInfo.maintenance}}</td>\n        </tr>\n        <tr>\n          <td>type:</td><td>{{this.serviceInfo.type}}</td><!-- select-->\n        </tr>\n      </table>\n      <button (click)=\"UpdateServices()\" class=\"btn-success\">edit</button>&nbsp;&nbsp;&nbsp;<button (click)=\"EditService(this.serviceInfo)\" class=\"btn-danger\">Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border: 2px #3f4c92 solid;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_servicelist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicelist.service */ "./src/app/services/servicelist.service.ts");
/* harmony import */ var _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/hidepanel.service */ "./src/app/services/hidepanel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(admin, info, data) {
        this.admin = admin;
        this.info = info;
        this.data = data;
        this.editingService = false;
        this.creatingService = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe for login form visibility
        this.admin.loginState.subscribe(function (state) {
            _this.loginFormVisibility = !state;
            _this.loginSuccess = state;
        });
        //set current service for detail
        this.admin.adminVisible.subscribe(function (adminVisible) { return _this.adminVisibility = adminVisible; });
        //subscribe to current service list
        this.info.loadServiceLines().subscribe(function (res) { return _this.serviceList = res; });
    };
    AdminComponent.prototype.Submit = function () {
        //console.log(this.userName);  // { first: '', last: '' }
        //console.log(this.password);  // false 
        this.admin.Login({ "userName": this.userName, "password": this.password });
        console.log(this.serviceList);
    };
    AdminComponent.prototype.ShowAdminPanel = function () {
        this.loginSuccess = false;
        this.adminVisibility = !this.adminVisibility;
        this.admin.ShowAdminPanel(this.adminVisibility);
    };
    AdminComponent.prototype.EditService = function (IOService) {
        if (IOService === void 0) { IOService = null; }
        this.editingService = !this.editingService;
        scroll(0, 0);
        if (IOService == null) {
            this.updateType = 'new';
        }
        else {
            this.updateType = 'current';
            this.serviceInfo = IOService;
        }
    };
    AdminComponent.prototype.ConfirmUpdate = function () {
        this.editingService = !this.editingService;
        this.confirmService = !this.confirmService;
    };
    AdminComponent.prototype.ConfirmCreate = function (form) {
        this.creatingService = !this.creatingService;
        this.confirmCreate = !this.confirmCreate;
        this.serviceInfo = {
            name: form.serviceName,
            price: form.servicePrice,
            schedule: { "minimum delivery": form.serviceDelivery, "Design": form.serviceDesign, "Development": form.serviceDevelopment, "Implementation/Confirmation": form.serviceTest, "Review": form.serviceReview },
            description: form.serviceDescription,
            maintenance: form.serviceMaintain,
            serviceType: form.serviceType,
        };
        console.log(this.serviceInfo);
    };
    AdminComponent.prototype.UpdateServices = function (serviceStatus) {
        this.confirmService = !this.confirmService;
        this.admin.UpdateServices(this.serviceInfo);
        this.updateType = '';
    };
    AdminComponent.prototype.getServices = function () {
        var _this = this;
        this.info.loadServiceLines()
            .subscribe(function (services) {
            _this.serviceList = services;
        });
    };
    AdminComponent.prototype.CreateService = function () {
        var _this = this;
        this.creatingService = !this.creatingService;
        this.admin.CreateService(this.serviceInfo)
            .subscribe(function (result) {
            console.log(result);
            _this.getServices();
        });
        this.updateType = '';
    };
    //function to hide admin panel
    AdminComponent.prototype.UpdateVisibility = function () {
        this.data.ShowHidePanel(false);
        //console.log ('visiblity:'+this.visibility);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _services_servicelist_service__WEBPACK_IMPORTED_MODULE_2__["ServicelistService"], _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_3__["HidepanelService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ioservices_ioservices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ioservices/ioservices.component */ "./src/app/ioservices/ioservices.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: "services", component: _ioservices_ioservices_component__WEBPACK_IMPORTED_MODULE_2__["IoservicesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-iobanner></app-iobanner>\n<app-content></app-content>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ISE Optimizations';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ioservices_ioservices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ioservices/ioservices.component */ "./src/app/ioservices/ioservices.component.ts");
/* harmony import */ var _iobanner_iobanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iobanner/iobanner.component */ "./src/app/iobanner/iobanner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service-list/service-list.component */ "./src/app/service-list/service-list.component.ts");
/* harmony import */ var _service_line_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service-line.pipe */ "./src/app/service-line.pipe.ts");
/* harmony import */ var _consultation_consultation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./consultation/consultation.component */ "./src/app/consultation/consultation.component.ts");
/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newsletter/newsletter.component */ "./src/app/newsletter/newsletter.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _ioservices_ioservices_component__WEBPACK_IMPORTED_MODULE_6__["IoservicesComponent"],
                _iobanner_iobanner_component__WEBPACK_IMPORTED_MODULE_7__["IobannerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_11__["ServiceListComponent"],
                _service_line_pipe__WEBPACK_IMPORTED_MODULE_12__["ServiceLinePipe"],
                _consultation_consultation_component__WEBPACK_IMPORTED_MODULE_13__["ConsultationComponent"],
                _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_14__["NewsletterComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/consultation/consultation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/consultation/consultation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.formVisibility\" class=\"requestModal text-center\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <!-- Industry, Region, Position and ServiceType will be a select inputs-->\n        <table class=\"text-left\">\n            <tr>\n                <th colspan=\"2\"><p>Please provide some basic info.<br/>\n                    Our experienced specialists<br/> \n                    will follow-up shortly!</p></th>\n            </tr>\n            <tr>\n                <td><label>First Name</label></td><td><input placeholder=\"Johnathan\" value=\"Johnathan\" [(ngModel)]=\"consultInfo.firstName\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Last Name</label></td><td><input placeholder=\"Skeete\" value=\"Skeete\" [(ngModel)]=\"consultInfo.lastName\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Email</label></td><td><input placeholder=\"JSkeete@gmail.com\" value=\"JSkeete@gmail.com\" [(ngModel)]=\"consultInfo.email\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Office #</label></td><td><input placeholder=\"9016203000\" value=\"9016203000\" [(ngModel)]=\"consultInfo.phone\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Company</label></td><td><input placeholder=\"IO\" value=\"IO\" [(ngModel)]=\"consultInfo.company\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Industry</label></td><td><input placeholder=\"IT Services\" value=\"IT Services\" [(ngModel)]=\"consultInfo.industry\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Dept. Function</label></td><td><input placeholder=\"Enterpries Architecture\" value=\"Enterpries Architecture\" [(ngModel)]=\"consultInfo.department\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Time Zone</label></td><td><input placeholder=\"EST\" value=\"EST\" [(ngModel)]=\"consultInfo.region\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Position</label></td><td><input placeholder=\"Lead\" value=\"Lead\" [(ngModel)]=\"consultInfo.position\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label># Accounts</label></td><td><input placeholder=\"15\" value=\"15\" [(ngModel)]=\"consultInfo.clientAccounts\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label># Employees</label></td><td><input placeholder=\"30\" value=\"30\" [(ngModel)]=\"consultInfo.employees\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n            <tr>\n                <td><label>Service</label></td><td><input placeholder=\"{{serviceType}}\" value=\"{{serviceType}}\" [(ngModel)]=\"consultInfo.serviceType\" [ngModelOptions]=\"{standalone:\n                    true}\" type=\"text\" required/></td>\n            </tr>\n        </table>\n        <p><button type=\"button\" class=\"btn-success\" (click)=\"confirmRequest()\">Submit</button>&nbsp;&nbsp;<button class=\"btn-danger\" (click)=\"requestConsult()\">Cancel</button></p>\n    </form>\n</div>\n<div *ngIf=\"this.confirmVisibility\" class=\"confirmModal text-center\">\n    <form>\n        <p>Please confirm submission<br/>\n        <table>\n            <tr>\n                <th colspan=\"2\"></th>\n            </tr>\n            <tr>\n                <td>First Name</td><td>{{consultInfo.firstName}}</td>\n            </tr>\n            <tr>\n                <td>Last Name</td><td>{{consultInfo.lastName}}</td>\n            </tr>\n            <tr>\n                <td>Email</td><td>{{consultInfo.email}}</td>\n            </tr>\n            <tr>\n                <td>Office #</td><td>{{consultInfo.phone}}</td>\n            </tr>\n            <tr>\n                <td>Company</td><td>{{consultInfo.company}}</td>\n            </tr>\n            <tr>\n                <td>Industry</td><td>{{consultInfo.industry}}</td>\n            </tr>\n            <tr>\n                <td>Dept. Function</td><td>{{consultInfo.department}}</td>\n            </tr>\n            <tr>\n                <td>Time Zone</td><td>{{consultInfo.region}}</td>\n            </tr>\n            <tr>\n                <td>Position</td><td>{{consultInfo.position}}</td>\n            </tr>\n            <tr>\n                <td># Accounts</td><td>{{consultInfo.clientAccounts}}</td>\n            </tr>\n            <tr>\n                <td># Employees</td><td>{{consultInfo.employees}}</td>\n            </tr>\n            <tr>\n                <td>Service</td><td>{{consultInfo.serviceType}}</td>\n            </tr>\n        </table>\n        <p><button type=\"button\" class=\"btn-success\" (click)=\"submitRequest()\">Confirm</button>&nbsp;&nbsp;<button class=\"btn-danger\" (click)=\"confirmRequest()\">Cancel</button></p>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/consultation/consultation.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/consultation/consultation.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consultation/consultation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/consultation/consultation.component.ts ***!
  \********************************************************/
/*! exports provided: ConsultationComponent, Consultation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationComponent", function() { return ConsultationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consultation", function() { return Consultation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_servicedetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/servicedetail.service */ "./src/app/services/servicedetail.service.ts");
/* harmony import */ var _services_consult_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/consult.service */ "./src/app/services/consult.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultationComponent = /** @class */ (function () {
    function ConsultationComponent(detail, message) {
        this.detail = detail;
        this.message = message;
        this.confirmVisibility = false;
        this.consultInfo = new Consultation;
    }
    ConsultationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set current state of consult submission
        //this.message.submissionState.subscribe(message => this.submissionState = message)
        //set current service for detail
        this.detail.currentService.subscribe(function (ioservice) { return _this.serviceType = ioservice.serviceType; });
        //set current visibility of request Form
        this.message.formVisibility.subscribe(function (formVisibility) { return _this.formVisibility = formVisibility; });
        //this.consultInfo = {"firstName":"", "lastName": "", "email": "", "phone": "", "serviceType": "", "company": "", "industry": "", "region": "", "department": "", "position": "", "clientAccounts": 0, "employees": 0, "requestDate": Date.now(), "consultDate": Date.now(), "closedStatus": 0};
        this.consultInfo = { "firstName": "Johnathan", "lastName": "Skeete", "email": "JSkeete@gmail.com", "phone": "9016203000", "serviceType": "Consulting Services", "company": "IO", "industry": "IT Services", "region": "EST", "department": "Sales", "position": "Lead", "clientAccounts": 15, "employees": 30, "requestDate": Date.now(), "consultDate": Date.now(), "closedStatus": 0 };
    };
    ConsultationComponent.prototype.requestConsult = function () {
        this.formVisibility = !this.formVisibility;
        this.message.ShowRequestForm(this.formVisibility);
    };
    ConsultationComponent.prototype.confirmRequest = function () {
        this.confirmVisibility = !this.confirmVisibility;
        //console.log('confirm visibility is '+this.confirmVisibility);
        console.log(this.consultInfo);
    };
    /*
      onSubmit(f: NgForm) {
       this.confirmRequest();
       console.log('confirm visibility is '+this.confirmVisibility);
       console.log(this.consultInfo);
       console.log(f.value);  // { first: '', last: '' }
       console.log(f.valid);  // false
     }
    */
    ConsultationComponent.prototype.submitRequest = function () {
        this.message.CompleteSubmission(this.consultInfo);
        this.confirmVisibility = !this.confirmVisibility;
        this.formVisibility = false;
        this.message.ShowRequestForm(this.formVisibility);
    };
    ConsultationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultation',
            template: __webpack_require__(/*! ./consultation.component.html */ "./src/app/consultation/consultation.component.html"),
            styles: [__webpack_require__(/*! ./consultation.component.scss */ "./src/app/consultation/consultation.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_servicedetail_service__WEBPACK_IMPORTED_MODULE_1__["ServicedetailService"], _services_consult_service__WEBPACK_IMPORTED_MODULE_2__["ConsultService"]])
    ], ConsultationComponent);
    return ConsultationComponent;
}());

var Consultation = /** @class */ (function () {
    function Consultation() {
    }
    return Consultation;
}());



/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"frontPageIntro\" class=\"text-center\">\n  <div class=\"page-header\" *ngIf=\"!this.detailVisibility\">\n  </div>\n  <app-service-list></app-service-list>\n  <app-sidebar></app-sidebar>\n  <router-outlet></router-outlet>\n  <app-consultation></app-consultation>\n  <app-footer></app-footer>\n  <app-newsletter></app-newsletter>\n  <app-admin></app-admin>\n</div>\n"

/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#frontPageIntro {\n  border-radius: 15px;\n  position: relative;\n  text-align: center;\n  margin: 115px auto 0 auto;\n  overflow-y: scroll; }\n\ninput {\n  font-size: .75em; }\n\ntable {\n  font-size: .75em; }\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_servicedetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/servicedetail.service */ "./src/app/services/servicedetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(detail) {
        this.detail = detail;
        this.title = 'ISE Optimizations';
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set current visibility of service detail
        this.detail.detailVisibility.subscribe(function (detailVisibility) { return _this.detailVisibility = detailVisibility; });
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_servicedetail_service__WEBPACK_IMPORTED_MODULE_1__["ServicedetailService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\n    <hr id=\"line1\" width=3% >\n    <hr id=\"line2\" width=6% >\n    <hr id=\"line3\" width=9% >\n\t<hr id=\"line4\" width=12% >\n    <hr id=\"line5\" width=15% >\n    <hr id=\"line6\" width=18% >\n\t<hr id=\"line7\" width=21% >\n\t<hr id=\"line8\" width=24% >\n    <hr id=\"line9\" width=27% >\n    <hr id=\"line10\" width=30% >\n\t<hr id=\"line11\" width=33% >\n\t<hr id=\"line12\" width=36% >\n    <hr id=\"line13\" width=39% >\n    <hr id=\"line14\" width=42% >\n\t<hr id=\"line15\" width=45% >\n\t<hr id=\"line16\" width=48% >\n    <hr id=\"line17\" width=51% >\n    <hr id=\"line18\" width=54% >\n\t<hr id=\"line19\" width=57% >\n\t<hr id=\"line20\" width=60% >\n    <hr id=\"line21\" width=63% >\n    <hr id=\"line22\" width=66% >\n\t<hr id=\"line23\" width=69% >\n\t<hr id=\"line24\" width=72% >\n    <hr id=\"line25\" width=75% >\n    <hr id=\"line26\" width=78% >\n\t<hr id=\"line27\" width=81% >\n\t<hr id=\"line28\" width=84% >\n    <hr id=\"line29\" width=87% >\n    <hr id=\"line30\" width=90% >\n\t<hr id=\"line31\" width=93% >\n\t<hr id=\"line32\" width=96% >\n    <hr id=\"line33\" width=99% >\n\t<hr id=\"line34\" width=96% >\n    <hr id=\"line35\" width=93% >\n    <hr id=\"line36\" width=90% >\n\t<hr id=\"line37\" width=87% >\n\t<hr id=\"line38\" width=84% >\n    <hr id=\"line39\" width=81% >\n    <hr id=\"line40\" width=78% >\n\t<hr id=\"line41\" width=75% >\n\t<hr id=\"line42\" width=72% >\n    <hr id=\"line43\" width=69% >\n    <hr id=\"line44\" width=66% >\n\t<hr id=\"line45\" width=63% >\n\t<hr id=\"line46\" width=60% >\n    <hr id=\"line47\" width=57% >\n    <hr id=\"line48\" width=54% >\n\t<hr id=\"line49\" width=51% >\n\t<hr id=\"line50\" width=48% >\n    <hr id=\"line51\" width=45% >\n    <hr id=\"line52\" width=42% >\n\t<hr id=\"line53\" width=39% >\n\t<hr id=\"line54\" width=36% >\n    <hr id=\"line55\" width=33% >\n    <hr id=\"line56\" width=30% >\n\t<hr id=\"line57\" width=27% >\n\t<hr id=\"line58\" width=24% >\n    <hr id=\"line59\" width=21% >\n    <hr id=\"line60\" width=18% >\n\t<hr id=\"line61\" width=15% >\n\t<hr id=\"line62\" width=12% >\n    <hr id=\"line63\" width=9% >\n    <hr id=\"line64\" width=6% >\n\t<hr id=\"line65\" width=3% >\n    <p class=\"text-left\">&copy; 2018 ISE Optimizations</p>\n    <button class=\"btn-success\" (click)=\"subscribe()\">Subscribe to our newsletter!</button><br/>\n    <hr/>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/****************************************FOOTER CSS********************************************/\nfooter {\n  max-width: 75%;\n  margin: 0 auto; }\n#footer-section {\n  margin: 0 auto;\n  position: relative;\n  z-index: 9;\n  border-top: solid 1px #d0d0ce; }\n#footer-top-links li {\n  background: #000000;\n  text-align: center; }\n#footer-top-links li a {\n  text-align: center;\n  line-height: 1em;\n  text-align: center;\n  color: #ffffff;\n  background: #000000; }\n#footer-top-links li a:visited {\n  color: #ffffff; }\n.homeBottomText {\n  display: block;\n  color: #000000;\n  clear: both;\n  margin: 0 auto 0 auto;\n  text-align: center;\n  width: 100%;\n  background: silver; }\n.homeBottomText a {\n  color: #000000; }\n.row {\n  width: 100%;\n  display: block;\n  margin: 0 auto 0 auto;\n  max-width: 63.75em;\n  padding: 0;\n  line-height: 1;\n  background: silver; }\nhr {\n  opacity: .35;\n  margin: 0 auto; }\n@media only screen and (min-width: 850px) {\n  hr {\n    height: 4px; } }\n@media only screen and (min-width: 600px) and (max-width: 850px) {\n  hr {\n    height: 3px; } }\n@media only screen and (min-width: 350px) and (max-width: 600px) {\n  hr {\n    height: 3px; } }\n@media only screen and (max-width: 350px) {\n  hr {\n    height: 2px; } }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_newsletter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/newsletter.service */ "./src/app/services/newsletter.service.ts");
/* harmony import */ var _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hidepanel.service */ "./src/app/services/hidepanel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(news, data) {
        this.news = news;
        this.data = data;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.news.subscribeVisibility.subscribe(function (subscribeVisibility) { return _this.subscribing = subscribeVisibility; });
        function init() {
            var time = 100;
            var colors = ['6BEAF0', '#4AB8F6', '#4AB8F6', '#4AB8F6', '#1275AD', '#6BEAF0', '#6BEAF0', '#6BEAF0', '#75C2D6', '#75C2D6', '#75C2D6', '#3AC0E4', '#6BEAF0', '#75C2D6', 'silver', 'silver'];
            for (var i = 1; i <= 65; i++) {
                var colorNum = Math.floor(Math.random() * (colors.length - 1));
                var element = document.getElementById('line' + i);
                //console.log(element.hasAttribute('color'));
                element.setAttribute('color', colors[colorNum]);
            }
            setTimeout(function () { init(); }, time);
        }
        if (window.addEventListener) {
            window.addEventListener('load', init, false);
        }
    };
    FooterComponent.prototype.subscribe = function () {
        this.subscribing = !this.subscribing;
        this.news.ShowSubscribeForm(this.subscribing);
        this.data.ShowHidePanel(false);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_newsletter_service__WEBPACK_IMPORTED_MODULE_1__["NewsletterService"], _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_2__["HidepanelService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/iobanner/iobanner.component.html":
/*!**************************************************!*\
  !*** ./src/app/iobanner/iobanner.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n  <nav id=\"topNav\">\n      <div id=\"navTopLogoLeft\">\n            <!--\n                <img src=\"../../assets/IO.svg\" onerror=\"this.onerror=null; this.src='../../assets/IO.png'\">\n            -->\n      </div>\n      <div ng-show=\"cp\" id=\"navTopSearch\">\n          <input id=\"navTopSearch\" placeholder=\"Search\"/>\n      </div>\n      <div id=\"navTopRight\">\n        <div id=\"btnMainMenu\" class=\"menu-btn\" (click)=\"UpdateVisibility()\">\n                <!-- \n                    <img src=\"../../assets/hamburger.svg\" onerror=\"this.onerror=null; this.src='../../assets/hamburger.png'\">\n                -->\n        </div>\n      </div>\n  </nav>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/iobanner/iobanner.component.scss":
/*!**************************************************!*\
  !*** ./src/app/iobanner/iobanner.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********************************************topNav elements********************************************************/\n#banner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100px;\n  width: 100%;\n  clear: both;\n  z-index: 5;\n  text-align: center;\n  margin: 0 auto 0 auto; }\n#topNav {\n  background: #ffffff;\n  width: 100%;\n  display: block;\n  box-shadow: none;\n  font-family: \"Graphik Black\",\"Arial Black\",Sans-Serif;\n  font-weight: normal;\n  font-size: 1.25em; }\n#navTopLogoLeft {\n  color: navy;\n  background: no-repeat url('IO.png');\n  background-size: contain; }\n#navTopSearch {\n  color: navy;\n  font-weight: 100;\n  font-size: 1.25em; }\n#navTopRight {\n  color: navy; }\n#navTopRight li {\n  margin-top: 8px; }\n#btnMainMenu {\n  color: navy;\n  background: no-repeat url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUAAABBeLxAeLxBd7xBeLxAeLw/dLk/d7tBd7s/b68/d7c/eLw/d7xBeLs/dbxBeLxCeb3///9yksucr9rK0+vy9ftRf8BchcRoi8fW3vCzweOGoNO+yufj6fV8mc+ouN+Rp9biExFJAAAAEHRSTlMAwNCg8OAwQIAQIHBgkFCwhZRvygAABNxJREFUeNrt3emS6ygMBlCBwRivcvbO0un3f8qZf9yqqclyW5FAxXmDr0SACBtDVVVVVVVVVVVVVVXEwh9aVcHmrjEW/8uYqSs8agzd4vEZ2wwBCtSPjcfX2WmOUJAwWXyfGVoowtw4/Ft+yj5k2zj8Hd/1kK04eKRgRshS3yAZ30XITTBIq+n15ksZM8unN2Nr8HOaCNJigx/lOpA1OPw0H0BOa5HDEkFIh0zcLFpAtWUckJULwCsa5DYBp+CQn41KR2jiWmDSoJQROESLchqhRULVstE6lGUjQ0DNEUeH8mz/wYCYBdcqDZi4D1WxxWzYyDDJaIqYAqqOGD3mpWHYqumK2GB+RoaOjLAWyMyYJReBSO8wTxaIWMzVBCQmzFcAAgEz5iLDUi9r0TpGk1npGE1cVDpGk4ZoM6N1Pu2xAB5+wWAJOoJpRu1k47EME0NvTVivtIRJo7WESf+JEh4u2x2T63bztIj0JdzuV063b/oi+ocF/Fq5namLOBIE5IwYabcz91XCN+nGpsUHjquIGz7gSVvA21XGibBBHB0+sFtlbPGBhXKp2K8yzoQLhsFHViE7fGQg/Of7leMoRU/44Np1lXHBh1q6Pv5llXHEhybC9swto4km8YRPV36vAvZHfKIlbED9CAQ8YfLL2TTicxfuNfF2wqcM6ZHv8bznzPdzwBdE4sOY04bLkfiYxmKpJoKfYd4MQ6dbGMN5k7Cg4DiGYkV0WK5G6USTWK0TTUKw7c5cS7CjyVsgmErLP/G26hNi0UxN+NZisWFzwlc5uoTH88povz3ga8gSbldm+w1Vwg5fcc6sH5y0BAlz7CYmgSThYb9KODMklO7qsyW8rjJ+GBIKn66xJVyF7NgS7lcZd7aEO/Wj9GeVcWJLeFxFfCFDQtFHhjYMCUXXizvSJJzxFYcd/zTD/O8JLzfepXCDXAmTzZbNz4mwJRxrJ6r8hB5LNtWe978aLNms9JA7CfX8kOO9Ufn3SbFgi/pnMTp4xaT+eZoZyxVB+VRj4TVewQNDWnc1I+kLwJfrfuVyO59IXwfu8bkTd6fmeqC8N8o+D7jn7yUeCG8emAgCSkQMdPd47rJs6ju6V/E3q4j94elaQTVMz6uMb7oro9oSz54c4Y0Rq5Ar4aUDXYEJW3hHX94o9fCeBR+45zjTDPCeOcfVgvayKF/Yit/QfofkKLJrI76gJrqidt6G/ELBI/dAvR+ebbqJiphszl9sU8zufsSHjIZbISlLmIpYCgOgvIgBQHcRDeW3ubRdP++V3pqYBK3XlyYL5m8g+2iA0s8HDFqnmcSUcOqreZxa+L1B6xhNTDnzqL7NmwEaoaC1XtmfjBbILDmf2pOINvcNt8ZV0TJ8HFDZ5wFHTJR+i3TUGjAZtAZMmpyeV9cdcQRQHdGN8EGD1t9gMioPKP/xcd/Cx7VOdifDoLcopYnAIi5iPQs2HQpwARgFh9xsD6yiYe/8shsc8vEBBPQGuUwRZAxOaQGTnmPd6CJICh4/y/QgbXBKB2gSO/epfCMk0hn15ksZleZL4uCRjpkhR/OCJFzTQ656gkKaMULW2uk3Ie3QQwHazuLfWFK8/MWx8fgOO81QnH6eDL7AL12IUKw+dI3x/1c40w0hggoxhLn7UwgBqqqqqqqqqqqqqmz8AzLJMWOJgY4mAAAAAElFTkSuQmCC\");\n  background-size: contain;\n  z-index: 7; }\n#navTopLogoLeft {\n  margin-left: 5px;\n  position: absolute;\n  height: 45px;\n  width: 108px; }\n#btnMainMenu {\n  height: 45px;\n  width: 45px; }\n#navTopSearch {\n  width: 175px;\n  height: 44px;\n  top: 11px;\n  text-align: center;\n  background-color: #000;\n  border-radius: 20px;\n  display: inline-block;\n  line-height: 10px; }\n#navTopRight {\n  position: absolute;\n  right: 5px;\n  top: 0px;\n  color: navy; }\n@media only screen and (min-width: 850px) {\n  #topNav {\n    padding: 10px;\n    height: 80px; }\n  /*   \n    #navTopLogoLeft{\n        margin-left: 5px; position: absolute; //z-index: 1;\n        height:45px; width:108px; text-align:center;\n    }\n    \n    #navTopSearch{\n        width:196px; height:44px; top:11px; text-align:center;\n        background-color: #000;  border-radius: 20px;  display: inline-block; line-height: 10px;\n    }\n    \n    #navTopRight{\n        position: absolute; right:100px; top: 20px; color:navy;\n    }\n*/\n  .nav > li > a {\n    position: relative;\n    display: block; }\n  #frontPageIntro {\n    height: 542px; } }\n"

/***/ }),

/***/ "./src/app/iobanner/iobanner.component.ts":
/*!************************************************!*\
  !*** ./src/app/iobanner/iobanner.component.ts ***!
  \************************************************/
/*! exports provided: IobannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IobannerComponent", function() { return IobannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hidepanel.service */ "./src/app/services/hidepanel.service.ts");
/* harmony import */ var _services_servicedetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicedetail.service */ "./src/app/services/servicedetail.service.ts");
/* harmony import */ var _services_newsletter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/newsletter.service */ "./src/app/services/newsletter.service.ts");
/* harmony import */ var _services_consult_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/consult.service */ "./src/app/services/consult.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { AdminService } from '../services/admin.service';
var IobannerComponent = /** @class */ (function () {
    function IobannerComponent(data, detail, consult, news) {
        this.data = data;
        this.detail = detail;
        this.consult = consult;
        this.news = news;
    }
    IobannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set current visibility of sidebar
        this.data.currentMessage.subscribe(function (visibility) { return _this.visibility = visibility; });
        //set current visibility of request Form
        this.consult.formVisibility.subscribe(function (formVisibility) { return _this.formVisibility = formVisibility; });
        //set current visibility of request Form
        this.news.subscribeVisibility.subscribe(function (subscribeVisibility) { return _this.subscribeVisibility = subscribeVisibility; });
        //set current visibility of request Form
        //this.admin.adminVisible.subscribe(adminVisible => this.adminVisibility = adminVisible)
    };
    IobannerComponent.prototype.UpdateVisibility = function () {
        this.visibility = this.visibility == true ? false : true;
        this.data.ShowHidePanel(this.visibility);
        this.formVisibility = false;
        this.subscribeVisibility = false;
        this.adminVisibility = false;
        //this.admin.ShowAdminPanel(this.adminVisibility);
        this.consult.ShowRequestForm(this.formVisibility);
        this.news.ShowSubscribeForm(this.subscribeVisibility);
        //console.log ('visiblity:'+this.visibility);
    };
    IobannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iobanner',
            template: __webpack_require__(/*! ./iobanner.component.html */ "./src/app/iobanner/iobanner.component.html"),
            styles: [__webpack_require__(/*! ./iobanner.component.scss */ "./src/app/iobanner/iobanner.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_hidepanel_service__WEBPACK_IMPORTED_MODULE_1__["HidepanelService"], _services_servicedetail_service__WEBPACK_IMPORTED_MODULE_2__["ServicedetailService"], _services_consult_service__WEBPACK_IMPORTED_MODULE_4__["ConsultService"], _services_newsletter_service__WEBPACK_IMPORTED_MODULE_3__["NewsletterService"]])
    ], IobannerComponent);
    return IobannerComponent;
}());



/***/ }),

/***/ "./src/app/ioservices/ioservices.component.html":
/*!******************************************************!*\
  !*** ./src/app/ioservices/ioservices.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"details\" *ngIf=\"this.detailVisibility\" class=\"alert alert-dismissible alert-info\">\n        <p *ngIf=\"serviceShowing.description\" class=\"text-left\">{{serviceShowing.description}}</p>\n\n<!--<ul>\n        <li *ngIf=\"serviceShowing.price\" class=\"servicePrice\">{{serviceShowing.price}}</li>\n        <li *ngIf=\"serviceShowing.description\"  class=\"serviceMaintin\">{{serviceShowing.description}}</li>\n        <li *ngIf=\"serviceShowing.schedule['minimum delivery']\" class=\"schedulePoint\">{{serviceShowing.schedule['minimum delivery']}}</li>     \n        <li *ngIf=\"serviceShowing.schedule['Review']\" class=\"schedulePoint\">{{serviceShowing.schedule['Review']}}</li>\n        <li *ngIf=\"serviceShowing.schedule['Implementation/Confirmation']\" class=\"schedulePoint\">{{serviceShowing.schedule['Test Development']}}</li>\n        <li *ngIf=\"serviceShowing.schedule['Implementation/Confirmation']\" class=\"schedulePoint\">{{serviceShowing.schedule['Implementation/Confirmation']}}</li>\n        <li *ngIf=\"serviceShowing.schedule['Planning/Issue Tracking']\" class=\"schedulePoint\">{{serviceShowing.schedule['Planning/Issue Tracking']}}</li>\n        <li *ngIf=\"serviceShowing.schedule['Research/Planning']\" class=\"schedulePoint\">{{serviceShowing.schedule['Research/Planning']}}</li>\n        <li *ngIf=\"serviceShowing.schedule['Design']\" class=\"schedulePoint\">{{serviceShowing.schedule['Design']}}</li>\n        <li *ngIf=\"serviceShowing.schedule['Development']\" class=\"schedulePoint\">{{serviceShowing.schedule['Development']}}</li>\n        <li *ngIf=\"serviceShowing.schedule['Test/Implementation']\" class=\"schedulePoint\">{{serviceShowing.schedule['Test/Implementation']}}</li>\n        <li *ngIf=\"serviceShowing.maintenance\" class=\"serviceMaintin\">{{serviceShowing.maintenance}}</li>\n        <li *ngIf=\"serviceShowing.serviceType\" class=\"serviceType\">{{serviceShowing.serviceType}}</li>\n    </ul>\n-->\n<button class=\"btn-success\" (click)=\"requestConsult()\">Connect with Us!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/ioservices/ioservices.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ioservices/ioservices.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#details {\n  padding: 15px 20px;\n  max-width: 544px;\n  margin: 0 auto; }\n\n.btn-success {\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/ioservices/ioservices.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ioservices/ioservices.component.ts ***!
  \****************************************************/
/*! exports provided: IoservicesComponent, IOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoservicesComponent", function() { return IoservicesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOService", function() { return IOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_servicedetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/servicedetail.service */ "./src/app/services/servicedetail.service.ts");
/* harmony import */ var _services_consult_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/consult.service */ "./src/app/services/consult.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IoservicesComponent = /** @class */ (function () {
    function IoservicesComponent(detail, consult) {
        this.detail = detail;
        this.consult = consult;
        this.requestingConsult = false;
    }
    IoservicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set current service for detail
        this.detail.currentService.subscribe(function (ioservice) { return _this.serviceShowing = ioservice; });
        //set current visibility of service detail
        this.detail.detailVisibility.subscribe(function (detailVisibility) { return _this.detailVisibility = detailVisibility; });
        //set current visibility of request Form
        this.consult.formVisibility.subscribe(function (formVisibility) { return _this.requestingConsult = formVisibility; });
    };
    IoservicesComponent.prototype.requestConsult = function () {
        this.requestingConsult = !this.requestingConsult;
        this.consult.ShowRequestForm(this.requestingConsult);
    };
    IoservicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ioservices',
            template: __webpack_require__(/*! ./ioservices.component.html */ "./src/app/ioservices/ioservices.component.html"),
            styles: [__webpack_require__(/*! ./ioservices.component.scss */ "./src/app/ioservices/ioservices.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_servicedetail_service__WEBPACK_IMPORTED_MODULE_1__["ServicedetailService"], _services_consult_service__WEBPACK_IMPORTED_MODULE_2__["ConsultService"]])
    ], IoservicesComponent);
    return IoservicesComponent;
}());

var IOService = /** @class */ (function () {
    function IOService() {
    }
    return IOService;
}());



/***/ }),

/***/ "./src/app/newsletter/newsletter.component.html":
/*!******************************************************!*\
  !*** ./src/app/newsletter/newsletter.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.subscribeVisibility\" class=\"requestModal text-center\">\n  <form>\n      <!-- Industry, Region, Position and ServiceType will be a select inputs-->\n      <table class=\"text-left\">\n          <tr>\n              <th colspan=\"2\"><p>Please provide your contact info.<br/>\n                                We'll keep you up-to-date on the latest<br/> \n                                in technology in industry</p></th>\n          </tr>\n          <tr>\n              <td><label>First Name</label></td><td><input placeholder=\"Johnathan\" value=\"Johnathan\" [(ngModel)]=\"subscriberInfo.firstName\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n          <tr>\n              <td><label>Last Name</label></td><td><input placeholder=\"Skeete\" value=\"Skeete\" [(ngModel)]=\"subscriberInfo.lastName\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n          <tr>\n              <td><label>Email</label></td><td><input placeholder=\"JSkeete@gmail.com\" value=\"JSkeete@gmail.com\" [(ngModel)]=\"subscriberInfo.email\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n          <tr>\n              <td><label>Cell #</label></td><td><input placeholder=\"9016203000\" value=\"9016203000\" [(ngModel)]=\"subscriberInfo.phone\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n          <tr>\n              <td><label>Company</label></td><td><input placeholder=\"IO\" value=\"IO\" [(ngModel)]=\"subscriberInfo.company\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n          <tr>\n              <td><label>Industry</label></td><td><input placeholder=\"IT Services\" value=\"IT Services\" [(ngModel)]=\"subscriberInfo.industry\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n          <tr>\n              <td><label>Dept. Function</label></td><td><input placeholder=\"Enterpries Architecture\" value=\"Enterpries Architecture\" [(ngModel)]=\"subscriberInfo.department\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n          <tr>\n              <td><label>Position</label></td><td><input placeholder=\"Lead\" value=\"Lead\" [(ngModel)]=\"subscriberInfo.position\" [ngModelOptions]=\"{standalone:\n                  true}\" type=\"text\" required/></td>\n          </tr>\n      </table>\n      <p>\n            <button class=\"btn-success\" (click)=\"confirmSubscription()\">Submit</button>&nbsp;&nbsp;<button class=\"btn-danger\" (click)=\"subscribe()\">Cancel</button>\n      </p>\n  </form>\n</div>\n<div *ngIf=\"this.confirmVisibility\" class=\"confirmModal text-center\">\n  <form>\n      <p>Please confirm submission<br/>\n      <table>\n          <tr>\n              <th colspan=\"2\"></th>\n          </tr>\n          <tr>\n              <td>First Name</td><td>{{subscriberInfo.firstName}}</td>\n          </tr>\n          <tr>\n              <td>Last Name</td><td>{{subscriberInfo.lastName}}</td>\n          </tr>\n          <tr>\n              <td>Email</td><td>{{subscriberInfo.email}}</td>\n          </tr>\n          <tr>\n              <td>Office #</td><td>{{subscriberInfo.phone}}</td>\n          </tr>\n          <tr>\n              <td>Company</td><td>{{subscriberInfo.company}}</td>\n          </tr>\n          <tr>\n              <td>Industry</td><td>{{subscriberInfo.industry}}</td>\n          </tr>\n          <tr>\n              <td>Dept. Function</td><td>{{subscriberInfo.department}}</td>\n          </tr>\n          <tr>\n              <td>Position</td><td>{{subscriberInfo.position}}</td>\n          </tr>\n      </table>\n      <p>\n            <button class=\"btn-success\" (click)=\"submitSubscription()\">Confirm</button>&nbsp;&nbsp;<button class=\"btn-danger\" (click)=\"confirmSubscription()\">Cancel</button>\n      </p>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/newsletter/newsletter.component.scss":
/*!******************************************************!*\
  !*** ./src/app/newsletter/newsletter.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newsletter/newsletter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newsletter/newsletter.component.ts ***!
  \****************************************************/
/*! exports provided: NewsletterComponent, subScriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subScriber", function() { return subScriber; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_newsletter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/newsletter.service */ "./src/app/services/newsletter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsletterComponent = /** @class */ (function () {
    function NewsletterComponent(news) {
        this.news = news;
        this.subscribeVisibility = false;
        this.confirmVisibility = false;
        this.subscriberInfo = new subScriber;
        this.subscriptionState = false;
    }
    NewsletterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set current state of subscription submission
        this.news.subscribeVisibility.subscribe(function (subscribeVisibility) { return _this.subscribeVisibility = subscribeVisibility; });
        //set current state of subscription submission
        //this.news.subscriptionState.subscribe(subscriptionState => this.subscriptionState = subscriptionState)
        //this.subscriberInfo = {"firstName":"", "lastName": "", "email": "", "phone": "", "serviceType": "", "company": "", "industry": "", "region": "", "department": "", "position": "", "clientAccounts": 0, "employees": 0, "requestDate": Date.now(), "consultDate": Date.now(), "closedStatus": 0};
        this.subscriberInfo = { "firstName": "Johnathan", "lastName": "Skeete", "email": "JSkeete@gmail.com", "phone": "9016203000", "company": "IO", "industry": "IT Services", "department": "Sales", "position": "Lead", "subscribeDate": Date.now(), };
    };
    NewsletterComponent.prototype.subscribe = function () {
        this.subscribeVisibility = !this.subscribeVisibility;
        this.news.ShowSubscribeForm(this.subscribeVisibility);
    };
    NewsletterComponent.prototype.confirmSubscription = function () {
        this.confirmVisibility = !this.confirmVisibility;
        //console.log('confirm visibility is '+this.confirmVisibility);
        //console.log(this.subscriberInfo);
    };
    NewsletterComponent.prototype.submitSubscription = function () {
        this.news.CompleteSubscription(this.subscriberInfo);
        this.confirmVisibility = !this.confirmVisibility;
        this.subscribeVisibility = false;
        this.news.ShowSubscribeForm(this.subscribeVisibility);
    };
    NewsletterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsletter',
            template: __webpack_require__(/*! ./newsletter.component.html */ "./src/app/newsletter/newsletter.component.html"),
            styles: [__webpack_require__(/*! ./newsletter.component.scss */ "./src/app/newsletter/newsletter.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_newsletter_service__WEBPACK_IMPORTED_MODULE_1__["NewsletterService"]])
    ], NewsletterComponent);
    return NewsletterComponent;
}());

var subScriber = /** @class */ (function () {
    function subScriber() {
    }
    return subScriber;
}());



/***/ }),

/***/ "./src/app/service-line.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/service-line.pipe.ts ***!
  \**************************************/
/*! exports provided: ServiceLinePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLinePipe", function() { return ServiceLinePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServiceLinePipe = /** @class */ (function () {
    function ServiceLinePipe() {
    }
    ServiceLinePipe.prototype.transform = function (serviceList, filter) {
        if (!serviceList || !filter) {
            return serviceList;
        }
        return serviceList.filter(function (item) { return item.serviceType.indexOf(filter) !== -1; });
    };
    ServiceLinePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'myfilter'
        })
    ], ServiceLinePipe);
    return ServiceLinePipe;
}());



/***/ }),

/***/ "./src/app/service-list/service-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/service-list/service-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{serviceLine}}</h1>\n<div class=\"listBox\">\n        <span *ngFor=\"let service of list | myfilter:serviceLine\" class=\"textLeft\">\n                <h5 (click)=\"ShowService(service); UpdateVisibility(); ShowDetail();\" routerLink=\"/services/\">{{service.name}}</h5>\n        </span>\n</div>"

/***/ }),

/***/ "./src/app/service-list/service-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/service-list/service-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listBox {\n  border-left: navy solid 3px;\n  padding-left: 20px;\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/service-list/service-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/service-list/service-list.component.ts ***!
  \********************************************************/
/*! exports provided: ServiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListComponent", function() { return ServiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_servicelist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/servicelist.service */ "./src/app/services/servicelist.service.ts");
/* harmony import */ var _services_servicedetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicedetail.service */ "./src/app/services/servicedetail.service.ts");
/* harmony import */ var _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/hidepanel.service */ "./src/app/services/hidepanel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceListComponent = /** @class */ (function () {
    function ServiceListComponent(info, detail, data) {
        this.info = info;
        this.detail = detail;
        this.data = data;
    }
    ServiceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set current service line
        this.info.currentLine.subscribe(function (line) { return _this.serviceLine = line; });
        //import service list from API
        //this.info.loadServiceLines()
        //subscribe to current service list
        this.info.loadServiceLines().subscribe(function (res) { return _this.list = res; });
        //set current service for detail
        this.detail.currentService.subscribe(function (ioservice) { return _this.serviceShowing = ioservice; });
        //set current visibility of service detail
        this.detail.detailVisibility.subscribe(function (detailVisibility) { return _this.detailVisibility = detailVisibility; });
    };
    ServiceListComponent.prototype.ShowService = function (ioservice) {
        this.serviceShowing = ioservice;
        this.detail.ShowService(this.serviceShowing);
        //console.log(this.serviceShowing);
        console.log(this.list);
    };
    ServiceListComponent.prototype.UpdateVisibility = function () {
        this.data.ShowHidePanel(false);
    };
    ServiceListComponent.prototype.ShowDetail = function () {
        this.detailVisibility = true;
        this.detail.ShowDetail(this.detailVisibility);
        //console.log('detail visible = '+this.detailVisibility);
    };
    ServiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-list',
            template: __webpack_require__(/*! ./service-list.component.html */ "./src/app/service-list/service-list.component.html"),
            styles: [__webpack_require__(/*! ./service-list.component.scss */ "./src/app/service-list/service-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_servicelist_service__WEBPACK_IMPORTED_MODULE_1__["ServicelistService"], _services_servicedetail_service__WEBPACK_IMPORTED_MODULE_2__["ServicedetailService"], _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_3__["HidepanelService"]])
    ], ServiceListComponent);
    return ServiceListComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ioservices_ioservices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ioservices/ioservices.component */ "./src/app/ioservices/ioservices.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminService = /** @class */ (function () {
    function AdminService(_http) {
        this._http = _http;
        this.visibility = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.adminVisible = this.visibility.asObservable();
        this.loginSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.loginState = this.loginSuccess.asObservable();
        this.confirmService = false;
        this.updateSuccess = false;
        this.serviceInfo = _ioservices_ioservices_component__WEBPACK_IMPORTED_MODULE_1__["IOService"];
    }
    AdminService.prototype.Login = function (formValues) {
        var _this = this;
        console.log(formValues.userName + ' : ' + formValues.password); // { first: '', last: '' }
        //console.log(formValues.valid);  // false
        //let headers = new Headers();
        //headers.append('Content-Type','application/json');
        //return this._http.post("/admin/", formValues, {headers: headers})
        this._http.post("/admin/", formValues)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.loginSuccess.next(res.json()); })).toPromise();
    };
    AdminService.prototype.ShowAdminPanel = function (visibility) {
        this.visibility.next(visibility);
        console.log('showing admin');
    };
    AdminService.prototype.UpdateServices = function (serviceInfo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.put("/ioservices/+serviceInfo" + serviceInfo._id, serviceInfo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        /*
          return this._http.put("/ioservices/"+serviceInfo._id, serviceInfo)
          .pipe(map(res => this.updateSuccess = res.json().data)).toPromise();
          */
    };
    AdminService.prototype.CreateService = function (formValues) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post("/ioservices/", formValues, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        /*
        return this._http.post("/ioservices/", formValues)
        .pipe(map(res => this.updateSuccess = res.json().data)).toPromise();
        */
    };
    AdminService.prototype.deleteService = function (id) {
        return this._http.delete("/ioservices/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/consult.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/consult.service.ts ***!
  \*********************************************/
/*! exports provided: ConsultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultService", function() { return ConsultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsultService = /** @class */ (function () {
    function ConsultService(_http) {
        this._http = _http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.requestForm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.submissionState = this.messageSource.asObservable();
        this.formVisibility = this.requestForm.asObservable();
    }
    ConsultService.prototype.ShowRequestForm = function (formVisibility) {
        this.requestForm.next(formVisibility);
        console.log('request form is' + this.requestForm);
    };
    ConsultService.prototype.CompleteSubmission = function (consultInfo) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post("/consultations/", consultInfo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.messageSource = res.json().data; })).toPromise();
    };
    ConsultService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ConsultService);
    return ConsultService;
}());



/***/ }),

/***/ "./src/app/services/hidepanel.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/hidepanel.service.ts ***!
  \***********************************************/
/*! exports provided: HidepanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HidepanelService", function() { return HidepanelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HidepanelService = /** @class */ (function () {
    function HidepanelService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentMessage = this.messageSource.asObservable();
    }
    HidepanelService.prototype.ShowHidePanel = function (visibility) {
        this.messageSource.next(visibility);
    };
    HidepanelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HidepanelService);
    return HidepanelService;
}());



/***/ }),

/***/ "./src/app/services/newsletter.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/newsletter.service.ts ***!
  \************************************************/
/*! exports provided: NewsletterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterService", function() { return NewsletterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsletterService = /** @class */ (function () {
    /*private success = new BehaviorSubject<boolean>(false);
    subscriptionState = this.success.asObservable();
    */
    function NewsletterService(_http) {
        this._http = _http;
        this.newsForm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.subscribeVisibility = this.newsForm.asObservable();
    }
    NewsletterService.prototype.ShowSubscribeForm = function (subscribeVisibility) {
        this.newsForm.next(subscribeVisibility);
        console.log('subscribe visibilty is ' + subscribeVisibility);
    };
    NewsletterService.prototype.CompleteSubscription = function (subscriberInfo) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post("/subscribers/", subscriberInfo, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.newsForm = res.json().data; })).toPromise();
    };
    NewsletterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], NewsletterService);
    return NewsletterService;
}());



/***/ }),

/***/ "./src/app/services/servicedetail.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/servicedetail.service.ts ***!
  \***************************************************/
/*! exports provided: ServicedetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicedetailService", function() { return ServicedetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicedetailService = /** @class */ (function () {
    function ServicedetailService() {
        this.detailSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ "id": 0, "name": "blank", "price": "0", "schedule": { "empty": "none" }, "description": "blank", "maintenance": "blank", "serviceType": 'blank' });
        this.currentService = this.messageSource.asObservable();
        this.detailVisibility = this.detailSource.asObservable();
    }
    ServicedetailService.prototype.ShowService = function (ioservice) {
        this.messageSource.next(ioservice);
    };
    ServicedetailService.prototype.ShowDetail = function (detailVisibility) {
        this.detailSource.next(detailVisibility);
    };
    ServicedetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ServicedetailService);
    return ServicedetailService;
}());



/***/ }),

/***/ "./src/app/services/servicelist.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/servicelist.service.ts ***!
  \*************************************************/
/*! exports provided: ServicelistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicelistService", function() { return ServicelistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import * as io from 'socket.io';




var ServicelistService = /** @class */ (function () {
    //private listSource = new BehaviorSubject<string>('serviceLine');
    //currentList = this.listSource.asObservable();
    function ServicelistService(_http) {
        this._http = _http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Your Business and Tech Advisors');
        this.currentLine = this.messageSource.asObservable();
        this.listSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentList = this.listSource.asObservable();
    }
    ServicelistService.prototype.ShowServiceLine = function (line) {
        this.messageSource.next(line);
    };
    ServicelistService.prototype.loadServiceLines = function () {
        return this._http.get("/api/serviceList")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ServicelistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ServicelistService);
    return ServicelistService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cp\" *ngIf=\"this.visibility\" class=\"text-center\">\n      <ul>\n        <li (click)=\"ShowServiceLine('Consulting Services')\"><div>Consulting</div></li>\n        <li (click)=\"ShowServiceLine('Digital Services')\"><div>Digital</div></li>\n        <li (click)=\"ShowServiceLine('Technology Services')\"><div>Technology</div></li>\n        <li (click)=\"ShowServiceLine('Operations Support')\"><div>Operations</div></li>\n        <li><div>Industries</div></li>\n        <li><div>Careers</div></li>\n      </ul>\n  <hr style=\"background-color:white; height:5px;\">\n  <ul>\n    <li><div>About ISE Optimizations</div></li>\n    <li><div>Corporate Citizenship</div></li>\n    <li><div>Inclusion and Diversity</div></li>\n    <li><div>Inverstor Relations</div></li>\n    <li><div>NewsRoom</div></li>\n    <li (click)=\"ShowAdminPanel()\"><div>Admin</div></li>\n</ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********************************Control Panel CSS****************************************/\n#cp {\n  font-family: \"OpenSans\";\n  z-index: 2;\n  background: #3f4c92;\n  color: #ffffff;\n  cursor: pointer;\n  text-align: center; }\n#cp li {\n  display: block; }\nul div {\n  margin: 5px auto 0 auto;\n  border-bottom: 1px solid #9eabf8; }\nhr {\n  background-color: #9eabf8;\n  height: 2px; }\n@media only screen and (min-width: 600px) {\n  /*********************************Control Panel CSS****************************************/\n  #cp {\n    position: fixed;\n    right: 0;\n    top: 115px;\n    width: 190px; }\n  li {\n    margin: 15px auto 0 auto; }\n  .cpBottom {\n    font-size: 1em; } }\n@media only screen and (max-width: 600px) {\n  #cp {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hidepanel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hidepanel.service */ "./src/app/services/hidepanel.service.ts");
/* harmony import */ var _services_servicelist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/servicelist.service */ "./src/app/services/servicelist.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(data, info, admin) {
        this.data = data;
        this.info = info;
        this.admin = admin;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (visibility) { return _this.visibility = visibility; });
        this.info.currentLine.subscribe(function (line) { return _this.serviceLine = line; });
        this.admin.adminVisible.subscribe(function (line) { return _this.adminVisibility = line; });
    };
    SidebarComponent.prototype.ShowServiceLine = function (line) {
        this.serviceLine = line;
        this.info.ShowServiceLine(this.serviceLine);
        //console.log (this.serviceLine+'showing');
    };
    SidebarComponent.prototype.ShowAdminPanel = function () {
        this.adminVisibility = !this.adminVisibility;
        this.admin.ShowAdminPanel(this.adminVisibility);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_hidepanel_service__WEBPACK_IMPORTED_MODULE_1__["HidepanelService"], _services_servicelist_service__WEBPACK_IMPORTED_MODULE_2__["ServicelistService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Public/angularTutorial/IO/mean/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map