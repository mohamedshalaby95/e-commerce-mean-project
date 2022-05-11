import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private httpClient:HttpClient) { }

  uploadeImage(val:any){
    const data=val
  return this.httpClient.post(
    'https://api.cloudinary.com/v1_1/dsvj1cj17/image/upload',
    data
  )
  }
}
