const PokemonList = ({pokemons}) => {
	return (	
		pokemons.map((pokemon) => (
			<li key={pokemon.url}>{pokemon.name}</li>
		))
	)
}

export default PokemonList;
