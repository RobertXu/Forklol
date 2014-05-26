Forklol.Views.RegistrationView = Backbone.View.extend({
    template: JST['users/registration'],

    events: {
        'click #register': 'registerUser'
    },

    registerUser: function(event){
        debugger
        event.preventDefault();

        $form = $('form');

        $form.remove('.alert');
        $failure = $("<div class='alert alert-danger'>Unable to register user.</div>");

        var params = $form.serializeJSON();
        var user = new Forklol.Models.UserRegistration(params.user);

        user.save(params, {
            success: function(userSession, response) {
                console.log("this worked");
                Backbone.history.navigate("#", {trigger: true});
            },
            error: function(userSession, response) {
                debugger
                console.log("this did not work");
               $form.prepend($failure);
            }
        });
    },

    render: function () {
        var content = this.template();
        this.$el.html(content);
        return this;
    }
});