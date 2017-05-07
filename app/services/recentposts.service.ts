import { Injectable } from '@angular/core';

@Injectable()
export class RecentPostsService{
    getRecentPosts(){
        return [
            {"id":1 , "name":"Rahul Doshi", "email": "rdoshi@shoretel.com", "post":"Please let me know the components in an MT Setup.", 
            "answers":[ {"id":1, "answer":"D2,BOSS,SBC,ABC,Switches", "answeredBy":"Raghavendran","answeredByEmail":"ras@shoretel.com","upVotesforAnswer":10},
                        {"id":2, "answer":"PBX, BOSS, SBC, ABC, Trunk Switch, Phone Switch", "answeredBy":"Preetham P", "answeredByEmail":"prp@shoretel.com", "upVotesforAnswer":20}
                        ]},
            {"id":2 , "name":"Shivam Bajpai", "email": "sbajpai@shoretel.com", "post":"Need idea on BOSS Notifications.", "answers":[]},
            {"id":3 , "name":"Hitesh Gupta", "email": "htr@shoretel.com", "post":"Global Numbers", "answers":[]},
            {"id":4 , "name":"Raghavendran S", "email": "ras@shoretel.com", "post":"Remote Users HLD", "answers":[]}
        ]
    }
}