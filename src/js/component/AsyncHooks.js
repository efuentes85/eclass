import React, { useState, useEffect } from "react";

function useGiphy(query) {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		function fetchData() {
			try {
				setLoading(true);
				const response = fetch(
					`https://api.giphy.com/v1/gifs/search?api_key=GNRqavMpeGfsxaJWx0Zpugs1EhVjd83G&q=${query}&limit=10&offset=0&rating=G&lang=en`
				);
				const json = response.json();

				setResults(
					json.data.map(item => {
						return item.images.preview.mp4;
					})
				);
			} finally {
				setLoading(false);
			}
		}

		if (query !== "") {
			fetchData();
		}
	}, [query]);

	return [results, loading];
}

export default function Home() {
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");
	const [results, loading] = useGiphy(query);

	return (
		<div>
			<h1>Async React Hooks</h1>
			<form
				onSubmit={e => {
					e.preventDefault();
					setQuery(search);
				}}>
				<input
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder="Search for Gifs!"
				/>
				<button type="submit">Search</button>
			</form>
			<br />
			{loading ? (
				<h1>GIVE ME GIFS</h1>
			) : (
				results.map(item => (
					<video autoPlay loop key={item} src={item} />
				))
			)}
		</div>
	);
}
