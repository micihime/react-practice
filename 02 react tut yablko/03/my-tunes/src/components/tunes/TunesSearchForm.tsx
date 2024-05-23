import React, {useRef} from 'react'
import {debounce} from 'lodash-es'

// styles
import './TunesSearchForm.scss'

interface Props { 
    onSearch: (query: string) => void
}

const TunesSearchForm: React.FC<Props> = props => {
    const searchInput = useRef<HTMLInputElement>(null) //reference for DOM element - search input
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        searchForMusic()
    }

    const handleInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    }, 500)

    const searchForMusic = () => {
        let searchString = searchInput.current?.value
        if (searchString)
            props.onSearch(searchString);
    }

    //template
    return (
        <form onSubmit={handleSubmit}>
            <input 
                autoFocus
                type="text" 
                ref={searchInput}
                onChange={handleInput}
                className="search"
            />
        </form>
    )
}

export default TunesSearchForm