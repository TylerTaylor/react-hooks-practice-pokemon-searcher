import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  // set up state functionality (pokemon, search term)
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // fetch our data when this component loads
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setPokemon(data))
      // .then(setPokemon) <- alternative approach to the line above
  }, [])

  // need a function to add single pokemon to our state
  const handleAddPokemon = (newPokemon) => {
    setPokemon([newPokemon, ...pokemon]) // add to front of list
    // setPokemon([...pokemon, newPokemon]) // add to back of list
  }

  // filter our pokemon data
  const pokemonToDisplay = pokemon.filter(poke => 
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())  
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
