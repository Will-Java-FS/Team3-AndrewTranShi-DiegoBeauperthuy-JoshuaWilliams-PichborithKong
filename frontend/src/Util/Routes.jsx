import { Routes, Route } from "react-router-dom";
import CreateMenuItem from "./components/CreateMenuItem";

import Order from "./components/Order";
import UserLogin from "./components/userLogin";
import UserRegister from "./components/userRegister";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Dashboard from "./Pages/Dashboard";

const AppRoutes = () => {
	return (
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
	);
};

export default AppRoutes;
