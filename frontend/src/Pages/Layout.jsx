import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
	return (
		<div>
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
						<li>
							<Link to="/dashboard">Admin Dashboard</Link>
						</li>
						<li>
							<Link to="/userDashboard">User Dashboard</Link>
						</li>
						<li>
							<Link to="/login">Login</Link> |{" "}
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				{children} {/* This is where the child components will be rendered */}
			</main>

			<footer>
				<p>&copy; 2024 Your Company. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Layout;
