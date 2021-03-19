import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';
import { EditOrdersComponent } from './pages/edit-orders/edit-orders.component';


const routes: Routes = [
  {path: '', component: OrdersComponent, children: [
    {path: 'createOrders', component: CreateOrdersComponent},
    {path: 'listOrders', component: ListOrdersComponent},
    {path: 'editOrders/:id', component: EditOrdersComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
