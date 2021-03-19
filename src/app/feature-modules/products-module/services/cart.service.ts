import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product.model';

import { formatCurrency } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
products: Product[];
product: Product;
cart = [];
  constructor(
    private http: HttpClient
  ) { }

 addToCart(product: Product[]) {
    this.cart.push(product);
    localStorage.setItem('products', JSON.stringify(this.cart));
  }
  getProducts() {
    return this.cart;
  }

  remove() {
   
  }


}
