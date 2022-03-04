import { useState } from "react";

export const useCheck= ()=>{
    const initialInput={
        email:"",
        password1:"",
        password2:"",
    }
    const [input, setInput]= useState(initialInput);
    const[errors, setErrors]=useState();


    const handleChange= (e) => {
        const {name , value}= e.target;
        setInput({
            ...input,
            [name]: value,
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validate(input));
    }


    return 
}

export const validate= (input = "") =>{
    let errors={}
    
    if (!input.email){
        errors.email= "Debe ingresar un email"
    }
    if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Ingrese un correo válido"
    }
    if (input.email && (!input.password1 || !input.password2)){
        errors.password= "Complete todos los campos"
    }
    if (input.email && (input.password1 !== input.password2)){
        errors.password= "Las contraseñas deben coincidir"
    }
    return errors
}