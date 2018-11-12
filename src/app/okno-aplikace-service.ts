import {Injectable} from '@angular/core';

@Injectable()
export class OknoAplikaceService {

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

  public getSirku(): number {
    return window.innerWidth;
  }

  public scrollO(oKolik: number): void {
    // let x = window.screenX;
    // let y = window.screenY;
    window.scrollBy(0, oKolik);
  }
}
