import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'napoveda',
  template: `
    <img [matTooltip]="this.tooltip"
         [matTooltipPosition]="this.pozice"
         src="{{this.cesta}}"
         alt="Nápověda"
         width="15px"
         height="15px"
    >
  `,
  styleUrls: ['./napoveda.component.css']

})

export class NapovedaComponent implements OnInit {

  @Input() public tooltip: string;
  @Input() public pozice: string;
  @Input() public barva: string;

  public cesta = "";

  constructor() { }

  ngOnInit() {

    switch (this.barva) {
      case "bila": this.cesta = "assets/help31b.png"; break;
      case "cerna": default: this.cesta = "assets/info.png"; break;
    }
  }

}
