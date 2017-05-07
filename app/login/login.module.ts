import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from './services/authentication.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        HttpModule
    ],
    exports: [
        LoginComponent
    ], 
    providers: [ AuthenticationService ]
})
export class LoginModule { }
