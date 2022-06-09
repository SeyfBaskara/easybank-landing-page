import React, { useState } from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
   const [displayNav, setDisplayNav] = useState<boolean>(false)

   const handleHamburgerMenu = () => {
      setDisplayNav(true)
   }
   const handleCloseMenu = () => {
      setDisplayNav(false)
   }

   return (
      <header className="header">
         <section className="header__logo">
            <div className="header-image">
               <Image src="/images/logo.svg" alt="logo icon" layout="fill" />
            </div>
         </section>
         <section className="header__navigation" style={displayNav ? { display: 'block' } : { display: 'none' }}>
            <div className="navigation__close-icon" onClick={handleCloseMenu}>
               <Image src="/images/icon-close.svg" alt="close icon" layout="fill" />
            </div>
            <nav className="navigation__list">
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Contact</a>
               <a href="#">Blog</a>
               <a href="#">Careers</a>
            </nav>
         </section>
         <section className="header__right">
            <div
               className="header__menu-icon"
               onClick={handleHamburgerMenu}
               style={displayNav ? { display: 'none' } : { display: 'block' }}
            >
               <Image src="/images/icon-hamburger.svg" alt="menu icon" layout="fill" />
            </div>
            <button className="header__right-btn">Request Invite</button>
         </section>
      </header>
   )
}

export default Header
