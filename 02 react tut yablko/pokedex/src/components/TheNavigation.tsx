import React from 'react'
import { NavLink } from 'react-router-dom';

const TheNavigation: React.FC = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default TheNavigation;