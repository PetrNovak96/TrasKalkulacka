import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OknoService } from '../../services/okno.service';

@Component({
  selector: 'prava-strana',
  template: `
    <div>
      <h2 class="txtWhite">{{this.nabizimeVam}}</h2>
      <ng-content></ng-content>
      <input type="button" 
             class="btn btn-success btn-lg" 
             value="Kontaktujte mě"
             [disabled]="this.zobrazFormular"
             (click)="fireEvent($event);">
      <p class="orientacni" >Výsledné hodnoty jsou orientační. Přesná čísla se dozvíte od obchodníka.</p>
    </div>

  `,
  styleUrls: ['./prava-strana.component.css']
})
export class PravaStranaComponent implements OnInit {

  public nabizimeVam: string;
  @Input() public zobrazFormular: boolean;
  @Output() kontaktujteMeEvent = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.nabizimeVam = "Nabízíme Vám";
  }

  fireEvent(){
    this.kontaktujteMeEvent.emit(true);
  }

}
