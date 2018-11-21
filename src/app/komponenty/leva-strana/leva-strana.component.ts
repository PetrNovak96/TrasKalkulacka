import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'leva-strana',
  template: `
    <div>
      <div class="row">
        <div class="col-md-12">
          <h2  style="color:#0B5499">Nastavení parametrů půjčky</h2>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
`,
  styleUrls: ['./leva-strana.component.css']
})
export class LevaStranaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
