Forklol.Collections.Questions = Backbone.Collection.extend({
  initialize: function(models, options){
  },

  model: Forklol.Models.Question,

  url: function(){
    return 'api/quiz_tables' + this.quiz_table.id + '/questions';
  }
});