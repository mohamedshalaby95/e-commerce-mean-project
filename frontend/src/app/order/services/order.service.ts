import { IinformationDetails } from './../../shared/models/userData-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Iorder } from '../models/orderData';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  postInformationDetails(data: IinformationDetails) {
    return this.httpClient.patch(`${environment.baseUrl}/user`, data);
  }

  addOrder(data: Iorder) {
    return this.httpClient.post(`${environment.baseUrl}/order`, data);
  }
  updatePaymentOrder(data: { id: string; payment: string }) {
    return this.httpClient.patch(`${environment.baseUrl}/order/payment`, data);
  }
}
