import React, {useState} from 'react'

// styles
import './Tunes.scss'

const Tunes: React.FC = () => {
    const [query, setQuery] = useState('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //after submit, the default action is refresh - which I do not want
        e.preventDefault()
        alert(query)
    }

    return (
        <div className='tunes'>
            <h1>Tunes</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleInput}/>
            </form>
        </div>
    )
}

export default Tunes