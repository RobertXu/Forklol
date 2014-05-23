Forklol.Models.Quiz = Backbone.Model.extend({
  parse: function (resp) {

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
  }
})