import { Iuser } from './../../shared/user.type';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/app-services/profile.service';
import { Iorder } from 'src/app/order/models/orderData';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  orders:any
  dataUser:any
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.dataUser=JSON.parse(localStorage.getItem('dataUser'))
    this.getOrders()
  }

  getNameUser(){
    return this.dataUser?.firstName
  }
  getEmail(){
    return this.dataUser?.email
  }
 getOrders(){
this.profileService.getAllOrders().subscribe((res)=>{
this.orders=res;
console.log(this.orders)
},(err)=>{
  alert('some thing go wrong')
})
 }

}
