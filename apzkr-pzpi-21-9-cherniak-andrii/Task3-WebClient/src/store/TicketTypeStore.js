import {makeAutoObservable} from "mobx";
import {
    createTicketType,
    deleteTicketType,
    getAllTicketTypes,
    getOneTicketType,
    updateTicketType
} from "../apiURLs/TicketTypeApi.js";

export default class TicketTypeStore {
    constructor() {
        this._ticketTypes = [
            // {
            //     id: 1,
            //     name: 'Incident'
            // },
            // {
            //     id: 2,
            //     name: 'Request'
            // }
        ];
        makeAutoObservable(this);
    }

    getTypeById(id) {
        return this._ticketTypes.find(el => el.id === id);
    }

    getTypeNameById(id) {
        return this._ticketTypes.find(el => el.id === id).name;
    }

    getAllTypeNames() {
        return this._ticketTypes.map(({id, name}) => {
            return {
                id,
                name
            }
        })
    }

    async create(ticketTypeData) {
        const newTicketType = await createTicketType(ticketTypeData);
        this._ticketTypes.push(newTicketType);
        return newTicketType;
    }

    async getAll() {
        this._ticketTypes = await getAllTicketTypes();
    }


    async getOneTicketType(id) {
        return await getOneTicketType(id);
    }

    async updateTicketType(ticketTypeData, id) {
        const updatedTicketType = await updateTicketType(ticketTypeData, id);
        this._ticketTypes = this._ticketTypes.map(ticketType =>
            ticketType.id === id ? updatedTicketType : ticketType
        );
        return updatedTicketType;
    }

    async deleteTicketType(id) {
        const message = await deleteTicketType(id);
        this._ticketTypes = this._ticketTypes.filter(ticketType => ticketType.id !== id);
        return message;
    }

    get ticketTypes() {
        return this._ticketTypes;
    }
}
/*
const TicketType = db.define('ticketType', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})
 */