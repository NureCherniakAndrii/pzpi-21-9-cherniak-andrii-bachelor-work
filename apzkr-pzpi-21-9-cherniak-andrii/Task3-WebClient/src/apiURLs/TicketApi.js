import {$authHost} from "../http/index.js";
import {CREATE_TICKET_URL, ALL_TICKET_URL, ONE_TICKET_URL, UPDATE_TICKET_URL, DELETE_TICKET_URL} from "./urls.js";

export const createTicket = async (ticketData) => {
    const {data} = await $authHost.post(CREATE_TICKET_URL, ticketData);
    return data.newTicket;
};

export const getAllTickets = async () => {
    const {data} = await $authHost.get(ALL_TICKET_URL);
    return data.allTickets;
};

export const getOneTicket = async (id) => {
    const {data} = await $authHost.get(ONE_TICKET_URL.replace(':id', id));
    return data.ticket;
};

export const updateTicket = async (ticketData, id) => {
    const {data} = await $authHost.put(UPDATE_TICKET_URL.replace(':id', id), ticketData);
    return data.ticket;
};

export const deleteTicket = async (id) => {
    const {data} = await $authHost.delete(DELETE_TICKET_URL.replace(':id', id));
    return data.message;
};
