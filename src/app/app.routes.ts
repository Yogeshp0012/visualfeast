import { Routes } from '@angular/router';
import { EditImageComponent } from './edit-image/edit-image.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: "edit", component: EditImageComponent},
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "**", redirectTo: "home"}
];
