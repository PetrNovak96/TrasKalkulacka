import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pojisteni',
  template: `
    
    <div class="row">
      <div class="col-md-12 pojisteni">
        <p (click)="klikMimoCheckBox()">
          <input type="checkbox" 
                 [(ngModel)]="odskrkle" (change)="fireEvent($event)" />
          {{vysvetleni}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./pojisteni.component.css']
})
export class PojisteniComponent implements OnInit {

  public odskrkle: boolean;
  @Input() public defaultOdskrkle: boolean;
  @Output() zmenaOdskrknutiEvent = new EventEmitter();
  public vysvetleni: string;

  constructor() { }

  ngOnInit() {
    this.odskrkle = this.defaultOdskrkle;
    this.vysvetleni = "Mám zájem o pojištění schopnosti splácet."
  }

  fireEvent(){
    this.zmenaOdskrknutiEvent.emit(this.odskrkle);
  }

  klikMimoCheckBox(){
    this.odskrkle = !this.odskrkle;
    this.fireEvent();
  }

}
