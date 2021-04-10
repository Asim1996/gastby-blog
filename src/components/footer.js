import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <footer className="site-footer">
            <p>&copy; {new Date().getFullYear()} Asim Ansari | Software Engineer at <a href="https://www.simpplr.com/" className="site-footer-link">Simpplr</a></p>
            <div className="site-social">
            <SocialIcon url="https://www.linkedin.com/in/asim-ansari96/"/>
            <SocialIcon url="https://github.com/Asim1996" bgColor="#666"/>
            <SocialIcon url="https://twitter.com/asim_ansari7"/>
            <SocialIcon url="https://www.instagram.com/_asim_96/" bgColor="#FD1D1D"/>
            </div> 
        </footer>
    )
}

export default Footer;