import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';

@NgModule({
declarations: [ AppComponent ],
imports : [ BrowserModule, LoginModule , HomeModule , appRoutingModule, HttpModule, FormsModule ],
bootstrap : [ AppComponent ]
})
export class AppModule { }