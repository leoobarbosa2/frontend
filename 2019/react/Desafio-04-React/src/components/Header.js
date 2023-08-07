import React from 'react'

import facebookLogo from '../assets/facebook.png'
import profile from '../assets/profile.png'
const icon = '\u{1F466}'

import './Header.css'

function Header(){
  return (
    <div className="header">
      <img src={facebookLogo} alt="Logo"/>
      <div>
        <span>Meu perfil </span>
        <span className="icon">{icon}</span>
      </div>
    </div>
  )
}

export default Header