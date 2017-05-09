
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';
import { QuestionsformeComponent } from "./questionsforme/questionsforme.component";


const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'myquestions', component: MyquestionsComponent },
 { path: 'questionsforme', component: QuestionsformeComponent }

];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(routes);