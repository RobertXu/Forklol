Forklol.Views.QuizzesIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['quizzes/index'],

  render: function () {
    var content = this.template({
      quizzes: this.collection
    });

    this.$el.html(content);
    return this;
  }
})