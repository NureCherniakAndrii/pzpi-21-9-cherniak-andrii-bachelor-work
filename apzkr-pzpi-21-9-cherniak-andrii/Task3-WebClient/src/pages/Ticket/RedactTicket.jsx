import {useState} from "react";
import {RedactModalForm} from "../../compositions/ReadactModalForm.jsx";
import {TicketFormContent} from "./TicketFormContent.jsx";

export const RedactTicket = ({open, handleToggle, item, redactAction}) => {
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
            <TicketFormContent handleChange={handleChange} formData={formData}/>
        </RedactModalForm>
    );
}