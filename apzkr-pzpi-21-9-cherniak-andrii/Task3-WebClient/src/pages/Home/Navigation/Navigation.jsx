import {
    Button,
    Divider,
    Drawer,
} from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark.js";
import LocalOfferIcon from "@mui/icons-material/LocalOffer.js";
import StorefrontIcon from "@mui/icons-material/Storefront.js";
import BugReportIcon from "@mui/icons-material/BugReport.js";
import {NavigationMenu} from "./NavigationMenu/NavigationMenu.jsx";
import {useNavigate} from "react-router-dom";
import {Context} from "../../../main.jsx";
import {useContext} from "react";



const drawerWidth = 300;



export const Navigation = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const navigateToTrenings = () => {
        navigate('/trenings');
    }

    const navigateToPromotions = () => {
        navigate('/promotions');
    }

    const navigateToStores = () => {
        navigate('/stores');
    }

    const navigateToTickets = () => {
        navigate('/tickets');
    };

    const navigateToAuth = () => {
        navigate('/');
    }

    const handleLogout = () => {
        user.logout();
        navigateToAuth();
    }

    const menuItems = [
        {
            title: "Trening",
            Icon: QuestionMarkIcon,
            func: navigateToTrenings
        },
        {
            title: "Promotion",
            Icon: LocalOfferIcon,
            func: navigateToPromotions
        },
        {
            title: "Store",
            Icon: StorefrontIcon,
            func: navigateToStores
        },
        {
            title: "Ticket",
            Icon: BugReportIcon,
            func: navigateToTickets
        }
    ];

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <NavigationMenu menuItems={menuItems}/>
            <Divider/>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </Drawer>
    );
}