const experiencias = [
    { puesto: "Desarrollador FullStack", empresa: "pollos hermano", periodo: "2020 - Presente", descripcion: "Desarrollo de aplicaciones web full stack utilizando Node.js y React.js. Diseño e implementación de bases de datos relacionales con MySQL y bases de datos en tiempo real con Firebase. Experiencia en la creación de APIs RESTful y optimización del rendimiento tanto en el frontend como en el backend." },
    { puesto: "Desarrollador Junior", empresa: "Cemex", periodo: "2018 - 2020", descripcion: "Desarrollo de aplicaciones web full stack utilizando Node.js y React.js. Diseño e implementación de bases de datos relacionales con MySQL y bases de datos en tiempo real con Firebase. Experiencia en la creación de APIs RESTful y optimización del rendimiento tanto en el frontend como en el backend." }
];

const educacion = [
    { titulo: "Grado en Ingeniería Sistemas", institucion: "Universidad del sur", año: "2023" },
    { titulo: "Tecnologo en mecatronica", institucion: "SENA", año: "2016" }
];

// Función para añadir experiencias
function añadirExperiencias() {
    const listaExperiencia = document.getElementById('lista-experiencia');
    experiencias.forEach(exp => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                        ${exp.periodo}<br>
                        ${exp.descripcion}`;
        listaExperiencia.appendChild(li);
    });
}

// Función para añadir educación
function añadirEducacion() {
    const listaEducacion = document.getElementById('lista-educacion');
    educacion.forEach(edu => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${edu.titulo}</strong><br>
                        ${edu.institucion}, ${edu.año}`;
        listaEducacion.appendChild(li);
    });
}

// Llamar a las funciones cuando se cargue la página
window.onload = function() {
    añadirExperiencias();
    añadirEducacion();
};