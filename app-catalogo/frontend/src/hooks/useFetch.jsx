
import { useEffect, useState } from "react";



export const useFetch = () => {

    const { VITE_URL } = import.meta.env

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


    return {
        
        datos,
        loading,
        error,
    };
};