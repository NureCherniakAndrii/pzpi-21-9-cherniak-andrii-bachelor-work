import {RedactModalForm} from "../../compositions/ReadactModalForm.jsx";
import {PromotionFormContent} from "./PromotionFormContent.jsx";
import {useState} from "react";

export const RedactPromotion = ({item, open, handleToggle, redactAction}) => {
    const itemState = {
        ...item,
        storeId: item.storeId?.length || [item.storeId]
    }
    const [formData, setData] = useState(itemState)


    const handleChange = (key, value) => {
        setData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    return (
        <RedactModalForm open={open} handleToggle={handleToggle} redactAction={() => redactAction(formData)}>
            <PromotionFormContent handleChange={handleChange} formData={formData}/>
        </RedactModalForm>
    );
}