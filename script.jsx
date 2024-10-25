import { createRoot } from "react-dom/client"; // Importing createRoot from react-dom/client for rendering the app
import App from "./App"; // Importing the main App component
import "./style.css"; // Importing the CSS styles for the application

// Selecting the root element from the HTML document
const root = createRoot(document.querySelector("#root"));

// Rendering the App component into the root element
root.render(<App />);
