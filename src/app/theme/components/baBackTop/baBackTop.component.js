"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BaBackTop = (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    return BaBackTop;
}());
__decorate([
    core_1.Input()
], BaBackTop.prototype, "position", void 0);
__decorate([
    core_1.Input()
], BaBackTop.prototype, "showSpeed", void 0);
__decorate([
    core_1.Input()
], BaBackTop.prototype, "moveSpeed", void 0);
__decorate([
    core_1.ViewChild('baBackTop')
], BaBackTop.prototype, "_selector", void 0);
__decorate([
    core_1.HostListener('click')
], BaBackTop.prototype, "_onClick", null);
__decorate([
    core_1.HostListener('window:scroll')
], BaBackTop.prototype, "_onWindowScroll", null);
BaBackTop = __decorate([
    core_1.Component({
        selector: 'ba-back-top',
        styleUrls: ['./baBackTop.scss'],
        template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
    })
], BaBackTop);
exports.BaBackTop = BaBackTop;
