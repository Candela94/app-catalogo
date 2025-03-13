



import mongoose from 'mongoose'

const options = {
    collection: 'producto',
    strict: true,

    collation: {
        locale:"es",
        strength: 1,
    }
}


const productoSchema = new mongoose.Schema({

    nombre: String, 
    descripcion: String,
    categoria: String,
    precio: Number,

    usuarios: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
    }],

    compras: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Compra'
    }]

}, options)


export const Producto = mongoose.model("Producto", productoSchema)