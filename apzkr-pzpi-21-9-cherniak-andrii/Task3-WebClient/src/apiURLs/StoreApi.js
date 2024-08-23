import {$authHost} from "../http/index.js";
import {ALL_STORES_URL, CREATE_STORE, DELETE_STORE_URL, ONE_STORE_URL, UPDATE_STORE_URL} from "./urls.js";

export const createStore = async (storeData) => {
    const { data } = await $authHost.post(CREATE_STORE, storeData);
    return data;
};

export const getAllStores = async () => {
    const { data } = await $authHost.get(ALL_STORES_URL);
    return data.allStores;
};

export const getStoreById = async (id) => {
    const { data } = await $authHost.get(ONE_STORE_URL.replace(':id', id));
    return data.store;
};

export const updateStoreById = async (id, storeData) => {
    const { data } = await $authHost.put(UPDATE_STORE_URL.replace(':id', id), storeData);
    return data.updatedStore;
};

export const deleteStoreById = async (id) => {
    const { data } = await $authHost.delete(DELETE_STORE_URL.replace(':id', id));
    return data.message;
};
