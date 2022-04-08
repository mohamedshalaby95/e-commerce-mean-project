import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = ['assets/images/1.avif', 'assets/images/3.avif'];
  constructor() {}

  ngOnInit(): void {}
}
