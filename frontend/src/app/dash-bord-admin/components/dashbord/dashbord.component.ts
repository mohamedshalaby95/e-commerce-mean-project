import { Router } from '@angular/router';

import {ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit,OnChanges {

 flag: boolean=true;


  constructor(private router:Router) {

   }

  ngOnInit(): void {
this.flag=true;
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
ngAfterContentChecked(): void {
  console.log(this.router.url)
  if(this.router.url !=='/admin'){
        this.flag=false;
  }
  else{
    this.flag=true;
  }


}



}
