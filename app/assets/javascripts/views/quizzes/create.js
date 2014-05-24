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

  moveForward: function(){
    this.step++;
    this.render();
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