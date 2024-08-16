import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate(); // Use the useNavigate hook for navigation

	// Define the handleLogin function within the component
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/api/users/login", {
				username,
				password
			});

			const { token, role } = response.data; // Assuming backend returns token and role
			localStorage.setItem("token", token); // Store the JWT token in localStorage
			localStorage.setItem("role", role); // Store the role in localStorage

			setMessage("Login successful");

			// Redirect based on the role
			if (role === "ADMIN") {
				navigate("/dashboard"); // Redirect to the dashboard if the role is admin
			} else {
				navigate("/userDashboard"); // Redirect to another route if the role is not admin
			}
		} catch (error) {
			setMessage(error.response?.data || "Error logging in");
			navigate("/register"); // Redirect to the registration page if login fails
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default UserLogin;
