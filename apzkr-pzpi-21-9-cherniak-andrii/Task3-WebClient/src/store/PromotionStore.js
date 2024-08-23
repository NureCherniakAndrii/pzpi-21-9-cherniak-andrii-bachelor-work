import {makeAutoObservable} from "mobx";
import {createPromotion, deleteOnePromotion, getAllPromotions, getOnePromotion, updateOnePromotion} from "../apiURLs/PromotionApi.js";

export default class PromotionStore {
    constructor() {
        this._promotions = [
            // {
            //     id: 1,
            //     title: 'Promotion 1',
            //     text: 'Mega promocja!',
            //     promStatusId: 1,
            //     storeId: 1
            // },
            // {
            //     id: 2,
            //     title: 'Promotion 2',
            //     text: 'Mega promocja!',
            //     promStatusId: 1,
            //     storeId: 1
            // },
            // {
            //     id: 3,
            //     title: 'Promotion 3',
            //     text: 'Mega promocja!',
            //     promStatusId: 1,
            //     storeId: 1
            // }
        ];
        makeAutoObservable(this);
    }


    async create(promotionData) {
        const newPromotion = await createPromotion(promotionData);
        this._promotions.push(newPromotion);
        return newPromotion;
    }

    async getAll() {
        this._promotions = await getAllPromotions();
    }

    async getOnePromotion(id) {
        return await getOnePromotion(id);
    }

    async updatePromotion(id, promotionData) {
        const updatedPromotion = await updateOnePromotion(promotionData, id);
        this._promotions = this._promotions.map(promotion =>
            promotion.id === id ? updatedPromotion : promotion
        );
        return updatedPromotion;
    }

    async deletePromotion(id) {
        const message = await deleteOnePromotion(id);
        this._promotions = this._promotions.filter(promotion => promotion.id !== id);
        return message;
    }

    get promotions() {
        return this._promotions;
    }
}

/*
const Promotion = db.define('promotion', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    // promStatusId: {type: DataTypes.INTEGER, allowNull: false},
    // storeId: {type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false},
})
 */