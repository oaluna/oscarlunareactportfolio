import React from 'react'
import './Header.css'
import { Fade } from 'react-reveal'
import { greeting } from '../../Portfolio'

function Header() {
  return (
    <Fade top duration={1000} distance='20px'>
      <div>
        <header className='header' id='home'>
          <a href='/' className='logo'>
            <span className='grey-color'> &lt;</span>
            <span className='logo-name'>Oscar Armando Luna</span>
            <span className='grey-color'>/&gt;</span>
          </a>
          <input className='menu-btn' type='checkbox' id='menu-btn' />
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='navicon'></span>
          </label>
          <ul className='menu'>
            <li>
              <a href={greeting.resumeLink}>Resume</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#opensource'>Open Source</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  )
}
export default Header
