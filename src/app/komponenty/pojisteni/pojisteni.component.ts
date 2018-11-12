import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pojisteni',
  template: `
    <table>
      <tr align="left">
        <td>
          <input type="checkbox" [(ngModel)]="odskrkle" />
        </td>
        <td>
          {{vysvetleni}}
        </td>
      </tr>
    </table>
    
    <p></p>
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
