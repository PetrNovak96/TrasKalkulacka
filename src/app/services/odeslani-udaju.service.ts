import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { KonfiguraceService } from './konfigurace.service';

@Injectable({
  providedIn: 'root'
})
export class OdeslaniUdajuService {

  private _url: string;

  constructor(private _http: HttpClient, private konfigurace: KonfiguraceService) {
    this._url = this.konfigurace.postUrl;
  }

  odeslaniUdaju(udaje){
    return this._http.post<any>(this._url, udaje);
  }
}
