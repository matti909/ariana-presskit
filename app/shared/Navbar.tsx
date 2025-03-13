import React from 'react'
import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <ul>
          <li>
            Contacto
          </li>
          <li>
            Eventos
          </li>
          <li>
            Videos
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
