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
            setFirstName("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("");
        } else if(e.target.value.length < 2) {
            setFirstNameError("Last Name must be at least 2 characters");
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
            setPasswordError("Password must be at least 2 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("");
        } else if(e.target.value.length  != {password}) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstName}/>
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastName}/>
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmail}/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" onChange={handlePassword}/>
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={handleConfirmPassword}/>
                </div>
            </form>

        </div>
    )
}

export default Form