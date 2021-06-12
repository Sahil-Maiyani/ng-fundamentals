import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../common/service/toastr.service";
import { AuthService } from "./services/auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {float: right; color: red; padding-left: 10px}
    `]
})
export class LoginComponent {
    userName: string
    password: string
    mouseOverLogin: boolean
    constructor(private authService: AuthService, 
               @Inject(TOASTR_TOKEN) private toastrService: Toastr, 
                private router : Router){

    }

    onFormSubmit(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        if(this.authService.isAuthenticated()){
            this.toastrService.success("Welcome " + this.authService.currentUser?.firstName)
            this.router.navigate(['events'])
        }
    }

    handleCancel(){
        this.router.navigate(['events'])
    }
}