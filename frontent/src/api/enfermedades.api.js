import axios from "axios";

const enfermedadesApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/enfermedades/",
});

export const getAllEnfermedades = () => enfermedadesApi.get('/');

export const getEnfermedad = (nombre) => enfermedadesApi.get(`/${nombre}/`);

export const createEnfermedad = (enferm) => enfermedadesApi.post('/', enferm);

export const deleteEnfermedad = (nombre) => enfermedadesApi.delete(`/${nombre}/`);

export const updateEnfermedad = (nombre, enferm) => enfermedadesApi.put(`/${nombre}/`, enferm);