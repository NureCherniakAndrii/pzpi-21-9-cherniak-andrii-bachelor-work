import {Box, Button, FormControl, Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const RedactModalForm = ({children, redactAction, open, handleToggle}) => {

    return (
        <Modal
            open={open}
            onClose={handleToggle}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <FormControl>
                    {children}
                    <div className={'flex justify-between'}>
                        <Button
                            onClick={redactAction}
                        >
                            Approve
                        </Button>
                        <Button
                            onClick={handleToggle}
                            color='error'
                        >
                            Cancel
                        </Button>
                    </div>
                </FormControl>
            </Box>
        </Modal>
    );
}