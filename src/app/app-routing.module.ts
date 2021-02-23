import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes : Routes = [
  {
    path: 'user',
    loadChildren: './feature-modules/users-module/users.module#UsersModule'
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
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
