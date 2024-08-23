import {
    createStore,
    getAllStores,
    getStoreById,
    updateStoreById,
    deleteStoreById
} from "../apiURLs/StoreApi.js";

export default class StoreStore {
    constructor() {
        this._stores = [
            // {
            //     id: 1,
            //     address: 'Street 1',
            //     photo: '#',
            //     name: 'Store 1'
            // },
            // {
            //     id: 2,
            //     address: 'Street 2',
            //     photo: '#',
            //     name: 'Store 2'
            // },
            // {
            //     id: 3,
            //     address: 'Street 3',
            //     photo: '#',
            //     name: "Store 3"
            // }
        ];
    }

    getStoreNameById(id) {
        return this._stores.find(store => store.id === id).name;
    }

    getStoreNameByIdArr(idArr) {
        const filteredArr = this._stores.map(store => {
            if (idArr.find(id => store.id === id)) {
                return store.name;
            }
        });

        return filteredArr.filter(item => item !== undefined).join(', ');
    }

    getAllStoreNames() {
        return this._stores.map(store => {
            return {
                id: store.id,
                name: store.name
            }
        });
    }

    get stores() {
        return this._stores;
    }

    async create(storeData) {
        const newStore = await createStore(storeData);
        this._stores.push(newStore);
        return newStore;
    }

    async getAll() {
        this._stores = await getAllStores();
        console.log(this._stores);
    }

    async getById(id) {
        return await getStoreById(id);
    }

    async updateById(id, storeData) {
        const updatedStore = await updateStoreById(id, storeData);
        this._stores = this._stores.map(store =>
            store.id === id ? updatedStore : store
        );
        return updatedStore;
    }

    async deleteById(id) {
        await deleteStoreById(id);
        this._stores = this._stores.filter(store => store.id !== id);
    }
}

/*
const Store = db.define('store', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
})
 */