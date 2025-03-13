
import './cards.css'
import { NavLink } from 'react-router'

import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from 'react';

import { GoPlus } from "react-icons/go";

import { GrFormSubtract } from "react-icons/gr";


export const Card = ({ nombre, precio }) => {
    return (

        <>


            <div className="Card">

                <FaRegHeart className='Card-like' />
                <img src="../../public/img/default.png" alt="planta" className="Card-imagen" />

                <div className="Card-info">
                    <h3>Nombre {nombre}</h3>
                    <h5>{precio}€</h5>
                </div>

                <button className='Card-button'><FaPlus /></button>

            </div>
        </>
    );
}



export const CardCarrito = () => {

    const [cant, setCant] = useState(1);


    const handleSumar = (e) => {
        setCant((prevState) => prevState + 1)
    }

    const handleRestar = (e) => {
        if (cant > 1) {

            setCant((prevState) => prevState - 1)

        }
    }

    return (
        <>
            <div className="Card-carrito">


                <div className="Img-info">
                    <img src="../../public/img/default.png" alt="planta" className="Carrito-imagen" />

                    <div className="Info-cantidad">

                        <div className="Info-producto">
                            <h3>Nombre</h3>

                        </div>

                        <div className="iconos">

                            <GrFormSubtract onClick={handleRestar} />
                            <p>{cant}</p>

                            <GoPlus onClick={handleSumar} />

                        </div>

                    </div>
                </div>
                <p>€</p>

            </div>

        </>
    )


}