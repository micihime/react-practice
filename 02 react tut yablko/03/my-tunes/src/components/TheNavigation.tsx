import React from 'react'
import { NavLink } from 'react-router-dom';

//styles
import styles from './TheNavigation.module.scss'

interface Props { }

const TheNavigation: React.FC<Props> = () => {
    return (
        <nav className={styles.navigation}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
          <NavLink to="/tunes" className={({ isActive }) => isActive ? styles.active : ""}>Tunes</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
        </nav>
    )
}

export default TheNavigation