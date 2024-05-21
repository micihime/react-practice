import React, {useState} from 'react'

// styles
import './Tunes.scss'

const Tunes: React.FC = () => {
    const [query, setQuery] = useState('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <div className='tunes'>
            <h1>Tunes</h1>

            <form>
                <input type="text" value={query} onChange={handleInput}/>
            </form>
            
            <p>{query}</p>
        </div>
    )
}

export default Tunes