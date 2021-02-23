import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  BrowserAnimationsModule]
})
export class SharedModule { }
