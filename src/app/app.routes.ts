import { Routes } from '@angular/router';
import { EditImageComponent } from './edit-image/edit-image.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "edit", component: EditImageComponent},
    {path: "home", component: HomeComponent},
    {path: "**", redirectTo: "home"}
];
