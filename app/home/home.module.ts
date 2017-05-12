import { PostAnswerComponent } from './answers/answer.component';


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { LandingPageNavBarComponent } from './landingpageNavbar/landingpagenavbar.component';
import { QuestionsformeComponent } from './questionsforme/questionsforme.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';
import { QuestionComponent } from './question/question.component';

import { HomeRouting } from './home.routing';
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
imports : [ CommonModule, 
            HomeRouting, 
            SharedModule],
declarations: [ HomeComponent, 
                LandingPageComponent, 
                LandingPageNavBarComponent,
                MyquestionsComponent,
                QuestionsformeComponent, 
                QuestionComponent, 
                PostAnswerComponent ],
exports: [ HomeComponent ],
providers: [ AuthGuard ]

})
export class HomeModule { }