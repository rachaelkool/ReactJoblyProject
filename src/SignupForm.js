import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function SignupForm({ signup }) {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await signup(formData);
        if (result.success) {
        history.push("/");
        } else {
        setFormErrors(result.errors);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <div>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="password"
                    required
                />
                </div>
                <div>
                <label htmlFor="firstName">First name</label>
                <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="lastName">Last name</label>
                <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>
                <button>Submit</button>
            </form>
            <p>{formErrors}</p>
        </div>
    );
}


export default SignupForm;