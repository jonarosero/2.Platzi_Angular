import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  power = 10;

  items = ['juan', 'nicolas', 'yo'];

  products: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      img: 'https://images.unsplash.com/photo-1577212017308-55c4d60d2609?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      price: 8000,
      description: 'blablablalba'
    },
    {
      id: '2',
      title: 'Hoodie',
      img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      price: 8000,
      description: 'blablablalba'
    },
    {
      id: '3',
      title: 'Mug',
      img: 'https://images.unsplash.com/photo-1481973946307-512988dde8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      price: 8000,
      description: 'blablablalba'
    },
    {
      id: '4',
      title: 'Pin',
      img: 'https://images.unsplash.com/photo-1569803237283-4af155d9e52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      price: 8000,
      description: 'bllkjlkjokj'
    },
    {
      id: '5',
      title: 'Stickers',
      img: 'https://images.unsplash.com/photo-1573434490486-3cab65054136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      price: 8000,
      description: 'bllkjlkjokj'
    },
    {
      id: '6',
      title: 'Console',
      img: 'https://images.unsplash.com/photo-1545958090-5a8a3589718a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      price: 8000,
      description: 'bllkjlkjokj'
    },

  ];

  addItem() {
    this.items.push(this.title);
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }
}
