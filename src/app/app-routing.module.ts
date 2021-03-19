import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './helpers/auth.guard';


const appRoutes : Routes = [
  
  {
    path: 'user',
    loadChildren: './feature-modules/users-module/users.module#UsersModule'
  },
  {
    path: 'orders',
    loadChildren: './feature-modules/orders-module/orders.module#OrdersModule'
  },
  {
    path: 'products',
    loadChildren: './feature-modules/products-module/products.module#ProductsModule', canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: '/user/home', pathMatch: 'full'
  }
  
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
