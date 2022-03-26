import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../seriveces/products.service';
import { Products } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Products [] = [];
  myRate:number=5
  // currentRate = "product?.rating";
  p: number = 1 || undefined;
  numPages:number


  imagePrefix:string = 'assets/images/'
  constructor(private router:Router,private _products:ProductsService) {

    // this.currentRate=6;

   }

  ngOnInit(): void {
    this._products.getProducts().subscribe((data)=>{
      this.products = data
      this.numPages=Math.ceil(this.products.length/6)*10

    })


  }

  get Rating()
  {
    return this.products[5].rating;
  }




}
