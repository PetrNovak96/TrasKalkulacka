import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'email',
  template: `
    <p>
    Email
    <input type="email" class="form-control" placeholder="@">
    </p>
  `,
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
