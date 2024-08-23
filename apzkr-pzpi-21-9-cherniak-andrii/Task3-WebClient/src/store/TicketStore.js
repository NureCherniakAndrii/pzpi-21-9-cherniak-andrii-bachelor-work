import {makeAutoObservable} from "mobx";
import {createTicket, deleteTicket, getAllTickets, getOneTicket, updateTicket} from "../apiURLs/TicketApi.js";

export default class TicketStore {
    constructor() {
        this._tickets = [
            // {
            //     id: 1,
            //     title: 'Ticket 1',
            //     text: 'Text 1',
            //     ticketTypeId: 1,
            //     ticketStatusId: 1,
            //     userId: 1,
            //     storeId: 1,
            // }
        ];
        makeAutoObservable(this);
    }



    async create(ticketData) {
        const newTicket = await createTicket(ticketData);
        this._tickets.push(newTicket);
        return newTicket;
    }

    async getAll() {
        this._tickets = await getAllTickets();
    }

    async getOneTicket(id) {
        return await getOneTicket(id);
    }

    async updateTicket(id, ticketData) {
        const updatedTicket = await updateTicket(ticketData, id);
        this._tickets = this._tickets.map(ticket =>
            ticket.id === id ? updatedTicket : ticket
        );
        return updatedTicket;
    }

    async deleteTicket(id) {
        const message = await deleteTicket(id);
        this._tickets = this._tickets.filter(ticket => ticket.id !== id);
        return message;
    }

    get tickets() {
        return this._tickets;
    }
}
/*
const Ticket = db.define('ticket', {
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    // ticketTypeId: {type: DataTypes.INTEGER, allowNull: false},
    // ticketStatusId: {type: DataTypes.INTEGER, allowNull: false},
    // userId: {type: DataTypes.INTEGER, allowNull: false},
    // storeId: {type: DataTypes.INTEGER, allowNull: false},
})
 */