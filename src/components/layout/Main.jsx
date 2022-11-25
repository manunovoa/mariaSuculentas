import FormularioProducto from "../helpers/ FormularioProducto"
import FormularioCliente from "../helpers/FormularioCliente"
import FormularioProveedor from "../helpers/FormularioProveedor"

const Main =()=>{
    return(
        <main>
            <section className="informacion">
                <section className="formularios">
                    <FormularioProducto/>
                    <FormularioCliente/>
                    <FormularioProveedor/>
                </section>
            </section>
            <article className="galeria">
                <img className="galeriaImagen" src="../../../imagen1.avif" alt="img1" />
                <img className="galeriaImagen" src="../../../imagen2.webp" alt="img2" />
            </article>
        </main>
    )
}

export default Main