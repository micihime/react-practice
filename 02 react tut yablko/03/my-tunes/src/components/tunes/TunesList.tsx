import React, {useState} from 'react'

// styles
import './TunesList.scss'

interface Props { 
    songs: { id: number, artist: string, name: string }[]
}

const TunesList: React.FC<Props> = props => {
    const {songs} = props
    
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