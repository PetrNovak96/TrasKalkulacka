import { Component } from '@angular/core';
import { GatewayService } from './services/gateway.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app_center">
      <div style="height: 50%;">
        <leva-strana style="float: left;"></leva-strana>
        <prava-strana style="float: left;">
          <input type="button" class="btn btn-info" value="Kontaktujte mě" [disabled]="zobrazFormular" (click)="this.zobrazFormular = !this.zobrazFormular">
        </prava-strana>
      </div>
      <div style="height: 50%;">
        <kontaktni-formular *ngIf="this.zobrazFormular"></kontaktni-formular>
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
