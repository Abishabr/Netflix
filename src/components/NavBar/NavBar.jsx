import React from 'react'
import './NavBar.css'
import netflixLogo from '../../assets/logo.png' 
import searchIcon from '../../assets/icon/search_icon.svg'
import bellIcon from '../../assets/icon/bell_icon.svg' 
import profileIcon from '../../assets/icon/profile_img.png'
import caret from '../../assets/icon/caret_icon.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__left'>
            <img src={netflixLogo}alt='Netflix Logo' className='navbar__logo' />
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New and Popular</li>
                <li>Brows by Language</li>
            </ul>
        </div>
        <div className='navbar__right'>
            <img src={searchIcon} alt="search" className='icons'/>
            <p>Children</p>
            <img src={bellIcon} alt="bell" className='icons'/>

            <div className='navbar__profile'>
                <img src={profileIcon} alt="" className='profile'/> 
                <img src={caret} alt="" /> 

                <div className='profile__dropdown'>
                    <button>Sign Out</button>


                </div>

            </div>
        </div>

    </div>
  )
}

export default NavBar