import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModAplikaceService } from '../../services/mod-aplikace-service';

@Component({
  selector: 'prava-strana',
  template: `
    <div>
      <h2 class="txtWhite">{{this.nabizimeVam}}</h2>
      <ng-content></ng-content>
      <input type="button" 
             class="btn btn-success btn-lg" 
             value="Kontaktujte mě"
             [disabled]="zobrazFormular"
             (click)="fireEvent($event);">
      <p class="txtWhite orientacni" >Výsledné hodnoty jsou orientační. Přesná čísla se dozvíte od obchodníka.</p>
    </div>

  `,
  styleUrls: ['./prava-strana.component.css']
})
export class PravaStranaComponent implements OnInit {

  public nabizimeVam: string;
  public pojisteniInfo: string;
  public jePojisteni: boolean;
  public zobrazFormular: boolean;
  @Output() kontaktujteMeEvent = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.nabizimeVam = "Nabízíme Vám";
    this.pojisteniInfo = "+ 150 Kč/ měsíčně pojištění proti neschopnosti splácet";
    this.jePojisteni = true;
  }

  fireEvent(){
    this.zobrazFormular = true;
    this.kontaktujteMeEvent.emit(true);
  }

}
