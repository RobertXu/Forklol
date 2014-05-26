Forklol.Views.SignInView = Backbone.View.extend({
    template: JST['users/sign_in'],

    render: function(){
        var content = this.template();
        this.$el.html(content);
        return this;
    }
});