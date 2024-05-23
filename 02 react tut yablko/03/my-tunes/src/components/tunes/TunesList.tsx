import React from 'react'

// styles
import './TunesList.scss'
import { Song } from '../../types'

interface Props { 
    songs: Song[]
}

const TunesList: React.FC<Props> = props => {
    const {songs} = props

    //template
    return (
        <ul className="tunes-list">
            {songs.map(song => (
                <li key={song.id}>{song.trackName + ' - ' + song.artistName}</li>
            ))}
        </ul>
    )
}

export default TunesList