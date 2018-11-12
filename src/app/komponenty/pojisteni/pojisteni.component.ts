import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pojisteni',
  template: `
    <p>
    <input type="checkbox" [(ngModel)]="odskrkle" />
    {{vysvetleni}}</p>
  `,
  styleUrls: ['./pojisteni.component.css']
})
export class PojisteniComponent implements OnInit {

  public odskrkle: boolean;
  public vysvetleni: string;

  constructor() { }

  ngOnInit() {
    this.odskrkle = false;
    this.vysvetleni = "Mám zájem o pojištění schopnosti splácet."
  }

}
