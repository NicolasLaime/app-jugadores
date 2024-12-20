import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [

    {path:'login', component: LoginComponent},

    {path:'register', component: RegisterComponent},

    {path: '', redirectTo: '/login', pathMatch: 'full'},

    {path: 'home', component: HomeComponent},

    {path:'**', redirectTo: '/login'}




];
