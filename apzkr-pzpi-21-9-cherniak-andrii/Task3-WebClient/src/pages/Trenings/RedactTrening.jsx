import {useContext, useState} from "react";
import {TreningFormContent} from "./TreningFormContent.jsx";
import {RedactModalForm} from "../../compositions/ReadactModalForm.jsx";
import {Context} from "../../main.jsx";



export const RedactTreningForm = ({item, open, handleToggle, redactAction}) => {

    const [formData, setData] = useState(item)



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
            <TreningFormContent formData={formData} handleChange={handleChange}/>
        </RedactModalForm>
    );
}