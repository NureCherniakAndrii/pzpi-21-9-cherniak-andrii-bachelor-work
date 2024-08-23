import {Context} from "../../main.jsx";
import {useContext} from "react";
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {CardActionButtons} from "../../compositions/CardActionButtons.jsx";
import {RedactStore} from "./RedactStore.jsx";
import {API_URL} from "../../apiURLs/urls.js";
import {observer} from "mobx-react-lite";

const StoreCardActionButtons = CardActionButtons(RedactStore);

export const StoreList = observer(({items}) => {
    const {store} = useContext(Context);

    console.log(items);

    return (
        <>
            {
                items.map(item => (
                    <Card key={item.id}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={'http://localhost:3000/' + item.photo}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant={'h5'}>
                                {item.name}#{item.id}
                            </Typography>
                            <ul>
                                <li>
                                    Name: {item.name}
                                </li>
                                <li>
                                    Address: {item.address}
                                </li>
                            </ul>
                        </CardContent>
                        <CardActions>
                            {/*добавить функции*/}
                            <StoreCardActionButtons item={item}
                                                    redactAction={(formData) => store.updateById(item.id, formData)}
                                                    deleteAction={() => store.deleteById(item.id)}
                            />
                        </CardActions>
                    </Card>
                ))
            }
        </>
    );
})