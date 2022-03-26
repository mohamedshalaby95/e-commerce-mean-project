import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct} from '../../products/models/product'
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor( private httpClient:HttpClient) {

   }

   addProduct(product:Iproduct){

    return this.httpClient.post<Iproduct>(environment.baseUrl + '/products', product );
   }
   getAllProduct(){

    return this.httpClient.get<any>(environment.baseUrl + '/products' );
   }
   updateProduct(payLoad:Iproduct,id:string){

    return this.httpClient.patch<Iproduct>(`${environment.baseUrl}/products/${id}`,payLoad );
   }
   deleteProduct(id:string){

    return this.httpClient.delete<Iproduct>(`${environment.baseUrl}/products/${id}` );
   }
}
