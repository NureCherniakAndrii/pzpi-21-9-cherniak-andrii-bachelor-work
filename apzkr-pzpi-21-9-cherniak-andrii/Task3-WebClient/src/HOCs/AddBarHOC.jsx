import {ModalForm} from "../compositions/ModalForm.jsx";



export const AddBarToListHOC = (WrappedList, Form) => ({items}) => {
    return (
        <>
            <ModalForm>
                {
                    (handleToggle) => <Form handleToggle={handleToggle}/>
                }
            </ModalForm>
            <WrappedList items={items}/>
        </>
    );
}