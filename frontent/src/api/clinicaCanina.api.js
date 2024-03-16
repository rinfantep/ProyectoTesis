import axios from "axios";

const clinicaCaninaApi = axios.create ({
    baseURL: "http://localhost:8000/api/v1/letalidadCanina/",
});

export const getAllClinicaCanina = () => clinicaCaninaApi.get('/');

export const getClinicaCanina = (nombre) => clinicaCaninaApi.get(`/${nombre}/`);

export const createClinicaCanina = (enferm) => clinicaCaninaApi.post('/', enferm);

export const deleteClinicaCanina = (nombre) => clinicaCaninaApi.delete(`/${nombre}/`);

export const updateClinicaCanina = (nombre, enferm) => clinicaCaninaApi.put(`/${nombre}/`, enferm);