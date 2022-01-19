import "./App.css";

import DispatchComp from "./DispatchComp";
import { Provider } from "./Context";
import StateComp from "./StateComp";
import { Typography } from "@mui/material";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="div" gutterBottom pb={2}>
          Unit Test Application
        </Typography>
        <StateComp />
        <Provider>
          <DispatchComp />
        </Provider>
      </header>
    </div>
  );
}

export default App;
