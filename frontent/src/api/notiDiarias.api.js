import axios from "axios";

const notiDiariasApi = axios.create ({
    baseURL: "http://localhost:8000/api/v1/notiDiaria/",
});

export const getAllNotiDiarias = () => notiDiariasApi.get('/');

export const getNotiDiarias = (nombre) => notiDiariasApi.get(`/${nombre}/`);

export const createNotiDiarias = (noti) => notiDiariasApi.post('/', noti);

export const deleteNotiDiarias = (nombre) => notiDiariasApi.delete(`/${nombre}/`);

export const updateNotiDiarias = (nombre, noti) => notiDiariasApi.put(`/${nombre}/`, noti);