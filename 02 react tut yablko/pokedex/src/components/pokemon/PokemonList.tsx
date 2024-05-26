import React from 'react'
import Pokemon from './Pokemon'

interface Props {
    pokemons: {id: number, name: string, type: string}[]
}

const PokemonList: React.FC<Props> = props => {
    const pokemons = props
    return (
        <ul>
            {pokemons.pokemons.map(pokemon => (
                <li key={pokemon.id}>
                    <Pokemon pokemon={pokemon}/>
                </li>
            ))}
        </ul>
    )
}

export default PokemonList