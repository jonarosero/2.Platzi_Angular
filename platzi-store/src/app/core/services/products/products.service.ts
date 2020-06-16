import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
