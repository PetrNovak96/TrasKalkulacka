import { Component } from '@angular/core';
import { GatewayService } from './services/gateway.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <div class="row">
      <div class="col-md-2">
       </div>
      <div class="col-md-4">
        <leva-strana style="float: left;"></leva-strana>
      </div>
      <div class="col-md-4">
        <prava-strana style="float: left;">
          <input type="button" class="btn btn-success" value="Kontaktujte mě" [disabled]="zobrazFormular" (click)="this.zobrazFormular = !this.zobrazFormular">
        </prava-strana>
      </div>
      <div class="col-md-2">
        </div>
      </div>
    
    <div class="row">
      <div class="col-md-2">
      </div>
      <div class="col-md-8">
        <kontaktni-formular *ngIf="this.zobrazFormular"></kontaktni-formular>
      </div>
      <div class="col-md-2">
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
