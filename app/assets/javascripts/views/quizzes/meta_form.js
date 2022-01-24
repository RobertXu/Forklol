Forklol.Views.QuizMetaForm = Backbone.View.extend({
  template: JST['quizzes/meta_form'],

  className: 'panel panel-default',
  initialize: function(options) {
        this.options = options;
    },
	

  events: {
    'keydown #quiz-title': 'updateTitle',
    'keydown #quiz-description': 'updateDescription',
    'click .btn-next': 'updateTimeAndTable'
  },

  updateTimeAndTable: function(){
    var minutes = this.$('#quiz-minutes').val();
    var seconds = this.$('#quiz-seconds').val();

    if (seconds.length === 1){
      seconds = '0' + seconds;
    }

    this.model.set({'time_limit': minutes + ':' + seconds });
      
      
    this.model.quiz_table = new Forklol.Models.QuizTable({'answer_header': this.$('#answer-header').val(), 
                                                    'hint_header': this.$('#hint-header').val()});
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
