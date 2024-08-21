import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditUser.css"; // Import the CSS file for styling

function EditUser() {
	const { userId } = useParams(); // Get user ID from URL params
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const token = localStorage.getItem("token");
				if (!token) {
					throw new Error("No token found. Please log in.");
				}

				const response = await axios.get(`/api/users/${userId}`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});

				setUser(response.data);
				setLoading(false);
			} catch (error) {
				console.error("There was an error fetching the user!", error);
				setError(error);
				setLoading(false);
			}
		};

		fetchUser();
	}, [userId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				throw new Error("No token found. Please log in.");
			}

			await axios.put(`/api/users/${userId}`, user, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json"
				}
			});

			navigate("/dashboard"); // Redirect to dashboard or another page
		} catch (error) {
			console.error("There was an error updating the user!", error);
			setError(error);
		}
	};

	if (loading) {
		return <div className="text-center">Loading...</div>;
	}

	if (error) {
		return (
			<div className="text-center text-red-600">
				Error: {error.message || "An unexpected error occurred."}
			</div>
		);
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-0 sm:p-12">
			<div className="w-full max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
				<h1 className="text-2xl font-bold mb-8 text-center">Edit User</h1>
				<form onSubmit={handleSubmit} noValidate>
					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="username"
							value={user.username || ""}
							onChange={handleChange}
							placeholder=" "
							required
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label
							htmlFor="username"
							className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
							Username
						</label>
					</div>

					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="role"
							value={user.role || ""}
							onChange={handleChange}
							placeholder=" "
							required
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label
							htmlFor="role"
							className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
							Role
						</label>
					</div>

					<button
						type="submit"
						className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-orange-500 hover:bg-orange-400 hover:shadow-lg focus:outline-none">
						Save Changes
					</button>
					<button
						type="button"
						onClick={() => navigate("/dashboard")}
						className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-red-500 hover:bg-red-400 hover:shadow-lg focus:outline-none">
						Cancel
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditUser;
