import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dice from "./components/Dice/Dice";
import { createTheme } from "@mui/material";

const theme = createTheme({});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dice />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
