Forklol.Views.QuizMetaForm = Backbone.View.extend({
  template: JST['quizzes/meta_form'],

  className: 'panel panel-default',

  events: {
    'keydown #quiz-title': 'updateTitle',
    'keydown #quiz-description': 'updateDescription',
    'click .btn-next': 'updateInfo'
  },

  updateTimeLimit: function(){
    var minutes = this.$('#quiz-minutes').val();
    var seconds = this.$('#quiz-seconds').val();

    if (seconds.length === 1){
      seconds = '0' + seconds;
    }

    this.model.set({'time_limit': minutes + ':' + seconds });
  },

  updateTitle: function(event){
    this.model.set({'title': $(event.currentTarget).val()});
  },

  updateDescription: function(event){
      this.model.set({'description': $(event.currentTarget).val()});
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})