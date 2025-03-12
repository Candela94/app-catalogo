
import './cards.css'
import {NavLink} from 'react-router'

import { FaPlus } from "react-icons/fa6";

export const Card = () => {
    return (

        <>

       
       <NavLink to='/producto'> <div className="Card">
            <img src="." alt="planta" className="Card-imagen" />
            <h3>Nombre</h3>
            <div className="Boton">
            <button className='Card-button'><FaPlus /></button>
            </div>
        </div></NavLink>
        </>
      );
}