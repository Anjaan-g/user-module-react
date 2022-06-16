import React from 'react'
import './nav.scss'

function Nav() {
  return (
    <div className='Nav'>
        <ul className="nav_bar">
            <div className="left">
                <li className="nav__item">Home</li>
                <li className="nav__item">About</li>
                <li className="nav__item">Contact</li>
                <li className="nav__item">Admin</li>
            </div>
            <div className="right">
                <li className="nav__item">
                    <a href="#" className="nav_link">
                        Login
                    </a>
                </li>
            </div>
        </ul>
    </div>
  )
}

export default Nav