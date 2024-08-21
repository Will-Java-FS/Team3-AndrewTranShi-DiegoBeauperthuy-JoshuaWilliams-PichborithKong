import React from "react";
import Button from "../pages/Button";
import About from "../components/About";

const Home = () => {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-32 px-5 bg-[url('/images/home-background.jpg')] bg-cover bg-no-repeat bg-center">
				<div className="w-full lg:w-2/3 space-y-5 text-center lg:text-left lg:space-y-6">
					<h1 className="text-backgroundColor font-semibold text-4xl lg:text-6xl">
						The Best Food You Will Ever Try.
					</h1>
					<p className="text-backgroundColor text-base lg:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<div className="mt-4 lg:mt-6 flex justify-center lg:justify-start">
						<Button
							title="Order Now"
							href="/menu"
							className="py-3 px-6 text-lg lg:text-xl" // Adjust size here
						/>
					</div>
				</div>
			</div>
			<About />
		</>
	);
};

export default Home;
