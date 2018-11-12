import { Component, OnInit } from '@angular/core';

@ Component({
  selector: 'mesicni-splatka',
  template: `
    <p class="txtWhite">
      Měsíční splátka
    </p>
    <p class="txtWhite"  style="font-size: 28px; margin-bottom: 25px" *ngIf="jeVysledek">{{vysledek + " Kč"}}</p>
  `,
  styleUrls: ['./mesicni-splatka.component.css']
})
export class MesicniSplatkaComponent implements OnInit {

  public vysledek: number;
  public jeVysledek: boolean;

  constructor() { }

  ngOnInit() {
    this.vysledek = 0;
    this.jeVysledek = true;
  }

}
