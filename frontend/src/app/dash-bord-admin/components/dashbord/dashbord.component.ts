import { Router } from '@angular/router';

import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

 flag: boolean=true;


  constructor(private router:Router) {

   }

  ngOnInit(): void {
this.flag=true;
  }

ngAfterContentChecked(): void {

  if(this.router.url !=='/admin'){
        this.flag=false;
  }
  else{
    this.flag=true;
  }


}



}
