const fetchItems = async(limit, offset) => {
	const items = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
	const pokemons = await items.json();

	return pokemons;
}

export default fetchItems;
