import React from 'react'
import "../styles/footer-styles.css"
import Instagram from "../images/footer/instagram.svg"
import Facebook from "../images/footer/facebook.svg"
import Twitter from "../images/footer/twitter-x.svg"
import Youtube from "../images/footer/youtube.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div class="container text-center footer-content">
                <div class="row">
                    <div class="col-md-6 footer-text">© 2024 THE MIXUP GAMING, All Rights Reserved</div>
                    <div class="col-md-6 footer-icons">
                        <ul className="icon-list">
                            <li><div><img src={Instagram} alt="Instagram" className="footer-image"/></div></li>
                            <li><div><img src={Facebook} alt="Facebook" className="footer-image"/></div></li>
                            <li><div><img src={Twitter} alt="Twitter" className="footer-image"/></div></li>
                            <li><div><img src={Youtube} alt="Youtube" className="footer-image"/></div></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer