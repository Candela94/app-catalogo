

import { useState } from "react"


const Formulario = () => {

    const VITE_URL = import.meta.env.VITE_URL

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio:0,
        imagen:""
    })

    const [imageUrl, setImageUrl] = useState("/no-image.png")
    const [idProduct, setIdProduct] = useState('67d3f0acbe96443e45c0c445')








    const handleImageUpload = async (e) => {
        const file =  e.target.files[0];
        //console.log(file);

        if(!file) return;

        const formDataImagen = new FormData();
        formDataImagen.append('imgprod', file)


        try{


            const response = await fetch(`${VITE_URL}/api/v1/productos/${idProduct}/imagen`, {

                method: 'PUT',
                body:formDataImagen


            });   //ruta de index.route + localhost 

            if(response.ok) {
                const data = await response.json();
                console.log("datos del backend son: ", data)
                setImageUrl(data.data.imageUrl)
            }


        } catch(error) {

                console.error("Error al enviar la imagen", error)

        }


    }







    const handleSubmit = async (e) => {
        e.preventDefault();

        // const datosFormu = new FormData();

        // Object.entries(formData).forEach(([key, value]) => {
        //     datosFormu.append(key, value)
        // })




        try{


            const response = await fetch(`${VITE_URL}/api/v1/productos/${idProduct}`, {

                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(formData)


            });   //ruta de index.route + localhost 

            if(response.ok) {
                const data = await response.json();
                console.log("datos del backend son: ", data)
            }


        } catch(error) {

                console.error("Error al enviar el formulario", error)

        }



    }

    return (
        <>

            <h1>Formulario para editar producto: {formData.title}</h1>
            <div>
                {/* vista prevua de la imagen */}
                <img src={imageUrl} alt={formData.title} />
            </div>


            <form onSubmit={handleSubmit}>

                <label htmlFor="title-input">Nombre</label>
                <input type="text"
                    value={formData.nombre}
                    onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                    id="title-input" />




                <label htmlFor="title-input">Precio</label>
                <input type="number"
                    value={formData.precio}
                    onChange={e => setFormData({ ...formData, precio: e.target.value })}
                    id="title-input" />





                <label htmlFor="image-input">Imagen</label>
                <input type="file" id="image-input" accept="image/*" onChange={handleImageUpload} />


                <button type="submit">Enviar</button>
            </form>

        </>
    )
}


export default Formulario