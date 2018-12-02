import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OknoService {

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
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  public skrolujNahoru(){

    window.scroll({
      top: - (window.screenY),
      left: 0,
      behavior: 'smooth'
    });
  }
}
