import {makeAutoObservable} from "mobx";
import {createPromStatus, deletePromStatus, getAllPromStatuses, getOnePromStatus, updatePromStatus} from "../apiURLs/PromStatusApi.js";

export default class PromStatusStore {
    constructor() {
        this._promStatuses = [
            // {
            //     id: 1,
            //     name: 'Active',
            // },
            // {
            //     id: 2,
            //     name: 'Closed',
            // }
        ];
        makeAutoObservable(this);
    }

    getPromStatusNameById(id) {
        return this._promStatuses.find(item => item.id === id).name;
    }

    getAllPromStatusNames() {
        return this._promStatuses.map(status => {
            return {
                id: status.id,
                name: status.name
            }
        });
    }

    async create(promStatusData) {
        const newPromStatus = await createPromStatus(promStatusData);
        this._promStatuses.push(newPromStatus);
        return newPromStatus;
    }

    async getAll() {
        this._promStatuses = await getAllPromStatuses();
    }

    async getOnePromStatus(id) {
        return await getOnePromStatus(id);
    }

    async updatePromStatus(promStatusData, id) {
        const updatedPromStatus = await updatePromStatus(promStatusData, id);
        this._promStatuses = this._promStatuses.map(promStatus =>
            promStatus.id === id ? updatedPromStatus : promStatus
        );
        return updatedPromStatus;
    }

    async deletePromStatus(id) {
        const message = await deletePromStatus(id);
        this._promStatuses = this._promStatuses.filter(promStatus => promStatus.id !== id);
        return message;
    }

    get promStatuses() {
        return this._promStatuses;
    }
}

/*
const PromStatus = db.define('promStatus', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})
 */