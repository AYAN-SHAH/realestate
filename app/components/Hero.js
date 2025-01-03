"use client";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
	const [isBuySelected, setIsBuySelected] = useState(true);

	return (
		<div className="relative w-full h-screen">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/banner.jpg"
					alt="Hero Image"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{/* Hero Content */}
			<div className="absolute inset-0 flex flex-col py-24 px-6 md:px-12 items-left text-left z-1 mx-20">
				<h1 className="text-4xl md:text-5xl text-blue-950 font-bold mb-3 tracking-tight">
					Find Your Best Dream House for
				</h1>
				<h1 className="text-4xl md:text-5xl text-indigo-600 font-semibold mb-6 tracking-tight">
					Rental, Buy & Sell...
				</h1>
				<p className="text-blue-950 mb-8">
					Properties for buy / rent in your location. We have more than <br />
					3000+ listings for you to choose.
				</p>

				{/* Buttons for Buy and Rent */}
				<div className="flex space-x-4 mb-8">
					<button
						onClick={() => setIsBuySelected(true)}
						className={`relative py-2 px-6 text-white ${
							isBuySelected ? "bg-indigo-600" : "bg-white text-indigo-600"
						} border-2 border-indigo-600 rounded-md transition-all hover:bg-indigo-600 hover:text-white flex items-center justify-center`}
					>
						Buy a Property
					</button>
					<button
						onClick={() => setIsBuySelected(false)}
						className={`relative py-2 px-6 text-white ${
							!isBuySelected ? "bg-indigo-600" : "bg-white text-indigo-600"
						} border-2 border-indigo-600 rounded-md transition-all hover:bg-indigo-600 hover:text-white`}
					>
						Rent a Property
						<span
							className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
								!isBuySelected ? "block" : "hidden"
							}`}
						>
							<svg
								className="w-4 h-4 text-indigo-600"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M19 9l-7 7-7-7" />
							</svg>
						</span>
					</button>
				</div>

				{/* Form Section */}
				{isBuySelected && (
					<div className="w-full mx-auto bg-white p-6 rounded-lg shadow-xl">
						<form className="flex space-x-4">
							<div className="flex space-x-2 w-full">
								<input
									type="text"
									placeholder="Enter Keyword"
									className="flex-1 w-1/2 p-2 border border-gray-300 rounded-md"
								/>
								<select className="flex-1 p-2 border border-gray-300 rounded-md">
									<option>Property Type</option>
									<option>House</option>
									<option>Apartment</option>
									<option>Land</option>
								</select>
								<input
									type="text"
									placeholder="Enter Address"
									className="flex-1 p-2 border border-gray-300 rounded-md"
								/>

								<input
									type="number"
									placeholder="Min Price"
									className="flex-1 p-2 w-1/12 border border-gray-300 rounded-md"
								/>
								<input
									type="number"
									placeholder="Max Price"
									className="flex-1 p-2 border w-1/12 border-gray-300 rounded-md"
								/>

								<button className="w-1/12 bg-indigo-600 text-white py-3 px-2 rounded-md flex items-center justify-center">
									<i className="fas fa-search text-sm mr-2"></i>{" "}
									{/* Adjust icon size */}
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default Hero;
