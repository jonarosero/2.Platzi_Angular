import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',

})

export class ProductComponent  implements OnChanges{

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    ngOnChanges(){
        console.log('onchanges');
    }
    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
