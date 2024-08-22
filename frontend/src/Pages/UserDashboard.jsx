import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";

const UserDashboard = () => {

	useEffect(() => {
		document.title = "User Dashboard";
	}, []);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate a delay to show the skeleton loader
		const timer = setTimeout(() => setLoading(false), 2000); // Adjust delay as needed
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="p-6">
			{loading ? (
				<>
					<Skeleton height={40} width={200} />
					<Skeleton height={20} count={3} className="mt-4" />
				</>
			) : (
				<>
					<h1>User Dashboard</h1>
					<p>This is a protected resource accessible by authenticated users.</p>
				</>
			)}
		</div>
	);
};

export default UserDashboard;
