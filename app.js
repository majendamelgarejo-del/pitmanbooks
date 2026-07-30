/* ==========================================
   PITMAN BOOKS
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    cargarDestacados();

});

/* ==========================================
   LIBROS DESTACADOS (TEMPORAL)
   En el Paquete 2 se leerán desde libros.json
========================================== */

function cargarDestacados(){

    const destacados = [

        {
            titulo:"Historia Universal",
            autor:"Autor por definir",
            precio:"S/45",
            estado:"Nuevo",
            imagen:"img/libros/libro1.jpg"
        },

        {
            titulo:"El hombre en busca de sentido",
            autor:"Viktor Frankl",
            precio:"S/38",
            estado:"Segunda oportunidad",
            imagen:"img/libros/libro2.jpg"
        },

        {
            titulo:"1984",
            autor:"George Orwell",
            precio:"S/52",
            estado:"Nuevo",
            imagen:"img/libros/libro3.jpg"
        },

        {
            titulo:"Meditaciones",
            autor:"Marco Aurelio",
            precio:"S/40",
            estado:"Nuevo",
            imagen:"img/libros/libro4.jpg"
        }

    ];

    const contenedor = document.getElementById("destacadosGrid");

    if(!contenedor) return;

    destacados.forEach(libro=>{

        const badge = libro.estado==="Nuevo"
            ? "badge nuevo"
            : "badge segunda";

        contenedor.innerHTML += `

        <article class="card">

            <img src="${libro.imagen}" alt="${libro.titulo}">

            <div class="card-body">

                <span class="${badge}">

                    ${libro.estado}

                </span>

                <h3>${libro.titulo}</h3>

                <p>${libro.autor}</p>

                <div class="precio">

                    ${libro.precio}

                </div>

                <a href="#" class="card-btn">

                    Ver detalles

                </a>

            </div>

        </article>

        `;

    });

}

/* ==========================================
   SCROLL SUAVE DEL MENÚ
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(enlace=>{

    enlace.addEventListener("click",function(e){

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});