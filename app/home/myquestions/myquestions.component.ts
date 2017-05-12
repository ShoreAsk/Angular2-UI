import { MyQuestionService } from '../services/myquestion.service';
import { Post } from '../../model/post.model';
import { Component,  OnInit } from '@angular/core';
import { PostAnswerComponent } from '../answers/answer.component';

@Component(
    {
        moduleId : module.id,
        selector: "my-questions",
        templateUrl: "./myquestions.component.html", 
        providers: [MyQuestionService]
    }
)
export class MyquestionsComponent implements OnInit{
    myRecentQuestions : Post[];
    userEmail : string;

    constructor(private myQuestionService : MyQuestionService)
    {

    }

    ngOnInit()
    {
        this.getMyRecentQuestions();
    }
    getMyRecentQuestions()
    {
        var userObj = JSON.parse(localStorage.getItem("currentUser"));
        this.userEmail = userObj["email"];
        this.myQuestionService.getMyQuestions(this.userEmail).subscribe(res => this.myRecentQuestions = res);
    }


}