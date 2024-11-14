// src/index.js or src/main.jsx (depending on your project structure)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import the Provider component from react-redux
import  store  from "./store/store"; // Ensure you're importing the store correctly
import "./index.css"; // Your global styles
import App from "./App.jsx"; // Main App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap your app with the Redux Provider */}
      <App />
    </Provider>
  </StrictMode>
);
