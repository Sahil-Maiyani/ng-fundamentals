import { Injectable } from "@angular/core";
import { IUser } from "../user.model";

@Injectable()
export class AuthService {
    currentUser : IUser
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: "Sahil",
            lastName: "M"
        }
    }

    isAuthenticated (): boolean{
        return !!this.currentUser;
    }

    updateUserInformation(firstName: string, lastName: string){
        this.currentUser.firstName = firstName,
        this.currentUser.lastName = lastName
    }
}