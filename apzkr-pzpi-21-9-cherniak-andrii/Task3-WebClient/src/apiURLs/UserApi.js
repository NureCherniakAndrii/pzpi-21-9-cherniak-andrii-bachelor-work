import {$authHost, $host} from "../http/index.js";
import {ALL_USERS_URL, CHECK_URL, LOGIN_URL} from "./urls.js";

export const login = async (userData) => {
    const {data} = await $host.post(LOGIN_URL, userData);
    return data.token;
};

export const checkToken = async () => {
    const {data} = await $authHost.get(CHECK_URL);
    return data.status;
};

export const getAll = async () => {
    const {data} = await $authHost.get(ALL_USERS_URL);
    return data.users;
}