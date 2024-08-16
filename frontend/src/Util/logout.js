const handleLogout = () => {
	localStorage.removeItem("token"); // Remove the JWT token from localStorage
	window.location.reload(); // Optionally reload the page to reset the state
};
