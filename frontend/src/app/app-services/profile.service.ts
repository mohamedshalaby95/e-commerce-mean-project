import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private httpClient:HttpClient) {
  }
  getAllOrders(){

    return this.httpClient.get<any>(environment.baseUrl + '/order' );
   }
}
