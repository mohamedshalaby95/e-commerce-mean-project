import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../product';

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


  imagePrefix:string = 'assets/images/'
  constructor(private router:Router,private _products:ProductsService) {

    // this.currentRate=6;
   
   }

  ngOnInit(): void {
    this._products.getProducts().subscribe((data)=>{
      this.products = data
    })
    
  }

  get Rating()
  {
    return this.products[5].rating;
  }

  
  

}
