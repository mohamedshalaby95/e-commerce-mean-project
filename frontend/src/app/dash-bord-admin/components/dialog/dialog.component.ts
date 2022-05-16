import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AdminServicesService } from '../../services/admin-services.service';
import { Iproduct } from 'src/app/products/models/product';
import { UploadImageService } from '../../services/upload-image.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers:[UploadImageService ]
})
export class DialogComponent implements OnInit {
  response: any;
  productForm: FormGroup;
  actionBtn: string = 'Save';
  hiddenUploadLabel:boolean=false
  imgFile: string;
  imageUrl:any
  showImage:boolean=false



  uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    imgSrc: new FormControl('', [Validators.required])
  });
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    private adminService: AdminServicesService,
    private uplodeImageservice:UploadImageService,
    @Inject(MAT_DIALOG_DATA) public updateProduct: Iproduct
  ) {
    this.productForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z\s\.]*$/),
        ],
      ],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: ['Category', [Validators.required]],
      brand: ['', [Validators.required, Validators.minLength(2)]],
      image: [
        '',
        [
          Validators.required,
          Validators.pattern(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i),
        ],
      ],
      price: ['', [Validators.required]],
      countInStock: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.updateProduct) {

      this.showImage=true
      this.productForm.get('name').setValue(this.updateProduct.name);
      this.productForm.get('brand').setValue(this.updateProduct.brand);
      this.productForm.get('price').setValue(this.updateProduct.price);
      this.productForm
        .get('countInStock')
        .setValue(this.updateProduct.countInStock);
      this.productForm.get('category').setValue(this.updateProduct.category);
       this.imageUrl=this.updateProduct.image
      this.productForm
        .get('description')
        .setValue(this.updateProduct.description);
        console.log(this.updateProduct.image)

      this.actionBtn = 'Update';
    }
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get category() {
    return this.productForm.get('category');
  }
  get brand() {
    return this.productForm.get('brand');
  }

  get image() {
    return this.productForm.get('image');
  }
  get price() {
    return this.productForm.get('price');
  }
  get countInStock() {
    return this.productForm.get('countInStock');
  }
  get uf(){
    return this.uploadForm.controls;
  }
  changeStatusUploadLabel(){
    this.hiddenUploadLabel=true
    if(this.productForm.get('image').value){

    }
  }

  onImageChange(e:any) {
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          imgSrc: reader.result
        });

      };
    }
  }
  upload(saveData:any){


    const data=new FormData()
    data.append('file',this.uploadForm.value.imgSrc)
    data.append('upload_preset','ecommerce-website')
    data.append('cloud_name','dsvj1cj17')

    this.uplodeImageservice.uploadeImage(data).subscribe(({url}:any)=>{


      this.imageUrl=url

      this.showImage=true
      saveData(url)
    },(err)=>{
      console.log(err)
      alert(`something go wrong ${err.message}`)
    })

}


  submitForm() {


    const { name, description, price, countInStock, brand, category } =
      this.productForm.value;



    if (this.actionBtn === 'Save') {
      this.upload((imgUrl:string)=>{
         const image=imgUrl
        this.adminService
          .addProduct({
            name,
            description,
            price,
            countInStock,
            brand,
            category,
            image
          })
          .subscribe(
            () => {
              this.productForm.reset();
              this.dialogRef.close(true);
            },
            (err) => {
              alert(JSON.stringify(err.error.message));
            }
          );
      })
    } else {
      if(this.productForm.get('image').touched===true){
     



          const data=new FormData()
          data.append('file',this.uploadForm.value.imgSrc)
          data.append('upload_preset','ecommerce-website')
          data.append('cloud_name','dsvj1cj17')

          this.uplodeImageservice.uploadeImage(data).subscribe(({url}:any)=>{

            const { name, description, price, countInStock, brand, category } =
            this.productForm.value;
            this.adminService
            this.imageUrl=url
            const image=url
            this.showImage=true
            this.adminService
            .updateProduct({ name, description, price, countInStock, brand, category,image }, this.updateProduct._id)
            .subscribe(
              () => {
                this.productForm.reset();
                alert('update successful');
                this.dialogRef.close(true);
              },
              (err) => {
                alert(JSON.stringify(' failed in update'));
              }
            );

          },(err)=>{
            alert(`something go wrong`)
          })
      }
      else{
        console.log("here dont touched")
        const { name, description, price, countInStock, brand, category } =
        this.productForm.value;
          const image=  this.updateProduct.image

        this.adminService
          .updateProduct( { name, description, price, countInStock, brand, category,image }, this.updateProduct._id)
          .subscribe(
            () => {
              this.productForm.reset();
              alert('update successful');
              this.dialogRef.close(true);
            },
            (err) => {
              alert(JSON.stringify(' failed in update'));
            }
          );
      }
    }
      }

  close() {
    this.dialogRef.close(true);
  }
}
