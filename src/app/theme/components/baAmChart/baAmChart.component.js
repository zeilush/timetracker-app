"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../../theme/services");
require("amcharts3");
require("amcharts3/amcharts/plugins/responsive/responsive.js");
require("amcharts3/amcharts/serial.js");
require("ammap3");
require("ammap3/ammap/maps/js/worldLow");
var baAmChartTheme_service_1 = require("./baAmChartTheme.service");
var BaAmChart = (function () {
    function BaAmChart(_baAmChartThemeService) {
        this._baAmChartThemeService = _baAmChartThemeService;
        this.onChartReady = new core_1.EventEmitter();
        this._loadChartsLib();
    }
    BaAmChart.prototype.ngOnInit = function () {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
    };
    BaAmChart.prototype.ngAfterViewInit = function () {
        var chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    };
    BaAmChart.prototype._loadChartsLib = function () {
        services_1.BaThemePreloader.registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    };
    return BaAmChart;
}());
__decorate([
    core_1.Input()
], BaAmChart.prototype, "baAmChartConfiguration", void 0);
__decorate([
    core_1.Input()
], BaAmChart.prototype, "baAmChartClass", void 0);
__decorate([
    core_1.Output()
], BaAmChart.prototype, "onChartReady", void 0);
__decorate([
    core_1.ViewChild('baAmChart')
], BaAmChart.prototype, "_selector", void 0);
BaAmChart = __decorate([
    core_1.Component({
        selector: 'ba-am-chart',
        templateUrl: './baAmChart.html',
        styleUrls: ['./baAmChart.scss'],
        providers: [baAmChartTheme_service_1.BaAmChartThemeService],
    })
], BaAmChart);
exports.BaAmChart = BaAmChart;
