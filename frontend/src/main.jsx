import React from "react";
import ReactDOM from "react-dom/client"; // Note the new import path for ReactDOM
import App from "./App";
import { AuthProvider } from "./Util/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
	<AuthProvider>
		<App />
	</AuthProvider>
);
