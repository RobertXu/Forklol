Forklol.Collections.QuizPlays = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.quiz = options.quiz;
  },

  model: Forklol.Models.QuizPlay,

  url: function(){
    return 'api/quiz_plays';
  },

  comparator: function(quiz_play){
    return quiz_play.get('score');
  }
})