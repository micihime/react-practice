import React, {useState} from 'react'

//components
import PokemonSearch from '../components/pokemon/PokemonSearch'
import PokemonList from '../components/pokemon/PokemonList'

const Pokedex: React.FC = () => {
    const [pokemons, setPokemons] = useState([
        {
            id: 1,
            name: 'pikachu',
            type: 'electric'
        },
        {
            id: 2,
            name: 'bulbasaur',
            type: 'plant'
        },
        {
            id: 3,
            name: 'squirtle',
            type: 'water'
        }
    ])

    const test = [
        {
            id: 1,
            name: 'eevee',
            type: 'electric'
        },
        {
            id: 2,
            name: 'charmander',
            type: 'plant'
        },
        {
            id: 3,
            name: 'ratata',
            type: 'water'
        }
    ]

    const handleSearch = (query: string) => {
        setPokemons(test)
    }

    return (
        <div>
            <h1>Pokédex</h1>
            <p>Our dynamic Pokédex allows you to explore the Pokémon universe like never before. </p>
            <PokemonSearch onSearch={handleSearch}/>
            <PokemonList pokemons={pokemons}/>
        </div>
    )
}

export default Pokedex