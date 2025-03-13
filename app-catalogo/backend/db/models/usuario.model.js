
import mongoose from 'mongoose'

const options = {
    collection: 'usuarios',
    strict: true,

    collation: {
        locale:"es",
        strength: 1,
    }
}


const usuarioSchema = new mongoose.Schema({

    nombre: String,
    email: String,
    isAdmin: Boolean,

    
    compras: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Compra'
    }]

}, options)



export const Usuario = mongoose.model("Usuario", usuarioSchema)