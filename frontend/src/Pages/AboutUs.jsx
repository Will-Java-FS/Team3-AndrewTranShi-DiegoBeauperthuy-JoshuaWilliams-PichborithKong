import React from "react";
import Button from "../pages/Button";
import { useEffect } from "react";

const AboutUs = () => {

	useEffect(() => {
		document.title = "About Us";
	}, []);

	return (
		<div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
			<img
				src="./images/bistrologo.png"
				alt="Logo"
				className="lg:mr-10 mb-8 lg:mb-0"
			/>

			<div className="space-y-4 lg:pt-14">
				<h1 className="font-semibold text-4xl text-center md:text-start">
					Byte Me Bistro Story
				</h1>
				<p>
					Andrew Tran Shi, a visionary chef with a knack for creating mouth-watering 
					comfort foods spent years perfecting his craft in kitchens across bustling cities. 
					His passion for elevating everyday dishes with creative twists fueled his dream of opening a 
					restaurant that combined bold flavors with an inviting and playful atmosphere. In his pursuit of 
					turning this vision into reality, Andrew connected with Joshua Williams, a world-renowned food connoisseur 
					celebrated for his expertise in discovering the best of casual and gourmet dining alike.
				</p>
				<p>
					Joshua’s reputation for identifying the next big culinary trends made him the perfect partner for Andrew’s 
					ambitious concept. Together, they imagined a space where guests could enjoy elevated versions of their favorite 
					comfort foods while indulging in a unique dining experience. As their ideas took shape, they realized they needed 
					strategic partners to bring their dream to life. That’s when they met Pichborith Kong and Diego Beauperthuy—two 
					forward-thinking investors who were captivated by the concept.
					faucibus. Nullam quis ante.
				</p>
				<p>
					Pichborith Kong, a tech-savvy entrepreneur with a passion for futuristic dining concepts, brought a unique perspective 
					to the team. His expertise in integrating technology with dining experiences was crucial in shaping what would become 
					Byte Me Bistro. Diego Beauperthuy, a business magnate with a keen eye for innovative investments, immediately saw the 
					potential in creating a restaurant that combined gourmet comfort food with a fun, tech-driven vibe. With their combined 
					expertise, Pichborith and Diego joined forces with Andrew and Joshua to craft a one-of-a-kind dining destination.
				</p>
				<p>
					Byte Me Bistro was born from their shared vision to create more than just another eatery. It’s a celebration of familiar, 
					comforting flavors elevated to new heights, where the culinary artistry of Chef Andrew Tran Shi meets the discerning standards 
					of Joshua Williams, supported by the innovative thinking of Pichborith Kong and the strategic vision of Diego Beauperthuy. The result 
					is a vibrant, modern bistro where every bite brings joy, blending food, culture, and technology in a way that delights guests of all ages.
				</p>

			</div>
		</div>
	);
};

export default AboutUs;
