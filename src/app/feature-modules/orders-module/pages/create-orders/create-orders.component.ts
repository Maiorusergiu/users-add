import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from 'src/app/feature-modules/users-module/models/User.model';
import { UserService } from 'src/app/feature-modules/users-module/services/user.service';
import { Order } from '../../models/order.model';
import { Product } from '../../../products-module/models/Product.model';;
import { products } from '../../products/Products';
import { ProductsService } from '../../../products-module/services/products.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
 users: User[] = [];

 products: Product[] = products;


  dataForm: Order;


  constructor(
    private userService: UserService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
this.userService.getUsers().subscribe(users => {
this.users = users;
})
  }

  onSubmit(dataForm: NgForm) {
    this.dataForm = {
      idOrder: 0,
      user: '',
      nameProduct: '',
      priceProduct: 0,
      quantity: 0,
      payMethod: '',
      totalPrice: 0
    }
    dataForm.reset();
  }


}
