import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,


  ],
  exports:[HttpClientModule,ReactiveFormsModule, MatToolbarModule,MatIconModule,MatButtonModule]
})
export class SharedModule { }
