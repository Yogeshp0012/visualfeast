import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NetlifyIdentityService } from './netlify-identity.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'visualfeast';

  constructor(private auth: NetlifyIdentityService, private router: Router){}

  ngOnInit(): void {
      if(!this.auth.getCurrentUser()){
        this.router.navigateByUrl("/login");
      }
  }
}
