
import { useEffect, useState } from "react";



export const useGet = () => {

    const { VITE_URL } = import.meta.env

    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                let options = {
                    method: 'GET'
                }
                const response = await fetch(VITE_URL)



            } catch (e) {
                console.error('Error al cargar los datos', e)
            }
        }
    })


    return (
        <>




        </>
    );
}