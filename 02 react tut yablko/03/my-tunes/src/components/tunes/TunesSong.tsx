import React from 'react'

//styles
import './TunesSong.scss'
import { Song } from '../../types'

//props
interface Props {
    song: Song
}

//component
const TunesSong: React.FC<Props> = (props) => {
    const {song} = props

    //template
    return <article className='song'>
        <div className='inside'>
            <h2>{song.artist + ' - ' + song.title}</h2>
            <div className="player">
                {song.artwork && (
                    <img src={song.artwork} alt="album art"></img>
                )}
                <audio controls src={song.audioFile}></audio>
            </div>
        </div>
        <footer className='meta'>{song.album}</footer>
    </article>
}

export default TunesSong