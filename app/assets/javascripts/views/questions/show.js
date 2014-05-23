Forklol.Views.QuestionShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  tagName: 'tr',

  template: JST['questions/show'],

  render: function(){
    var content = this.template({
      question: this.model
    });

    this.$el.html(content);
    return this;
  }
})