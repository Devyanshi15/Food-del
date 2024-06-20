import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className='footer-content'>
           
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>"Savor the freshest ingredients and finest flavors. Check out our menu and place your order!"</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
           
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            
            <div className='footer-content-right'>
                <h2>Get in touch</h2>
                <ul>
                    <li>+1-212-456-9638</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 Tomato</p>
    </div>
  )
}

export default Footer
 