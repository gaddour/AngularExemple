import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { AppService } from '../../app.service';
import { User } from '../../models/user';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  users: Array<User>;
  constructor(private userService: AppService, private route: Router) {
  }

  ngOnInit() {
    this.getUsers();
    this.route.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.getUsers();
        }
      });
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      result => {
        this.users = result;
     });
  }
}



