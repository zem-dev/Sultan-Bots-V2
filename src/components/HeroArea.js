import { Button, Col, Row } from "react-bootstrap";

import "../css/hero-area-styles.css"

import codeImage from  "../images/bot.py.png"

const HeroArea = () => {
    return (
        <Row>
            <Col md={6}>
                <div className="hero-area">
                    <h1 className="hero-area-title">Need a discord bot?</h1>
                    <h2 className="hero-area-subtitle">Sultan bots is here to help.</h2>

                    <p className="hero-area-paragraph">We are offering quality custom bots for your server. Whatever you need, we’ll get it done.</p>

                    <Button variant="dark">Get started</Button>  
                </div>
            </Col>

            <Col md={6}>
                <img className="code-image" src={codeImage} />
            </Col>
        </Row>

        
    );
}

export default HeroArea;