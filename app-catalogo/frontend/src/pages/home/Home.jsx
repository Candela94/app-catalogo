
import { NavLink } from "react-router";
import { Card } from "../../components/card/Cards";
import './home.css'
import { TbPlant2 } from "react-icons/tb";
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";

const Home = () => {

    const  VITE_URL  = import.meta.env.VITE_URL

    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
       

            try {

                const response = await fetch(`${VITE_URL}/api/v1/productos`, {
                    method:'GET',
                    headers: {
                        'Content-Type':'application/json'
                
                    },
                });

                if(!response.ok) {
                    const data = await response.json();
                    setDatos(data);
                } else {
                    throw new Error('No se pudo obtener los datos')
                }
             


            } catch (e) {
                console.error('Error al cargar los datos', e)


            } finally {
                setLoading(false)
            }

            fetchData();
        }
    },[])

        
    return(
    
    <>
        <main className="Main">
        <div className="Formulario-intro">
            <h1 className='Formulario-titulo'>¡Bienvenido, usuario!</h1>
            <TbPlant2 className='Logo'/>
            
        </div>

        <h2 className="Main-h2">Nuestro catálogo</h2>

            <div className="Catalogo-productos">
                {datos.length > 0 ? (
                    datos.map((producto) => (
                        <Card 
                        key={producto._id}
                        nombre={producto.nombre}
                        precio={producto.precio}/>
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )}
            </div>
       
        </main>
    </>
    

);
}
 
export default Home