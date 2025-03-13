
import './carrito.css'

import { CardCarrito } from "../../components/card/Cards";
import { TbPlant2 } from "react-icons/tb";


const Carrito = () => {
    return ( 
        <>

<main className="Main">

         <div className="Formulario-intro">
          <h1 className='Formulario-titulo'>Tu carrito</h1>
          <TbPlant2 className='Logo' />

        </div>


        <CardCarrito />
        </main>


        <div className="Info-precio">
            <h2>Total</h2>
            <h3>€</h3>
        </div>

        </>
     );
}
 
export default Carrito;