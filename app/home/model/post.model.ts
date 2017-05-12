
export class Post {
    public id : string;
    public askedBy : string;
    public askedTo : string [];
    public askedByEmail: string;
    public question : string;
    public description : string;
    public keyWords : string [];
    public time : string;
    public codeSnippets : string [];

    // constructor(public Id : number, public AskedBy, public AskedTo, public AskedByEmail,
    //  public Question, public Description, public Keywords)
    // {
    //     this.id =  Id,
    //     this.askedBy = AskedBy,
    //     this.askedTo = AskedTo,
    //     this.askedByEmail = AskedByEmail,
    //     this.question = Question,
    //     this.description = Description
    //     this.keyWords = Keywords
    // }
    constructor()
    {

    }
}