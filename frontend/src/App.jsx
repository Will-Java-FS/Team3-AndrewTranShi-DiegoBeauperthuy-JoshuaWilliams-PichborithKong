import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Order from "./components/Order";
import Dashboard from "./components/Dashboard";
import CreateMenuItem from "./components/CreateMenuItem";
import UserLogin from "./components/userLogin";
import UserRegister from "./components/userRegister";
import AboutUs from "./Pages/AboutUs";

const App = () => {
	return (
		<BrowserRouter>
			<div className="w-full mx-auto min-h-screen bg-gray-100">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/myOrder" element={<Order />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/add-item" element={<CreateMenuItem />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/aboutus" element={<AboutUs />} />

					<Route path="/register" element={<UserRegister />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
