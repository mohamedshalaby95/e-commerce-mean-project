import { AdminServicesService } from './../../services/admin-services.service';
import { Iproduct } from './../../../products/models/product';

import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = [
    'createdAt',
    'isDeliverd',
    'isPayment',
    'taxPrice',
    'totalPrice',
    'status',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminServicesService) {}

  ngOnInit(): void {
    this.getOrder();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (filterValue) {
      this.dataSource.paginator.firstPage();
    }
  }
  getOrder() {
    this.adminService.getAllOrders().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource<Iproduct>(res);

        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          // this.dataSource.sort =res.sort;
        });

        this.dataSource.paginator = res.paginator;
      },
      error: (err) => {
        alert(' something go wrong');
      },
    });
  }
  deleteOrder(id: string) {
    this.adminService.deleteOrder(id).subscribe(
      (res) => {
        alert('this product was delete');
        this.getOrder();
      },
      (err) => {
        console.log(err);
        alert(' something get wrong when delete');
      }
    );
  }
}
