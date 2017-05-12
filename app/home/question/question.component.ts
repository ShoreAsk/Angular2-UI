import { Component } from '@angular/core';
import { MyquestionsComponent } from '../myquestions/myquestions.component';
import { AskQuestionComponent } from '../askquestion/askquestion.component';



@Component(
    {
        moduleId: module.id,
        selector: "question",
        templateUrl: "./question.component.html",
        styleUrls: ["./question.less"]
    }
)
export class QuestionComponent{

}
