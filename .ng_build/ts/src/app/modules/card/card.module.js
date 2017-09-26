import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
export class CardModule {
}
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
CardModule.ctorParameters = () => [];
function CardModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CardModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardModule.ctorParameters;
}
//# sourceMappingURL=card.module.js.map