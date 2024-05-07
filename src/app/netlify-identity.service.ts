import { Injectable } from '@angular/core';
import GoTrue from 'gotrue-js';

@Injectable({
    providedIn: 'root'
})
export class NetlifyIdentityService {
    private _auth: any;
    constructor() {
        this._auth = new GoTrue({
            APIUrl: 'https://visualfeast.netlify.app/.netlify/identity',
            audience: '',
            setCookie: false,
        });
    }

    getCurrentUser() {
        return this._auth.currentUser();
    }

    async registerUser(email: string, password: string) {
        await this._auth
  .signup(email, password)
  .then((response: any) => console.log('Confirmation email sent', response))
  .catch((error: any) => console.log("It's an error", error));
    }

    loginUser(email: string, password: string) {
        return this._auth.login(email, password,true);
    }

    logoutUser() {
        return this.getCurrentUser().logout();
    }
}
