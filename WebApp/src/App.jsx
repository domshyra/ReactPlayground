import "./App.css";

import ReduxComp from "./components/redux/ReduxComp";
import { Typography } from "@mui/material";

// import DispatchComp from "./DispatchComp";
// import { Provider } from "./Context";

// import StateComp from "./StateComp";


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Typography variant="h4" component="div" gutterBottom pb={2}>
					React playground
				</Typography>
				<ReduxComp />
				{/* <StateComp /> used for useState examples */}
				{/* <Provider> used for useContext examples 
					<DispatchComp />
				</Provider>  */}
			</header>
		</div>
	);
}

export default App;
