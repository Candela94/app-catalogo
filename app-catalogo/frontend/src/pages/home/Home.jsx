
import { NavLink } from "react-router";
import { Card } from "../../components/card/Cards";
import './home.css'
import { TbPlant2 } from "react-icons/tb";

const Home = () => {
    return ( 
    
    
    <>
        <main className="Main">
        <div className="Formulario-intro">
            <h1 className='Formulario-titulo'>¡Bienvenido, usuario!</h1>
            <TbPlant2 className='Logo'/>
            
        </div>

        <h2 className="Main-h2">Nuestro catálogo</h2>

        <NavLink to='/producto'><Card /></NavLink>
        </main>
    </>
    

);
}
 
export default Home