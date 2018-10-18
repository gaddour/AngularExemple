import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  value: boolean = true;
  constructor(public router: Router) {
  }
  canActivate(): boolean {
    if (this.value) {
      return true;
    } else {
      this.router.navigate(['./home']);
    }
  }
}



