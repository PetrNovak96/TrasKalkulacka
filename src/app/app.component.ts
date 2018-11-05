import { Component } from '@angular/core';
import { GatewayService } from './services/gateway.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public interestRate: number = 0;
  public ukaz: boolean = false;

  constructor(public gateway: GatewayService) {

    this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
      this.interestRate = data.interestRate;
    });
  }

  nejakaFunkce(){
    this.ukaz = !this.ukaz;
  }



}
