import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pojisteni',
  template: `
    
    <div class="row">
      <div class="col-md-12" style="margin-top: 35px">
        <p>
          <input type="checkbox" [(ngModel)]="odskrkle" />
          {{vysvetleni}}</p>
      </div>
    </div>
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
