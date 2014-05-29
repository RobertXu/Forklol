Forklol.Views.QuestionShow = Backbone.View.extend({
  initialize: function(options){
    this.tagName = options.tagName;
    this.model = options.model;
    this.className = options.className;
    if (options.button){
      this.template = JST['questions/show_clicking'];
    } else{
      this.template = JST['questions/show_typing'];
    }
    // this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['questions/show'],

  templateClicking: JST['questions/show_clicking'],

  render: function(){
    var content = this.templateClicking({
      question: this.model
    });

    this.$el.html(content);
    return this;
  }
})