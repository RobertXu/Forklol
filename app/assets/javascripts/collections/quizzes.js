Forklol.Collections.Quizzes = Backbone.Collection.extend({
  model: Forklol.Models.Quiz,
  url: 'api/quizzes',

  getOrFetch: function(id) {
    var model = this.get(id);

    if (!model) {
      model = new Forklol.Models.Quiz({ id: id});
      model.collection = this;
    }
    model.fetch();
    return model;
  }
})

Forklol.quizzes = new Forklol.Collections.Quizzes();