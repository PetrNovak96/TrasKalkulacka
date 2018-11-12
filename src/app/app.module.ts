import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LevaStranaComponent } from './komponenty/leva-strana/leva-strana.component';
import { PravaStranaComponent } from './komponenty/prava-strana/prava-strana.component';
import { KontaktniFormularComponent } from './komponenty/kontaktni-formular/kontaktni-formular.component';
import { ParametryComponent } from './komponenty/parametry/parametry.component';
import { VyseUveruComponent } from './komponenty/vyse-uveru/vyse-uveru.component';
import { DobaSplaceniComponent } from './komponenty/doba-splaceni/doba-splaceni.component';
import { PojisteniComponent } from './komponenty/pojisteni/pojisteni.component';
import { MesicniSplatkaComponent } from './komponenty/mesicni-splatka/mesicni-splatka.component';
import { RPSNComponent } from './komponenty/rpsn/rpsn.component';
import { CelkemComponent } from './komponenty/celkem/celkem.component';
import { JmenoComponent } from './komponenty/jmeno/jmeno.component';
import { PrijmeniComponent } from './komponenty/prijmeni/prijmeni.component';
import { EmailComponent } from './komponenty/email/email.component';
import { TelefonniCisloComponent } from './komponenty/telefonni-cislo/telefonni-cislo.component';
import { DoplnujiciInfoComponent } from './komponenty/doplnujici-info/doplnujici-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import { NapovedaComponent } from './komponenty/napoveda/napoveda.component';
import { ModAplikaceService} from './mod-aplikace-service';


@NgModule({
  declarations: [
    AppComponent,
    LevaStranaComponent,
    PravaStranaComponent,
    KontaktniFormularComponent,
    ParametryComponent,
    VyseUveruComponent,
    DobaSplaceniComponent,
    PojisteniComponent,
    MesicniSplatkaComponent,
    RPSNComponent,
    CelkemComponent,
    JmenoComponent,
    PrijmeniComponent,
    EmailComponent,
    TelefonniCisloComponent,
    DoplnujiciInfoComponent,
    NapovedaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSliderModule
  ],
  providers: [ModAplikaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
