import axios from "axios";

const tipoSectoresApi = axios.create ({
    baseURL: "http://localhost:8000/api/v1/tipoSectores/",
});

export const getAllTipoSector = () => tipoSectoresApi.get('/');

export const getTipoSector = (nombre) => tipoSectoresApi.get(`/${nombre}/`);

export const createTipoSector = (sector) => tipoSectoresApi.post('/', sector);

export const deleteTipoSector = (nombre) => tipoSectoresApi.delete(`/${nombre}/`);

export const updateTipoSector = (nombre, sector) => tipoSectoresApi.put(`/${nombre}/`, sector);