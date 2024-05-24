import React from 'react'

//styles
import './TunesSong.scss'

//props
interface Props {}

//component
const TuneSong: React.FC<Props> = () => {
    //template
    return <article className='song'>
        <div className='inside'>
            <h2></h2>
            <div className="player"></div>
        </div>
        <footer className='meta'></footer>
    </article>
}

export default TuneSong