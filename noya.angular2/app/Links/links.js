"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var base_component_1 = require("../common/base.component");
var services = require("../services/services");
var dal = require("../dal/models");
var Links = (function (_super) {
    __extends(Links, _super);
    function Links(dataService, router, injector) {
        var _this = _super.call(this, injector) || this;
        _this.dataService = dataService;
        _this.router = router;
        _this.injector = injector;
        return _this;
    }
    Links.prototype.ngOnInit = function () {
        var _this = this;
        var request = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(request, 'api/Data/GetLinks').subscribe(function (res) { _this.links = res.Links; }, function (error) { console.error('error in Links in ngOnInit: ' + error.ErrorText); });
    };
    return Links;
}(base_component_1.BaseComponent));
Links = __decorate([
    core_1.Component({
        templateUrl: "./links.html",
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [services.DataService, router_1.Router, core_1.Injector])
], Links);
exports.Links = Links;
//# sourceMappingURL=links.js.map