import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component(
    {
        moduleId: module.id,
        selector: "landingpage-navbar",
        templateUrl:"./landingpagenavbar.component.html"
  
    }
)
export class LandingPageNavBarComponent{

    constructor(private route : Router)
    {
    
    }

    logOut(){
        this.route.navigate(['login'])
    }

}