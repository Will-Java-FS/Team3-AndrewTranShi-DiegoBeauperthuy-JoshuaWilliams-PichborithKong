import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Util/AuthContext"; // Assuming AuthContext is in src/Util

export default function Order() {
	const [menuItems, setMenuItems] = useState([]);
	const [orders, setOrders] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0.0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { auth } = useAuth(); // Using auth context to get userId

	const getOrdersFromApi = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/api/orders/user/${auth.userId}`
			);
			setOrders(response.data);
			calculateTotalPrice(response.data);
		} catch (error) {
			setError("Error getting current user order.");
			console.error("Error getting current user order: ", error);
		}
	};

	const getItemsFromAPI = async () => {
		try {
			const response = await axios.get("http://localhost:8080/api/menus");
			setMenuItems(response.data);
		} catch (error) {
			setError("Error fetching menu items.");
			console.error("Error fetching data:", error);
		}
	};

	const calculateTotalPrice = (orders) => {
		const total = orders.reduce(
			(sum, order) => sum + parseFloat(order.price),
			0
		); // Assuming price is directly accessible
		setTotalPrice(total.toFixed(2));
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await getOrdersFromApi();
			await getItemsFromAPI();
			setLoading(false);
		};

		fetchData();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<h1 className="text-5xl text-center m-8">My Order</h1>
			<div className="flex flex-wrap items-center justify-center">
				{orders.length === 0 ? (
					<p>No Orders found yet</p>
				) : (
					orders.map((order, i) => {
						const menuItem = menuItems.find(
							(item) => item.menuId === order.menuId
						); // Adjust to match backend
						return (
							<div
								key={order.id || i}
								className="bg-white text-black rounded-lg shadow-md m-2 w-64">
								<div className="w-full h-32">
									<img
										src={menuItem ? menuItem.imageUrl : "default-image-url"}
										alt={menuItem?.name || "Unknown"}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-2">
									<h2 className="text-xl">
										<b>Item: {menuItem?.name || "Unknown"}</b>
									</h2>
									<ul className="text-left">
										<li>
											{menuItem?.description || "No description available"}
										</li>
										<li>$ {order.price}</li>
										<li>
											Time Ordered:{" "}
											{order.timestamp?.split("T")[1].split(".")[0].slice(0, 5)}
										</li>
									</ul>
								</div>
							</div>
						);
					})
				)}
			</div>
			<br />
			<div className="bg-green-700 text-white p-2 rounded flex flex-col items-center">
				<h2>Total Price</h2>
				<p>$ {totalPrice}</p>
			</div>
			<div className="flex items-center justify-center m-4 mb-8">
				<button
					type="button"
					className="bg-green-700 text-white p-4 rounded"
					disabled={orders.length === 0 || loading}>
					Checkout
				</button>
			</div>
		</>
	);
}
