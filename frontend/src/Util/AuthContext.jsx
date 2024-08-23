import React, { createContext, useState, useContext, useEffect } from "react";
// we are creating a context object, which we gonna use for auth across our app
const AuthContext = createContext();
// the auth state will hold our user authentication data (token role and id) this is gonna allow our data to persets across page reloads
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
	// we wrap the children with authcontext.provider passing down the aut state and the login log out fucntion to the children
	return (
		<AuthContext.Provider value={{ auth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
