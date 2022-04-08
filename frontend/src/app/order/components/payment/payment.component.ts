import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { CartService } from 'src/app/cart/services/cart.service';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  private routeSub: Subscription;
  id: string;
  constructor(
    private cartService: CartService,
    private orderDervices: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    setTimeout(() => {
      render({
        id: '#paypal-button',
        currency: 'USD',
        value: `${this.cartService.getTotalPrice()}`,
        onApprove: () => {
          alert('The transaction successful');
          this.orderDervices
            .updatePaymentOrder({ id: this.id, payment: 'true' })
            .subscribe((res) => {
              if (!res) {
                alert('someting go wrongt');
              } else {
                this.cartService.removeAllCart();
                this.router.navigate(['']);
              }
            });
        },
      });
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  payCash() {
    this.orderDervices
      .updatePaymentOrder({ id: this.id, payment: 'cash' })
      .subscribe((res) => {
        if (!res) {
          alert('someting go wrongt');
        } else {
          this.cartService.removeAllCart();
          this.router.navigate(['']);
        }
      });
  }
}
