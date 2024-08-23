import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Util/AuthContext"; // Import useAuth hook
import Button from "../pages/Button";

const Navbar = () => {
	const { auth, logout } = useAuth(); // Use the custom hook to get auth context
	const navigate = useNavigate();
	const isLoggedIn = !!auth.token; // Determine logged-in status from token

	const handleLogout = () => {
		console.log("Logout clicked"); // Debugging log
		logout(); // Clear auth context and local storage
		navigate("/"); // Redirect to the home page
	};

	return (
		<div className="w-full bg-white shadow-md">
			<div className="flex flex-row justify-between p-5 md:px-32 px-5">
				<div className="flex flex-row items-center cursor-pointer">
					<Link to="/">
						<h1 className="text-xl font-semibold">Byte Me Bistro</h1>
					</Link>
				</div>
				<nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
					<Link to="/" className="hover:text-brightColor transition-all">
						Home
					</Link>
					<Link to="/menu" className="hover:text-brightColor transition-all">
						Menu
					</Link>
					<Link to="/aboutus" className="hover:text-brightColor transition-all">
						About
					</Link>

					{!isLoggedIn ? (
						<>
							<Link to="/register">
								<Button title="Sign Up" />
							</Link>
							<Link to="/login">
								<Button title="Login" />
							</Link>
						</>
					) : (
						<>
							<h1>Welcome, {auth.role}</h1>
							<Link to="/dashboard">
								<Button title="Dashboard" />
							</Link>
							<Button title="Logout" onClick={handleLogout} />
						</>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
