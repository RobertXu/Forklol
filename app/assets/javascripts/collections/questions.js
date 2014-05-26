Forklol.Collections.Questions = Backbone.Collection.extend({
  initialize: function(models, options){
      this.quiz = options.quiz;
  },

  model: Forklol.Models.Question,

  url: function(){
    return 'api/quizzes' + this.quiz.id + '/questions';
  }
});