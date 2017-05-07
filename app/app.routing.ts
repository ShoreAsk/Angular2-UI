import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', loadChildren:'home/home.module#HomeModule' },

    { path: '**', redirectTo: '/login'},
];

export const appRoutingModule = RouterModule.forRoot(APP_ROUTES);
