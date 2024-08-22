import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Util/AuthContext"; // Assuming AuthContext is in src/Util

export default function Menu() {
	useEffect(() => {
		document.title = "Menu";
	}, []);

	const [menuItems, setMenuItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const navigate = useNavigate();
	const { auth } = useAuth(); // Using auth context to get userId

	function getItemsFromAPI() {
		axios
			.get("http://localhost:8080/api/menus")
			.then((response) => {
				setMenuItems(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}

	const groupItemsByType = (items) => {
		return items.reduce((acc, item) => {
			if (!acc[item.type]) {
				acc[item.type] = [];
			}
			acc[item.type].push(item);
			return acc;
		}, {});
	};

	const handleItemClick = (item) => {
		setSelectedItems((prevSelectedItems) => {
			if (prevSelectedItems.includes(item)) {
				return prevSelectedItems.filter((i) => i !== item);
			} else {
				return [...prevSelectedItems, item];
			}
		});
	};

	const orderCurrentItemsSelected = async () => {
		console.log("Selected items:", selectedItems);
		console.log("User ID:", auth.userId);

		if (selectedItems.length === 0) {
			alert("No items selected");
			return;
		}

		const userId = auth.userId;

		if (!userId) {
			console.error("User ID is undefined");
			navigate("/login");
			return;
		}

		try {
			for (const item of selectedItems) {
				if (!item.menuId) {
					console.error("Menu ID is undefined for item:", item);
					alert(`Menu ID is undefined for item: ${item.name}`);
					continue; // Skip items with undefined menuId
				}

				const response = await axios.post("http://localhost:8080/api/orders", {
					user_id: userId,
					menu_id: item.menuId
				});
				console.log("Order response:", response.data);
			}
			navigate("/myorder");
		} catch (e) {
			console.error(
				"Error in post request",
				e.response ? e.response.data : e.message
			);
		}
	};
	useEffect(() => {
		getItemsFromAPI();
	}, []);

	const groupedItems = groupItemsByType(menuItems);

	return (
		<>
			<br />
			<h1 className="text-5xl text-center">Menu</h1>
			<br />
			<div>
				{Object.keys(groupedItems).map((type, index) => (
					<div key={index} className="mb-8">
						<h2 className="text-center mb-4 text-3xl">{type}</h2>
						<div className="flex flex-wrap justify-center">
							{groupedItems[type].map((item, i) => (
								<div
									className="bg-white text-black rounded-lg shadow-md m-1 w-48 cursor-pointer"
									style={{
										background: selectedItems.includes(item)
											? "lightgreen"
											: "white"
									}}
									key={i}
									onClick={() => handleItemClick(item)}>
									<div className="w-full h-32">
										<img
											src={item.imageUrl}
											alt={item.name}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="p-4">
										<h2 className="text-xl">
											<b>{item.name}</b>
										</h2>
										<ul className="text-left text-sm">
											<li>{item.description}</li>
											<li>$ {item.price}</li>
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center">
				<button
					type="button"
					className="bg-green-700 text-white p-5 rounded m-4 mb-8"
					onClick={orderCurrentItemsSelected}>
					Order Selected Items
				</button>
			</div>
		</>
	);
}
