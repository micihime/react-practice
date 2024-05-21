import React, {useState} from 'react'

// styles
import './TunesSearchForm.scss'

const TunesSearchForm: React.FC = () => {
     //state
     const [query, setQuery] = useState('')
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //after submit, the default action is refresh - which I do not want
        e.preventDefault()

        // const newSong = {
        //     id: Math.max(...songs.map(s => s.id)) +1,
        //     artist: query,
        //     name: query
        // }
        // setSongs([...songs, newSong])
    }

    //template
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={query} 
                onChange={handleInput}
                className="search"
            />
        </form>
    )
}

export default TunesSearchForm