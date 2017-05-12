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

        // return [
        //     {"id":1 , "name":"Rahul Doshi", "email": "rdoshi@shoretel.com", "post":"Please let me know the components in an MT Setup.", 
        //     "answers":[ {"id":1, "answer":"D2,BOSS,SBC,ABC,Switches", "answeredBy":"Raghavendran","answeredByEmail":"ras@shoretel.com","upVotesforAnswer":10},
        //                 {"id":2, "answer":"PBX, BOSS, SBC, ABC, Trunk Switch, Phone Switch", "answeredBy":"Preetham P", "answeredByEmail":"prp@shoretel.com", "upVotesforAnswer":20}
        //                 ]},
        //     {"id":2 , "name":"Shivam Bajpai", "email": "sbajpai@shoretel.com", "post":"Need idea on BOSS Notifications.", "answers":[]},
        //     {"id":3 , "name":"Hitesh Gupta", "email": "htr@shoretel.com", "post":"Global Numbers", "answers":[]},
        //     {"id":4 , "name":"Raghavendran S", "email": "ras@shoretel.com", "post":"Remote Users HLD", "answers":[]}
        // ]
    }
}