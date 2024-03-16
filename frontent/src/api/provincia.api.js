import axios from "axios";

const provinciaApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/provincias/",
});

export const getAllProvincia = () => provinciaApi.get('/');

export const getProvincia = (nombre) => provinciaApi.get(`/${nombre}/`);

export const createProvincia = (provincia) => provinciaApi.post('/', provincia);

export const deleteProvincia = (nombre) => provinciaApi.delete(`/${nombre}/`);

export const updateProvincia = (nombre, provincia) => provinciaApi.put(`/${nombre}/`, provincia);