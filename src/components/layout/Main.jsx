const Main =()=>{
    return(
        <main>
            <section className="informacion">
                    <section className="formularios">
                        <section className="formularioProducto">
                                <h1 class="titulo">Almacenar producto</h1>
                                    <form action="">
                                        <input class="form_item" type="text" placeholder="Nombre"/>
                                        <input class="form_item" type="text" placeholder="Sexo"/>
                                        <input class="form_item" type="text" placeholder="Referencia"/>
                                        <input class="form_item" type="text" placeholder="Tamaño"/>
                                        <input class="form_item" type="text" placeholder="Cantidad"/>
                                        <input class="form_item2" type="text" placeholder="Descripcion"/>
                                        <input class="boton" type="submit" value="Agregar"/>
                                    </form>
                            </section>

                        <section className="formularioCliente"> 
                            <h1 class="titulo">Informacion del cliente</h1>
                            <form action="">
                                <input class="form_item" type="text" placeholder="Nombre"/>
                                <input class="form_item" type="text" placeholder="Documento"/>
                                <input class="form_item" type="text" placeholder="Correo"/>
                                <input class="form_item" type="text" placeholder="Direccion"/>
                                <input class="form_item" type="text" placeholder="Barrio"/>
                                <input class="form_item" type="text" placeholder="Telefono"/>
                                <input class="boton" type="submit" value="Agregar"/>
                            </form>
                        </section>
                        
                        <section className="formularioProveedor">
                            <h1 class="titulo">Informacion del proveedor</h1>
                                <form action="">
                                    <input class="form_item" type="text" placeholder="Nombre"/>
                                    <input class="form_item" type="text" placeholder="Nit"/>
                                    <input class="form_item" type="text" placeholder="Correo"/>
                                    <input class="form_item" type="text" placeholder="Direccion"/>
                                    <input class="form_item" type="text" placeholder="Telefono"/>
                                    <input class="form_item" type="text" placeholder="Producto"/>
                                    <input class="form_item2" type="text" placeholder="Descripcion"/>
                                    <input class="boton" type="submit" value="Agregar"/>
                                </form>
                        </section>
                    </section>
            </section>
            <article className="galeria">
                <img className="galeriaImagen" src="../../../public/imagen1.avif" alt="img1" />
                <img className="galeriaImagen" src="../../../public/imagen2.webp" alt="img2" />
            </article>
        </main>
    )
}

export default Main