import { Component, OnInit } from '@angular/core';

import { Product } from './../product.model';

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
      img: '../assets/images/camiseta.png',
      price: 8000,
      description: 'blablablalba'
    },
    {
      id: '2',
      title: 'Hoodie',
      img: '../assets/images/hoodie.png',
      price: 8000,
      description: 'blablablalba'
    },
    {
      id: '3',
      title: 'Mug',
      img: '../assets/images/mug.png',
      price: 8000,
      description: 'blablablalba'
    },
    {
      id: '4',
      title: 'Pin',
      img: '../assets/images/pin.png',
      price: 8000,
      description: 'bllkjlkjokj'
    },
    {
      id: '5',
      title: 'Stickers',
      img: '../assets/images/stickers1.png',
      price: 8000,
      description: 'bllkjlkjokj'
    },
    {
      id: '6',
      title: 'Stickers',
      img: '../assets/images/stickers2.png',
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
