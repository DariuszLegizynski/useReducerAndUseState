import React from "react";
import DataFetchingUseState from "./components/DataFetchingUseState";
import DataFetchingUseReducer from "./components/DataFetchingUseReducer";

const App = () => {
	return (
		<div>
			<DataFetchingUseState />
			<DataFetchingUseReducer />
		</div>
	);
};

export default App;
