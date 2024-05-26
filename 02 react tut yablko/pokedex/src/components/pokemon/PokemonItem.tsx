import React from 'react'
import { Pokemon } from '../../types/types'

interface Props {
    pokemon: Pokemon
}

const PokemonItem: React.FC<Props> = props => {
    const {pokemon} = props

    return (
        <div>{pokemon.name} - {pokemon.type}</div>
    )
}

export default PokemonItem;