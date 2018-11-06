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

@NgModule({
  declarations: [
    AppComponent,
    LevaStranaComponent,
    PravaStranaComponent,
    KontaktniFormularComponent,
    ParametryComponent,
    VyseUveruComponent,
    DobaSplaceniComponent,
    PojisteniComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
