import { Component, Injectable } from '@angular/core';
import { GatewayService } from './services/gateway.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app_center">
      <h1 *ngIf="!jeMobil">Je desktop</h1>
      <h1 *ngIf="jeMobil">Je mobil</h1>
      <div style="height: 50%;">
        <leva-strana style="float: left;"></leva-strana>
        <prava-strana style="float: left;">
          <input type="button" value="Kontaktujte mě" [disabled]="zobrazFormular" (click)="this.zobrazFormular = !this.zobrazFormular">
        </prava-strana>
      </div>
      <div style="height: 50%;">
        <kontaktni-formular *ngIf="this.zobrazFormular"></kontaktni-formular>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {

  public interestRate: number = 0;
  public zobrazFormular: boolean = false;
  public jeMobil: boolean;

  constructor(public gateway: GatewayService) {

    this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
      this.interestRate = data.interestRate;
    });
    if (window.innerWidth < 768) {
      this.jeMobil = true;
    } else {
      this.jeMobil = false;
    }
  }
}
