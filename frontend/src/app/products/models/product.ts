export interface Products {
  brand?: string;
  category?: string;
  countInStock?: number;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  rating?: number;
  _id?:any
}

export interface Iproduct {
  brand: string;
  category: string;
  countInStock: number;
  description: string;
  image: string;
  name: string;
  price: number;
  rating?: number;
  numReviews?:number
  _id?:string

}
