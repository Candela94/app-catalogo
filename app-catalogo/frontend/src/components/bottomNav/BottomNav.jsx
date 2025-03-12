
import './bottomNav.css'
import { FaCartShopping } from "react-icons/fa6";
import { TbPlant2 } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import {NavLink} from 'react-router'


export const BottomNav = () => {
    return (
        <>

            <footer className="Footer">

                <nav className="Footer-nav">
                    <ul className="Footer-ul">
                        <NavLink to='/perfil'><li className="Footer-li"><AiOutlineUser className='Footer-icons' /></li></NavLink>
                       <NavLink to='/'> <li className="Footer-li"><TbPlant2 className='Footer-logo'/></li></NavLink>
                        <NavLink to='/carrito'><li className="Footer-li"><FaCartShopping className='Footer-icons' /></li></NavLink>
                    </ul>
                </nav>
            </footer>


        </>
    );
}