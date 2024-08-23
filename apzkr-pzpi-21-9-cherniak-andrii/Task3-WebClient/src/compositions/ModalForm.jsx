import {Box, Button, FormControl, Modal} from "@mui/material";
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalForm = ({children}) => {

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(prevState => !prevState);
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleToggle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        {children(handleToggle)}
                    </FormControl>
                </Box>
            </Modal>
            <div className={'fixed top-0 right-0'}>
                <Button onClick={handleToggle}>
                    Add
                </Button>
            </div>
        </>
    );
}