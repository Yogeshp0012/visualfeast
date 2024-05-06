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

    registerUser(email: string, password: string) {
        return this._auth.signup(email, password);
    }

    logoutUser() {
        return this._auth.logout();
    }

    setToken() {
        const currentUser = this.getCurrentUser();
        const jwt = currentUser.jwt();
        jwt
            .then((response: any) => localStorage.setItem('netlify-token', response))
            .catch((error: any) => {
                console.log('Error fetching JWT token', error);
                throw error;
            });
        ;
    }

    getToken() {
        return localStorage.getItem('netlify-token');
    }

    removeToken() {
        localStorage.removeItem('netlify-token');
    }

    verifyJWT(){
        return this._auth.jwtVerify(this.getToken());
    }
}
