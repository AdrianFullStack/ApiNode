import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const User = new Schema({
    first_name: {
        type: String,
        required: 'Ingrese sus nombres'
    },
    last_name: {
        type: String,
        required: 'Ingrese sus apellidos'
    },
    email: {
        type: String,
        required: 'Ingrese su correo'
    },
    password: {
        type: String,
        required: 'Ingrese sus contraseña'
    },
    company: {
        type: String,
    },
    phone: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})