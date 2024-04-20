$(document).ready(function() {
    $("#myForm").validate({
        rules: {
            name: "required",
            username: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            passwordConfirmation: {
                required: true,
                equalTo: "#password"
            },
            city: "required",
            address: "required"
        },
        messages: {
            name: "Ingresa tu nombre.",
            username: "Ingresa nombre de usuario.",
            email: {
                required: "Ingresa tu correo electrónico.",
                email: "Ingresa un correo electrónico válido."
            },
            password: {
                required: "Ingresa tu contraseña.",
                minlength: "La contraseña debe tener al menos 8 caracteres."
            },
            passwordConfirmation: {
                required: "Por favor, confirma tu contraseña.",
                equalTo: "Las contraseñas no coinciden."
            },
            phoneNumber: {
                required: "Por favor, ingresa tu número de teléfono.",
                pattern: "Por favor, ingresa un número de teléfono válido."
            },
            city: "Por favor, ingresa tu ciudad.",
            address: "Por favor, ingresa tu dirección."
        }
    });

    $("#passwordConfirmation").rules("add", {
        required: true,
        equalTo: "#password",
        messages: {
            required: "Por favor, confirma tu contraseña.",
            equalTo: "Las contraseñas no coinciden."
        }
    });

});