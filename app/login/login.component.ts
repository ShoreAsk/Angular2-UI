
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component(
    {
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['login.less']
    }
)
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    returnUrl: string;
    loading: boolean;


    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = '/';
    }
    signIn(email, password) {
        this.email = email;
        this.password = password;
        this.loading = true;
        this.authenticationService.login(this.email, this.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
                console.log("success");
            },
            error => {
                this.router.navigate(['/login']);
                  console.log("failure");
            });
    }

}