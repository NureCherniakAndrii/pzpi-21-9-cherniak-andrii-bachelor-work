import {FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {Context} from "../../main.jsx";
import {useContext, useState} from "react";


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


export const TreningFormContent = ({handleChange, formData}) => {

    const {user} = useContext(Context);
    const usernamesArr = user.getAllNames();


    return (
        <>
            <TextField
                label={'Title'}
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
            />
            <TextField
                label={'Description'}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
            />
            <TextField
                label={'Duration'}
                type={'number'}
                value={formData.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
            />
            <FormControl>
                <InputLabel id={'user-label'}>Name</InputLabel>
                <Select
                    multiple
                    value={formData.userId}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
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
        </>
    );
}