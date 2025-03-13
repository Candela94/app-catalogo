
import './perfil.css'
import { useState } from 'react';
import { TbPlant2 } from "react-icons/tb";
import { Boton } from '../../components/boton/Boton';
import { NavLink } from 'react-router';


const Perfil = () => {

const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [repeatPassword, setRepeatPassword] = useState("")


const userData = {nombre, email, password}



const handleEnviar = (e) => {
    e.preventDefault(userData)
}


    return ( 
    
    
    <>
   <main className="Main-perfil">
        <div className="Formulario-intro">
            <h1 className='Formulario-titulo'>Registro</h1>
            <TbPlant2 className='Logo'/>
            
        </div>
    <form action="GET" onSubmit={handleEnviar} className="Formulario">


        <input type="text" className="Formulario-input" placeholder='Nombre' required
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}/>

        <input type="text" className="Formulario-input" placeholder='email' required
        onChange={(e) => setEmail(e.target.value)}
        value={email}/>

        <input type="password" className="Formulario-input" placeholder='Contraseña' required
        onChange={(e) => setPassword(e.target.value)}
        value={password}/>

        <input type="password" className="Formulario-input" placeholder='Repite la contraseña' required
        onChange={(e) => setRepeatPassword(e.target.value)}
        value={repeatPassword}/>

        <div className="Formulario-botones">
           <NavLink to='/'><Boton>Regístrate</Boton></NavLink> 
            <NavLink to='/login'><p className="Boton-usuario">Ya soy usuarix</p></NavLink>
        </div>

    </form>


    </main>
    </>
    

);
}
 
export default Perfil;