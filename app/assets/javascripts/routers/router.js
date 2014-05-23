Forklol.Router = Support.SwappingRouter.extend({

  initialize: function(options){
    this.$el = options.$rootEl;
  },

  routes: {
    'index': 'quizzesIndex',
    'quizzes/:id': 'quizShow'
  },

  quizzesIndex: function(){
    var view = new Forklol.Views.QuizzesIndex({collection: Forklol.quizzes});

    Forklol.quizzes.fetch();
    this.swap(view);
  },

  quizShow: function(id){
    var quiz = Forklol.quizzes.getOrFetch(id);

    var view = new Forklol.Views.QuizShow({
      model: quiz
    });

    this.swap(view);
  },

  swap: function(newView) {
    if (this.currentView && this.currentView.leave) {
      this.currentView.leave();
    }

    this.currentView = newView;
    this.$el.html(this.currentView.render().el);

    if (this.currentView && this.currentView.swapped) {
      this.currentView.swapped();
    }
  }
});


