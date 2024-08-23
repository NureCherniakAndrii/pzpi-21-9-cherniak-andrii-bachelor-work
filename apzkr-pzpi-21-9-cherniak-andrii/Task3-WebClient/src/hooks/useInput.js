import {useState} from "react";

export const useInput = (init) => {
    const [value, setValue] = useState(init && '');

    const handleInput = (e) => {

        setValue(e.target.value);
    }

    return [value, handleInput];
}