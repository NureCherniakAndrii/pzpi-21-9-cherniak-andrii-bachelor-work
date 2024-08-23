import {FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {useContext} from "react";
import {Context} from "../../main.jsx";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export const TicketFormContent = ({formData, handleChange}) => {
    const {
        user,
        store,
        ticketType,
        ticketStatus
    } = useContext(Context);

    const usernamesArr = user.getAllNames();
    const allTypesNameArr = ticketType.getAllTypeNames();
    const allStatusNameArr = ticketStatus.getAllStatusNames();
    const allStoreNameArr = store.getAllStoreNames();

    return (
        <>
            <TextField
                label={'Title'}
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
            />
            <TextField
                label={'Text'}
                value={formData.text}
                onChange={(e) => handleChange('text', e.target.value)}
            />
            <FormControl>
                <InputLabel id={'user-label'}>Name</InputLabel>
                <Select
                    value={formData.userId}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                    label={'user-label'}
                    onChange={(e) => handleChange('userId', e.target.value)}
                >
                    {
                        usernamesArr.map(({id, name}) => (
                            <MenuItem
                                key={id}
                                value={id}
                            >
                                {name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id={'type-label'}>Name</InputLabel>
                <Select
                    value={formData.ticketTypeId}
                    input={<OutlinedInput label="Name"/>}
                    label={'type-label'}
                    MenuProps={MenuProps}
                    onChange={(e) => handleChange('ticketTypeId', e.target.value)}
                >
                    {
                        allTypesNameArr.map(({id, name}) => (
                            <MenuItem
                                key={id}
                                value={id}
                            >
                                {name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id={'status-label'}>Name</InputLabel>
                <Select
                    value={formData.ticketStatusId}
                    input={<OutlinedInput label="Name"/>}
                    label={'status-label'}
                    MenuProps={MenuProps}
                    onChange={(e) => handleChange('ticketStatusId', e.target.value)}
                >
                    {
                        allStatusNameArr.map(({id, name}) => (
                            <MenuItem
                                key={id}
                                value={id}
                            >
                                {name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id={'store-label'}>Name</InputLabel>
                <Select
                    value={formData.storeId}
                    input={<OutlinedInput label="Name"/>}
                    label={'store-label'}
                    MenuProps={MenuProps}
                    onChange={(e) => handleChange('storeId', e.target.value)}
                >
                    {
                        allStoreNameArr.map(({id, name}) => (
                            <MenuItem
                                key={id}
                                value={id}
                            >
                                {name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    );
}