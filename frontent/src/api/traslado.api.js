import axios from "axios";

const trasladoApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/traslado/",
});

export const getAllTraslado = () => trasladoApi.get('/');

export const getTraslado = (nombre) => trasladoApi.get(`/${nombre}/`);

export const createTraslado = (tras) => trasladoApi.post('/', tras);

export const deleteTraslado = (nombre) => trasladoApi.delete(`/${nombre}/`);

export const updateTraslado = (nombre, tras) => trasladoApi.put(`/${nombre}/`, tras);