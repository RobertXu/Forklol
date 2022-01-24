Forklol.Views.AboutShow = Backbone.View.extend({
  template: JST['about_show'],	
 
  initialize: function(options) {
        this.options = options;
    },
  
  render: function(){
    var content = this.template();

    this.$el.html(content);
    return this;
  }

})
