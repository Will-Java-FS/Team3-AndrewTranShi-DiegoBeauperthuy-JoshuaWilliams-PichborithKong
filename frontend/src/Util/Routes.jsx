import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../components/Order";
import Dashboard from "../components/Dashboard";
import CreateMenuItem from "../components/CreateMenuItem";
import UserLogin from "../components/userLogin";
import UserRegister from "../components/userRegister";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/myOrder" element={<Order />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/add-item" element={<CreateMenuItem />} />
			<Route path="/login" element={<UserLogin />} />
			<Route path="/register" element={<UserRegister />} />
		</Routes>
	);
};

export default AppRoutes;
