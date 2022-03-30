import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import reportWebVitals from "./reportWebVitals";

//can pass in a hydrated store from server here or from local storage.

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<App />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
