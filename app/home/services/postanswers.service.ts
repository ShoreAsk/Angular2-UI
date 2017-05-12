import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PostAnswersService {
    url: string 
    posts;
    constructor(private _http: Http) {

    }
    
    getPostById(postId){
        this.url = "http://10.198.161.60:5233/getPostById";
        let body = JSON.stringify({ PostId : postId});

        let options = new RequestOptions({ body: body });
        return this._http.get(this.url, options)
            .map((res: Response) => res.json());
    }


    getPostAnswers(postId) {
        this.url = "http://10.198.161.60:5233/postAnswers";
         let body = JSON.stringify({ PostId : postId});

        let options = new RequestOptions({ body: body });
       
        return this._http.get(this.url, options)
            .map((res: Response) => res.json());
    }

    updateUpvoteForAnswer(answerId){
        this.url = "http://10.198.161.60:5233/updateUpvoteForAnswer";
        let body = JSON.stringify({AnswerId : answerId })
        let headers = new Headers({ 'Content-Type': 'application/json' , 'X-Requested-With' :'XMLHttpRequest'});
        return this._http.post(this.url, body, headers).map((res : Response) => res.json() );
        }
}