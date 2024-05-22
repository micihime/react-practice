import React from 'react'

// styles
import './Tunes.scss'

//children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

//component
const Tunes: React.FC = () => {
    const handleSearchFormSubmit = (data: string) => {
        alert(data)
    }

    //template
    return (
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm onSearchFormSubmit={handleSearchFormSubmit}/>
            <TunesList />
        </article>
    )
}

export default Tunes