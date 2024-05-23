import React, {useRef} from 'react'

// styles
import './TunesSearchForm.scss'

interface Props { }

const TunesSearchForm: React.FC<Props> = props => {
    const searchInput = useRef<HTMLInputElement>(null) //reference for DOM element - search input
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        searchForMusic()
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    }

    const searchForMusic = () => {
        if(searchInput.current?.value !== null)
            console.log(searchInput.current?.value)
    }

    //template
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                ref={searchInput}
                onChange={handleInput}
                className="search"
            />
        </form>
    )
}

export default TunesSearchForm