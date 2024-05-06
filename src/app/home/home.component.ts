import { Component } from '@angular/core';
import { NetlifyIdentityService } from '../netlify-identity.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    constructor(private auth: NetlifyIdentityService, private router: Router){}

    logoutUser(){
        this.auth.logoutUser().then((res: any) =>
            this.router.navigate(['/login']))
        .catch((err: any) => console.log("Failed to logout"));
    }
}
