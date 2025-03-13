
import './producto.css'
import { Boton } from '../../components/boton/Boton';
import { useState } from 'react';
import { TbPlant2 } from "react-icons/tb";

const Producto = () => {

    const [openMenu, setOpenMenu] = useState(false)



    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (


        <>

           


            <main className="Main-producto">
            <div className="Formulario-intro">
            <h1 className='Formulario-titulo'>Nombre del producto</h1>
            <TbPlant2 className='Logo'/>
            
        </div>
                <img src="../../public/img/default.png" alt="producto" className="Producto-img" />

                <div className="Botones">

                    <Boton onClick={handleOpenMenu}>Ver detalles</Boton>
                    <Boton>Comprar</Boton>

                </div>


                {openMenu && (

                    <div className="Informacion-producto">
                        <h1>Detalles del producto</h1>
                        <p>Descripción</p>

                    </div>

                )}


            </main>

        </>


    );
}

export default Producto;