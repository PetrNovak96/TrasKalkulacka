import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OdeslaniUdajuService {

  _url = 'http://localhost:3000/kontaktniUdaje';

  constructor(private _http: HttpClient) { }

  odeslaniUdaju(udaje){
    return this._http.post<any>(this._url, udaje);
  }
}
