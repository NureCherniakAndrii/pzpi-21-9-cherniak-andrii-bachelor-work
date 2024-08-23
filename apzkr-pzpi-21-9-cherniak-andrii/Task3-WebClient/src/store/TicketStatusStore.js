import {makeAutoObservable} from "mobx";
import {
    createTicketStatus,
    deleteTicketStatus,
    getAllTicketStatuses,
    getOneTicketStatus,
    updateTicketStatus
} from "../apiURLs/TicketStatusApi.js";

export default class TicketStatusStore {
    constructor() {
        this._ticketStatuses = [
            // {
            //     id: 1,
            //     name: 'Assigned'
            // },
            // {
            //     id: 2,
            //     name: 'Pending User'
            // },
            // {
            //     id: 3,
            //     name: 'Open'
            // },
            // {
            //     id: 4,
            //     name: 'Analysis'
            // },
            // {
            //     id: 5,
            //     name: 'Canceled'
            // },
            // {
            //     id: 6,
            //     name: 'Resolved'
            // }
        ];
        makeAutoObservable(this);
    }

    getStatusById(id) {
        return this._ticketStatuses.find(el => el.id === id);
    }

    getStatusNameById(id){
        return this._ticketStatuses.find(el => el.id === id).name;
    }

    getAllStatusNames() {
        return this._ticketStatuses.map(({id, name}) => {
            return {
                id,
                name
            }
        })
    }


    async create(ticketStatusData) {
        const newTicketStatus = await createTicketStatus(ticketStatusData);
        this._ticketStatuses.push(newTicketStatus);
        return newTicketStatus;
    }

    async getAll() {
        this._ticketStatuses = await getAllTicketStatuses();
    }

    async getOneTicketStatus(id) {
        return await getOneTicketStatus(id);
    }

    async updateTicketStatus(ticketStatusData, id) {
        const updatedTicketStatus = await updateTicketStatus(ticketStatusData, id);
        this._ticketStatuses = this._ticketStatuses.map(ticketStatus =>
            ticketStatus.id === id ? updatedTicketStatus : ticketStatus
        );
        return updatedTicketStatus;
    }

    async deleteTicketStatus(id) {
        const message = await deleteTicketStatus(id);
        this._ticketStatuses = this._ticketStatuses.filter(ticketStatus => ticketStatus.id !== id);
        return message;
    }

    get ticketStatuses() {
        return this._ticketStatuses;
    }
}
/*
const TicketStatus = db.define('ticketStatus', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})
 */