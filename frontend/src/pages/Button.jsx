import React from "react";

const Button = (props) => {
	return (
		<div className="px-6 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all hover:cursor-pointer py-2 px-4 rounded-full w-auto inline-block">
			{props.title}
		</div>
	);
};

export default Button;
