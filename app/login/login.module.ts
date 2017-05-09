import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from './services/authentication.service';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        HttpModule, 
        SharedModule
    ],
    exports: [
        LoginComponent
    ], 
    providers: [ AuthenticationService ]
})
export class LoginModule { }
