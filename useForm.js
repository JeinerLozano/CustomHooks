import { useState } from "react";


export const useForm = (initialFomr={}) => {

    // {
    //     username: " ",
    //     email: " ",
    //     password: " "
    // }
    const [formState2, setFormState2] = useState(initialFomr)
    
        const onFormChange2 = ({target})=>{
            const {name, value} = target;
            setFormState2({
                ...formState2,
                [name]: value
            })
        }

        const onResetForm = ()=>{
            setFormState2( initialFomr )
        }
    


  return {
    formState2,
    onFormChange2,
    onResetForm
  }
}
