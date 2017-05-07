"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recentposts_service_1 = require("../services/recentposts.service");
var post_model_1 = require("../model/post.model");
require("rxjs/add/operator/map");
var LandingPageComponent = (function () {
    function LandingPageComponent(_recentPost) {
        this._recentPost = _recentPost;
        this.recentPosts = [];
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.recentPosts = this._recentPost.getRecentPosts().map(function (res) {
            var data = res;
            return new post_model_1.Post(data.id, data.name, data.email, data.post, data.answers);
        });
    };
    LandingPageComponent.prototype.submitAnswer = function (post) {
        post.textboxShow = false;
        post.postAnswered = true;
    };
    LandingPageComponent.prototype.showTextBox = function (post) {
        post.textboxShow = true;
    };
    LandingPageComponent.prototype.cancelAnswer = function (post) {
        post.textboxShow = false;
    };
    LandingPageComponent.prototype.editAnswer = function (post) {
        post.postAnswered = false;
        post.textboxShow = true;
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "landing-page",
        templateUrl: "./landingpage.component.html",
        providers: [recentposts_service_1.RecentPostsService]
    }),
    __metadata("design:paramtypes", [recentposts_service_1.RecentPostsService])
], LandingPageComponent);
exports.LandingPageComponent = LandingPageComponent;
//# sourceMappingURL=landingpage.component.js.map