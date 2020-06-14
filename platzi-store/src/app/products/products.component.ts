import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
