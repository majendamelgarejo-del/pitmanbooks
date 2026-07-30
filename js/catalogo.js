/* ==========================================
   PITMAN BOOKS
   catalogo.js
========================================== */

let libros = [];
let librosFiltrados = [];

document.addEventListener("DOMContentLoaded", async () => {

    await cargarLibros();

    configurarBuscador();

    configurarFiltros();

});


/* ==========================================
   CARGAR LIBROS
========================================== */

async function cargarLibros() {

    try {

        const respuesta = await fetch("libros.json");

        libros = await respuesta.json();

        librosFiltrados = [...libros];

        mostrarLibros(librosFiltrados);

    } catch (error) {

        console.error("Error cargando libros:", error);

    }

}


/* ==========================================
   MOSTRAR LIBROS
========================================== */

function mostrarLibros(lista) {

    const grid = document.getElementById("catalogoGrid");

    const contador = document.getElementById("contador");

    grid.innerHTML = "";

    contador.textContent = `${lista.length} libro(s) encontrado(s)`;

    lista.forEach(libro => {

        let badge = "badge nuevo";

        if (libro.estado === "Nuevo") {
    estadoTexto = "✨ Nuevo";
} else if (libro.estado === "Casi nuevo") {
    estadoTexto = "❤️ Selección cuidada";
} else if (libro.estado === "De segunda") {
    estadoTexto = "📖 Buen estado";
}

        const whatsapp = `https://wa.me/51920600303?text=${encodeURIComponent(
            `Hola, vi el libro "${libro.titulo}" en Pitman Books. ¿Podrías confirmar si aún está disponible? Gracias.`
        )}`;

        grid.innerHTML += `

        <article class="card">

            <img src="${libro.imagen}" alt="${libro.titulo}">

            <div class="card-body">

                <span class="${badge}">
                    ${libro.estado}
                </span>

                <h3>${libro.titulo}</h3>

                <p>${libro.autor}</p>

                <div class="precio">
                    S/${libro.precio}
                </div>

                <div class="acciones">

                    <a href="libro.html?id=${libro.id}" class="card-btn">
                        Ver detalles
                    </a>

                    <a href="${whatsapp}"
                       target="_blank"
                       class="card-btn whatsapp">

                        Consultar

                    </a>

                </div>

            </div>

        </article>

        `;

    });

}


/* ==========================================
   BUSCADOR
========================================== */

function configurarBuscador() {

    const input = document.getElementById("buscar");

    input.addEventListener("input", () => {

        const texto = input.value.toLowerCase();

        librosFiltrados = libros.filter(libro =>

            libro.titulo.toLowerCase().includes(texto) ||

            libro.autor.toLowerCase().includes(texto)

        );

        mostrarLibros(librosFiltrados);

    });

}


/* ==========================================
   FILTROS
========================================== */

function configurarFiltros() {

    const botones = document.querySelectorAll(".filtros button");

    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            botones.forEach(b => b.classList.remove("activo"));

            boton.classList.add("activo");

            const categoria = boton.textContent.trim();

            if (categoria === "Todos") {

                librosFiltrados = [...libros];

            } else {

                librosFiltrados = libros.filter(libro =>

                    libro.categoria.toLowerCase() === categoria.toLowerCase()

                );

            }

            mostrarLibros(librosFiltrados);

        });

    });

}