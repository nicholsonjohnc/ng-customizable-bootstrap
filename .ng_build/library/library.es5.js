import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [CardComponent],
                exports: [CardComponent]
            },] },
];
/**
 * @nocollapse
 */
CardModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { CardModule, CardComponent as ɵa };
//# sourceMappingURL=library.es5.js.map
