Forklol.Router = Support.SwappingRouter.extend({

  initialize: function(options){
    this.$el = options.$rootEl;
  },

  routes: {
    '': 'homePage',
    'about': 'aboutShow',
    'index': 'quizzesIndex',
    'quizzes/create': 'quizCreate',
    'quizzes/:id(/:playthrough)': 'quizShow'
  },

  homePage: function(){
    var view = new Forklol.Views.HomePage();

    this.swap(view);
  },

  aboutShow: function(){
    var view = new Forklol.Views.AboutShow();

    this.swap(view);
  },

  quizzesIndex: function(){
    var view = new Forklol.Views.QuizzesIndex({collection: Forklol.quizzes});

    Forklol.quizzes.fetch();
    this.swap(view);
  },

  quizShow: function(id, playthrough){
    var quiz = Forklol.quizzes.getOrFetch(id);

    var view = new Forklol.Views.QuizShow({
      model: quiz
    });

    if (!playthrough){
      playthrough = 0;
    }

    view.playthrough = playthrough;

    this.swap(view);
  },

  quizCreate: function(){
    var quiz = new Forklol.Models.Quiz();

    var view = new Forklol.Views.QuizCreate({ model: quiz});

    this.swap(view);
  },

  swap: function(newView) {
    if (this.currentView && this.currentView.leave) {
      this.currentView.leave();
    }

    this.currentView = newView;
    this.$el.html(this.currentView.render().el).hide().fadeIn();

    if (this.currentView && this.currentView.swapped) {
      this.currentView.swapped();
    }
  }
});


