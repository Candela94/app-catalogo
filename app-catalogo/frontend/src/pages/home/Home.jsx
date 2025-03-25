
import { NavLink } from "react-router";
import { Card } from "../../components/card/Cards";
import './home.css'
import { TbPlant2 } from "react-icons/tb";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {

    const {datos,loading,error} = useFetch()

    if(loading) {
        return <p>Cargando datos</p>
    
    }

    if(error) {
        return <p>{error}</p>
    }

    return (
        
    
    
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