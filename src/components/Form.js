
import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");


    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = e => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError(`First name is required!")`);
        } else if (e.target.value.length < 3) {
            setFirstNameError("First name must be 3 characters or longer!");

        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = e => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError(`Last name is required!")`);
        } else if (e.target.value.length < 3) {
            setLastNameError("Last name must be 3 characters or longer!");

        } else {
            setLastNameError("");
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError(`Email is required!")`);
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");

        } else {
            setEmailError("");
        }
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError(`Password is required!")`);
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");

        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1 || e.target.value.length < 8) {
            setConfirmPasswordError("Password must be 8 characters or longer!");
        } else if (e.target.value != password) {
            setConfirmPasswordError("Not match")
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div className="form-container">
            <form >
                <div className="form-group" >
                    <label htmlFor="firstName">firstName: </label>
                    <input type="text" name="firstName" onChange={handleFirstName} />
                    {
                        firstNameError ?
                            <p style={{ color: 'red' }}>{firstNameError}</p> :
                            ""
                    }

                </div>
                <div className="form-group">
                    <label htmlFor="lastName">lastName: </label>
                    <input type="text" name="lastName" onChange={handleLastName} />
                    {
                        lastNameError ?
                            <p style={{ color: 'red' }}>{lastNameError}</p> :
                            ""
                    }

                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input type="text" name="email" onChange={handleEmail} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">confirmPassword: </label>
                    <input type="password" name="confirmPassword" onChange={handleConfirmPassword} />
                    {
                        confirmPasswordError ?
                            <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                            ""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>

    );
};

export default Form;

