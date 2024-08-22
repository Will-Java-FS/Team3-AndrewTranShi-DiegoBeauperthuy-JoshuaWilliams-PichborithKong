import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateMenuItem from "./components/CreateMenuItem";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Order from "./Components/Order";
import UserLogin from "./Components/userLogin";
import UserRegister from "./Components/userRegister";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Dashboard from "./Pages/Dashboard";
import EditUser from "./Pages/EditUser";
import EditMenuItem from "./components/EditMenuItem";
import { AuthProvider, useAuth } from "./Util/AuthContext.jsx"; // Import AuthProvider

const AppRoutes = () => {
	const { auth } = useAuth(); // This should work if within AuthProvider

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/edit-user/:userId" element={<EditUser />} />
			<Route path="/edit-menu-item/:itemId" element={<EditMenuItem />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/myOrder" element={<Order />} />
			<Route
				path="/dashboard"
				element={auth.token ? <Dashboard /> : <UserLogin />}
			/>
			<Route
				path="/add-item"
				element={auth.token ? <CreateMenuItem /> : <UserLogin />}
			/>
			<Route path="/login" element={<UserLogin />} />
			<Route path="/aboutus" element={<AboutUs />} />
			<Route path="/register" element={<UserRegister />} />
		</Routes>
	);
};

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<div className="w-full mx-auto min-h-screen">
					<Navbar />
					<AppRoutes />
					<Footer />
				</div>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
