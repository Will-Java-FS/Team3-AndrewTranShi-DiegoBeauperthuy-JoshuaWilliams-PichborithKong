import React from "react";
import Button from "../pages/Button";
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className ="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
            <img src="./images/bistrologo.png" alt="Logo" className="lg:mr-10 mb-8 lg:mb-0"/>

            <div className="space-y-4 lg:pt-14">
                <h1 className="font-semibold text-4xl text-center md:text-start">Why Us?</h1>
                <p>
                At Byte Me Bistro, our commitment to culinary excellence and innovation sets us apart. Led by visionary chef Andrew Tran Shi, 
                renowned for his mastery of comfort food with a creative twist, we transform everyday dishes into extraordinary culinary experiences. 
                Partnering with food connoisseur Joshua Williams ensures that each menu item reflects the highest standards of taste and quality, 
                promising a dining adventure that exceeds expectations.
                </p>
                <p>
                What truly distinguishes us is our fusion of bold flavors with cutting-edge technology, curated by tech-savvy entrepreneur Pichborith 
                Kong. From interactive dining experiences to seamless service innovations, Byte Me Bistro redefines how guests enjoy their meals. Backed 
                by the strategic foresight of business magnate Diego Beauperthuy, we are not just a restaurant but a destination where innovation meets 
                gastronomy, inviting you to savor moments of joy and discovery with every visit.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Link to="aboutus">
                        <Button title="Learn More" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About