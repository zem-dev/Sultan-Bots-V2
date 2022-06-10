import "../css/contact-section-styles.css"

import { Col, Row } from "react-bootstrap"

import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";

const ContactSection = () => {
    return (
        <div className="contact-section">
            <h1 className="contact-section-title">Contact Us</h1>
            <p className="contact-section-email">sultanbots@gmail.com</p>

            <img src={youtube} alt="twitter-icon"/>
            <img src={twitter} alt="twitter-icon"/>
        </div>
    )
}

export default ContactSection;