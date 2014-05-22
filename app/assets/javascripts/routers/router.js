Forklol.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    'index': 'quizzesIndex'
  },

  quizzesIndex: function(){
    var view = new Forklol.Views.QuizzesIndex({collection: Forklol.quizzes});

    this._swapView(view);
  },

  _swapView: function(view){
    if (this._currentView){
      this._currentView.remove();
    }

    this.$rootEl.html(view.render().$el);
  }
});