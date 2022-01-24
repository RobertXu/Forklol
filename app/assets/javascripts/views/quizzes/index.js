Forklol.Views.QuizzesIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.colorClasses = ["primary", "info", "warning", "danger"]
    this.colorIndex = 0;
  },

  template: JST['quizzes/index'],

  events: {
    'mouseover .btn-quiz': 'panelDisplay',
    'click #ok': 'renderCategory',
    'click .index-category': 'renderCategory'
  },

  renderCategory: function(event){
    event.preventDefault();
    var category = $(event.currentTarget).find('a').text().trim()

    this.render(category);
  },

  nextColor: function($link_text){
    var currentColor = this.colorClasses[this.colorIndex];

    this.colorIndex = (this.colorIndex + 1) % (this.colorClasses.length);

    return currentColor;
  },

  panelDisplay: function(event){
    this.$('#info-header').empty();
    this.$('#info-body').find('.tb-item').empty();
    this.$('#quiz-info').show();

    var quiz_id = $(event.currentTarget).data('id');
    var quiz = Forklol.quizzes.get(quiz_id);

    this.$('#info-header').append('<h3>' + quiz.get('title') + '</h3>' + '<br>by ' + quiz.author);
    this.$('#table-desc').append(quiz.get('description'));
    this.$('#table-time').append(quiz.get('time_limit'));
    this.$('#table-type').append(quiz.get('input_type'));

    this.$('#table-category').append(quiz.get('category'));

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

  render: function (category) {
    var that = this;

    var content = this.template({
      quizzes: this.collection
    });

    this.$el.html(content);

    $titles = this.$('#quiz_titles_go_here');

    if (typeof category !== "string" || category === 'Recently Created')
    {
      quizzes = this.collection.last(5);
      this.$('#category-header').html('Recently Created');

    }
    else
    {
      quizzes = this.collection.where({"category": category});
      this.$('#category-header').html(category);
    }

    for (var i = 0; i < quizzes.length; i++){
      var quiz = quizzes[i];

      var $link_text = $("<li><p><a href='#quizzes/" + quiz.id + "' data-id='" + quiz.id + "' class='btn btn-" + this.nextColor() + " btn-quiz' >" + quiz.get('title')  +"</a></p></li>");

      $titles.append($link_text);
    }

    return this;
  }
})
