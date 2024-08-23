import {
    createTrening,
    getAllTrenings,
    getTreningById,
    updateTreningById,
    deleteTreningById
} from "../apiURLs/TreningApi.js";
import {makeAutoObservable} from "mobx";

export default class TreningStore {
    constructor() {
        this._trenings = [];
        makeAutoObservable(this);
    }

    get trenings() {
        return this._trenings;
    }

    // Создание нового тренинга
    async createTrening(treningData) {
        const newTrening = await createTrening(treningData);
        this._trenings.push(newTrening);
        return newTrening;
    }

    // Получение всех тренингов
    async getAll() {
        this._trenings = await getAllTrenings();
        console.log(this._trenings);
    }

    // Получение тренинга по ID
    async getTreningById(id) {
        return await getTreningById(id);
    }

    // Обновление тренинга по ID
    async updateTreningById(id, treningData) {
        const updatedTrening = await updateTreningById(id, treningData);
        this._trenings = this._trenings.map(trening =>
            trening.id === id ? updatedTrening : trening
        );
        return updatedTrening;
    }

    // Удаление тренинга по ID
    async deleteTreningById(id) {
        await deleteTreningById(id);
        this._trenings = this._trenings.filter(trening => trening.id !== id);
    }
}