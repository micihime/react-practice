import React, {useState} from 'react'

// styles
import './TunesSearchForm.scss'

interface Props { 
    onSearchFormSubmit: (data: string) => void
}

const TunesSearchForm: React.FC<Props> = props => {
     //state
     const [query, setQuery] = useState('')
    
     const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
         setQuery(e.target.value)
     }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() //after submit, the default action is refresh - which I do not want
        props.onSearchFormSubmit(query)
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