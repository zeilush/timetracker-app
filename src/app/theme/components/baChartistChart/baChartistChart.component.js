"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chartist = require("chartist");
var BaChartistChart = (function () {
    function BaChartistChart() {
        this.onChartReady = new core_1.EventEmitter();
    }
    BaChartistChart.prototype.ngAfterViewInit = function () {
        this.chart = new Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
        this.onChartReady.emit(this.chart);
    };
    BaChartistChart.prototype.ngOnChanges = function (changes) {
        if (this.chart) {
            this.chart.update(this.baChartistChartData, this.baChartistChartOptions);
        }
    };
    BaChartistChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    return BaChartistChart;
}());
__decorate([
    core_1.Input()
], BaChartistChart.prototype, "baChartistChartType", void 0);
__decorate([
    core_1.Input()
], BaChartistChart.prototype, "baChartistChartData", void 0);
__decorate([
    core_1.Input()
], BaChartistChart.prototype, "baChartistChartOptions", void 0);
__decorate([
    core_1.Input()
], BaChartistChart.prototype, "baChartistChartResponsive", void 0);
__decorate([
    core_1.Input()
], BaChartistChart.prototype, "baChartistChartClass", void 0);
__decorate([
    core_1.Output()
], BaChartistChart.prototype, "onChartReady", void 0);
__decorate([
    core_1.ViewChild('baChartistChart')
], BaChartistChart.prototype, "_selector", void 0);
BaChartistChart = __decorate([
    core_1.Component({
        selector: 'ba-chartist-chart',
        templateUrl: './baChartistChart.html',
        providers: [],
    })
], BaChartistChart);
exports.BaChartistChart = BaChartistChart;
