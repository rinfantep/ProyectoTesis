import axios from "axios";

const municipioApi = axios.create ({
    baseURL: "http://localhost:8000/api/v1/municipios/",
});

export const getAllMunicipio = () => municipioApi.get('/');
    


export const getMunicipio = (nombre) => municipioApi.get(`/${nombre}/`);

export const createMunicipio = (municipio) => municipioApi.post('/', municipio);

export const deleteMunicipio = (nombre) => municipioApi.delete(`/${nombre}/`);

export const updateMunicipio = (nombre, municipio) => municipioApi.put(`/${nombre}/`, municipio);