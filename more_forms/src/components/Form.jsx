import React, {useState} from 'react'

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

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("");
        } else if(e.target.value  != password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label><br />
                    <input type="text" onChange={handleFirstName}/>
                    {firstNameError ? <p className='error'>{firstNameError}</p> : ''}
                </div>

                <div>
                    <label>Last Name:</label><br />
                    <input type="text" onChange={handleLastName}/>
                    {lastNameError ? <p className='error'>{lastNameError}</p> : ''}
                </div>

                <div>
                    <label>Email:</label><br />
                    <input type="text" onChange={handleEmail}/>
                    {emailError ? <p className='error'>{emailError}</p> : ''}
                </div>

                <div>
                    <label>Password:</label><br />
                    <input type="password" onChange={handlePassword}/>
                    {passwordError ? <p className='error'>{passwordError}</p> : ''}
                </div>

                <div>
                    <label>Confirm Password:</label><br />
                    <input type="password" onChange={handleConfirmPassword}/>
                    {confirmPasswordError ? <p className='error'>{confirmPasswordError}</p> : ''}
                </div>
            </form>
        </div>
    )
}

export default Form