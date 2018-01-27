import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {HomeComponent} from './components/home.component';
import {MalfunctionComponent} from './components/malfunction.component';
import { SignupComponent } from './components/signup.component';
import { SignedUpComponent } from './components/signedUp.component';
import { DriverSignupComponent } from './components/driver-signup.component';
import { LoginComponent } from './components/login.component';
import { ServicesComponent } from './components/services.component';
import { CreatemalfunctionComponent } from './components/createmalfunction.component';
import  {LogoutComponent} from './components/logout.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'profile',
        component: UserComponent
    },
    {
        path: 'malfunction',
        component: MalfunctionComponent
    },
    {
        path: 'driver-signup',
        component: DriverSignupComponent
    },
    {
        path: 'signed-up',
        component: SignedUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'createmalfunction',
        component: CreatemalfunctionComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);