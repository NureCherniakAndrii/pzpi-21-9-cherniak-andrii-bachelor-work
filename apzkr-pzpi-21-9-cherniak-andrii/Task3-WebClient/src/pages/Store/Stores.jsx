import {Context} from "../../main.jsx";
import {useContext, useState} from "react";
import {Button, TextField} from "@mui/material";
import {AddBarToListHOC} from "../../HOCs/AddBarHOC.jsx";
import {TreningList} from "../Trenings/TreningList.jsx";
import {StoreList} from "./StoreList.jsx";
import {StoreFormContent} from "./StoreFormContent.jsx";

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

const initialState = {
    name: '',
    address: '',
    photo: null
}

const StoreForm = ({handleToggle}) => {
    const [formData, setFormData] = useState(initialState);

    const {store} = useContext(Context);

    const handleChange = (key, value) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    };

    const onSubmit = async () => {
        const newFormData = new FormData();

        newFormData.append('name', formData.name);
        newFormData.append('address', formData.address);
        newFormData.append('photo', formData.photo)

        await store.create(formData);
    };

    return (
        <>
            <StoreFormContent formData={formData} handleChange={handleChange}/>

            <div className={'flex justify-between'}>
                <Button onClick={() => {
                    onSubmit().then(handleToggle());
                }}>
                    Create
                </Button>
                <Button color={'error'} onClick={handleToggle}>
                    Decline
                </Button>
            </div>
        </>
    );
}

const StoreListWithAddBar = AddBarToListHOC(StoreList, StoreForm);


export const Stores = () => {
    const {store} = useContext(Context);


    return (
        <StoreListWithAddBar items={store.stores}/>
    );
}