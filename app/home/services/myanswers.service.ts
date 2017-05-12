import { Post } from '../../model/post.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MyAnswerService {
    url: string 
    posts;
    constructor(private _http: Http) {

    }
}
