import {RedactModalForm} from "../../compositions/ReadactModalForm.jsx";
import {StoreFormContent} from "./StoreFormContent.jsx";
import {useState} from "react";

export const RedactStore = ({open, handleToggle, item, redactAction}) => {
    const itemState = {
        ...item,
        photo: ''
    }

    console.log(item);

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
            <StoreFormContent handleChange={handleChange} formData={formData}/>
        </RedactModalForm>
    );
};