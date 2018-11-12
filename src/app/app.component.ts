import { Component, Injectable } from '@angular/core';
import { GatewayService } from './services/gateway.service';
import { ModAplikaceService } from './mod-aplikace-service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <table align="center">
        <tr>
          <td width="50%" style="text-align: center"><leva-strana></leva-strana></td>
          <td   width="50%" style="text-align: center; background-color: #0B5499; color: white;">
            <prava-strana>
              <input class="tlacitko" type="button" value="Kontaktujte mě" (click)="zobrazFormular=true">
            </prava-strana>
          </td> 
        </tr>
        <tr>
          <td *ngIf="zobrazFormular" width="100%" align="center" colspan="2"><kontaktni-formular></kontaktni-formular></td>
        </tr>
      </table>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {

  public interestRate: number = 0;
  public zobrazFormular: boolean = false;
  public jeMobil: boolean;

  constructor(public gateway: GatewayService,
              private modAplikaceService: ModAplikaceService) {

    this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
      this.interestRate = data.interestRate;
    });
    this.jeMobil = this.modAplikaceService.jeMobilniVerze();
  }
}
