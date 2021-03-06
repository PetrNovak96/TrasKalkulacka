import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class KonfiguraceService {

  private _minUver: number;
  private _maxUver: number;
  private _defaultUver: number;
  private _krokUver: number;

  private _minDoba: number;
  private _maxDoba: number;
  private _defaultDoba: number;
  private _krokDoba: number;

  private _defaultPojisteni: boolean;
  private _pojisteniKoeficientUrokovaSazba: number;
  private _pojisteniKoeficientVyseUveru: number;

  private _jmenoPlaceholder: string;
  private _prijmeniPlaceholder: string;
  private _telPlaceholder: string;

  private _poplatek: number;
  private _kontaktHelpdesk: string;
  private _postUrl: string;
  private _odkazGDPR: string

  constructor() {

    const konfigurace = require("../../../konfigurace.json");

    this._minUver = konfigurace.uver.min;
    this._maxUver = konfigurace.uver.max;
    this._defaultUver = konfigurace.uver.default;
    this._krokUver = konfigurace.uver.krok;

    this._minDoba = konfigurace.dobaSplaceni.min;
    this._maxDoba = konfigurace.dobaSplaceni.max;
    this._defaultDoba = konfigurace.dobaSplaceni.default;
    this._krokDoba = konfigurace.dobaSplaceni.krok;

    this._defaultPojisteni = konfigurace.pojisteni.default;
    this._pojisteniKoeficientUrokovaSazba = konfigurace.pojisteni.koeficientUrokovaSazba;
    this._pojisteniKoeficientVyseUveru = konfigurace.pojisteni.koeficientVyseUveru;

    this._jmenoPlaceholder = konfigurace.kontaktniFormular.jmenoPlaceholder;
    this._prijmeniPlaceholder = konfigurace.kontaktniFormular.prijmeniPlaceholder;
    this._telPlaceholder = konfigurace.kontaktniFormular.telefonniCisloPlaceholder;

    this._poplatek = konfigurace.poplatek;
    this._kontaktHelpdesk = konfigurace.kontaktHelpdesk;
    this._postUrl = konfigurace.postUrl;
    this._odkazGDPR = konfigurace.GDPRUrl;
  }

  get minUver(){
    return this._minUver;
  }

  get maxUver(): number {
    return this._maxUver;
  }

  get defaultUver(): number {
    return this._defaultUver;
  }

  get krokUver(): number {
    return this._krokUver;
  }

  get minDoba(): number {
    return this._minDoba;
  }

  get maxDoba(): number {
    return this._maxDoba;
  }

  get defaultDoba(): number {
    return this._defaultDoba;
  }

  get krokDoba(): number {
    return this._krokDoba;
  }

  get defaultPojisteni(): boolean {
    return this._defaultPojisteni;
  }

  get pojisteniKoeficientUrokovaSazba(): number {
    return this._pojisteniKoeficientUrokovaSazba;
  }

  get koeficientVyseUveru(): number {
    return this._pojisteniKoeficientVyseUveru;
  }

  get jmenoPlaceholder(): string {
    return this._jmenoPlaceholder;
  }

  get prijmeniPlaceholder(): string {
    return this._prijmeniPlaceholder;
  }

  get telPlaceholder(): string {
    return this._telPlaceholder;
  }

  get poplatek(): number {
    return this._poplatek;
  }

  get kontaktHelpdesk(): string {
    return this._kontaktHelpdesk;
  }

  get postUrl(): string {
    return this._postUrl;
  }

  get odkazGDPR(): string {
    return this._odkazGDPR;
  }
}
