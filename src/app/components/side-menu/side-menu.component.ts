import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html'
})

export class SideMenuComponent {
  constructor(private router: Router) {

  }
  redirectToUsersList() {
    this.router.navigate(['/users']);
  }
}
