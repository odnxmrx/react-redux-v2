import React from "react";
import validation from "./validation";

const Form = () => {

    const [input, setInput] = React.useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = React.useState({
        // email: '', //estas propiedades se pueden omitir. 
        // password: '' //pues se crean en 'validation'
    })

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        //cada que se actualice un input, setea errors
        setErrors(validation(input));
    }


    const handleSubmit = (event) => { //aplicado a tag 'form'
        event.preventDefault();
    }

    return (
        <div>
            <h2>My form</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    name='email'
                    value={input.email}
                    onChange={handleChange}
                />
                <br />
                {errors.email && <small>{errors.email}</small>}
                <br />
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name='password'
                    value={input.password}
                    onChange={handleChange}
                />
                <br />
                {errors.password && <small>{errors.password}</small>}
                <br />
                <button 
                    type='submit'
                    disabled={ !input.email || !input.password || errors.email || errors.password}
                >
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Form;