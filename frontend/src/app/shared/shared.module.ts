import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

// import {mat-dialog-actions} from '@angular/material/dialog'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule


  ],
  exports:[
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     NgxPaginationModule,
     MatTableModule,
     MatFormFieldModule,
     MatSortModule,
     MatInputModule
    ]
})
export class SharedModule { }
