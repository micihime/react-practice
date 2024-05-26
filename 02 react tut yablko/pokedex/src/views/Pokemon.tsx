import React from 'react'

//components
import PokemonSearch from '../components/pokemon/PokemonSearch'
import PokemonList from '../components/pokemon/PokemonList'

const Pokemon: React.FC = () => {
    return (
        <div>
            <h1>Pokédex</h1>
            <p>Our dynamic Pokédex allows you to explore the Pokémon universe like never before. </p>
            <PokemonSearch />
            <PokemonList />
        </div>
    )
}

export default Pokemon