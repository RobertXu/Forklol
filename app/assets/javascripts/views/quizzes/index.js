Forklol.Views.QuizzesIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['quizzes/index'],

  render: function () {
    var that = this;

    var content = this.template({
      quizzes: this.collection
    });

    this.$el.html(content);

    $titles = this.$('#quiz_titles_go_here');
    this.collection.each(function(quiz){
      var link_text = "<li><a href='#quizzes/" + quiz.id + "' class='btn btn-default'>" + quiz.get('title')  +"</a></li>"
      $titles.append($(link_text));
    })

    return this;
  }
})