import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  getProducts(): Observable<Products[]>{
    return this._http.get<Products[]>(`${environment.baseUrl}/products`)
  }

  getProductsDetails(id:string): Observable<Products>{
    return this._http.get<Products>(`${environment.baseUrl}/products/product/${id}`)
  }
  getProductBYCategory(category:string): Observable<Products[]>{
    return this._http.get<Products[]>(`${environment.baseUrl}/products/${category}`)
  }

}
