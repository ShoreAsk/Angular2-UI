import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { appRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
imports : [ BrowserModule, LoginModule , HomeModule , appRoutingModule ],
declarations: [ AppComponent ],
bootstrap : [ AppComponent ],

})
export class AppModule { }