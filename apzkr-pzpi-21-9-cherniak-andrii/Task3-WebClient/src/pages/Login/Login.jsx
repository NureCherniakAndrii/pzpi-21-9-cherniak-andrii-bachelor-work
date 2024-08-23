import {Button, TextField} from "@mui/material";
import {useInput} from "../../hooks/useInput.js";
import {useNavigate} from "react-router-dom";
import {HOME_PATH} from "../../routes/paths.js";
import {useContext} from "react";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";

export const Login = observer(() => {
    const [emailValue, setEmailValue] = useInput();
    const [passwordValue, setPasswordValue] = useInput();

    const {user} = useContext(Context);


    const navigate = useNavigate();

    const handleLogin = async () => {
        user.login({email: emailValue, password: passwordValue}).then(() => {
            navigate(HOME_PATH);
        })
    }


    return (
        <form className={'flex flex-col h-72 justify-between'}>
            <h1>Login</h1>

            <TextField label={"Email"}
                       onChange={setEmailValue}
                       value={emailValue}
            />
            <TextField label={"Password"}
                       onChange={setPasswordValue}
                       value={passwordValue}
            />
            <Button
                variant={"contained"}
                onClick={handleLogin}
            >
                Login
            </Button>
        </form>
    );
})