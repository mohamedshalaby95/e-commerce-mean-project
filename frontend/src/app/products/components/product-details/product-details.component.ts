import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../models/product';
import { ProductsService } from '../../seriveces/products.service';
import { environment } from '../../../../environments/environment';
import { CartService } from 'src/app/cart/services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  productsDetails: Products;
  imagePrefix: string = environment.imagePrefix;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private cartService: CartService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params?.['id'];

    this._ProductsService.getProductsDetails(this.id).subscribe((res) => {
      this.productsDetails = res;
    });
  }
  addToCart() {
    this.cartService.addToCart(this.productsDetails);
    this.router.navigate(['/cart'])
  }
}
