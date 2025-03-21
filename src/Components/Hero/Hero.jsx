import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about1_profile.jpg'
import My_Resume from '../../assets/My_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" className='profile-img' />
            <h1><span>I'm Abhiranjan Kumar,</span> frontend and backend developer</h1>

            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={My_Resume} download="My_Resume.pdf" className="My_Resume">
                        Download My Resume
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Hero
