export
interface IorderItems {
  quantity:number,name:string,price:number,_id:string,image:string
  // orderitems:{ quantity:number,name:string,price:number,_id:string},
  // shippingPrice:number,
  // totalPrice:number


}

export
interface Iorder {

  orderitems:any,
  shippingPrice:number,
  totalPrice:number


}

export interface IprofileOrder{
  createdAt:string,
  isDeliverd:boolean;
  isPayment:string;
  orderitems:any;
  shippingPrice:number;
  status:string;
  taxPrice:number;
  totalPrice:number;
  updatedAt:string;
  user:string
  _id:string
}
