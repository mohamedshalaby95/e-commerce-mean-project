import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
   name:string
  //  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
   informationUserDate:FormGroup
  constructor(private fd:FormBuilder) {
    this.informationUserDate=this.fd.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.pattern(/^[A-Za-z]+$/)]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.pattern(/^[A-Za-z]+$/)]],
      email:['',[Validators.required,Validators.email,Validators.pattern( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      shippingAdress:this.fd.group({
         city:['',[Validators.required,Validators.minLength(3),Validators.pattern(/^[A-Za-z]+$/)]],
         country:['',[Validators.required,Validators.minLength(3),Validators.pattern(/^[A-Za-z]+$/)]],
         address:['',[Validators.required,Validators.minLength(3)]],
         mobile:['',[Validators.required,Validators.pattern(/^[(11)||(12)||(10)][0-9]{9}$/)]],
         postCode:['',[Validators.required,Validators.pattern(/[0-9]{5}$/)]],


       })

    })
   }

  ngOnInit(): void {
    this.name=JSON.parse(localStorage.getItem('dataUser'))?.firstName
  }
  get firstName(){

    return this.informationUserDate.get('firstName')
  }

  get lastName(){
    // console.log(this.informationUserDate.get('lastName'))
   return this.informationUserDate.get('lastName')
 }

 get email(){


   return this.informationUserDate.get('email')
 }

 get  mobile(){

  return this.informationUserDate.get("shippingAdress").get("mobile")
}
get address(){

 return this.informationUserDate.get("shippingAdress").get("address")
}
get country(){

  return this.informationUserDate.get("shippingAdress").get("country")
 }
 get city(){

  return this.informationUserDate.get("shippingAdress").get("city")
 }

 get postCode(){

  return this.informationUserDate.get("shippingAdress").get("postCode")
 }
 submitForm(){

 }

}
