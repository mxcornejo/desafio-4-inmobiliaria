// Propiedades alquiler
const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXBhcnRhbWVudG8lMjBtb2Rlcm5vJTIwY2VyY2ElMjBkZSUyMHRpZW5kYXMlMjB5JTIwdHJhbnNwb3J0ZSUyMHAlQzMlQkFibGljb3xlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Apartamento moderno cerca de tiendas y transporte público.",
    ubicacion: "Madrid, España",
    habitaciones: 2,
    banos: 1,
    costo: 1000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en las afueras",
    src: "https://images.unsplash.com/photo-1711730424026-acc66c0dafe9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FzYSUyMGVuJTIwbGFzJTIwYWZ1ZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Casa espaciosa con jardín, ideal para familias.",
    ubicacion: "Barcelona, España",
    habitaciones: 4,
    banos: 3,
    costo: 1500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Estudio en la playa",
    src: "https://plus.unsplash.com/premium_photo-1694030762894-6a8d8b847719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzYSUyMEVzdHVkaW8lMjBlbiUyMGxhJTIwcGxheWF8ZW58MHx8MHx8fDA%3D",
    descripcion:
      "Pequeño estudio con vistas al mar y acceso directo a la playa.",
    ubicacion: "Valencia, España",
    habitaciones: 1,
    banos: 1,
    costo: 800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Ático en el casco antiguo",
    src: "https://plus.unsplash.com/premium_photo-1668333188570-abf16bdde969?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUMzJTgxdGljbyUyMGVuJTIwZWwlMjBjYXNjbyUyMGFudGlndW98ZW58MHx8MHx8fDA%3D",
    descripcion: "Ático con terraza y vistas a la ciudad histórica.",
    ubicacion: "Sevilla, España",
    habitaciones: 3,
    banos: 2,
    costo: 1300,
    smoke: false,
    pets: false,
  },
];

// Propiedades venta
const propiedades_venta = [
  {
    nombre: "Chalet con piscina",
    src: "https://plus.unsplash.com/premium_photo-1682377521724-ececd24a83b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhbGV0JTIwY29uJTIwcGlzY2luYXxlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Amplio chalet con jardín y piscina privada.",
    ubicacion: "Marbella, España",
    habitaciones: 5,
    banos: 4,
    costo: 500000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Piso céntrico",
    src: "https://images.unsplash.com/photo-1614083511337-49069ad58b9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGlzbyUyMGMlQzMlQTludHJpY298ZW58MHx8MHx8fDA%3D",
    descripcion: "Piso recién reformado en el corazón de la ciudad.",
    ubicacion: "Madrid, España",
    habitaciones: 3,
    banos: 2,
    costo: 350000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa de campo",
    src: "https://plus.unsplash.com/premium_photo-1683586218149-e3b33ff9c02a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FzYSUyMGRlJTIwY2FtcG98ZW58MHx8MHx8fDA%3D",
    descripcion: "Encantadora casa de campo rodeada de naturaleza.",
    ubicacion: "Granada, España",
    habitaciones: 4,
    banos: 3,
    costo: 420000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo",
    src: "https://plus.unsplash.com/premium_photo-1661905571170-94e0c54d8e6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXBhcnRhbWVudG8lMjBkZSUyMGx1am98ZW58MHx8MHx8fDA%3D",
    descripcion: "Apartamento de lujo con acabados de alta calidad.",
    ubicacion: "Barcelona, España",
    habitaciones: 2,
    banos: 2,
    costo: 600000,
    smoke: false,
    pets: false,
  },
];

function generarSeccion(propiedades, cantidad) {
  const propiedadesLimitadas = propiedades.slice(0, cantidad);
  let seccion = "";
  for (let propiedad of propiedadesLimitadas) {
    seccion += `
          <div class="col-md-4 mb-4" >
              <div class="card" >
                <img
                  src="${propiedad.src}"
                  class="card-img-top"
                  alt="${propiedad.descripcion}"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${propiedad.nombre}
                  </h5>
                  <p class="card-text">
                    ${propiedad.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> 
                    ${propiedad.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${
                      propiedad.habitaciones
                    } Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                  ${
                    propiedad.smoke
                      ? "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</p>"
                      : "<p class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</p>"
                  }
                  ${
                    propiedad.pets
                      ? "<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>"
                      : "<p class='text-danger'><i class='fa-solid fa-ban'></i> No se permiten mascotas</p>"
                  }    
        </div>
        </div>
          </div>`;
  }
  return seccion;
}

// 3 propiedades en el home
const elemento_alquiler_home = document.querySelector(
  "#propiedades_alquiler_home"
);
const elemento_venta_home = document.querySelector("#propiedades_venta_home");
if (elemento_alquiler_home) {
  elemento_alquiler_home.innerHTML = generarSeccion(propiedades_alquiler, 3);
}
if (elemento_venta_home) {
  elemento_venta_home.innerHTML = generarSeccion(propiedades_venta, 3);
}

// Mostrar todas las propiedades
const elemento_alquiler = document.querySelector("#propiedades_alquiler");
const elemento_venta = document.querySelector("#propiedades_venta");
if (elemento_alquiler) {
  elemento_alquiler.innerHTML = generarSeccion(
    propiedades_alquiler,
    propiedades_alquiler.length
  );
}
if (elemento_venta) {
  elemento_venta.innerHTML = generarSeccion(
    propiedades_venta,
    propiedades_venta.length
  );
}
