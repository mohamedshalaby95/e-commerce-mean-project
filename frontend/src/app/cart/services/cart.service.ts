
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IcartProducts, IProducts } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  quantity: number = 1;
  products: IcartProducts[];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    this.productList.next(JSON.parse(localStorage.getItem('cart')));

    return this.productList.asObservable();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    JSON.parse(localStorage?.getItem('cart'))?.map((product: IcartProducts) => {
      grandTotal += product.price * product.quantity;
    });
    console.log(grandTotal);
    return grandTotal;
  }

  removeCartItem(product: IcartProducts) {
    const products = JSON.parse(localStorage.getItem('cart')).filter(
      (el: IcartProducts) => {
        return product._id !== el._id;
      }
    );
    localStorage.setItem('cart', JSON.stringify(products));
    this.productList.next(products);
  }
  removeAllCart() {
    localStorage.removeItem('cart');
    this.productList.next([]);
  }

  addToCart(product: IProducts) {
    if (localStorage.getItem('cart')) {
      this.products = JSON.parse(localStorage.getItem('cart'));

      this.products.push({ ...product, quantity: this.quantity });

      localStorage.setItem('cart', JSON.stringify(this.products));

      this.productList.next(JSON.parse(localStorage.getItem('cart')));
      this.getTotalPrice();
    } else {
      this.products = [];
      this.products.push({ ...product, quantity: this.quantity });
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
  }

  updateQuanity(product: IProducts) {
    const products = JSON.parse(localStorage.getItem('cart'));

    const updateCartProducts = products?.map((cartProduct: IcartProducts) => {
      return product._id == cartProduct._id
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : { ...cartProduct };
    });

    localStorage.setItem('cart', JSON.stringify(updateCartProducts));
  }
}
