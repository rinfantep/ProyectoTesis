import axios from "axios";

const seguimientosApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/seguimientos/",
});

export const getAllSeguimientos = () => seguimientosApi.get('/');

export const getSeguimiento = (nombre) => seguimientosApi.get(`/${nombre}/`);

export const createSeguimiento = (seguimientos) => seguimientosApi.post('/', seguimientos);

export const deleteSeguimiento = (nombre) => seguimientosApi.delete(`/${nombre}/`);

export const updateSeguimiento = (nombre, seguimientos) => seguimientosApi.put(`/${nombre}/`, seguimientos);