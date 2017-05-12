import { AskQuestionService } from '../services/askquestion.service';
import { Post } from '../../model/post.model';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component(
    {
        selector:"ask-question", 
        templateUrl:"askquestion.component.html",
        styleUrls:["askquestion.less"], 
        moduleId: module.id, 
        providers:[AskQuestionService]
    }
)
export class AskQuestionComponent implements OnInit{

    post : Post;
    keyWords : string;
    askedTo: string;
    reccomendations : string[];
    postAlert : boolean = true; 

    constructor(private askQuestionService : AskQuestionService)
    {
        
    }
    ngOnInit(){
        this.post = new Post();
    }
    
    getReccomendations(question){
        this.askQuestionService.getReccomendationForQuestion(question).subscribe(res => this.reccomendations = res.string);
    }

    submitQuestion()
    {
        this.post.id = UUID.UUID();
        var userObj = JSON.parse(localStorage.getItem("currentUser"));
        this.post.askedByEmail = userObj["email"];
        this.post.askedBy = userObj["firstName"] + " " + userObj["lastName"];
        this.post.keyWords = this.keyWords.split(",");
        this.post.askedTo =this.askedTo.split(",");

        this.askQuestionService.postQuestion(this.post).subscribe(res => this.postAlert = res);
    }





}