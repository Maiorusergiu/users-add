import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../shared/shared.module';
import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';
import { EditOrdersComponent } from './pages/edit-orders/edit-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';



@NgModule({
  declarations: [CreateOrdersComponent, ListOrdersComponent, EditOrdersComponent, OrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule

  ]
})
export class OrdersModule { }
