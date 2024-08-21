import React from "react";
import Button from '../pages/Button';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./images/home-background.jpg')] bg-cover bg-no-repeat">
            <div className=" w-full lg:w-2/3 space-y-5">
                <h1 className=" text-backgroundColor font-semibold text-6xl">The Best Food You Will Ever Try.</h1>
                <p className=" text-backgroundColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className=" lg:pl-44">
                    <Button title="Order Now" /> 
                </div>
            </div>    
        </div>
    )
}

export default Home