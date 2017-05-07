import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RecentPostsService } from '../services/recentposts.service';
import { Post } from '../model/post.model';

import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: "landing-page",
    templateUrl:"./landingpage.component.html",
    providers: [ RecentPostsService ]
})
export class LandingPageComponent implements OnInit{

    recentPosts = [];

    constructor(private _recentPost:RecentPostsService)
    {

    }

    ngOnInit(){
        this.recentPosts = this._recentPost.getRecentPosts().map(function(res){
        var data = res;
        return new Post(data.id, data.name, data.email, data.post, data.answers);
    })
    }

    submitAnswer(post)
    {
        post.textboxShow = false;
        post.postAnswered = true;
    }
    
    showTextBox(post)
    {
        post.textboxShow = true;
    }

    cancelAnswer(post)
    {
        post.textboxShow = false;
    }

    editAnswer(post)
    {
        post.postAnswered = false;
        post.textboxShow = true;
    }
}