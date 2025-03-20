
import { useEffect,useState} from "react";



export const useGet = () => {

    const [datos, setDatos ] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try{

                

            }catch(e) {
                console.error('Error al cargar los datos', e)
            }
        }
    })
   

    return ( 
        <>
        


        
        </>
     );
}