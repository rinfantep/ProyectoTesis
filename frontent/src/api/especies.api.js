import axios from "axios";

const especiesApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/especies/",
});

export const getAllEspecies = () => especiesApi.get('/');

export const getEspecie = (nombre) => especiesApi.get(`/${nombre}/`);

export const createEspecie = (especie) => especiesApi.post('/', especie);

export const deleteEspecie = (nombre) => especiesApi.delete(`/${nombre}/`);

export const updateEspecie = (nombre, especie) => especiesApi.put(`/${nombre}/`, especie);