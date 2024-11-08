import React from 'react'
import logo from '../../Assets/Transparent PNG File-01 1.png'
import menuLogo from '../../Assets/gg_menu-grid-r.png'

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-[#5b53f9] via-[#ac71d6] to-[#ff8e57] h-20 flex items-center justify-between px-5 md:px-10">
      <img src={logo} alt="" className="w-40 md:w-28 lg:w-52 h-auto" />
      <img src={menuLogo} alt="" className="w-5 h-auto cursor-pointer md:w-6 lg:w-7" />
    </nav>
  )
}

export default Header
