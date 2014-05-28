Forklol.Views.QuizzesIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['quizzes/index'],

  events: {
    'mouseover .btn-quiz': 'panelDisplay'
  },

  panelDisplay: function(event){

    this.$('.panel-heading').empty();
    this.$('.panel-body').empty();

    var quiz_id = $(event.currentTarget).data('id');
    var quiz = Forklol.quizzes.getOrFetch(quiz_id);

    this.$('.panel-heading').append(quiz.get('title'));
    this.$('.panel-body').append(quiz.get('description')).append(quiz.author)
  },

  render: function () {
    var that = this;

    var content = this.template({
      quizzes: this.collection
    });

    this.$el.html(content);

    $titles = this.$('#quiz_titles_go_here');
    this.collection.each(function(quiz){
      var link_text = "<li><a href='#quizzes/" + quiz.id + "' data-id='" + quiz.id + "' class='btn btn-default btn-quiz' >" + quiz.get('title')  +"</a></li>"
      $titles.append($(link_text));
    })

    return this;
  }
})