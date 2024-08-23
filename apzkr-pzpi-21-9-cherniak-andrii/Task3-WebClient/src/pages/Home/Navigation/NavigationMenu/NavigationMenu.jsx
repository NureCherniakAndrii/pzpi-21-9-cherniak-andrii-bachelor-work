
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";



export const NavigationMenu = ({menuItems}) => {

    return (
        <List>
            {menuItems.map(({title, Icon, func}) => (
                <ListItem
                    button={true}
                    key={title}
                    onClick={func}
                    disablePadding
                >
                    <ListItemButton >
                        <ListItemIcon>
                            <Icon/>
                        </ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}