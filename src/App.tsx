import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/default";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
