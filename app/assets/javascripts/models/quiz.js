Forklol.Models.Quiz = Backbone.Model.extend({
  urlRoot: 'api/quizzes',
  paramRoot: 'quiz',

  parse: function (resp) {
    if(resp.quiz_plays){
      this.quiz_plays().set(resp.quiz_plays, {parse: true});
      delete resp.quiz_plays;
    }

    if (resp.author){
      this.author = resp.author;
      delete resp.author;
    }

    if(resp.quiz_tables){
      this.quiz_tables().set(resp.quiz_tables, {parse: true});
      delete resp.quiz_tables;
    }
    return resp;
  },

  quiz_tables: function(){
    if (!this._quiz_tables){
      this._quiz_tables = new Forklol.Collections.QuizTables([], {quiz: this});
    }

    return this._quiz_tables;
  },

  quiz_plays: function(){
    if (!this._quiz_plays){
      this._quiz_plays = new Forklol.Collections.QuizPlays([], {quiz: this});
    }

    return this._quiz_plays;
  }
})