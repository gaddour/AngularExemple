import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../app.service';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html'
})

export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private userService: AppService, private formBuilder: FormBuilder, private route: Router, private r: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),  Validators.maxLength(8)]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User(
      Math.random(),
      this.userForm.controls.firstName.value,
      this.userForm.controls.lastName.value,
      this.userForm.controls.phoneNumber.value,
    );
    if (this.userForm.valid) {
      this.userService.addUser(user).subscribe(
        result => {
          this.route.navigate(['./users']);
    });
   }
  }
}

