import React, {useState} from 'react'

// styles
import './TunesSearchForm.scss'

interface Props {
    searchQuery: string
}

const TunesSearchForm: React.FC<Props> = props => {
    const searchQuery = props.searchQuery

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        searchForMusic()
    }

    const searchForMusic = () => {
        console.log("calling itunes")
    }

    //template
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={searchQuery} 
                onChange={handleInput}
                className="search"
            />
        </form>
    )
}

export default TunesSearchForm