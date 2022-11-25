const FormularioProveedor =()=>{
    return(
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
    )
}

export default FormularioProveedor