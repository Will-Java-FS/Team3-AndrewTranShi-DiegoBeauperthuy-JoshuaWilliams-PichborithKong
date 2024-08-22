// src/Util/AuthContext.jsx
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({ token: null, role: null });

	const login = (token, role) => {
		setAuth({ token, role });
		localStorage.setItem("token", token);
		localStorage.setItem("role", role);
	};

	const logout = () => {
		setAuth({ token: null, role: null });
		localStorage.removeItem("token");
		localStorage.removeItem("role");
	};

	return (
		<AuthContext.Provider value={{ auth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
