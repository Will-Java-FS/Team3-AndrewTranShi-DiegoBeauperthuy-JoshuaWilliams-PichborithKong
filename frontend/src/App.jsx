import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateMenuItem from "./components/CreateMenuItem";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Dashboard from "./Pages/Dashboard";
import EditUser from "./Pages/EditUser";
import EditMenuItem from "./components/EditMenuItem";
import { AuthContext } from "./Util/AuthContext";

const App = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<div className="w-full mx-auto min-h-screen">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/edit-user/:userId" element={<EditUser />} />
					<Route path="/edit-menu-item/:itemId" element={<EditMenuItem />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/myOrder" element={<Order />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route
						path="/add-item"
						element={isLoggedIn ? <CreateMenuItem /> : <UserLogin />}
					/>
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
