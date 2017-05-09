import { eventNames } from 'cluster';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/core/core';
import { User } from '../../model/user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AuthenticationService {
        loading: boolean;

    constructor(private http: Http, private router : Router) { }
    login(email: string, password: string, event : Event) {
        let headers = new Headers({ 'Content-Type': 'application/json' , 'X-Requested-With' :'XMLHttpRequest'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({ email: email, password: password });

        event.preventDefault();

        return this.http.post('http://10.198.161.60:8080/login', body, headers)
            .map( response => this.insideMap(response))
            .subscribe(
            (data) => {
                this.loading = data ? false : true;
                this.router.navigate(['home'])
                console.log("success");
            },

            (error) => {
                this.loading = false;
                this.router.navigate(['login']);
                  console.log("failure");
            });;
    }

    logout() {
        // remove user from local storage to log user out
        var user = localStorage.getItem('currentUser');
        return this.http.get('http://10.198.161.60:8080/logout')
            .map((response) => {
                // login successful if there's a jwt token in the response
                let resp = response.json();
                if (resp.result == 'success') {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.removeItem('currentUser');
                    sessionStorage.removeItem('Token');
                }
            });
    }


    insideMap(response) : Observable<Response>
    {
            let user = response.json();
            if (user && user.token) {
                // store user details and token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                sessionStorage.setItem('Token', user.token);
           }
           return response;
    }
}