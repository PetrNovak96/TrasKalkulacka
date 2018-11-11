import { Component } from '@angular/core';
import { GatewayService } from './services/gateway.service';

@Component({
  selector: 'app-root',
  template: `
    
    <div class="container">
      col-sm-3 col-md-6 col-lg-4
      <div class="row">
        <div class="col-md-1">
         </div>
        <div class="col-md-5">
          <leva-strana style="float: left;"></leva-strana>
        </div>
        <div class="col-md-5" style="background-color: #0B5499">
          <prava-strana>
            <input type="button" class="btn btn-success btn-lg" value="Kontaktujte mě" [disabled]="zobrazFormular" (click)="this.zobrazFormular = !this.zobrazFormular">
          </prava-strana>
        </div>
        <div class="col-md-1">
          </div>
        </div>
      
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-10">
          <kontaktni-formular *ngIf="this.zobrazFormular"></kontaktni-formular>
        </div>
        <div class="col-md-1">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public interestRate: number = 0;
  public zobrazFormular: boolean = false;

  constructor(public gateway: GatewayService) {

    this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
      this.interestRate = data.interestRate;
    });
  }
}
