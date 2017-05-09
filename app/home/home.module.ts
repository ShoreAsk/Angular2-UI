
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { LandingPageNavBarComponent } from './landingpageNavbar/landingpagenavbar.component';
import { QuestionsformeComponent } from './questionsforme/questionsforme.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';

import { HomeRouting } from './home.routing';
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
imports : [ BrowserModule, HomeRouting, SharedModule],
declarations: [ HomeComponent, LandingPageComponent, LandingPageNavBarComponent,MyquestionsComponent, QuestionsformeComponent ],
exports: [ HomeComponent ],
providers: [ AuthGuard ]

})
export class HomeModule { }