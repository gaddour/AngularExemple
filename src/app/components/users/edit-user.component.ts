import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../app.service';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'edit-user',
  templateUrl: './add-user.component.html'
})

export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  constructor(private userService: AppService, private formBuilder: FormBuilder, private route: Router, private r: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),  Validators.maxLength(8)]],
    });
  }

  ngOnInit() {
    const id = +(this.r.snapshot.paramMap.get('id'));
    this.getUserById(id);
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      result => {
        this.user = result;
        this.userForm.controls.firstName.setValue(this.user.firstName);
        this.userForm.controls.lastName.setValue(this.user.lastName);
        this.userForm.controls.phoneNumber.setValue(this.user.phoneNumber);
       });
  }

  onSubmit() {
    this.user = new User(
      this.user.id,
      this.userForm.controls.firstName.value,
      this.userForm.controls.lastName.value,
      this.userForm.controls.phoneNumber.value
    );
    if (this.userForm.valid) {
      this.userService.editUser(this.user).subscribe(
        result => {
          this.route.navigate(['./users']);
    });
  }
 }

}


// import { Injectable }     from '@angular/core';
// import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot }    from '@angular/router';

// @Injectable()
// export class GuardService implements CanActivate {

//   value:boolean=true;
//   constructor(private router:Router){}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if(this.value)
//       return true;
//     else this.router.navigate(["login"]);
//   }
// }





