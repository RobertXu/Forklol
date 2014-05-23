Forklol.Models.Question = Backbone.Model.extend({
  parse: function (response) {
    if (response.triggers){
      this.set({triggers: JSON.parse(response.triggers)});
    }
    return response;
  }
})