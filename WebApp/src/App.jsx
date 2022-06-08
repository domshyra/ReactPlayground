import "./App.css";

import ReduxComp from "./components/redux/ReduxComp";
import { Typography } from "@mui/material";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Typography variant="h4" component="div" gutterBottom pb={2}>
					Redux Test Application
				</Typography>
				<ReduxComp />
			</header>
		</div>
	);
}

export default App;
