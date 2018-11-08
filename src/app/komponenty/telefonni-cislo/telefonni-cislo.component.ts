import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'telefonni-cislo',
  template: `
    <p>
      Telefonní číslo
    </p>
    <input type="tel" placeholder="+420 602 123 456">
  `,
  styleUrls: ['./telefonni-cislo.component.css']
})
export class TelefonniCisloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
