import React from "react"
import './styles/Form.css'
import { useState } from "react"
import {validateEmail , validatePassword} from './validations/validation'

const Form = ({onLogin}) =>{

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        const emailError = validateEmail(userData.email);
        const passwordError = validatePassword(userData.password);

        setErrors({
        email: emailError,
        password: passwordError
        })
        if(!emailError && !passwordError){
        onLogin(userData)}
    }



    return (
        <div id="Form">
            <form className="formm"action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="inputEmail"
                value={userData.email} 
                onChange={handleChange} 
                type="text" 
                name="email" 
                placeholder="escriba su email"/>
                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <input className="inputPassword"
                value={userData.password} 
                onChange={handleChange} 
                type="text" 
                name="password" 
                placeholder="escriba su password"/>
                {errors.password && <p>{errors.password}</p>}

                <div className="divSubmit">
                    <button id="submitForm" onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </form>
        </div>
        )
}

export default Form