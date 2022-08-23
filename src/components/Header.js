import React from 'react'
import '../style.css'
import travelLogo from '../images/travel-journal-logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <img src={travelLogo} />
      <span>My Travel Journal.</span>
    </header>
  )
}

export default Header