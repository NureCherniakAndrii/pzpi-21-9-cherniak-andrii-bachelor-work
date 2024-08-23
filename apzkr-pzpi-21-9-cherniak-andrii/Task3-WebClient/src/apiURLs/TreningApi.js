import {$authHost} from "../http/index.js";
import {
    CREATE_TRENING, DELETE_TRENING,
    GET_ALL_TRENINGS,
    ONE_TRENING,
    UPDATE_TRRENING
} from "./urls.js";

export const createTrening = async (treningData) => {
    const { data } = await $authHost.post(CREATE_TRENING, treningData);
    return data;
};

export const getAllTrenings = async () => {
    const { data } = await $authHost.get(GET_ALL_TRENINGS);
    console.log(data.allTrenings);
    return data.allTrenings;
};

export const getTreningById = async (id) => {
    const { data } = await $authHost.get(`${ONE_TRENING.replace(':id', id)}`);
    return data.trening;
};

export const updateTreningById = async (id, treningData) => {
    const { data } = await $authHost.put(`${UPDATE_TRRENING.replace(':id', id)}`, treningData);
    return data.updatedTrening;
};

export const deleteTreningById = async (id) => {
    const { data } = await $authHost.delete(`${DELETE_TRENING.replace(':id', id)}`);
    return data.message;
};