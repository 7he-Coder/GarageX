import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import BookAppointmnet from "./BookAppointmnet.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		{/* <BookAppointmnet /> */}
	</StrictMode>
);
