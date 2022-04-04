export
interface IorderItems {
  quantity:number,name:string,price:number,_id:string,image:string
  // orderitems:{ quantity:number,name:string,price:number,_id:string},
  // shippingPrice:number,
  // totalPrice:number


}

export
interface Iorder {
  // quantity:number,name:string,price:number,_id:string,image:string
  orderitems:any,
  shippingPrice:number,
  totalPrice:number


}
