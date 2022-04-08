import { IprofileOrder } from './../../order/models/orderData';
import { Iuser } from './../../shared/models/userData-model';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/app-services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  orders: [IprofileOrder];
  dataUser: Iuser;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.dataUser = JSON.parse(localStorage.getItem('dataUser'));

    this.getOrders();
  }

  getNameUser() {
    return this.dataUser.firstName;
  }
  getEmail() {
    return this.dataUser?.email;
  }
  getOrders() {
    this.profileService.getAllOrders().subscribe(
      (res) => {
        this.orders = res;
        console.log(this.orders);
      },
      (err) => {
        alert('some thing go wrong');
      }
    );
  }
}
