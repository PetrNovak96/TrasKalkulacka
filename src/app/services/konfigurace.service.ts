import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class KonfiguraceService {

  constructor() {

    const content = require("../../assets/konfigurace.json");
    console.log(content);
    let uver = content.uver;
    console.log(uver);
  }

}
