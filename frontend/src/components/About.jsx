import React from "react";
import Button from "../pages/Button";


const About = () => {
    return (
        <div className ="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
            <img src="./images/bistrologo.png" alt="Logo" className="lg:mr-10 mb-8 lg:mb-0"/>

            <div className="space-y-4 lg:pt-14">
                <h1 className="font-semibold text-4xl text-center md:text-start">Why Us?</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </p>
                <p>
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, 
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit 
                id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Button title="Learn More" />
                </div>
            </div>
        </div>
    )
}

export default About