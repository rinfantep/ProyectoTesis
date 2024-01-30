import axios from "axios";

const animalesApi = axios.create ({
    baseURL: "http://localhost:8000/api/v1/animales/",
});

export const getAllAnimales = () => animalesApi.get('/');

export const getAnimal = (nombre) => animalesApi.get(`/${nombre}/`);

export const createAnimal = (anim) => animalesApi.post('/', anim);

export const deleteAnimal = (nombre) => animalesApi.delete(`/${nombre}/`);

export const updateAnimal = (nombre, anim) => animalesApi.put(`/${nombre}/`, anim);