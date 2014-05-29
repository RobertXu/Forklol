Forklol.Collections.Questions = Backbone.Collection.extend({
  initialize: function(models, options){
  },

  model: Forklol.Models.Question,

  comparator: function(question){
    return -question.get('times_answered');
  },

  url: function(){
    return 'api/quiz_tables' + this.quiz_table.id + '/questions';
  }
});