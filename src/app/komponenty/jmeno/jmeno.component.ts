import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jmeno',
  template: `
    <p>
      Jméno
    </p>
    <input type="text" class="form-control" placeholder="Petr">
  `,
  styleUrls: ['./jmeno.component.css']
})
export class JmenoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
