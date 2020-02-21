import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { AppContext } from "../../store/appContext";
import Row from "react-bootstrap/Row";

export function Home() {
	const { store, actions } = useContext(AppContext);

	useEffect(() => {
		actions.getAPI();
	}, []);

	return (
		<AppContext.Provider value={}>
			<div>
				<Row className="justify-content-md-center">
					<h1>Teams</h1>
				</Row>
				<Row md={5} className="justify-content-md-center">
					{store.teams.map(team => (
						<h3 key={team.timestamp + 1}>{team.source}</h3>
					))}
				</Row>
			</div>
		</AppContext.Provider>
	);
}

export default Home;
