import {$authHost} from "../http/index.js";
import {
    CREATE_TICKETSTATUS_URL,
    ALL_TICKETSTATUS_URL,
    ONE_TICKETSTATUS_URL,
    UPDATE_TICKETSTATUS_URL,
    DELETE_TICKETSTATUS_URL
} from "./urls.js";

export const createTicketStatus = async (ticketStatusData) => {
    const {data} = await $authHost.post(CREATE_TICKETSTATUS_URL, ticketStatusData);
    return data.newTicketStatus;
};

export const getAllTicketStatuses = async () => {
    const {data} = await $authHost.get(ALL_TICKETSTATUS_URL);
    return data.allTicketStatuses;
};

export const getOneTicketStatus = async (id) => {
    const {data} = await $authHost.get(ONE_TICKETSTATUS_URL.replace(':id', id));
    return data.ticketStatus;
};

export const updateTicketStatus = async (ticketStatusData, id) => {
    const {data} = await $authHost.put(UPDATE_TICKETSTATUS_URL.replace(':id', id), ticketStatusData);
    return data.ticketStatus;
};

export const deleteTicketStatus = async (id) => {
    const {data} = await $authHost.delete(DELETE_TICKETSTATUS_URL.replace(':id', id));
    return data.message;
};
