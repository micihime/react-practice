import React, {useState} from 'react'

// styles
import './Tunes.scss'

const Tunes: React.FC = () => {
    const [query, setQuery] = useState('')
    const [songs, setSongs] = useState([
        {
            id: 1,
            artist: 'great artist',
            name: 'hell yeah'
        },
        {
            id: 2,
            artist: 'soul',
            name: 'soul song'
        },
        {
            id: 3,
            artist: 'ix123',
            name: 'the best song'
        }
    ])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //after submit, the default action is refresh - which I do not want
        e.preventDefault()

        alert(query)
    }

    //template
    return (
        <div className='tunes'>
            <h1>Tunes</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleInput}/>
            </form>

            <ul>
                {songs.map(song => (
                    <li key={song.id}>{song.name + ' - ' + song.artist}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tunes