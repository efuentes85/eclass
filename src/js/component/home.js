import React, { useState, useEffect } from "react";

const getData = () => {
	const [currency, setCurrency] = useState([]);

	try {
		var response = fetch(
			"http://api.currencylayer.com/live?access_key=63863846a95d42b6d0ddfe3ecb3da76c&source=USD&currencies=ARS,CLP,COP,MXN,PYG",
			{ method: "GET" }
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				return data;
			})
			.catch(error => {
				console.log(error);
			});
	} catch (error) {
		console.log(error);
	}
	setCurrency(response);
	console.log({ currency });
};

export default function Home() {
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	// getData();

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					`https://api.giphy.com/v1/gifs/search?api_key=GNRqavMpeGfsxaJWx0Zpugs1EhVjd83G&q=${query}&limit=10&offset=0&rating=G&lang=en`
				);
				const json = await response.json();
				console.log({ json });
			} catch (error) {
				console.log(error);
			}
		}

		if (query !== "") {
			fetchData();
		}
	}, [query]);

	return (
		<div>
			{/* <ToDoList /> */}
			<form
				onSubmit={e => {
					e.preventDefault();
					setQuery(search);
				}}>
				<h1>Valor del Dolar </h1>
				<input
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder="Holi!"
				/>
				<br />

				<button type="submit">Actualizar Valor Dolar</button>
			</form>
		</div>
	);
}

// function getData() {
// 	const [currency, setCurrency] = useState([]);

// 	useEffect(() => {
// 		try {
// 			fetch(
// 				"http://api.currencylayer.com/live?access_key=63863846a95d42b6d0ddfe3ecb3da76c&source=USD&currencies=ARS,CLP,COP,MXN,PYG",
// 				{
// 					method: "GET"
// 				}
// 			)
// 				.then(resp => {
// 					return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
// 				})
// 				.then(data => {
// 					//here is were your code should start after the fetch finishes
// 					setCurrency(data);
// 				})
// 				.catch(error => {
// 					//error handling
// 					console.log(error);
// 				});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	});
// }

// function timeConverter(UNIX_timestamp) {
// 	var a = new Date(UNIX_timestamp * 1000);
// 	var months = [
// 		"Jan",
// 		"Feb",
// 		"Mar",
// 		"Apr",
// 		"May",
// 		"Jun",
// 		"Jul",
// 		"Aug",
// 		"Sep",
// 		"Oct",
// 		"Nov",
// 		"Dec"
// 	];
// 	var year = a.getFullYear();
// 	var month = months[a.getMonth()];
// 	var date = a.getDate();
// 	var hour = a.getHours();
// 	var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
// 	var sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
// 	var time =
// 		date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
// 	console.log(time);
// 	return time;
// }

// export default function Home() {
// 	return (
// 		<div>
// 			<form
// 				onSubmit={e => {
// 					e.preventDefault();
// 				}}>
// 				<h1>Valor del Dolar </h1>

// 				<br />

// 				<button type="submit" onClick={e => timeConverter(1582301346)}>
// 					Actualizar Valor Dolar
// 				</button>
// 			</form>
// 		</div>
// 	);
// }
