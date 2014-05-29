Forklol.Collections.Questions = Backbone.Collection.extend({
  initialize: function(models, options){
  },

  model: Forklol.Models.Question,

  sortRandom: function(){
    this.chaos = true;

    this.sort();

    this.chaos = false;
  },

  chaos: false,

  comparator: function(question){
    if (!this.chaos){
      return -question.get('times_answered');
    } else {
     var randomVals = [-1, 0, 1];

     return randomVals[Math.floor(Math.random()*randomVals.length)];
    }
  },

  url: function(){
    return 'api/quiz_tables' + this.quiz_table.id + '/questions';
  }
});