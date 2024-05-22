import React, {useState} from 'react'

// styles
import './Tunes.scss'

//children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

//component
const Tunes: React.FC = () => {
    //template
    return (
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm />
            <TunesList />
        </article>
    )
}

export default Tunes