import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
        
            {/* Displaying Form Data */}
            <div>
                <p>Your Form Data</p>
                <label>First Name:</label>
                <p>{firstName}</p>
                <label>Last Name:</label>
                <p>{lastName}</p>
                <label>Email:</label>
                <p>{email}</p>
                <label>Password:</label>
                <p>{password}</p>
                <label>Confirm Password:</label>
                <p>{confirmPassword}</p>
            </div>

        </div>
    )
}

export default Form