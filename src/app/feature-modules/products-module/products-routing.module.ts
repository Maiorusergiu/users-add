import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  {path: '', component: ProductsComponent, children: [
  {path: 'products', component: ProductsComponent},
  {path: 'productsList', component: ProductsListComponent},
  {path: 'cart', component: CartComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
