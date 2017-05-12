import { MyAnswerService } from '../services/myanswers.service';
import { Component } from '@angular/core';


@Component(
    {
        moduleId: module.id, 
        selector : "my-answers",
        templateUrl: "myanswers.component.html", 
        styleUrls: ["myanswers.less"], 
        providers: [MyAnswerService]
    }
)
export class MyAnswersComponent{

}