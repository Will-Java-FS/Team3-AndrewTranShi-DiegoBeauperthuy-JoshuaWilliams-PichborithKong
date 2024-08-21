import React, { useState } from "react";
import axios from "axios";

const UserRegister = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/api/users/register", {
				username,
				password
			});
			setMessage("Registration successful");
		} catch (error) {
			setMessage(error.response?.data || "Error registering");
		}
	};

	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
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
				<button type="submit">Register</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default UserRegister;
