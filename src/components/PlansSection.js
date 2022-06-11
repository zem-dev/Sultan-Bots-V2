import "../css/plans-section-styles.css"

import { Row, Col, Button } from "react-bootstrap";

const PlansSection = () => {
    return (
        <div className="plans-section">
            <h1 className="plans-section-title">Plans & Pricing</h1>
            <p className="plans-section-paragraph">We offer many plans for whatever you need.</p>

            <Row>
                <Col md={4}>
                    <div className="pricing-card">
                        <h3 className="pricing-card-title">Basic</h3>
                        <h4>$1</h4>

                        <ul>
                            <li>5 Commands</li>
                            <li>No Bot Support</li>
                            <li>No Custom Logo</li>
                        </ul>

                        <Button variant="dark">Buy now</Button> 
                    </div>
                </Col>

                <Col md={4}>
                    <div className="pricing-card">
                        <h3 className="pricing-card-title">Super</h3>
                        <h4>$3</h4>

                        <ul>
                            <li>10 Commands</li>
                            <li>Bot Support</li>
                            <li>No Custom Logo</li>
                        </ul>

                        <Button variant="dark">Buy now</Button> 
                    </div>
                </Col>

                <Col md={4}>
                    <div className="pricing-card">
                        <h3 className="pricing-card-title">Ultimate</h3>
                        <h4>$5</h4>

                        <ul>
                            <li>Unlimited Commands</li>
                            <li>Bot Support</li>
                            <li>Custom Logo</li>
                        </ul>

                        <Button variant="dark">Buy now</Button> 
                    </div>
                </Col>
            </Row>
        </div>       
    )
}

export default PlansSection;