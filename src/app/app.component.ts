import { Component, Injectable } from '@angular/core';
import { GatewayService } from './services/gateway.service';
import { OknoAplikaceService } from './okno-aplikace-service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!--  ____DESKTOPOVÁ VERZE____ -->
      <table *ngIf="!jeMobil" align="center">
        <tr>
          <td style="text-align: center"><leva-strana></leva-strana></td>
          <td style="text-align: center; background-color: #0B5499; color: white;">
            <prava-strana>
              <input class="tlacitko" type="button" value="Kontaktujte mě" (click)="zobrazFormular=true">
            </prava-strana>
          </td> 
        </tr>
        <tr>
          <td *ngIf="zobrazFormular" width="100%" align="center" colspan="2"><kontaktni-formular></kontaktni-formular></td>
        </tr>
      </table>

      <!--  ____MOBILNÍ VERZE____ -->
      <table *ngIf="jeMobil" align="center">
        <tr>
          <td style="text-align: center"><leva-strana></leva-strana></td>
          
        </tr>
        <tr>
          <td style="text-align: center; background-color: #0B5499; color: white;">
            <prava-strana>
              <input class="tlacitko" type="button" value="Kontaktujte mě" (click)="fireMobile()">
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
              private modAplikaceService: OknoAplikaceService) {

    this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
      this.interestRate = data.interestRate;
    });
    this.jeMobil = this.modAplikaceService.jeMobilniVerze();
  }

  fireMobile(){
    this.zobrazFormular = true;

    this.modAplikaceService.scrollO(100);
  }
}
