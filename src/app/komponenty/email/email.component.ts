import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'email',
  template: `
    <p>
    Email
    </p>
    <input type="email" placeholder="@">
  `,
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
