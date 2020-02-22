import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export default function Home() {
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
		// var sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
		var time = date + " " + month + " " + year + " " + hour + ":" + min;

		return time;
	}

	return (
		<div className="container">
			{isLoading ? (
				<ButtonToolbar>
					<Button variant="danger" disabled>
						<Spinner
							as="span"
							animation="border"
							size="lg"
							role="status"
							aria-hidden="true"
						/>
						<h1>Cargando</h1>
						<span className="sr-only">Loading...</span>
					</Button>
				</ButtonToolbar>
			) : (
				<div>
					<h1>
						Valor del Dolar al dia :{" "}
						{timeConverter(currency.timestamp)}
					</h1>
					<div>
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th></th>
									<th>Pais</th>
									<th>Moneda</th>
									<th>Valor Dolar</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-argentina2x.png" />
									</td>
									<td>Argentina</td>
									<td>Peso Argentino</td>
									<td>
										${" "}
										{Math.round(currency.quotes["USDARS"])}
									</td>
								</tr>

								<tr>
									<td>
										<img src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-chile2x.png" />
									</td>
									<td>Chile</td>
									<td>Peso Chileno</td>
									<td>
										${" "}
										{Math.round(currency.quotes["USDCLP"])}
									</td>
								</tr>

								<tr>
									<td>
										<img src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-colombia2x.png" />
									</td>
									<td>Colombia</td>
									<td>Peso Colombiano</td>
									<td>
										${" "}
										{Math.round(currency.quotes["USDCOP"])}
									</td>
								</tr>

								<tr>
									<td>
										<img src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-mexico2x.png" />
									</td>
									<td>Mexico</td>
									<td>Peso Mexicano</td>
									<td>
										${" "}
										{Math.round(currency.quotes["USDMXN"])}
									</td>
								</tr>

								<tr>
									<td>
										<img src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-paraguay2x.png" />
									</td>
									<td>Paraguay</td>
									<td>Guaraní Paraguayo</td>
									<td>
										${" "}
										{Math.round(currency.quotes["USDPYG"])}
									</td>
								</tr>
							</tbody>
						</Table>
						<br />
					</div>
				</div>
			)}
		</div>
	);
}
