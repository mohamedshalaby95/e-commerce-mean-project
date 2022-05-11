import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { LoaderService } from 'src/app/app-services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit,OnChanges {
  loader:boolean=this.loaderService.isLoading.value
  constructor(private spinner: NgxSpinnerService,public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.spinner.show();
    // // setTimeout(() => {
    // //   /** spinner ends after 5 seconds */
    // //   this.spinner.hide();
    // // }, 5000);
    // setTimeout(() => {
    // this.loader=false
    // }, 2000);
    console.log("loader",this.loaderService.isLoading.value)
  }
  ngOnChanges(loader: SimpleChanges): void {
    console.log("loader change"+this.loaderService.isLoading)
      if(loader){
        this.spinner.show();
      }
      else{
        this.spinner.hide()
      }
  }
}
