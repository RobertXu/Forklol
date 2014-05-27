Forklol.Views.HomePage = Backbone.View.extend({
  template: JST['home_page'],

  render: function(){
    var content = this.template();

    this.$el.html(content);

    return this;
  }
});

