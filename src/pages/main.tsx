import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import GlobalStyles from "../styles/globalStyles";
import App from "./App";
import {AuthContextProvider} from "../contexts/AuthContext";
import {ThemeContextProvider} from "../contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);