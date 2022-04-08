import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IcartProducts } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number;
  imagePrefix: string = 'assets/images/';
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = JSON.parse(localStorage.getItem('cart'))?.length | 0;
      this.cartService.getTotalPrice();
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: IcartProducts) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  increaseQuantity(item: IcartProducts) {
    const updatedItem = this.products.map((el: IcartProducts) => {
      return item._id == el._id
        ? { ...el, quantity: el.quantity + 1 }
        : { ...el };
    });
    localStorage.setItem('cart', JSON.stringify(updatedItem));
    this.products = updatedItem;
    this.grandTotal = this.cartService.getTotalPrice();
  }

  decriseQuantity(item: IcartProducts) {
    const updatedItem = this.products.map((el: any) => {
      return item._id == el._id
        ? { ...el, quantity: el.quantity - 1 }
        : { ...el };
    });
    localStorage.setItem('cart', JSON.stringify(updatedItem));
    this.products = updatedItem;
    this.grandTotal = this.cartService.getTotalPrice();
  }
  goShopping() {
    this.router.navigate(['/products']);
  }
  goCheckOut() {
    this.router.navigate(['/order/checkout']);
  }
}
