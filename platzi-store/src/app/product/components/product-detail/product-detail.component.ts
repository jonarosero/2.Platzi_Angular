import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {this.product = product;
    });
  }

  createProduct(){
    const newProduct: Product = {
      id: '5',
      title: 'title',
      image: 'assets/images/camiseta.png',
      description: 'blalbkasdokfoiajsd',
      price: 20
    };
    this.productsService.createProduct(newProduct)
    .subscribe();
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      title: 'edición',
      description: 'quien come trigo si tiene un trigal',
      price: 1020
    };
    this.productsService.updateProduct('5', updateProduct)
    .subscribe();
  }

  deleteProduct(){
    this.productsService.deleteProduct('5')
    .subscribe();
  }

}
