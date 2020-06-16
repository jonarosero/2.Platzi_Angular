import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, OnInit} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],

})

export class ProductComponent  implements OnChanges, OnInit{

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    today = new Date();
    ngOnChanges(changes: SimpleChanges){
        console.log('onchanges');
        console.log(changes);
    }
    ngOnInit() {
        console.log('ONINIT');
    }
    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
