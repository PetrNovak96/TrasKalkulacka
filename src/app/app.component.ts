import { Component, Injectable } from '@angular/core';
import { GatewayService } from './services/gateway.service';
import { ModAplikaceService } from './mod-aplikace-service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <table align="center" border="1">
        <tr>
          <td width="50%" style="text-align: center"><leva-strana></leva-strana></td>
          <td width="50%" style="text-align: center"><prava-strana></prava-strana></td> 
        </tr>
        <tr>
          <td width="100%" align="center" colspan="2"><kontaktni-formular></kontaktni-formular></td>
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
