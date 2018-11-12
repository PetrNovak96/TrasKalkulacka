import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'telefonni-cislo',
  template: `
    <p>
      Telefonní číslo
    <input type="tel" class="form-control" placeholder="+420 602 123 456">
    </p>
  `,
  styleUrls: ['./telefonni-cislo.component.css']
})
export class TelefonniCisloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
