Forklol.Views.QuizCategoryForm  = Backbone.View.extend({
  template: JST['quizzes/category_form'],
  initialize: function(options) {
        this.options = options;
    },

  events: {
    'click .btn-cat': 'updateCategory'
  },

  className: 'panel panel-default',

  updateCategory: function(event){
    $(event.currentTarget).prev().addClass('text-info');

    this.model.set({'category': $(event.currentTarget).prev().html().trim()});

    $('.btn-cat').each(function(){
      if (!$(this).is($(event.currentTarget))){
        $(this).prev().removeClass('text-info');
      }
    })
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
