import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NetlifyIdentityService } from '../netlify-identity.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent{
    email: string = '';
    password: string = '';
    emailError: boolean = false;
    passwordError: boolean = false;

    constructor(private auth: NetlifyIdentityService, private router: Router) {
    }

    registerUser(): void {
        this.emailError=false;
        this.passwordError = false;
        if(!this.isValidEmail(this.email)){
            this.emailError = true;
            return;
        }
        if(this.password.length === 0 || this.password.length > 30){
            this.passwordError = true;
            return;
        }
        this.auth.registerUser(this.email, this.password).then((res: any) => console.log(res)).then(() => this.router.navigate(['/home']))
        .catch((err:any) => console.log(err));
    }

     isValidEmail(email: any): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
}
