export interface IProducts {
  brand?: string;
  category?: string;
  countInStock?: number;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  rating?: number;
  _id?:any;

}

export interface IcartProducts {
  brand?: string;
  category?: string;
  countInStock?: number;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  rating?: number;
  _id?:any;
  quantity:number;

}
