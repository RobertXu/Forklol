Forklol.Views.QuizTableShow = Support.CompositeView.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
    this.id = this.model.id.toString();
  },

  tagName: 'table',

  className: 'table table-bordered table-striped',

  template: JST['quiz_tables/show'],

  render: function(){
    var content = this.template({
      quiz_table: this.model
    });

    that = this;

    this.$el.html(content);

    this.model.questions().each(function(question){
      var currentView = new Forklol.Views.QuestionShow({
        model: question
      });

      that.appendChildTo(currentView, that.$el);
    })

    return this;
  },

  appendChildTo: function (view, container) {
     this.renderChild(view);
     container.append(view.el);
   }
})