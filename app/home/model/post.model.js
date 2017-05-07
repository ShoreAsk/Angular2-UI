"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = (function () {
    function Post(Id, Name, Email, Post, Answers) {
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
        this.Post = Post;
        this.Answers = Answers;
        this.id = Id,
            this.name = Name,
            this.email = Email,
            this.post = Post,
            this.textboxShow = false,
            this.answers = Answers;
        this.postAnswered = false;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.model.js.map