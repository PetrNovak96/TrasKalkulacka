import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'napoveda',
  template: `
    <img [matTooltip]="this.tooltip"
         [matTooltipPosition]="this.pozice"
         src="assets/help31b.png"
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

  constructor() { }

  ngOnInit() {
  }

}
