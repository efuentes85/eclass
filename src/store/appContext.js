import React, { useState, useEffect } from "react";

// Objeto que va a tener la llamada a la API
const AppContext = React.createContext({});

export default AppContext;

// import getState from "./flux.js";

// export const Context = React.createContext(null);

// const injectContext = PassedComponent => {
// 	const StoreWrapper = props => {
// 		//this will be passed as the contenxt value
// 		const [state, setState] = useState(
// 			getState({
// 				getStore: () => state.store,
// 				getActions: () => state.actions,
// 				setStore: updatedStore =>
// 					setState({
// 						store: Object.assign(state.store, updatedStore),
// 						actions: { ...state.actions }
// 					})
// 			})
// 		);

// 		useEffect(() => {
// 			state.actions.getAPI();
// 		}, []);

// 		// the initial value for the context its not null anymore, but the current state of this component,
// 		// the context will have a getStore and setStore functions available then, because they were declared
// 		// on the state of this component
// 		return (
// 			<Context.Provider value={state}>
// 				<PassedComponent {...props} />
// 			</Context.Provider>
// 		);
// 	};
// 	return StoreWrapper;
// };

// export default injectContext;
