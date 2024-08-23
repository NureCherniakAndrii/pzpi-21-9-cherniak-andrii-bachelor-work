import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Context} from "../../main.jsx";
import {useContext} from "react";
import {CardActionButtons} from "../../compositions/CardActionButtons.jsx";
import {RedactTreningForm} from "./RedactTrening.jsx";

const TreningCardActionButtons = CardActionButtons(RedactTreningForm);

export const TreningList = ({items}) => {
    const {user, trening} = useContext(Context);

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
                                        Description: {item.description}
                                    </li>
                                    <li>
                                        Duration: {item.duration}
                                    </li>
                                    <li>
                                        Users: {item.userId.map(userId => user.getNameById(userId)).join(', ')}
                                    </li>
                                </ul>
                            </CardContent>
                            <CardActions sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'
                            }}>
                                {/*добавить функции*/}
                                <TreningCardActionButtons
                                    item={item}
                                    redactAction={(formData) => trening.updateTreningById(item.id, formData)}
                                    deleteAction={() => trening.deleteTreningById(item.id)}
                                />
                                {/*ф-цию надо передавать именно так, особенно если мы передаем функцию класса в переменную. Потому что иначе
                                        redactAction={trening.updateTreningById}
                                        контекст ф-ции будет потерян и она не будет видеть локальные переменные класса*/}
                            </CardActions>
                        </Card>
                    );
                })
            }
        </>
    );
}