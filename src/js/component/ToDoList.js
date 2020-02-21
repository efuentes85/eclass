import React from "react";

export class ToDoList extends React.Component {
	state = {
		teams: []
		//  [{"label":"sample task","done":false}]
	};

	componentDidMount() {
		fetch(
			"http://api.currencylayer.com/live?access_key=63863846a95d42b6d0ddfe3ecb3da76c&source=USD&currencies=ARS,CLP,COP,MXN,PYG",
			{
				method: "GET"
			}
		)
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				this.setState({ teams: data });
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	render() {
		return (
			<div className="col-3">
				<div className="text-center">
					Aqui
					{/* {this.state.toDo.map((obj, index) => (
						<li key={index}>{obj.source}</li>
					))} */}
				</div>
				<br />
			</div>
		);
	}
}
