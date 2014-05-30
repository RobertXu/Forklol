Forklol.Views.QuizTableShow = Support.CompositeView.extend({
  initialize: function(options){
    // this.listenTo(this.model, 'sync', this.render);
    this.id = this.model.id.toString();
    this.quiz = options.quiz;

    if (this.quiz.get('input_type') === 'typing'){
      this.template = JST['quiz_tables/show_typing'];
      this.className = 'table table-bordered table-striped';
    } else {
      this.template = JST['quiz_tables/show_clicking'];
    }
  },

  tagName: 'table',

  renderClicking: function(){
    that = this;

    this.model.questions().sortRandom();
    this.model.questions().each(function(question){
      var currentView = new Forklol.Views.QuestionShow({
        model: question,
        button: true,
        tagName: 'button',
        className: 'btn btn-default btn-clicking'
      });

      that.appendChildTo(currentView, that.$el.find('.clicking-row'));
    })
  },

  renderTyping: function(){
    that = this;

    this.model.questions().each(function(question){
      var currentView = new Forklol.Views.QuestionShow({
        model: question,
        button: false,
        tagName: 'tr'
      });

      that.appendChildTo(currentView, that.$el);
    })
    that.$el.addClass('table table-bordered table-striped');
  },

  render: function(){
    var content = this.template({
      quiz_table: this.model
    });

    this.$el.html(content);

    if (this.quiz.get('input_type') === 'typing'){
      this.renderTyping();
    } else {
      this.renderClicking();
    }

    return this;
  },

  appendChildTo: function (view, container) {
     this.renderChild(view);
     container.append(view.el);
   }
})