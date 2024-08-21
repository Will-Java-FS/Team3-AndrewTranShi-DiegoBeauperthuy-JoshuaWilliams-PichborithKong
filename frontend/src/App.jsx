import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Dashboard from "./components/Dashboard";
import CreateMenuItem from "./components/CreateMenuItem";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/myOrder" element={<Order />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/add-item" element={<CreateMenuItem />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/register" element={<UserRegister />} />
				</Routes>
			</BrowserRouter>
			<Navbar />
			<Footer />
			{/* <main>
				<div id="home">
					<Home />
				</div>
				<div id="about">
					<About />
				</div>
			</main> */}
		</div>
	);
};

export default App;
