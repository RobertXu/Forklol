Forklol.Views.QuizInputForm = Backbone.View.extend({
  template: JST['quizzes/input_form'],

  events: {
    'click .input-area': 'updateModel'
  },

  className: 'panel panel-default',

  updateModel: function(event){
    $(event.currentTarget).addClass('panel-primary').removeClass('panel-default');

    $('.input-area').each(function(){
      if (!$(this).is($(event.currentTarget))){
        $(this).removeClass('panel-primary').addClass('panel-default');
      }
    })
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})