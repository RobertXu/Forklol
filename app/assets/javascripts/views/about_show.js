Forklol.Views.AboutShow = Backbone.View.extend({
  template: JST['about_show'],

  render: function(){
    var content = this.template();

    this.$el.html(content);
    return this;
  }

})