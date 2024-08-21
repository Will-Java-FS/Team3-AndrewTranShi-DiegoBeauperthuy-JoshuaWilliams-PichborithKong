import React, { useState } from "react";

const CreateMenuItem = () => {
	const [formData, setFormData] = useState({
		name: "",
		type: "",
		price: "",
		description: "",
		imageUrl: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8080/api/menus", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				const result = await response.json();
				alert("Menu item created successfully!");
				console.log(result);
				// Reset form or redirect as needed
				setFormData({
					name: "",
					type: "",
					price: "",
					description: "",
					imageUrl: ""
				});
			} else {
				alert("Error creating menu item.");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Error creating menu item.");
		}
	};

	return (
		<div>
			<h1>Create Menu Item</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<label htmlFor="type">Type:</label>
				<input
					type="text"
					id="type"
					name="type"
					value={formData.type}
					onChange={handleChange}
				/>
				<br />
				<br />

				<label htmlFor="price">Price:</label>
				<input
					type="number"
					id="price"
					name="price"
					step="0.01"
					value={formData.price}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<label htmlFor="description">Description:</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleChange}
				/>
				<br />
				<br />

				<label htmlFor="imageUrl">Image URL:</label>
				<input
					type="text"
					id="imageUrl"
					name="imageUrl"
					value={formData.imageUrl}
					onChange={handleChange}
				/>
				<br />
				<br />

				<button type="submit">Create Menu Item</button>
			</form>
		</div>
	);
};

export default CreateMenuItem;
