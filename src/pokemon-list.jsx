// You can retrieve the pokemons by calling the following API
// Make sure to replace limit and offset with the appropriate values
// https://pokeapi.co/api/v2/pokemon?limit=5&offset=0


// TODO - move fetch out to separate file
// TODO - add the load more button
// TODO - styling

import { useEffect, useState } from "react";

const fetchItems = async() => {
	const items = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0');
	const pokemons = await items.json();

	return pokemons;
}

const PokemonList = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		fetchItems().then((response) => {
			setPokemons(response.results);
		});
	});

	return (
		<ul>
			{pokemons.map((pokemon) => (
				<li key={pokemon.url}>{pokemon.name}</li>
			))}
		</ul>
	)
};

export default PokemonList;
