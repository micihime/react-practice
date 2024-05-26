import React from 'react'

interface Props {
    pokemon: {id: number, name: string, type: string}
}

const Pokemon: React.FC<Props> = props => {
    const pokemon = props

    return (
        <div>{pokemon.pokemon.name} - {pokemon.pokemon.type}</div>
    )
}

export default Pokemon;