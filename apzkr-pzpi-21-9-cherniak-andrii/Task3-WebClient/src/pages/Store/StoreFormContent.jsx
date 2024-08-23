import {TextField} from "@mui/material";

export const StoreFormContent = ({handleChange, formData}) => {
    return (
        <>
            <TextField label={'Name'}
                       value={formData.name}
                       onChange={(e) => handleChange('name', e.target.value)}
            />
            <TextField
                label={'Address'}
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
            />
            <TextField
                label={'Photo'}
                type={'file'}
                value={formData.photo}
                onChange={(e) => handleChange('photo', e.target.value)}
            />
        </>
    );
}