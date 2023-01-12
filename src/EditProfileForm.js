import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import JoblyApi from "./api/api";


function EditProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const [formData, setFormData] = useState({
        username: currentUser.username,
        password: "",
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        let username = formData.username;
        let updatedUser;
        let profileData = {
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName
        };

        try {
            updatedUser = await JoblyApi.updateProfile(username, profileData);
        } catch (e) {
            setFormErrors(e);
        return;
        }
        
        setFormData(data => ({ ...data, password: "" }));
        setFormErrors([]);
        setCurrentUser(updatedUser);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
        setFormErrors([]);
    }

    return (
        <div>
            <h4>User Profile: {formData.username}</h4>
            <div>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password"><i>Enter password to confirm changes:</i></label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                </div>
                <button>Update Profile</button>
                </form>
                <p>{formErrors}</p>
            </div>
        </div>
    );
}


export default EditProfileForm;