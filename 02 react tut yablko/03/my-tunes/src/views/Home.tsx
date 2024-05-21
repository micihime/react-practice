import React, { useState, useEffect } from 'react'

//styles & assets
import './Home.scss'
import logo from '../assets/logo.svg';

const Home: React.FC = () => {
    const [title, setTitle] = useState('React, wheee')

    useEffect(() => {
        document.title = title
    })

    return (
        <div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1 onClick={() => {setTitle(prevTitle => prevTitle + '!')}}>
                {title}
            </h1>

			<p>
				Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a
					href="https://reactjs.org/docs"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
    )
}

export default Home