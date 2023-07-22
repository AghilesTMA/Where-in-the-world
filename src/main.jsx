import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
