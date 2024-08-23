import {useContext, useState} from "react";
import {Context} from "../../main.jsx";
import {Button} from "@mui/material";
import {AddBarToListHOC} from "../../HOCs/AddBarHOC.jsx";
import {PromotionList} from "./PromotionList.jsx";
import {PromotionFormContent} from "./PromotionFormContent.jsx";



const initialState = {
    title: '',
    text: '',
    promStatusId: null,
    storeId: []
}


const PromotionForm = ({handleToggle}) => {
    const [formData, setFormData] = useState(initialState);

    const {promotion} = useContext(Context);


    const handleChange = (key, value) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const onSubmit = async () => {
        await promotion.create(formData);
    }

    return (
        <>
           <PromotionFormContent formData={formData} handleChange={handleChange}/>

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

const PromotionListWithAddBar = AddBarToListHOC(PromotionList, PromotionForm);

export const Promotions = () => {
    const {promotion} = useContext(Context);

    return (
        <PromotionListWithAddBar items={promotion.promotions}/>
    );
}