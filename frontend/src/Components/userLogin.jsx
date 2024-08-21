import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		if (!username || !password) {
			setMessage("Please enter both username and password.");
			return;
		}

		try {
			const response = await axios.post("/api/users/login", {
				username,
				password
			});

			const { token, role } = response.data; // Ensure backend returns these fields
			localStorage.setItem("token", token);
			localStorage.setItem("role", role);

			setMessage("Login successful!");

			if (role === "ADMIN") {
				navigate("/dashboard");
			} else {
				navigate("/userDashboard");
			}
		} catch (error) {
			setMessage(
				error.response && error.response.status === 401
					? "Invalid username or password."
					: "Something went wrong. Please try again later."
			);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
				<div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
					<img src="./logo.png" style={{ width: "150px" }} alt="Logo" />
					<h1 className="text-3xl font-bold text-[#4B5563] my-auto">Login</h1>
				</div>
				<form className="flex flex-col" onSubmit={handleLogin}>
					<div className="pb-2">
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-[#111827]">
							Username
						</label>
						<div className="relative text-gray-400">
							<span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-user">
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</span>
							<input
								type="text"
								name="username"
								id="username"
								aria-label="Username"
								className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
								placeholder="demo"
								autoComplete="off"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
					</div>
					<div className="pb-6">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-[#111827]">
							Password
						</label>
						<div className="relative text-gray-400">
							<span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-lock">
									<rect width="18" height="11" x="3" y="11" rx="2"></rect>
									<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
								</svg>
							</span>
							<input
								type="password"
								name="password"
								id="password"
								aria-label="Password"
								placeholder="••••••••••"
								className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
								autoComplete="new-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					{message && <p className="text-red-500 text-sm mb-4">{message}</p>}
					<button
						type="submit"
						className="w-1/2 mx-auto text-white bg-[#B2E27D] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
						Login
					</button>
					<div className="text-sm font-light text-[#6B7280]">
						Don't have an account yet?{" "}
						<a
							href="/register"
							className="font-medium text-[#95C042] hover:underline">
							Sign Up
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserLogin;
