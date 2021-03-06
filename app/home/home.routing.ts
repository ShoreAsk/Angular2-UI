import { PostAnswerComponent } from './answers/answer.component';


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';
import { QuestionsformeComponent } from "./questionsforme/questionsforme.component";
import { QuestionComponent } from './question/question.component';

import { AuthGuard } from "./guard/auth.guard";



const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'question', component: QuestionComponent, canActivate: [AuthGuard] },
    { path: 'answers/:postId', component : PostAnswerComponent, canActivate: [AuthGuard] }
    // { path: 'myquestions', component: MyquestionsComponent, canActivate: [AuthGuard] },
    // { path: 'questionsforme', component: QuestionsformeComponent, canActivate: [AuthGuard] }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(routes);