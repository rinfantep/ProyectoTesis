import axios from "axios";

const sectoresApi = axios.create ({
    baseURL: "http://127.0.0.1:8000/api/v1/sectores/",
});

export const getAllSectores = () => sectoresApi.get('/');

export const getSector = (nombre) => sectoresApi.get(`/${nombre}/`);

export const createSector = (sector) => sectoresApi.post('/', sector);

export const deleteSector = (nombre) => sectoresApi.delete(`/${nombre}/`);

export const updateSector = (nombre, sector) => sectoresApi.put(`/${nombre}/`, sector);