import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timestamp } from 'rxjs/operators';
import { Product } from '../../models/Product.model';
import { User } from 'src/app/feature-modules/users-module/models/User.model';
import { UserService } from 'src/app/feature-modules/users-module/services/user.service';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products: Product[];
  user: User;
  product: Product;
  totalPrice = 0;
  id: number;
  


  constructor(
    private cartService: CartService,
    private userService: UserService,
    private productsService: ProductsService
  ) {
    this.user = this.userService.userValue;
  }

  ngOnInit(): void {
   this.products = this.cartService.getProducts();
   
    this.total();
    
}
remove(id: number){
this.products = this.products.filter(x => x.idProduct !== id);
localStorage.setItem('products', JSON.stringify(this.products));

}

total() {
  this.products.forEach(product => {
    this.totalPrice += product.priceProduct;
  })
}
}
