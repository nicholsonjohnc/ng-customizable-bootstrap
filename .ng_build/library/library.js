import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class CardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngcb-card',
                template: `
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
CardComponent.ctorParameters = () => [];

class CardModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { CardModule, CardComponent as ɵa };
//# sourceMappingURL=library.js.map
