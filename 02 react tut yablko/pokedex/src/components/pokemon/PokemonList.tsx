import React from 'react'
import PokemonItem from './PokemonItem'
import { Pokemon } from '../../types/types'

interface Props {
    pokemons: Pokemon[]
}

const PokemonList: React.FC<Props> = props => {
    const {pokemons} = props
    return (
        <ul>
            {pokemons.map(pokemon => (
                <li key={pokemon.id}>
                    <PokemonItem pokemon={pokemon}/>
                </li>
            ))}
        </ul>
    )
}

export default PokemonList