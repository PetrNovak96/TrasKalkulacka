import {Injectable} from '@angular/core';

@Injectable()
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

  public getSirku(): number {
    return window.innerWidth;
  }
}
