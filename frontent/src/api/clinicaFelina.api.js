import axios from "axios";

const clinicaFelinaApi = axios.create ({
    baseURL: "http://localhost:8000/api/v1/letalidadFelina/",
});

export const getAllClinicaFelina = () => clinicaFelinaApi.get('/');

export const getClinicaFelina = (nombre) => clinicaFelinaApi.get(`/${nombre}/`);

export const createClinicaFelina = (enferm) => clinicaFelinaApi.post('/', enferm);

export const deleteClinicaFelina = (nombre) => clinicaFelinaApi.delete(`/${nombre}/`);

export const updateClinicaFelina = (nombre, enferm) => clinicaFelinaApi.put(`/${nombre}/`, enferm);