Forklol.Views.QuizTableShow = Support.CompositeView.extend({
  initialize: function(){
    // this.listenTo(this.model, 'sync', this.render);
    this.id = this.model.id.toString();
  },

  tagName: 'table',

  className: 'table table-bordered table-striped',

  templateTyping: JST['quiz_tables/show_typing'],

  templateClicking: JST['quiz_tables/show_clicking'],

  render: function(){
    var content = this.templateClicking({
      quiz_table: this.model
    });

    that = this;
    this.$el.html(content);

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
    /*
      Need to overwrite render to account for clicking quizzes
      Also need to have questions render as buttons instead of table rows.
      Also, dynamically change className of view
    */

    // this.model.questions().each(function(question){
 //      var currentView = new Forklol.Views.QuestionShow({
 //        model: question,
 //        button: false,
 //        tagName: 'tr'
 //      });
 //
 //      that.appendChildTo(currentView, that.$el);
 //    })

    return this;
  },

  appendChildTo: function (view, container) {
     this.renderChild(view);
     container.append(view.el);
   }
})