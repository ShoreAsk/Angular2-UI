import { Post } from '../../model/post.model';
import { PostAnswersService } from '../services/postanswers.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component(
    {
        moduleId: module.id, 
        selector: "post-answers",
        templateUrl: "answer.component.html",
        styleUrls: ["answer.less"], 
        providers: [PostAnswersService]
    }
)
export class PostAnswerComponent implements OnInit{
    postId : string;
    postAnswers : Answer[];
    post : Post;
    tempVotes : number; 
    isClickedOnce : boolean ;

    constructor( private route: ActivatedRoute, private router: Router, private _postAnswersService : PostAnswersService){ }

    ngOnInit()
    {
        this.postId = this.route.snapshot.params['postId'];
        
        console.log(this.postId);

        this._postAnswersService.getPostById(this.postId).subscribe((res)=> this.post = res);

        this._postAnswersService.getPostAnswers(this.postId).subscribe((res) => this.postAnswers = res);
    }

    addUpvoteforAnswer(answerId)
    {
        this.isClickedOnce = true;
        this.tempVotes = this.postAnswers[answerId].upVotesForAnswer;
        this.postAnswers[answerId].upVotesForAnswer = this.tempVotes + 1;

        this._postAnswersService.updateUpvoteForAnswer(answerId).subscribe();
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

export interface Answer{
    id : string ;
    description: string;
    answeredBy : string; 
    answeredByEmail: string;
    upVotesForAnswer : number;
    isCorrect : boolean;
    questionId : string;
}