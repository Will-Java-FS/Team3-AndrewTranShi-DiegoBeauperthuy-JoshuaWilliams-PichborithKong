import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
	baseURL: "/api",
	headers: {
		Authorization: `Bearer ${token}`
	}
});

// Axios Interceptor for handling 401 Unauthorized responses
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			localStorage.removeItem("token"); // Remove expired token
			window.location.href = "/login"; // Redirect to login page
		}
		return Promise.reject(error);
	}
);

export default api;
