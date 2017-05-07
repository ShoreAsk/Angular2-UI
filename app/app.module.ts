import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { LandingPageNavBarComponent } from './landingpageNavbar/landingpagenavbar.component';

@NgModule({
imports : [ BrowserModule ],
declarations: [ AppComponent, LandingPageComponent, LandingPageNavBarComponent ],
bootstrap : [ AppComponent ],

})
export class AppModule { }