import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'email',
  template: `
    <p>
    Email
    <input #emailTextField 
           type="text" 
           [(ngModel)]="this.email" 
           class="form-control" 
           placeholder="@" 
           (click)="this.onClickEvent()">
    </p>
  `,
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  public email: string;
  @ViewChild('emailTextField') input;

  constructor() { }

  ngOnInit() {
    this.email = "";
  }

  onClickEvent(){

    if(this.email.length==0){
      let el = this.input.nativeElement;
      el.value = "@";
      el.setSelectionRange(0,0)
    }
  }

}
