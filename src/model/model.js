import { EventEmitter } from "events";

class Model extends EventEmitter{
    constructor() {
        super();
        this.state = {
            questions: [{
                idQuestion: 1,
                user: "Billy",
                title: "Mancare",
                text: "Cum gatiti macroul?",
                tags: ["food", "for soul"],
                creationDate: "Mon Apr 13 2019"


            }, {
                idQuestion: 2,
                user: "Sally",
                title: "Desert",
                text: "Inainte sau dupa?",
                tags: ["lavaCake", "fructe", "dupa SD si rasplata"],
                creationDate: "Tus Apr 14 2019"
            }],
            newQuestion: {
                title: "",
                text: "",
                tags: [],
                creationDate: ""
            },

            questionsByTitle: {},
            questionsByTags:[] ,
            searchedTitle: "",
            idQuestionRemember: 2



        };

    }




    addQuestion(title, text, tags) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                idQuestion: ++this.state.idQuestionRemember,
                user: "EU",
                title: title,
                text: text,
                tags: tags,
                creationDate: new Date().toDateString()
            }])
        };
        this.emit("change", this.state);
    }


    changeNewQuestionProperty(property, value) {
            this.state = {
                ...this.state,
                newQuestion: {
                    ...this.state.newQuestion,
                    [property]: value
                }
            };
            this.emit("change", this.state);
    }

    changeSearchTitleProperty(property, value) {
        this.state = {
            ...this.state,
            searchedTitle: {
                ...this.state.searchedTitle,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }


    findByTag(){

        this.state = {
            ...this.state,
            questionsByTags : this.state.questions.filter( x => x.tags.indexOf(this.state.searchedTitle.searchedTitle) !== -1 )
        };
        this.emit("change", this.state);

    }

    findByTtile(){

        this.state = {
            ...this.state,
            questionsByTitle : this.state.questions.find( x => x.title === this.state.searchedTitle.searchedTitle)
        };
        this.emit("change", this.state);


    }



}

const  model = new Model();

export default model;

