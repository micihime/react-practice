import React, {useState} from 'react'

// styles
import './TunesSearchForm.scss'

interface Props {
    searchQuery: string
    onInputChange: (data: string) => void
    onSearchFormSubmit: (data: string) => void
}

const TunesSearchForm: React.FC<Props> = props => {
    const searchQuery = props.searchQuery

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() //after submit, the default action is refresh - which I do not want
        props.onSearchFormSubmit(searchQuery)
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