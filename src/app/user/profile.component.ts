import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.firstNameControl = new FormControl(
      this.authService.currentUser?.firstName,
      Validators.required
    );
    this.lastNameControl = new FormControl(
      this.authService.currentUser?.lastName,
      Validators.required
    );
    this.editProfileForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
    });
  }

  OnSubmitForm(formValues) {
    if (!this.editProfileForm.valid) {
      return;
    }
    this.authService
      .updateUserInformation(formValues.firstName, formValues.lastName)
      .subscribe(() => {
        this.router.navigate(['events']);
      });
  }

  handleCancel() {
    this.router.navigate(['events']);
  }

  handleLogout(){
    this.authService.logout().subscribe(() => {
    this.router.navigate(['/user/login']);
    })
  }

  //validate methods
  validateFirstName() {
    return this.firstNameControl.valid || this.firstNameControl.touched;
  }
  validateLastName() {
    return this.lastNameControl.valid || this.lastNameControl.touched;
  }
}
