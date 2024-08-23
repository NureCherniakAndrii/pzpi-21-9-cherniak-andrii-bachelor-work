import {TreningList} from "./TreningList.jsx";
import {Context} from "../../main.jsx";
import {useContext, useState} from "react";
import {AddBarToListHOC} from "../../HOCs/AddBarHOC.jsx";
import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {createTrening} from "../../apiURLs/TreningApi.js";
import {TreningFormContent} from "./TreningFormContent.jsx";




const initialState = {
    title: '',
    description: '',
    duration: 0,
    userId: []
}


const TreningForm = ({handleToggle}) => {
    const [formData, setFormData] = useState(initialState);

    const {trening} = useContext(Context);

    const handleChange = (key, value) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const onSubmit = async () => {
        await trening.createTrening(formData);
    }




    return (
        <>
            <TreningFormContent formData={formData} handleChange={handleChange}/>

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

const TreningListWithAddBar = AddBarToListHOC(TreningList, TreningForm);


export const Trenings = () => {
    const {trening} = useContext(Context);


    return (
            <TreningListWithAddBar items={trening.trenings}/>
    );
}

