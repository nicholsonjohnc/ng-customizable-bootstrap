import { Component } from '@angular/core';
export class CardComponent {
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
function CardComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardComponent.ctorParameters;
}
//# sourceMappingURL=card.component.js.map