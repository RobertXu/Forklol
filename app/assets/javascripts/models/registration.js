Forklol.Models.UserRegistration = Backbone.Model.extend({
    url: '/users',

    defaults: {
        "email": "",
        "password": "",
        "password_confirmation": ""
    }
});