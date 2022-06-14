import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
   return (
      <footer className="footer">
         <section className="footer__logo">
            <div className="footer__logo-image">
               <Image src="/images/logo.svg" alt="logo icon" layout="fill" />
            </div>
            <div className="footer__icons">
               {['facebook', 'youtube', 'twitter', 'pinterest', 'instagram'].map((path) => (
                  <div key={path} className="footer__icon">
                     <Image src={`/images/icon-${path}.svg`} alt={`${path} icon`} layout="fill" />
                  </div>
               ))}
            </div>
         </section>
         <section className="footer__navigation">
            <nav className="footer__nav-list">
               <a href="#">About Us</a>
               <a href="#">Contact</a>
               <a href="#">Blog</a>
               <a href="#">Careers</a>
               <a href="#">Support</a>
               <a href="#">Privacy Policy</a>
            </nav>
         </section>
         <section className="footer__request">
            <button className="footer__request-btn">Request Invite</button>
            <p className="footer__reserve-text">&copy;Easybank. All Rights Reserved</p>
            <div className="footer__attribution">
               Challenge by
               <a className="footer__link" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
                  Frontend Mentor
               </a>
               . Coded by
               <a className="footer__link" href="#" target="_blank" rel="noreferrer">
                  Seyfettin Baskara
               </a>
               .
            </div>
         </section>
      </footer>
   )
}

export default Footer
