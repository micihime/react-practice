import React from 'react'
import { NavLink } from 'react-router-dom';

//styles
import styles from './TheNavigation.module.scss'

interface Props { }

const TheNavigation: React.FC<Props> = () => {
    return (
        <nav className={styles.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tunes">Tunes</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default TheNavigation