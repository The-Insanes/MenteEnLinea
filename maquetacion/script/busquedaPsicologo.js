// comentario de prueba 2

// Arreglo de regiones con ciudades
const regionesConCiudades = [
  { region: "Arica y Parinacota", ciudades: ["Arica", "Putre", "Camarones"] },
  { region: "Tarapacá", ciudades: ["Iquique", "Alto Hospicio", "Pozo Almonte"] },
  { region: "Antofagasta", ciudades: ["Antofagasta", "Calama", "Tocopilla"] },
  { region: "Atacama", ciudades: ["Copiapó", "Vallenar", "Chañaral"] },
  { region: "Coquimbo", ciudades: ["La Serena", "Coquimbo", "Illapel"] },
  { region: "Valparaíso", ciudades: ["Valparaíso", "Viña del Mar", "Quilpué"] },
  { region: "Metropolitana de Santiago", ciudades: ["Santiago", "Maipú", "Puente Alto"] },
  { region: "Libertador General Bernardo O'Higgins", ciudades: ["Rancagua", "Rengo", "San Fernando"] },
  { region: "Maule", ciudades: ["Talca", "Curicó", "Linares"] },
  { region: "Ñuble", ciudades: ["Chillán", "Chillán Viejo", "Bulnes"] },
  { region: "Biobío", ciudades: ["Concepción", "Talcahuano", "Los Ángeles"] },
  { region: "La Araucanía", ciudades: ["Temuco", "Victoria", "Angol"] },
  { region: "Los Ríos", ciudades: ["Valdivia", "La Unión", "Los Lagos"] },
  { region: "Los Lagos", ciudades: ["Puerto Montt", "Osorno", "Castro"] },
  { region: "Aysén del General Carlos Ibáñez del Campo", ciudades: ["Coyhaique", "Puerto Aysén", "Chile Chico"] },
  { region: "Magallanes y de la Antártica Chilena", ciudades: ["Punta Arenas", "Puerto Natales", "Porvenir"] }
];

// Función para llenar el select con las regiones y ciudades
function llenarSelect() {
  const select = document.getElementById("selectUbicaciones");

  // Recorre el arreglo de regiones con ciudades
  regionesConCiudades.forEach(region => {
      const optgroup = document.createElement("optgroup");
      optgroup.label = region.region;

      // Agrega las ciudades como opciones dentro de cada optgroup
      region.ciudades.forEach(ciudad => {
          const option = document.createElement("option");
          option.value = ciudad;
          option.textContent = ciudad;
          optgroup.appendChild(option);
      });

      // Agrega el optgroup al select
      select.appendChild(optgroup);
  });
}

// Llama a la función para llenar el select cuando se carga la página



// Arreglo con las áreas de atención psicológica
const areasPsicologicas = [
  "Ansiedad",
  "Depresión",
  "Trastornos de la alimentación",
  "Trastornos del sueño",
  "Trastornos del estado de ánimo",
  // Agrega más áreas según sea necesario
];

// Función para completar el select con las áreas psicológicas
function completarSelect() {
  const select = document.getElementById("selectAreaPsicologica");

  // Recorre el arreglo de áreas psicológicas
  areasPsicologicas.forEach(area => {
      const option = document.createElement("option");
      option.value = area;
      option.textContent = area;
      select.appendChild(option);
  });
}



// Función para llenar los select de ubicaciones y áreas psicológicas
function completarSelects() {
  completarSelect(); // Completa el select de ubicaciones
  llenarSelect(); // Completa el select de áreas psicológicas
}

// Evento que se activa cuando se desplaza la página y al cargar la página

window.onload = completarSelects;

// comentario de prueba
