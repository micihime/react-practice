import React from 'react'
import { NavLink } from 'react-router-dom';

//styles
import styles from './TheNavigation.module.scss'

interface Props {
  brand?: string
  howMany: number
 }

const TheNavigation: React.FC<Props> = props => {
  const {brand, howMany} = props

  return (
      <nav className={styles.navigation}>
        <span>this is a {brand} navigation {howMany}</span>
       <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
        <NavLink to="/tunes" className={({ isActive }) => isActive ? styles.active : ""}>Tunes</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
      </nav>
  )
}

export default TheNavigation