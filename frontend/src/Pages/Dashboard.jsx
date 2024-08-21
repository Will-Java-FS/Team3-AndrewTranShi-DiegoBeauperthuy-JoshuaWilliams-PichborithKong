import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
	const [users, setUsers] = useState([]);
	const [menus, setMenus] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate(); // Initialize navigate

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem("token");

				if (!token) {
					throw new Error("No token found. Please log in.");
				}

				const [usersResponse, menusResponse] = await Promise.all([
					axios.get("/api/users", {
						headers: {
							Authorization: `Bearer ${token}`
						}
					}),
					axios.get("/api/menus", {
						headers: {
							Authorization: `Bearer ${token}`
						}
					})
				]);

				setUsers(usersResponse.data);
				setMenus(menusResponse.data);
				setLoading(false);
			} catch (error) {
				console.error("There was an error fetching the data!", error);

				if (error.response && error.response.status === 401) {
					navigate("/login");
				} else {
					setError(error);
				}

				setLoading(false);
			}
		};

		fetchData();
	}, [navigate]);

	const handleDeleteUser = async (userId) => {
		try {
			const token = localStorage.getItem("token");

			if (!token) {
				throw new Error("No token found. Please log in.");
			}

			await axios.delete(`/api/users/${userId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			setUsers(users.filter((user) => user.userId !== userId));
		} catch (error) {
			console.error("There was an error deleting the user!", error);
			setError(error);
		}
	};

	const handleAddItemClick = () => {
		navigate("/add-item");
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message || "An unexpected error occurred."}</div>;
	}
	const fetchData = async () => {
		try {
			const token = localStorage.getItem("token");
			console.log("Token:", token); // Debug token

			if (!token) {
				throw new Error("No token found. Please log in.");
			}

			const [usersResponse, menusResponse] = await Promise.all([
				axios.get("/api/users", {
					headers: { Authorization: `Bearer ${token}` }
				}),
				axios.get("/api/menus", {
					headers: { Authorization: `Bearer ${token}` }
				})
			]);

			console.log("Users Response:", usersResponse.data); // Debug users data
			console.log("Menus Response:", menusResponse.data); // Debug menus data

			setUsers(usersResponse.data);
			setMenus(menusResponse.data);
			setLoading(false);
		} catch (error) {
			console.error("There was an error fetching the data!", error);
			if (error.response && error.response.status === 401) {
				navigate("/login");
			} else {
				setError(error);
			}
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center overflow-x-auto">
			<div className="w-full flex justify-between items-center p-4">
				<h1 className="text-5xl text-slate-600">Current Staff</h1>
				<button className="btn btn-sm bg-success text-white">Add User</button>
			</div>

			{/* Users Table */}
			{users.length > 0 ? (
				<table className="table table-zebra min-w-full bg-white border border-slate-200 shadow-md mb-5">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b text-left">ID</th>
							<th className="py-2 px-4 border-b text-left">Username</th>
							<th className="py-2 px-4 border-b text-left">Role</th>
							<th className="py-2 px-4 border-b text-left">Created At</th>
							<th className="py-2 px-4 border-b text-left">Updated At</th>
							<th className="py-2 px-4 border-b text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.userId}>
								<td className="py-2 px-4 border-b">{user.userId}</td>
								<td className="py-2 px-4 border-b">{user.username}</td>
								<td className="py-2 px-4 border-b">{user.role}</td>
								<td className="py-2 px-4 border-b">
									{new Date(user.createdAt).toLocaleString()}
								</td>
								<td className="py-2 px-4 border-b">
									{new Date(user.updatedAt).toLocaleString()}
								</td>
								<td className="py-2 px-4 border-b">
									<button className="btn btn-sm btn-warning mx-1">Edit</button>
									<button
										className="btn btn-sm btn-error mx-1"
										onClick={() => handleDeleteUser(user.userId)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div>No users found.</div>
			)}

			<div className="w-full flex justify-between items-center p-4">
				<h1 className="text-5xl text-slate-600">Menu Items</h1>
				<button
					className="btn btn-sm bg-success text-white"
					onClick={handleAddItemClick}>
					{" "}
					{/* Use navigate to redirect */}
					Add Item
				</button>
			</div>

			{/* Menu Items Table */}
			{menus.length > 0 ? (
				<table className="table table-zebra min-w-full bg-white border border-slate-200 shadow-md">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b text-left">Name</th>
							<th className="py-2 px-4 border-b text-left">Description</th>
							<th className="py-2 px-4 border-b text-left">Type</th>
							<th className="py-2 px-4 border-b text-left">Price</th>
							<th className="py-2 px-4 border-b text-left">Items Available</th>
							<th className="py-2 px-4 border-b text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{menus.map((menuItem) => (
							<tr key={menuItem.menuId}>
								<td className="py-2 px-4 border-b">{menuItem.name}</td>
								<td className="py-2 px-4 border-b">{menuItem.description}</td>
								<td className="py-2 px-4 border-b">{menuItem.type}</td>
								<td className="py-2 px-4 border-b">
									{menuItem.price != null
										? `$${menuItem.price.toFixed(2)}`
										: "N/A"}
								</td>
								<td className="py-2 px-4 border-b">{menuItem.items}</td>
								<td className="py-2 px-4 border-b">
									<button className="btn btn-sm btn-warning mx-1">Edit</button>
									<button className="btn btn-sm btn-error mx-1">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div>No menu items found.</div>
			)}
		</div>
	);
}

export default Dashboard;
