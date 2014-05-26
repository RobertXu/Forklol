Forklol.Models.Quiz = Backbone.Model.extend({
    parse: function(resp){
        if (resp.questions){
            this.questions().set(resp.questions, {parse: true});
            delete resp.questions;
        }
        return resp;
    },

    questions: function(){
        if (!this._questions){
            this._questions = new Forklol.Collections.Questions([], {quiz: this});
        }
        return this._questions;
    }
})