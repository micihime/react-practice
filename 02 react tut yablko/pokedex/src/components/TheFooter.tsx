import React from 'react'

const TheFooter: React.FC = () => {
    return (
        <div>
            <p>This is React app for learning purposes, leveraging PokeAPI.</p>
            <a
              className="App-link"
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out PokeAPI
            </a>
            <p>Created by: Miči</p>
        </div>
    )
}

export default TheFooter