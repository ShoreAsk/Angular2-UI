"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RecentPostsService = (function () {
    function RecentPostsService() {
    }
    RecentPostsService.prototype.getRecentPosts = function () {
        return [
            { "id": 1, "name": "Rahul Doshi", "email": "rdoshi@shoretel.com", "post": "Please let me know the components in an MT Setup.",
                "answers": [{ "id": 1, "answer": "D2,BOSS,SBC,ABC,Switches", "answeredBy": "Raghavendran", "answeredByEmail": "ras@shoretel.com", "upVotesforAnswer": 10 },
                    { "id": 2, "answer": "PBX, BOSS, SBC, ABC, Trunk Switch, Phone Switch", "answeredBy": "Preetham P", "answeredByEmail": "prp@shoretel.com", "upVotesforAnswer": 20 }
                ] },
            { "id": 2, "name": "Shivam Bajpai", "email": "sbajpai@shoretel.com", "post": "Need idea on BOSS Notifications.", "answers": [] },
            { "id": 3, "name": "Hitesh Gupta", "email": "htr@shoretel.com", "post": "Global Numbers", "answers": [] },
            { "id": 4, "name": "Raghavendran S", "email": "ras@shoretel.com", "post": "Remote Users HLD", "answers": [] }
        ];
    };
    return RecentPostsService;
}());
RecentPostsService = __decorate([
    core_1.Injectable()
], RecentPostsService);
exports.RecentPostsService = RecentPostsService;
//# sourceMappingURL=recentposts.service.js.map