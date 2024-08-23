import {Button} from "@mui/material";
import {useState} from "react";

export const CardActionButtons = (RedactForm) => ({redactAction, deleteAction, item}) => {
    const [open, setOpen] = useState(false);


    const handleToggle = () => {
        setOpen(prevState => !prevState);
    }


    return (
        <>
            <Button size={'small'} onClick={handleToggle}>
                Redact
            </Button>
            <Button size={'small'} color={'error'} onClick={deleteAction}>
                Delete
            </Button>

            <RedactForm open={open} handleToggle={handleToggle} item={item} redactAction={redactAction}/>
        </>
    );
}