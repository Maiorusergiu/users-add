import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { UsersComponent } from './users.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';







@NgModule({
  declarations: [CreateComponent, EditComponent, ListComponent, UsersComponent, HomeComponent,],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule { }
