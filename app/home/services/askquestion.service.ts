import { Post } from '../../model/post.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AskQuestionService {
    url: string 
    posts;
    constructor(private _http: Http) {

    }

    getReccomendationForQuestion(question)
    {
        this.url = "http://10.198.161.60:5233/getReccomendationForQuestion";
        let body = JSON.stringify({ question : question});
        let options = new RequestOptions({ body: body });

        return this._http.get(this.url, options).map((res: Response) => res.json());
    }

    postQuestion(post : Post)
    {
        this.url="http://10.198.161.60:5232";
        let body = JSON.stringify({post: post});
        let headers = new Headers({ 'Content-Type': 'application/json' , 'X-Requested-With' :'XMLHttpRequest'});
        let options = new RequestOptions({})
        return this._http.post(this.url, body ,headers ).map((res: Response) => res.json());
    }

}