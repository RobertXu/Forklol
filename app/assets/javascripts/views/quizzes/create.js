Forklol.Views.QuizCreate= Support.CompositeView.extend({
  initialize: function(){
    this.step = 0;

    this.subViews = [Forklol.Views.QuizInputForm, Forklol.Views.QuizAnswerForm, Forklol.Views.QuizMetaForm, Forklol.Views.QuizQuestionForm];
  },

  className: 'container',

  template: JST['quizzes/create'],

  events: {
    'click .btn-next' : 'moveForward',
    'click .btn-prev' : 'moveBack'
  },

  fieldsFilled: function(){
    var status = true;

    this.$el.find('.form-control').not('input[name="triggers"]').each(function(){
      if ($(this).val().trim() === ""){
        status = false;
      }
    })

    return status;
  },

  moveForward: function(){
    this.$('#panel-goes-here').find('.alert-danger').remove();

    if (this.fieldsFilled()){
      this.step++;
      this.render();
    }
    else {
      $warning = $('<div class="alert alert-danger"> Please fill out all fields before continuing </div>')
      this.$('#panel-goes-here').prepend($warning);
    }
  },

  moveBack: function(){
    this.step--;
    this.render();
  },

  render: function(){
    var content = this.template({quiz: this.model});
    this.$el.html(content);

    var $panel = this.$('#panel-goes-here');

    var subViewFunc = this.subViews[this.step];
    var currentChildView = new subViewFunc({model: this.model});

    this.renderChildInto(currentChildView, $panel);

    return this;
  },

  renderChildInto: function(view, container) {
     this.renderChild(view);
     container.html(view.el);
   }
});