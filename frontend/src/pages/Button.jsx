import React from "react";

const Button = ({ title, onClick }) => (
	<button
		onClick={onClick}
		className="px-6 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all hover:cursor-pointer py-2 px-4 rounded-full w-full md:w-auto text-center inline-block">
		{title}
	</button>
);

export default Button;
