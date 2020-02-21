import React, { useState, useEffect } from "react";

export default function Home() {
	const [search, setSearch] = useState("");
	const [isLoading, setisLoading] = useState(true);
	const [currency, setCurrency] = useState({
		quotes: { USDARS: 0, USDCLP: 0, USDCOP: 0, USDMXN: 0, USDPYG: 0 },
		timestamp: ""
	});

	useEffect(() => {
		fetch(
			"http://api.currencylayer.com/live?access_key=63863846a95d42b6d0ddfe3ecb3da76c&source=USD&currencies=ARS,CLP,COP,MXN,PYG",
			{
				method: "GET"
			}
		)
			.then(res => {
				let aux = res.json();
				return aux;
			})

			.then(response => {
				let { timestamp, quotes } = response;
				setCurrency({ timestamp, quotes });
				console.log(currency);
				setisLoading(false);
			})
			.catch(error => console.log(error));
	}, [isLoading]);

	function timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
		var sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
		var time =
			date +
			" " +
			month +
			" " +
			year +
			" " +
			hour +
			":" +
			min +
			":" +
			sec;

		return time;
	}

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
				}}>
				{isLoading ? (
					<h1>Loading values</h1>
				) : (
					<div>
						<h1>
							Valor del Dolar al dia :{" "}
							{timeConverter(currency.timestamp)}
						</h1>
					</div>
				)}
				<div>
					Argentina : {currency.quotes["USDARS"]}
					<br />
					Chile : {currency.quotes["USDCLP"]}
					<br />
					Colombia : {currency.quotes["USDCOP"]}
					<br />
					Mexico : {currency.quotes["USDMXN"]}
					<br />
					Paraguay : {currency.quotes["USDPYG"]}
					<br />
				</div>

				<br />

				<button type="submit">Actualizar Valor Dolar</button>
			</form>
		</div>
	);
}
