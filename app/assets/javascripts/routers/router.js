Forklol.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'quizzesIndex'
  },

  quizzesIndex: function(){
    var view =
  },

  _swapView: function(view){
    if (this._currentView){
      this._currentView.remove();
    }
    this._currentView.remove();
    this.$rootEl.html(view.render().$el);
  }
});