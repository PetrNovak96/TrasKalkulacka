import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doplnujici-info',
  template:`
    <p>
      Doplňující informace
    </p>
    <textarea class="doplnInfo" 
              maxlength="1000" 
              [(ngModel)]="doplnujiciInfo"
    ></textarea>
  `,
  styles: [`
    .doplnInfo {
      height: 4em;
      width: 25em;
      resize: none;
    }
  `]
})
export class DoplnujiciInfoComponent implements OnInit {

  public doplnujiciInfo: string;

  constructor() { }

  ngOnInit() {
    this.doplnujiciInfo = "";
  }

}
