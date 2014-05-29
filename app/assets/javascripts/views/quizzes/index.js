Forklol.Views.QuizzesIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['quizzes/index'],

  events: {
    'mouseover li': 'panelDisplay'
  },

  panelDisplay: function(event){
    this.$('.panel-heading').empty();
    this.$('.panel-body').find('.tb-item').empty();
    this.$('.panel').show();


    var quiz_id = $(event.currentTarget).find('a').data('id');
    var quiz = Forklol.quizzes.get(quiz_id);

    this.$('.panel-heading').append(quiz.get('title') + '<br>by ' + quiz.author);
    this.$('#table-desc').append(quiz.get('description'));
    this.$('#table-time').append(quiz.get('time_limit'));

    this.$('#table-questions').append(this.numQuestions(quiz));

    // event.stopPropagation();
  },

  numQuestions: function(quiz){
    var num = 0;
    quiz.quiz_tables().each(function(table){
      num += table.questions().length;
    })

    return num;
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