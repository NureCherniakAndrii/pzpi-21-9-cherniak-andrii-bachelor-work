import {$authHost} from "../http/index.js";
import {CREATE_PROMSTATUS_URL, ALL_PROMSTATUS_URL, ONE_PROMSTATUS_URL, UPDATE_PROMSTATUS_URL, DELETE_PROMSTATUS_URL} from "./urls.js";

export const createPromStatus = async (promStatusData) => {
    const {data} = await $authHost.post(CREATE_PROMSTATUS_URL, promStatusData);
    return data.newPromStatus;
};

export const getAllPromStatuses = async () => {
    const {data} = await $authHost.get(ALL_PROMSTATUS_URL);
    return data.allPromStatuses;
};

export const getOnePromStatus = async (id) => {
    const {data} = await $authHost.get(ONE_PROMSTATUS_URL.replace(':id', id));
    return data.promStatus;
};

export const updatePromStatus = async (promStatusData, id) => {
    const {data} = await $authHost.put(UPDATE_PROMSTATUS_URL.replace(':id', id), promStatusData);
    return data.promStatus;
};

export const deletePromStatus = async (id) => {
    const {data} = await $authHost.delete(DELETE_PROMSTATUS_URL.replace(':id', id));
    return data.message;
};
