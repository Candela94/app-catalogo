import { TbPlant2 } from "react-icons/tb";
import { Boton } from '../../components/boton/Boton';
import { NavLink } from 'react-router';


import './login.css'
import { useState } from "react";

const Login = () => {


  const [pass, setPass] = useState("")
  const [email, setEmail] = useState("")


const userData = {pass, email}


  const handleEnviar = (e) => {
    e.preventDefault(userData);
  }




  return (
    <>


      <main className="Main-login">
        <div className="Formulario-intro">
          <h1 className='Formulario-titulo'>Log in</h1>
          <TbPlant2 className='Logo' />

        </div>
        <form action="GET" onSubmit={handleEnviar} className="Formulario">



          <input onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            className="Formulario-input" placeholder='email' required />



          <input onChange={(e) => setPass(e.target.value)}
            value={pass}
            type="passw
         ord" className="Formulario-input" placeholder='Contraseña' required />


          <div className="Formulario-botones">
            <NavLink to='/'><Boton>Entrar</Boton></NavLink>
            <NavLink to='/registro'><p className="Boton-usuario">Todavía no soy usuarix</p></NavLink>
          </div>

        </form>


      </main>

    </>
  );
}

export default Login;