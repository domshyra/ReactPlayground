import "./App.css";

import MathComp from "./MathComp";
import { Typography } from "@mui/material";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="div" gutterBottom>
          Unit Test Application
        </Typography>
        <MathComp />
      </header>
    </div>
  );
}

export default App;
