import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../seriveces/products.service';
import { Products } from '../../models/product';
import { CartService } from 'src/app/cart/services/cart.service';
import { IcartProducts } from 'src/app/cart/models/product';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  cartItems: IcartProducts[] = [];
  myRate: number = 5;

  p: number = 1 || undefined;
  numPages: number;
  brand: any;
  selectedCategory: string = '';

  imagePrefix: string = 'assets/images/';
  constructor(
    private router: Router,
    private _products: ProductsService,
    private cartService: CartService,
    private dialog: MatDialog
  ) {
    // this.currentRate=6;
  }

  ngOnInit(): void {
    this._products.getProducts().subscribe((data) => {
      this.products = data;
      this.numPages = Math.ceil(this.products.length / 6) * 10;
    });
  }
  search() {
    if (this.brand == '') {
      this.ngOnInit();
    } else {
      this.products = this.products.filter((res) => {
        this.numPages = Math.ceil(this.products.length / 6) * 10;
        return res.brand
          ?.toLocaleLowerCase()
          .match(this.brand.toLocaleLowerCase());
      });
    }
  }

  selectChangeHandler(event: any) {
    console.log(event.target.value);

    if (event.target.value === 'Choose By Category') {
      this.ngOnInit();
    } else {
      this._products
        .getProductBYCategory(event.target.value)
        .subscribe((data) => {
          this.products = data;

          this.numPages = Math.ceil(this.products.length / 6) * 10;
        });
    }
  }

  get Rating() {
    return this.products[5].rating;
  }

  addToCart(product: Products) {
    if (localStorage.getItem('cart')) {
      this.cartService.getProducts().subscribe((res) => {
        this.cartItems = res;
      });
      const flag = this.cartItems.some((cartProduct) => {
        return product._id === cartProduct._id;
      });

      if (flag) {
        this.dialog
          .open(ConfirmComponent, {
            data: product,
            width: '30%',
          })
          .afterClosed()
          .subscribe((result) => {
            if (result == !true) {
              return true;
            } else {
              return false;
            }
          });
      } else {
        this.cartService.addToCart(product);
      }
    } else {
      
      this.cartService.addToCart(product);
    }
  }
}
