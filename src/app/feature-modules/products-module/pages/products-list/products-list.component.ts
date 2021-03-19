import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/feature-modules/users-module/models/User.model';
import { Product } from '../../models/Product.model';



import { UserService } from 'src/app/feature-modules/users-module/services/user.service';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
user: User;
id: number;
products: Product[];

  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private productsService: ProductsService,
    private cartService: CartService
  ) { 
    this.user = this.userService.userValue;
  }

  ngOnInit(): void {

    //  this.products = this.productsService.getProducts();
     this.products = this.productsService.getProducts()
   
  }
  addToCart(product: Product[]) {
    this.cartService.addToCart(product);
    console.log(product);
  }
  

}
