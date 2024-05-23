import React, {useState} from 'react'
import axios from 'axios'

// styles
import './Tunes.scss'

//children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

//component
const Tunes: React.FC = () => {
    //state
    const [songs, setSongs] = useState([])

    const handleSearch = (query: string) => {
        axios.get("https://itunes.apple.com/search?term=" + encodeURI(query) + "&entity=musicTrack&limit=5")
            .then(response => {console.log(response)})
    }

    //template
    return (
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm onSearch={handleSearch}/>
            <TunesList songs={songs}/>
        </article>
    )
}

export default Tunes