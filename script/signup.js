function validaDV(rut) {
    // Se separa el número del dígito verificador
    const [numero, dv] = rut.replace("-K", "-k").split("-");
  
    // Aquí se debe aplicar módulo 11. La función se extrajo de:
    // https://validarutchile.cl/calcular-rut-en-javascript.php
    // ! OJO: Es una función que se llama a sí misma.
    const dvVer = ((T) => {
      let M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    })(numero);
  
    // Se compara el dígito verificador calculado con el ingresado
    return dvVer == dv;
  }
  
  /**
   * Se agregan las reglas personalizadas al plugin jQuery Validation. Se
   * encargan de validar el formato (sin puntos, con guión) y el dígito verificador.
   * @see https://jqueryvalidation.org/
   */
  $.validator.addMethod(
    "rut",
    function (value, element) {
      return this.optional(element) || /^[0-9]{7,8}-[0-9Kk]{1}$/.test(value);
    },
    "El RUT ingresado es inválido"
  );
  
  $.validator.addMethod(
    "rutdv",
    function (value, element) {
      return this.optional(element) || validaDV(value);
    },
    "El dígito verificador del RUT es inválido"
  );
$(document).ready(function() {
    $("#signup_form").validate({
        rules: {
            name: "required",
            username: "required",
            rut: {
                required: true,
                rut: true,
                rutdv: true
            },
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
            phoneNumber: "required",
            city: "required",
            address: "required",
            tyc:"required"
        },
        messages: {
            name: "Ingresa tu nombre.",
            username: "Ingresa nombre de usuario.",
            rut: {
                required: "Ingresa tu RUT.",
                rut: "Ingresa sin puntos y con guion.",
                rutdv: "Ingresa rut valido."
            },
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
            },
            city: "Por favor, ingresa tu ciudad.",
            address: "Por favor, ingresa tu dirección.",
            tyc: "Debe aceptar terminos y condiones del usuario para continuar."
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