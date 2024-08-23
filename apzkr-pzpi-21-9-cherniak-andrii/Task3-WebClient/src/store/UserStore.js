import {checkToken, getAll, login} from "../apiURLs/UserApi.js";
import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true;
        this._users = [
            // {
            //     id: 1,
            //     name: 'Andrii',
            //     surname: 'Cherniak',
            //     email: 'andrey@gmail.com',
            //     roleId: 1,
            //     storeId: 0
            // }
        ]
        makeAutoObservable(this);
    }


    setAuth(value) {
        this._isAuth = value;
    }

    get isAuth() {
        return this._isAuth;
    }

    get users() {
        return this._users;
    }

    getNameById(id) {
        return this._users.find(el => el.id === id).name;
    }

    getAllNames() {
        return this._users.map(user => {
            return {
                name: user.name,
                id: user.id
            }
        });
    }

    logout() {
        localStorage.removeItem('token');
        this._isAuth = false;
    }

    async login(userData) {
        const token = await login(userData);
        localStorage.setItem('token', token);
        this._isAuth = true;
    }

    async getAll() {
        this._users = await getAll();
    }

    async checkToken() {
        return await checkToken();
    }
}

/*
const User = db.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    // roleId: {type: DataTypes.INTEGER, allowNull: false},
    // storeId: {type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false},
});
 */