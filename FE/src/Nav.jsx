import React from 'react'
import style from './Style.module.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav className={style.nav}>
            <Link to="/home" >HOME</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/admin">ADMIN</Link>
            <Link to='/' >LOGOUT</Link>
        </nav>
    </div>
  )
}

export default Nav