"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var base_component_1 = require('../common/base.component');
var models_1 = require('../dal/models');
var services_1 = require('../services/services');
var utitlity_1 = require('../services/utitlity');
var LangBarComponent = (function (_super) {
    __extends(LangBarComponent, _super);
    function LangBarComponent(injector, cacheManager) {
        _super.call(this, injector);
        this.injector = injector;
        this.cacheManager = cacheManager;
        this.isLangBarOpen = false;
    }
    LangBarComponent.prototype.toggleLangBarState = function () {
        console.log('toggleLangBarState');
        this.isLangBarOpen = !this.isLangBarOpen;
    };
    Object.defineProperty(LangBarComponent.prototype, "isEng", {
        get: function () { return utitlity_1.utilty.IsEnglishMode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangBarComponent.prototype, "isHeb", {
        get: function () { return utitlity_1.utilty.IsHebrewMode; },
        enumerable: true,
        configurable: true
    });
    LangBarComponent.prototype.toEng = function () {
        this.cacheManager.StoreInCache("lang", models_1.Language.English);
        document.location.reload();
    };
    LangBarComponent.prototype.toHeb = function () {
        this.cacheManager.StoreInCache("lang", models_1.Language.Hebrew);
        document.location.reload();
    };
    LangBarComponent = __decorate([
        core_1.Component({
            selector: 'lang-bar',
            moduleId: module.id, templateUrl: './lang-bar.component.html',
            styleUrls: ['./lang-bar.component.css'],
            animations: [
                core_1.trigger('isLangBarOpen', [
                    core_1.state('true', core_1.style({ transform: 'translateX(0)' })),
                    core_1.state('false', core_1.style({ transform: utitlity_1.utilty.IsHebrewMode ? 'translateX(-35px)' : 'translateX(35px)' })),
                    core_1.transition('0<=>1', [core_1.animate('500ms ease-out')])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Injector, services_1.CacheManager])
    ], LangBarComponent);
    return LangBarComponent;
}(base_component_1.BaseComponent));
exports.LangBarComponent = LangBarComponent;
//# sourceMappingURL=lang-bar.component.js.map