const FormularioProducto =()=>{
    return(
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
    )
}

export default FormularioProducto