import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NewImageModalComponent } from '../new-image-modal/new-image-modal.component';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from '../image-card/image-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NewImageModalComponent, CommonModule, ImageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    openNewImageModal: boolean = false;

    constructor(private router: Router){}

}
