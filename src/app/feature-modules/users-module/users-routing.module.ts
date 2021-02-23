import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { UsersComponent } from './users.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: UsersComponent, children: [
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
