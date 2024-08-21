/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Button from "../pages/Button";

const Navbar = () => {
	return (
		<div className="w-full bg-white shadow-md">
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
					<Link
						to="/aboutus" // Add a route for 'About' if needed
						className="hover:text-brightColor transition-all">
						About
					</Link>

					<Link to="/register">
						<Button title="Sign Up" />
					</Link>
					<Link to="/login">
						<Button title="Login" />
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
