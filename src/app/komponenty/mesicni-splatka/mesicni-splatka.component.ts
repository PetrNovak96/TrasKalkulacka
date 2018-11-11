import { Component, OnInit } from '@angular/core';

@ Component({
  selector: 'mesicni-splatka',
  template: `
    <p class="txtWhite">
      Měsíční splátka
    </p>
    <p class="txtWhite" *ngIf="jeVysledek">{{vysledek + " Kč"}}</p>
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
