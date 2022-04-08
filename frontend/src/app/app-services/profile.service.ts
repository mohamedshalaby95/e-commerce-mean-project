import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {  IprofileOrder } from '../order/models/orderData';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private httpClient:HttpClient) {
  }
  getAllOrders(){

    return this.httpClient.get<[IprofileOrder]>(environment.baseUrl + '/order' );
   }
}
