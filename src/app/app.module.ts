import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LevaStranaComponent } from './komponenty/leva-strana/leva-strana.component';
import { PravaStranaComponent } from './komponenty/prava-strana/prava-strana.component';
import { KontaktniFormularComponent } from './komponenty/kontaktni-formular/kontaktni-formular.component';
import { VyseUveruComponent } from './komponenty/vyse-uveru/vyse-uveru.component';
import { DobaSplaceniComponent } from './komponenty/doba-splaceni/doba-splaceni.component';
import { PojisteniComponent } from './komponenty/pojisteni/pojisteni.component';
import { MesicniSplatkaComponent } from './komponenty/mesicni-splatka/mesicni-splatka.component';
import { RPSNComponent } from './komponenty/rpsn/rpsn.component';
import { CelkemComponent } from './komponenty/celkem/celkem.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import { NapovedaComponent } from './komponenty/napoveda/napoveda.component';



@NgModule({
  declarations: [
    AppComponent,
    LevaStranaComponent,
    PravaStranaComponent,
    KontaktniFormularComponent,
    VyseUveruComponent,
    DobaSplaceniComponent,
    PojisteniComponent,
    MesicniSplatkaComponent,
    RPSNComponent,
    CelkemComponent,
    NapovedaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static ParametryComponent: any;
}
