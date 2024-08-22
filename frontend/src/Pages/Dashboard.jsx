import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
	const [users, setUsers] = useState([]);
	const [menus, setMenus] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

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

	const handleDeleteMenuItem = async (menuId) => {
		try {
			const token = localStorage.getItem("token");

			if (!token) {
				throw new Error("No token found. Please log in.");
			}

			await axios.delete(`/api/menus/${menuId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			setMenus(menus.filter((menu) => menu.menuId !== menuId));
		} catch (error) {
			console.error("There was an error deleting the menu item!", error);
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

	return (
		<div className="flex flex-col items-center overflow-x-auto">
			{/* Users Section */}
			<div className="w-full flex justify-between items-center p-4">
				<h1 className="text-5xl text-slate-600">Current Staff</h1>
				<button className="btn btn-sm bg-success text-white">Add User</button>
			</div>

			{/* Users Table */}
			{users.length > 0 ? (
				<table className="table table-zebra min-w-full bg-white border border-slate-200 shadow-md mb-5">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b text-left">Avatar</th>
							<th className="py-2 px-4 border-b text-left">ID</th>
							<th className="py-2 px-4 border-b text-left">Username</th>
							<th className="py-2 px-4 border-b text-left">Role</th>
							<th className="py-2 px-4 border-b text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.userId}>
								<td className="py-2 px-4 border-b">
									<img
										src="https://www.svgrepo.com/show/295402/user-profile.svg"
										alt="User Avatar"
										className="h-12 w-12 object-cover"
									/>
								</td>
								<td className="py-2 px-4 border-b">{user.userId}</td>
								<td className="py-2 px-4 border-b">{user.username}</td>
								<td className="py-2 px-4 border-b">{user.role}</td>
								<td className="py-2 px-4 border-b">
									<button
										className="btn btn-sm btn-warning mx-1"
										onClick={() => navigate(`/edit-user/${user.userId}`)}>
										Edit
									</button>
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

			{/* Menu Items Section */}
			<div className="w-full flex justify-between items-center p-4">
				<h1 className="text-5xl text-slate-600">Menu Items</h1>
				<button
					className="btn btn-sm bg-success text-white"
					onClick={handleAddItemClick}>
					Add Item
				</button>
			</div>

			{/* Menu Items Table */}
			{menus.length > 0 ? (
				<table className="table table-zebra min-w-full bg-white border border-slate-200 shadow-md">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b text-left">Image</th>
							<th className="py-2 px-4 border-b text-left">Name</th>
							<th className="py-2 px-4 border-b text-left">Description</th>
							<th className="py-2 px-4 border-b text-left">Type</th>
							<th className="py-2 px-4 border-b text-left">Price</th>
							<th className="py-2 px-4 border-b text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{menus.map((menuItem) => (
							<tr key={menuItem.menuId}>
								<td className="py-2 px-4 border-b">
									<img
										src={menuItem.imageUrl}
										alt={menuItem.name}
										className="h-12 w-12 object-cover"
									/>
								</td>
								<td className="py-2 px-4 border-b">{menuItem.name}</td>
								<td className="py-2 px-4 border-b">{menuItem.description}</td>
								<td className="py-2 px-4 border-b">{menuItem.type}</td>
								<td className="py-2 px-4 border-b">
									{menuItem.price != null
										? `$${menuItem.price.toFixed(2)}`
										: "N/A"}
								</td>
								<td className="py-2 px-4 border-b">
									<button
										className="btn btn-sm btn-warning mx-1"
										onClick={() =>
											navigate(`/edit-menu-item/${menuItem.menuId}`)
										}>
										Edit
									</button>
									<button
										className="btn btn-sm btn-error mx-1"
										onClick={() => handleDeleteMenuItem(menuItem.menuId)}>
										Delete
									</button>
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
