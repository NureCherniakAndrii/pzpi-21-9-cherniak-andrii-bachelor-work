import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Context} from "../../main.jsx";
import {useContext} from "react";
import {CardActionButtons} from "../../compositions/CardActionButtons.jsx";
import {RedactTicket} from "./RedactTicket.jsx";

const TicketCardActionButtons = CardActionButtons(RedactTicket);

export const TicketList = ({items}) => {
    const {user, ticketType, ticketStatus, store, ticket} = useContext(Context);

    return (
        <>
            {
                items.map(item => {
                    return (
                        <Card key={item.id}>
                            <CardContent>
                                <Typography variant={'h5'}>
                                    {item.title}#{item.id}
                                </Typography>
                                <ul>
                                    <li>
                                        Title: {item.title}
                                    </li>
                                    <li>
                                        Description: {item.text}
                                    </li>
                                    <li>
                                        Type: {ticketType.getTypeNameById(item.ticketTypeId)}
                                    </li>
                                    <li>
                                        Status: {ticketStatus.getStatusNameById(item.ticketStatusId)}
                                    </li>
                                    <li>
                                        User: {user.getNameById(item.userId)}
                                    </li>
                                    <li>
                                        Store: {store.getStoreNameById(item.storeId)}
                                    </li>
                                </ul>
                            </CardContent>
                            <CardActions sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'
                            }}>
                                {/*добавить функции*/}
                                <TicketCardActionButtons item={item}
                                                         redactAction={(formData) => ticket.updateTicket(item.id, formData)}
                                                         deleteAction={() => ticket.deleteById(item.id)}
                                />
                            </CardActions>
                        </Card>
                    );
                })
            }
        </>
    );
}