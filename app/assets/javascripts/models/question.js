Forklol.Models.Question = Backbone.Model.extend({
  parse: function (response) {
    if (response.triggers){
      this.triggers = JSON.parse(response.triggers)
    }
    return response;
  },
  urlRoot: function(){
    return 'api/quiz_tables/' + this.get('table_id') + '/questions';
  }
})