import { OrderService } from './../../services/order.service';
import { Iuser } from './../../../shared/user.type';
import { CartService } from 'src/app/cart/services/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IcartProducts } from '../../../cart/models/product';
import { environment } from '../../../../environments/environment';
import { Iorder, IorderItems } from '../../models/orderData';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  products: [IcartProducts];
  imagepath: string = environment.imagePrefix;
  subPrice: number;
  userData: any;
  cartItems: [IcartProducts];
  orderData: [];
  orderItems: IorderItems[] = [];
  tax: number = 0;
  order: Iorder;
  discount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
    this.subPrice = this.cartService.getTotalPrice();
    this.userData = JSON.parse(localStorage.getItem('dataUser'));
    this.cartItems = JSON.parse(localStorage.getItem('cart'));

    this.cartItems.map((el: IcartProducts) => {
      const { name, quantity, price, image, _id } = el;

      this.orderItems.push({ name, quantity, price, image, _id });
    });
  }
  GoCheckOut() {
    this.router.navigate(['order/checkout']);
  }
  addOrder() {
    this.order = {
      orderitems: this.orderItems,
      shippingPrice: this.subPrice,
      totalPrice: this.subPrice + this.tax - this.discount,
    };

    this.orderService.addOrder(this.order).subscribe(
      (res) => {
        this.router.navigate([`order/payment/${res}`]);
      },
      (err) => {
        this.router.navigate(['fail']);
      }
    );
  }
}
