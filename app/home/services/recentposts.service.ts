import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RecentPostsService {
    url: string = "http://10.198.161.60:5233/index";
    posts;
    constructor(private _http: Http) {

    }
    getRecentPosts() {

        return this._http.get(this.url)
            .map((res: Response) => res.json());
    }
}