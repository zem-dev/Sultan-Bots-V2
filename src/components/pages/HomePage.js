import HeroArea from "../HeroArea";
import HomeNavbar from "../Navbar";
import AboutSection from "../AboutSection";
import PlansSection from "../PlansSection";
import ContactSection from "../ContactSection";

import "../../css/home-page-styles.css"

const HomePage = () => {
    return (
        <>
            <HomeNavbar/>
            <HeroArea/>
            <AboutSection/>
            <PlansSection/>
            <ContactSection/>
        </>
    )
}

export default HomePage;