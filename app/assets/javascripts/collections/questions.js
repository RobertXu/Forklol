Forklol.Collections.Questions = Backbone.Collection.extend({
  initialize: function(models, options){
    this.quiz_table = options.quiz_table;
  },

  model: Forklol.Models.Question,

  url: function(){
    return 'api/quiz_tables' + this.quiz_table.id + '/questions';
  }
});