import { Router } from '@angular/router';

import { OrderService } from './../../services/order.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../../shared/models/userData-model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  name: string;

  informationUserDate: FormGroup;
  dataUser: Iuser;
  constructor(
    private fd: FormBuilder,
    private orderCheck: OrderService,
    private router: Router
  ) {
    this.informationUserDate = this.fd.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      shippingAddress: this.fd.group({
        city: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/^[A-Za-z]+$/),
          ],
        ],
        country: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/^[A-Za-z]+$/),
          ],
        ],
        address: ['', [Validators.required, Validators.minLength(3)]],
        mobile: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[(11)||(12)||(10)][0-9]{9}$/),
          ],
        ],
        postCode: ['', [Validators.required, Validators.pattern(/[0-9]{5}$/)]],
      }),
    });
  }

  ngOnInit(): void {
    this.dataUser = JSON.parse(localStorage.getItem('dataUser'));

    this.informationUserDate.patchValue({
      firstName: this.dataUser?.firstName,
      email: this.dataUser?.email,
      lastName: this.dataUser?.lastName,
    });

    this.informationUserDate.get('shippingAddress').patchValue({
      city: this.dataUser?.shippingAddress?.city || '',
      country: this.dataUser?.shippingAddress?.country || '',
      address: this.dataUser?.shippingAddress?.address || '',
      postCode: this.dataUser?.shippingAddress?.postCode || '',
      mobile: this.dataUser?.shippingAddress?.mobile || '',
    });
  }
  get firstName() {
    return this.informationUserDate.get('firstName');
  }

  get lastName() {
    return this.informationUserDate.get('lastName');
  }

  get email() {
    return this.informationUserDate.get('email');
  }

  get mobile() {
    return this.informationUserDate.get('shippingAddress').get('mobile');
  }
  get address() {
    return this.informationUserDate.get('shippingAddress').get('address');
  }
  get country() {
    return this.informationUserDate.get('shippingAddress').get('country');
  }
  get city() {
    return this.informationUserDate.get('shippingAddress').get('city');
  }

  get postCode() {
    return this.informationUserDate.get('shippingAddress').get('postCode');
  }
  submitForm() {
    if (
      this.informationUserDate.get('shippingAddress').get('postCode').dirty ||
      this.informationUserDate.get('shippingAddress').get('city').dirty ||
      this.informationUserDate.get('shippingAddress').get('mobile').dirty ||
      this.informationUserDate.get('shippingAddress').get('country').dirty ||
      this.informationUserDate.get('shippingAddress').get('address').dirty
    ) {
      this.orderCheck
        .postInformationDetails(this.informationUserDate.value)
        .subscribe(
          (res) => {
            const { firstName, lastName, isAdmin, email, shippingAddress } =
              res as any;
            localStorage.setItem(
              'dataUser',
              JSON.stringify({
                firstName,
                lastName,
                isAdmin,
                email,
                shippingAddress,
              })
            );
          },
          (err) => {
            alert('something go wrong');
          }
        );
    } else {
   
    }
    this.router.navigate(['order/purchase']);
  }
}
