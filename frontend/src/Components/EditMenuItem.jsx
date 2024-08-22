import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateMenuItem.css";

const EditMenuItem = () => {
	const { itemId } = useParams(); // Get menu item ID from URL params
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		type: "",
		price: "",
		imageUrl: ""
	});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchMenuItem = async () => {
			try {
				const response = await axios.get(`/api/menus/${itemId}`);
				setFormData(response.data);
				setLoading(false);
			} catch (error) {
				setError("An error occurred while fetching the menu item.");
				setLoading(false);
			}
		};

		fetchMenuItem();
	}, [itemId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`/api/menus/${itemId}`, {
				...formData,
				price: parseFloat(formData.price) || 0 // Ensure price is a number
			});
			navigate("/dashboard");
		} catch (error) {
			setError("An error occurred while updating the menu item.");
		}
	};

	const handleCancel = () => {
		navigate("/dashboard");
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-0 sm:p-12">
			<div className="w-full max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
				<h1 className="text-2xl font-bold mb-8 text-center">Edit Menu Item</h1>

				{/* Image Preview */}
				{formData.imageUrl && (
					<div className="flex justify-center mb-8">
						<img
							src={formData.imageUrl}
							alt={formData.name || "Menu Item Image"}
							className="h-48 w-48 object-cover rounded"
						/>
					</div>
				)}

				<form onSubmit={handleSubmit} noValidate>
					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder=" "
							required
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label
							htmlFor="name"
							className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
							Enter name
						</label>
						{error && <span className="text-sm text-red-600">{error}</span>}
					</div>

					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="description"
							value={formData.description}
							onChange={handleChange}
							placeholder=" "
							required
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label
							htmlFor="description"
							className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
							Enter description
						</label>
					</div>

					<div className="relative z-0 w-full mb-5">
						<select
							name="type"
							value={formData.type}
							onChange={handleChange}
							required
							className="pt-5 px-5 text-sm pb-2 block w-full mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200">
							<option value="" disabled>
								Please select type
							</option>
							<option value="Drink">Drink</option>
							<option value="Dessert">Dessert</option>
							<option value="Food">Food</option>
							<option value="Other">Other</option>
						</select>
						<label
							htmlFor="type"
							className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 transform -translate-y-3 scale-75 left-0 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:scale-75">
							Select type
						</label>
					</div>

					<div className="relative z-0 w-full mb-5">
						<input
							type="number"
							name="price"
							value={formData.price}
							onChange={handleChange}
							placeholder=" "
							required
							step="0.01"
							className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<div className="absolute top-0 left-0 mt-3 ml-1 text-emerald-600">
							$
						</div>
						<label
							htmlFor="price"
							className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">
							Enter price
						</label>
					</div>

					<div className="relative z-0 w-full mb-5">
						<input
							type="text"
							name="imageUrl"
							value={formData.imageUrl}
							onChange={handleChange}
							placeholder=" "
							className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
						/>
						<label
							htmlFor="imageUrl"
							className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
							Enter image URL (optional)
						</label>
					</div>

					<button
						type="submit"
						className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-orange-500 hover:bg-orange-400 hover:shadow-lg focus:outline-none">
						Save Changes
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-red-500 hover:bg-red-400 hover:shadow-lg focus:outline-none">
						Cancel
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditMenuItem;
