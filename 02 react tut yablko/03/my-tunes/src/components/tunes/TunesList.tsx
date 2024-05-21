import React, {useState} from 'react'

// styles
import './TunesList.scss'

const TunesList: React.FC = () => {
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

    //template
    return (
        <ul className="tunes-list">
            {songs.map(song => (
                <li key={song.id}>{song.name + ' - ' + song.artist}</li>
            ))}
        </ul>
    )
}

export default TunesList