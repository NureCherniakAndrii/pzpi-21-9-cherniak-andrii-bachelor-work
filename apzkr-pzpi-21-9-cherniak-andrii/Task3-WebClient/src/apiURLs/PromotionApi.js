import {$authHost} from "../http/index.js";
import {CREATE_PROMOTION_URL, ALL_PROMOTIONS_URL, ONE_PROMOTION_URL, UPDATE_PROMOTION_URL, DELETE_PROMOTION_URL} from "./urls.js";

export const createPromotion = async (promotionData) => {
    const {data} = await $authHost.post(CREATE_PROMOTION_URL, promotionData);
    return data.newPromotion;
};

export const getAllPromotions = async () => {
    const {data} = await $authHost.get(ALL_PROMOTIONS_URL);
    return data.allPromotions;
};

export const getOnePromotion = async (id) => {
    const {data} = await $authHost.get(ONE_PROMOTION_URL.replace(':id', id));
    return data.promotion;
};

export const updateOnePromotion = async (promotionData, id) => {
    const {data} = await $authHost.put(UPDATE_PROMOTION_URL.replace(':id', id), promotionData);
    return data.promotion;
};

export const deleteOnePromotion = async (id) => {
    const {data} = await $authHost.delete(DELETE_PROMOTION_URL.replace(':id', id));
    return data.message;
};
