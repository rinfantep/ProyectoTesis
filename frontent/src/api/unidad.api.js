import axios from "axios";

const unidadApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/unidad/",
});

export const getAllUnidad = () => unidadApi.get('/');

export const getUnidad = (nombre) => unidadApi.get(`/${nombre}/`);

export const createUnidad = (uni) => unidadApi.post('/', uni);

export const deleteUnidad = (nombre) => unidadApi.delete(`/${nombre}/`);

export const updateUnidad = (nombre, uni) => unidadApi.put(`/${nombre}/`, uni);