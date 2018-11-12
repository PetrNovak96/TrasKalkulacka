import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prijmeni',
  template:`
    <p>
      Příjmení
      <input type="text" class="form-control" placeholder="Novák">
    </p>
  `,
  styleUrls: ['./prijmeni.component.css']
})
export class PrijmeniComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
