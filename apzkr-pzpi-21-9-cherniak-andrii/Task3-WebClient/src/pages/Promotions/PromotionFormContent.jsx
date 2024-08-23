import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
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


export const PromotionFormContent = ({handleChange, formData}) => {
    const {promStatus, store} = useContext(Context);

    const storeNamesArr = store.getAllStoreNames();
    const promStatusNamesArr = promStatus.getAllPromStatusNames();

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
                <InputLabel id={'status-label'}>Status</InputLabel>
                <Select
                    value={formData.promStatusId}
                    label={'Status'}
                    labelId={'status-label'}
                    MenuProps={MenuProps}
                    onChange={(e) => handleChange('promStatusId', e.target.value)}
                >
                    {
                        promStatusNamesArr.map(({id, name}) => (
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
                <InputLabel id={'store-label'}>Store</InputLabel>
                <Select
                    multiple
                    value={formData.storeId}
                    MenuProps={MenuProps}
                    labelId={'store-label'}
                    label={'Store'}
                    onChange={(e) => handleChange('storeId', e.target.value)}
                    sx={{
                        color: 'black'
                    }}
                >
                    {
                        storeNamesArr.map(({id, name}) => (
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