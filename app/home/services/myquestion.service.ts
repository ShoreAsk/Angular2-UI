import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MyQuestionService {
    url: string 
    constructor(private _http: Http) {

    }

    getMyQuestions(email)
    {
        this.url = "http://10.198.161.60:5232/getMyQuestions";
        let body = JSON.stringify({email : email})
        let options = new RequestOptions({body : body});
        return this._http.get(this.url, options).map((res: Response) => res.json());
    }
}
    