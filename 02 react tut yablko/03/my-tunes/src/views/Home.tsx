import React, { useState} from 'react'

//styles & assets
import './Home.scss'
import logo from '../assets/logo.svg';

const Home: React.FC = () => {
    const [title, setTitle] = useState('React, wheee')
    const [count, setCount] = useState(1)

    return (
        <div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1 onClick={() => {
                setCount(count + 1)
                setTitle('React, wheee' + '!'.repeat(count))
            }}>{title}</h1>

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