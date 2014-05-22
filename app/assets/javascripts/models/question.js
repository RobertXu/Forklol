Forklol.Models.Question = Backbone.Model.extend({
  parse: function (response) {
    if (response.triggers){
      debugger
      this.set({triggers: JSON.parse(response.triggers)});
    }
    return response;
  }
})