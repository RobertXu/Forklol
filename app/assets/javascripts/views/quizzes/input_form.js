Forklol.Views.QuizInputForm = Backbone.View.extend({
  template: JST['quizzes/input_form'],

  initialize: function(options) {
        this.options = options;
    },
  events: {
    'click .input-area': 'updateModel'
  },

  className: 'panel panel-default',

  updateModel: function(event){
    $(event.currentTarget).addClass('panel-warning').removeClass('panel-default');

    var panelHeader = $(event.currentTarget).children().first();

    this.model.set({'input_type': panelHeader.text().trim()});

    $('.input-area').each(function(){
      if (!$(this).is($(event.currentTarget))){
        $(this).removeClass('panel-warning').addClass('panel-default');
      }
    })
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
