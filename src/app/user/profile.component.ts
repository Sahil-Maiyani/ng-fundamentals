import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './services/auth.service'

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  editProfileForm: FormGroup
  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    let firstNameControl  = new FormControl(this.authService.currentUser?.firstName)
    let lastNameControl = new FormControl(this.authService.currentUser?.lastName)
    this.editProfileForm = new FormGroup({
      firstName: firstNameControl,
      lastName: lastNameControl
    })
  }

  OnSubmitForm(formValues){
    this.authService.updateUserInformation(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])
  }
  
  handleCancel(){
    this.router.navigate(['events'])
  }
}