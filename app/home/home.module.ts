import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { LandingPageNavBarComponent } from './landingpageNavbar/landingpagenavbar.component';
import { HomeRouting } from './home.routing';

@NgModule({
imports : [ BrowserModule, HomeRouting],
declarations: [ HomeComponent, LandingPageComponent, LandingPageNavBarComponent ],
bootstrap : [ HomeComponent ],

})
export class HomeModule { }