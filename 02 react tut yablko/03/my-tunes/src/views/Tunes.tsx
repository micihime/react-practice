import React, {useState} from 'react'

// styles
import './Tunes.scss'

//children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

//component
const Tunes: React.FC = () => {
    const [title, setTitle] = useState("Tunes")

    const handleSearchFormSubmit = (data: string) => {
        //alert(data)
        setTitle(data)
    }

    //template
    return (
        <article className='tunes'>
            <h1>{title}</h1>
            <TunesSearchForm onSearchFormSubmit={handleSearchFormSubmit}/>
            <TunesList />
        </article>
    )
}

export default Tunes