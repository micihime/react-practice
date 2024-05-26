import React from 'react'

const TheFooter: React.FC = () => {
    return (
        <footer>
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
        </footer>
    )
}

export default TheFooter