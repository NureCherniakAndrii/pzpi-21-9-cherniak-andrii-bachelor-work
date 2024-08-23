import {makeAutoObservable} from "mobx";
import {createRole, deleteOneRole, getAllRoles, getOneRole, updateOneRole} from "../apiURLs/RoleApi.js";

export default class RoleStore {
    constructor() {
        this._roles = [
            // {
            //     id: 1,
            //     name: 'ADMIN'
            // },
            // {
            //     id: 2,
            //     name: 'USER'
            // }
        ];
        makeAutoObservable(this);
    }

    async create(roleData) {
        const newRole = await createRole(roleData);
        this._roles.push(newRole);

        return newRole;
    }

    async getAll() {
        this._roles = await getAllRoles();
    }

    async getOneRole(id) {
        return await getOneRole(id);
    }

    async updateRole(roleData, id) {
        const updatedRole = await updateOneRole(roleData, id);
        this._roles = [...this._roles, updatedRole];

        return updatedRole;
    }

    async deleteRole(id) {
        return await deleteOneRole(id);
    }

    get roles() {
        return this._roles;
    }
}