import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme/theme";
import { WithdrawPage } from "./pages/WithdrawPage";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WithdrawPage />
    </ThemeProvider>
  );
}

export default App;
