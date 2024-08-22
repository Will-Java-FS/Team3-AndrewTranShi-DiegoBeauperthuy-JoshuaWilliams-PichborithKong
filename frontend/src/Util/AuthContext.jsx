import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		token: localStorage.getItem("token"),
		role: localStorage.getItem("role"),
		userId: localStorage.getItem("userId")
	});

	const login = (token, role, userId) => {
		setAuth({ token, role, userId });
		localStorage.setItem("token", token);
		localStorage.setItem("role", role);
		localStorage.setItem("userId", userId);
	};

	const logout = () => {
		setAuth({ token: null, role: null, userId: null });
		localStorage.removeItem("token");
		localStorage.removeItem("role");
		localStorage.removeItem("userId");
	};

	return (
		<AuthContext.Provider value={{ auth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);