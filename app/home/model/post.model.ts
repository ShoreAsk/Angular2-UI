export class Post {
    public id : number;
    public name : string;
    public email: string;
    public post : string;
    public textboxShow: boolean; 
    public postAnswered : boolean;
    public answers : Answer[];


    constructor(public Id : number, public Name, public Email, public Post, public Answers : Answer[])
    {
        this.id =  Id,
        this.name = Name,
        this.email = Email,
        this.post = Post,
        this.textboxShow = false,
        this.answers = Answers
        this.postAnswered = false
    }
}

export interface Answer{
    id : number;
    answer : string ;
    answeredBy: string;
    answeredByEmail : string;
    upVotesforAnswer : number;
}