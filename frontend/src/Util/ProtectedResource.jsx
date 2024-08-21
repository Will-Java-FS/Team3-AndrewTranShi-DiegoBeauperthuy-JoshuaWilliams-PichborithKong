import React, { useEffect, useState } from "react";
import api from "./Api";
// Import the Axios instance

const ProtectedResource = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/protected-resource"); // Make a GET request to a protected endpoint
				setData(response.data);
			} catch (error) {
				setError("Error fetching protected data");
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>Protected Data</h2>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default ProtectedResource;
