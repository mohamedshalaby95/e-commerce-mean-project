import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AdminServicesService } from '../../services/admin-services.service';
import { Iproduct } from 'src/app/products/models/product';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  response: any;
  productForm: FormGroup;
  actionBtn: string = 'Save';

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    private adminService: AdminServicesService,
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
      this.productForm.get('name').setValue(this.updateProduct.name);
      this.productForm.get('brand').setValue(this.updateProduct.brand);
      this.productForm.get('price').setValue(this.updateProduct.price);
      this.productForm
        .get('countInStock')
        .setValue(this.updateProduct.countInStock);
      this.productForm.get('category').setValue(this.updateProduct.category);
      this.productForm
        .get('description')
        .setValue(this.updateProduct.description);
      this.productForm.get('image').setValue(this.updateProduct.image);
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

  submitForm() {
    let image = this.productForm.get('image').value.substring(12);

    const { name, description, price, countInStock, brand, category } =
      this.productForm.value;

    if (this.actionBtn === 'Save') {
      this.adminService
        .addProduct({
          name,
          description,
          price,
          countInStock,
          brand,
          category,
          image,
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
    } else {
      this.adminService
        .updateProduct(this.productForm.value, this.updateProduct._id)
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
  close() {
    this.dialogRef.close(true);
  }
}
