import { useState } from "react"

export const useForm = ( initialForm = {}) => {

    // eslint-disable-next-line no-undef
    const [formState, setFormState] = useState( initialForm )


    const onInputChange = ({target}) => {

        const { name , value } = target

        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    const onResetForm = () => {
        setFormState(initialForm)
      }


    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm
    }



 
}
