import {useContext, useState} from "react";
import {Context} from "../../main.jsx";
import {Button} from "@mui/material";
import {AddBarToListHOC} from "../../HOCs/AddBarHOC.jsx";
import {TicketList} from "./TicketList.jsx";
import {TicketFormContent} from "./TicketFormContent.jsx";


const initialState = {
    title: '',
    text: '',
    ticketTypeId: 0,
    ticketStatusId: 0,
    userId: 0,
    storeId: 0,
}

const TicketForm = ({handleToggle}) => {
    const [formData, setFormData] = useState(initialState);

    const {
        ticket,
    } = useContext(Context);



    const handleChange = (key, value) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const onSubmit = async () => {
        await ticket.create(formData);
    }

    return (
        <>
            <TicketFormContent formData={formData} handleChange={handleChange}/>

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

const TicketListWithAddBar = AddBarToListHOC(TicketList, TicketForm);


export const Tickets = () => {
    const {ticket} = useContext(Context);


    return (
        <TicketListWithAddBar items={ticket.tickets}/>
    );
}