$(document).ready(function() {
    $("#login_form").validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Ingresa tu correo electrónico."
            },
            password: {
                required: "Ingresa tu contraseña."
            }
        }
    });

});
