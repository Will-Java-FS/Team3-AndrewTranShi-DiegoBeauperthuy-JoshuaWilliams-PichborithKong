const handleLogout = () => {
	console.log("Logout clicked");
	localStorage.removeItem("token"); // Remove the JWT token from localStorage
	setIsLoggedIn(false); // Update the state to reflect the logged-out status
	navigate("/"); // Redirect to the home page
};
