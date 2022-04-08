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
   getAllOrders(){

    return this.httpClient.get<any>(environment.baseUrl + '/order/admin' );
   }
   deleteOrder(id:string){

    return this.httpClient.delete<any>(`${environment.baseUrl}/order/${id}` );
   }
   getAllOrdersPending(){

    return this.httpClient.get<any>(environment.baseUrl + '/order/admin/pending' );
   }
   updateStatusOrder(data:{status:string,id:string}){

    return this.httpClient.patch<{status:string,id:string}>(environment.baseUrl + '/order/admin',data );
   }
}
