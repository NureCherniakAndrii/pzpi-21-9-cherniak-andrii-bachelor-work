import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {Context} from "../../main.jsx";
import {useContext} from "react";
import {CardActionButtons} from "../../compositions/CardActionButtons.jsx";
import {RedactPromotion} from "./RedactPromotion.jsx";

const PromotionCardActionButtons = CardActionButtons(RedactPromotion);


export const PromotionList = ({items}) => {
    const {promStatus, store, promotion} = useContext(Context);

    return (
        <>
            {
                items.map(item => (
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
                                    Status: {promStatus.getPromStatusNameById(item.promStatusId)}
                                </li>
                                <li>
                                    Store: {store.getStoreNameByIdArr(item.storeId)}
                                </li>
                            </ul>
                        </CardContent>
                        <CardActions sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}>
                            <PromotionCardActionButtons item={item}
                                                        redactAction={(formData) => promotion.updatePromotion(item.id, formData)}
                                                        deleteAction={() => promotion.deletePromotion(item.id)}
                            />
                        </CardActions>
                    </Card>
                ))
            }
        </>
    );
}