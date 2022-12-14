import React, { useState } from "react";

function ContactPage() {
    const [formState, setFormState] = useState ({
        name: "",
        email: "",
        message: ""
    })
    const [errorMessage, setErrorMessage] = useState("");
    const {name, email, message} = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!errorMessage) {
            console.log("submit form", formState)
        }
    }
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const handleChange = (event) => {
        
        console.log(event.target.name);
        
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage("Invalid email")
            } else {
                setErrorMessage("")
            }

        } else {
        
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`)
            } else {
                setErrorMessage("")
            }

            if (!errorMessage) {
                setFormState({...formState, [event.target.name]: event.target.value});
                console.log("Handle Form", formState);
            }

        }
    };

    return <div>
        <h1>Contact</h1>
        <br></br>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <br></br>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            </div>
            <div className='field'>
                <label htmlFor="email">Email: </label>
                <br></br>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div className='field'>
                <lable className='lable'>Message:</lable>
                <br></br>
                <label htmlFor="message"></label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button type = "submit">Submit</button>
        </form>
    </div>
}

export default ContactPage;