Forklol.Views.QuestionShow = Backbone.View.extend({
  initialize: function(options){
    this.options = options;
    this.model = options.model;

    if (options.button){
      this.template = JST['questions/show_clicking'];
      this.tagName = options.tagName;
      this.className = options.className;
    } else{
      this.template = JST['questions/show_typing'];
      this.tagName = options.tagName;
    }
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function(){
    var content = this.template({
      question: this.model
    });

    this.$el.html(content);
    return this;
  }
})
