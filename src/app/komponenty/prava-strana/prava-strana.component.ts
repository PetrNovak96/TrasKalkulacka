import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prava-strana',
  templateUrl: './prava-strana.component.html',
  styleUrls: ['./prava-strana.component.css']
})
export class PravaStranaComponent implements OnInit {

  public nabizimeVam: string;
  public pojisteniInfo: string;
  public doplnujiciInfo: string;

  constructor() {

  }

  ngOnInit() {
    this.nabizimeVam = "Nabízíme Vám";
    this.pojisteniInfo = "Pojištění Info";
    this.doplnujiciInfo = "Doplňující Info";
  }

}
