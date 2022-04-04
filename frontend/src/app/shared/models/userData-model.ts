 export interface Iuser {
   _id:string,
   firstName:string,
   lastName:string,
   email:string,
   shippingAddress:{
    mobile:string,
    city:string,
    address:string,
    country:string,
    postCode:string,
   }

 }

 export interface IinformationDetails{
  shippingAddress:{
    mobile:string,
    city:string,
    address:string,
    country:string,
    postCode:string,
   }

 }
