Forklol.Collections.QuizTables = Backbone.Collection.extend({
  initialize: function (models, options) {
    console.log("I'm making quiz tables! from quiz: " + options.quiz.id);
    this.quiz = options.quiz;
  },

  model: Forklol.Models.QuizTable,

  url: function(){
    return 'api/quizzes/' + this.quiz.id + '/quiz_tables';
  }

})