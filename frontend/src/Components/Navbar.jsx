import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Util/AuthContext"; // Adjust path as necessary
import Button from "../pages/Button";

const Navbar = () => {
	const { isLoggedIn, logout } = useContext(AuthContext); // Get authentication state from context
	const navigate = useNavigate();

	const handleLogout = () => {
		logout(); // Use context's logout function
		navigate("/"); // Redirect to the home page
	};

	return (
		<div className="fixed w-full bg-white shadow-md">
			<div className="flex flex-row justify-between p-5 md:px-32 px-5">
				<div className="flex flex-row items-center cursor-pointer">
					<h1 className="text-xl font-semibold">Byte Me Bistro</h1>
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
