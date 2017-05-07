import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
    login(email: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({ email: email, password: password });
        return this.http.post('http://10.198.2.49:8080/login', body, headers).map((res: Response) => {
            let user = res.json();
            if (user && user.token) {
                // store user details and token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                sessionStorage.setItem('Token', user.token);
            }
        });
    }
    logout() {
        // remove user from local storage to log user out
        var user = localStorage.getItem('currentUser');
        return this.http.get('http://10.198.2.49:8080/logout')
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let resp = response.json();
                if (resp.result == 'success') {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.removeItem('currentUser');
                    sessionStorage.removeItem('Token');
                }
            });
    }
}