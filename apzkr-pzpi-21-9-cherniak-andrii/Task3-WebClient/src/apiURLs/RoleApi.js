import {$authHost} from "../http/index.js";
import {ALL_ROLES_URL, CREATE_ROLE_URL, DELETE_ROLE_URL, ONE_ROLE_URL, UPDATE_ROLE_URL} from "./urls.js";

export const createRole = async (roleData) => {
    const {data} = await $authHost.post(CREATE_ROLE_URL, roleData);
    return data.newRole;
};

export const getAllRoles = async () => {
    const {data} = await $authHost.get(ALL_ROLES_URL);
    return data.allRoles;
};

export const getOneRole = async (id) => {
    const {data} = await $authHost.get(ONE_ROLE_URL.replace(':id', id))
    return data.role;
};

export const updateOneRole = async (roleData, id) => {
    const {data} = await $authHost.put(UPDATE_ROLE_URL.replace(':id', id), roleData);
    return data.role;
}

export const deleteOneRole = async (id) => {
    const {data} = await $authHost.delete(DELETE_ROLE_URL.replace(':id', id));
    return data.message;
}