//Renderizado de productos Modern Tayloring
function dibujarProductos() {
    let productos = retornarProdLocalS();
    let contenidoCard = "";

    for (let producto of productos) {
        if (producto.categoria == 1) {
            contenidoCard += `
            <div class="col-md-6 col-xl-3">
                <div class="card border-0 p-5">
                    <img src="${producto.imagen}" class="card-img-top" alt="">
                    <div class="card-body d-flex align-items-center flex-column justify-content-around">
                    <h5 class="fs-6">${producto.nombre}</h5>
                    <p class="card-text text-secondary">$U ${producto.precio}</p>
                    <a class="btn text-dark fw-bold border-0" title="Agregar al carrito" onclick="agregarAlCarrito(${producto.id})">Agregar</a>
                    </div>
                </div>
            </div>
            `;
        }
    }

    document.getElementById("contenedor_cards").innerHTML = contenidoCard;
}

//Renderizado de productos Retro StreetWear
function dibujarProductosRetro() {
    let productos = retornarProdLocalS();
    let contenidoCard = "";

    for (let producto of productos) {
        if (producto.categoria == 2) {
            contenidoCard += `
            <div class="col-md-6 col-xl-3">
                <div class="card border-0 p-5">
                    <img src="${producto.imagen}" class="card-img-top" alt="">
                    <div class="card-body d-flex align-items-center flex-column justify-content-around">
                    <h5 class="fs-6">${producto.nombre}</h5>
                    <p class="card-text text-secondary">$U ${producto.precio}</p>
                    <a id="btn_agregarAlCarrito${producto.id}" class="btn text-dark fw-bold border-0" title="Agregar al carrito" onclick="agregarAlCarrito(${producto.id})">Agregar</a>
                    </div>
                </div>
            </div>
            `;
        }
        
    }

    document.getElementById("contenedor_cards_retro").innerHTML = contenidoCard;
}

guardarProdLocalS(productos);
actualizarBtnCarrito();
dibujarProductos();
dibujarProductosRetro();