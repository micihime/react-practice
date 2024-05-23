import React, {useState} from 'react'

// styles
import './Tunes.scss'

//children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

//component
const Tunes: React.FC = () => {
    //state
    const [searchQuery, setSearchQuery] = useState('')
    
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

    const handleInputChange = (data: string) => {
        setSearchQuery(data)
    }

    const handleSearchFormSubmit = (data: string) => {
        const newSong = {
            id: Math.max(...songs.map(s => s.id)) +1,
            artist: data,
            name: data
        }

        setSongs([...songs, newSong])
    }

    //template
    return (
        <article className='tunes'>
            <h1>Tunes</h1>
            
            <TunesSearchForm 
                searchQuery={searchQuery} 
                onInputChange={handleInputChange}
                onSearchFormSubmit={handleSearchFormSubmit}
            />
            
            <TunesList songs={songs}/>
        </article>
    )
}

export default Tunes