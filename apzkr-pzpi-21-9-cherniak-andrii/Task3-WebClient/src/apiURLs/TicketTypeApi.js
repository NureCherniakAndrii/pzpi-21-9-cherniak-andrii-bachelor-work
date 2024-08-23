import {$authHost} from "../http/index.js";
import {
    CREATE_TICKETTYPE_URL,
    ALL_TICKETTYPE_URL,
    ONE_TICKETTYPE_URL,
    UPDATE_TICKETTYPE_URL,
    DELETE_TICKETTYPE_URL
} from "./urls.js";

export const createTicketType = async (ticketTypeData) => {
    const {data} = await $authHost.post(CREATE_TICKETTYPE_URL, ticketTypeData);
    return data.newTicketType;
};

export const getAllTicketTypes = async () => {
    const {data} = await $authHost.get(ALL_TICKETTYPE_URL);
    return data.allTicketTypes;
};

export const getOneTicketType = async (id) => {
    const {data} = await $authHost.get(ONE_TICKETTYPE_URL.replace(':id', id));
    return data.ticketType;
};

export const updateTicketType = async (ticketTypeData, id) => {
    const {data} = await $authHost.put(UPDATE_TICKETTYPE_URL.replace(':id', id), ticketTypeData);
    return data.ticketType;
};

export const deleteTicketType = async (id) => {
    const {data} = await $authHost.delete(DELETE_TICKETTYPE_URL.replace(':id', id));
    return data.message;
};
