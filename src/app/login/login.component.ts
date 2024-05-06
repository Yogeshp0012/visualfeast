import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NetlifyIdentityService } from '../netlify-identity.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    emailError: boolean = false;
    passwordError: boolean = false;

    constructor(private auth: NetlifyIdentityService, private router: Router) { }

    loginUser(): void {
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
        this.auth.loginUser(this.email, this.password).then((res: any) => console.log(res)).then((res: any) => this.router.navigate(['/home']))
        .catch((err:any) => console.log(err));
    }

     isValidEmail(email: any): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
}
