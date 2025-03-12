import {createBrowserRouter} from 'react-router'


import Home from "../../pages/home/Home";
import Catalogo from "../../pages/catalogo/Catalogo";
import Perfil from "../../pages/perfil/Perfil";
import Producto from "../../pages/producto/Producto";
import Error from '../../pages/error/Error';
import Carrito from '../../pages/carrito/Carrito';
import Layout from '../../Layout';


const router = createBrowserRouter([{


    path:'/',
    element: <Layout />,
    children: [
        {
            index: true, //ruta por defecto
            element: <Home /> 

        },
        {
            path:"/catalogo",
            element: <Catalogo />
        },
        




        {
            path:"/perfil",
            element:<Perfil /> ,
        },




     


        {
            path:"/producto",
            element: <Producto />
        },

        {
            path:"/carrito",
            element: <Carrito />
        },


      
        {
            path:"*",
            element:<Error />
        }

    ]


}])


export default router