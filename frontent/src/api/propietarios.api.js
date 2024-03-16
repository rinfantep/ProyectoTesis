import axios from "axios";

const propietariosApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/propietarios/",
});

export const getAllPropietarios = () => propietariosApi.get('/');

export const getPropietario = (nombre) => propietariosApi.get(`/${nombre}/`);

export const createPropietario = (propietario) => propietariosApi.post('/', propietario);

export const deletePropietario = (nombre) => propietariosApi.delete(`/${nombre}/`);

export const updatePropietario = (nombre, propietario) => propietariosApi.put(`/${nombre}/`, propietario);