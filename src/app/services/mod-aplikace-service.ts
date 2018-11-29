import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModAplikaceService {

  private mobil: boolean;

  constructor() {
    if (window.innerWidth < 768) {
      this.mobil = true;
    } else {
      this.mobil = false;
    }
  }

  public jeMobilniVerze(): boolean {
    return this.mobil;
  }

  public skrolujDolu(){
    window.scroll({
      top: window.innerHeight,
      left: window.innerWidth,
      behavior: 'smooth'
    });
  }
}
