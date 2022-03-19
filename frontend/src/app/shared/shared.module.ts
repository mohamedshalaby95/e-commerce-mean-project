import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[HttpClientModule,ReactiveFormsModule]
})
export class SharedModule { }
