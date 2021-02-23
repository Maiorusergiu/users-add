
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { fakeBackendProvider } from './FakeBackend/FakeBackend';

import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './feature-modules/users-module/users.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    SharedModule
    
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
