import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})


export class ProductDetailsComponent implements OnInit {
  id: any;
  productsDetails: Products;
  imagePrefix:string = 'assets/images/'

  constructor(private _activatedRoute: ActivatedRoute,private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params?.['id'];
    this._ProductsService.getProductsDetails(this.id).subscribe((res)=>{
      this.productsDetails = res
      console.log(res)
    })
  }

}
