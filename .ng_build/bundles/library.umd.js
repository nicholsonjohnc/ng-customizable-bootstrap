(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.library = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var CardComponent = (function () {
    function CardComponent() {
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());
CardComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngcb-card',
                template: "\n    <div class=\"card\" style=\"width: 20rem;\">\n      <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n      </div>\n    </div>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
CardComponent.ctorParameters = function () { return []; };
var CardModule = (function () {
    function CardModule() {
    }
    return CardModule;
}());
CardModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [CardComponent],
                exports: [CardComponent]
            },] },
];
/**
 * @nocollapse
 */
CardModule.ctorParameters = function () { return []; };

exports.CardModule = CardModule;
exports.ɵa = CardComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=library.umd.js.map
