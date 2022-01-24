Forklol.Views.HomePage = Backbone.View.extend({
  template: JST['home_page'],

  initialize: function(options) {
        this.options = options;
    },
  render: function(){
    var content = this.template();

    this.$el.html(content);

    return this;
  }
});

