import { Router } from '@angular/router';
import { IcartProducts } from './../../../cart/models/product';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public addToCart: IcartProducts,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {}
  close() {
    this.dialogRef.close(true);
  }

  updateCartItem() {
    console.log(this.addToCart);
    // this.router.navigate([''])
    this.cartServices.updateQuanity(this.addToCart);
    this.dialogRef.close(true);
  }
}
