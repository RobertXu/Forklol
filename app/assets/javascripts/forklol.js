window.Forklol = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  GameLogic: {},
  initialize: function() {
     console.log('Hello from Backbone!');
     Forklol.router = new Forklol.Router({
       $rootEl: $('#content')
     });
     Backbone.history.start();
  }
};

$(document).ready(function(){
  Forklol.initialize();
});

