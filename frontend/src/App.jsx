/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import UserLogin from "./Pages/userLogin";
import Dashboard from "./Pages/Dashboard";
import UserDashboard from "./Pages/UserDashboard";
import Menu from "./Pages/Menu";
import Layout from "./Pages/Layout";
import UserRegister from "./Pages/userRegister";

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/register" element={<UserRegister />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/userDashboard" element={<UserDashboard />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
