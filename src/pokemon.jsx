// You can retrieve the pokemons by calling the following API
// Make sure to replace limit and offset with the appropriate values
// https://pokeapi.co/api/v2/pokemon?limit=5&offset=0

// TODO - remove the load more button when there are no more results
// TODO - styling
// TODO - push this to my remote repo

import { useEffect, useState } from "react";
import fetchItems from "./utils/fetch";
import PokemonList from "./components/pokemon-list";

const Pokemon = () => {
	const limit = 5;

	const [pokemons, setPokemons] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [offset, setOffset] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(5);

	const loadMore = () => {
		setOffset(page * limit);
		setPage(page + 1);
		setCurrentIndex(currentIndex + limit);
	}

	useEffect(() => {
		fetchItems(limit, offset).then((response) => {
			setPokemons((prev) => [...prev, ...response.results]);
			setTotal(response.count);
		});
	}, [offset]);

	return (
		<>
			<ul>
				{pokemons && <PokemonList pokemons={pokemons} />}
			</ul>

			<p>Displaying {currentIndex} of {total} results</p>
						
			<button onClick={loadMore}>Load more</button>
		</>
	)
};

export default Pokemon;
