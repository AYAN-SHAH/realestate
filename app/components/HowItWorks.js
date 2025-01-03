"use client";
import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
	return (
		<section className="py-16 px-6 md:px-36 bg-white">
			{/* Main Heading */}
			<h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4 text-center text-blue-950">
				How It Works
				<div className="flex justify-center mt-2">
					<span className="block w-7 rounded-2xl h-1 bg-red-600 mx-1"></span>
					<span className="block w-16 rounded-2xl h-1 bg-red-600 mx-1"></span>
				</div>
			</h2>

			{/* Sub Heading */}
			<p className="text-center text-sm text-gray-400 mb-12">
				Follow these 3 steps to book your place
			</p>

			{/* Cards Section with staggered animation */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-3 gap-4 width-[50vw] mx-auto"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.2 }} // Trigger animation when cards are in view
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.3, // Stagger the animations by 0.3s
						},
					},
				}}
			>
				{/* Card 1 */}
				<motion.div
					className="bg-white py-5 px-10 rounded-lg shadow-lg flex flex-col items-center text-center"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
					}}
				>
					<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path d="M3 12l2 2 6-6 8 8 6-6" />
						</svg>
					</div>
					<h3 className="text-blue-950 font-semibold mb-2">
						01. Search for Location
					</h3>
					<p className="text-gray-400 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
						et sem sed sollicitudin. Donec non odio…
					</p>
				</motion.div>

				{/* Card 2 */}
				<motion.div
					className="bg-white py-5 px-10 rounded-lg shadow-lg flex flex-col items-center text-center"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
					}}
				>
					<div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path d="M3 12l2 2 6-6 8 8 6-6" />
						</svg>
					</div>
					<h3 className="text-blue-950 font-semibold mb-2">
						02. Select Property Type
					</h3>
					<p className="text-gray-400 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
						et sem sed sollicitudin. Donec non odio…
					</p>
				</motion.div>

				{/* Card 3 */}
				<motion.div
					className="bg-white py-5 px-10 rounded-lg shadow-lg flex flex-col items-center text-center"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
					}}
				>
					<div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path d="M3 12l2 2 6-6 8 8 6-6" />
						</svg>
					</div>
					<h3 className="text-blue-950 font-semibold mb-2">
						03. Book Your Property
					</h3>
					<p className="text-gray-400 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
						et sem sed sollicitudin. Donec non odio…
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HowItWorks;
