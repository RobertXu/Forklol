Forklol.Collections.QuizTables = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.quiz = options.quiz;
  },

  model: Forklol.Models.QuizTable,

  url: function(){
    return 'api/quizzes/' + this.quiz.id + '/quiz_tables';
  }

})