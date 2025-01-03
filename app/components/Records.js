"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Records = () => {
	// Custom hook to animate the number counting from 0 to the record value
	const Counter = ({ value }) => {
		const [count, setCount] = useState(0);

		useEffect(() => {
			const interval = setInterval(() => {
				if (count < value) {
					setCount((prev) => prev + 10); // Increase by 10 for a faster count
				}
			}, 10); // Adjust speed with interval (lower number = faster count)

			return () => clearInterval(interval);
		}, [count, value]);

		return count;
	};

	return (
		<section className="py-16 px-36 bg-blue-950">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{/* Record 1: 50K Listings Added */}
				<motion.div
					className="py-6 px-8 rounded-lg shadow-lg flex flex-col items-center text-center bg-blue-950 transition-all hover:bg-indigo-600"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path d="M12 3v18M3 12h18" />
						</svg>
					</div>
					<p className="text-3xl font-bold text-white">
						<Counter value={50000} />
					</p>
					<p className="text-sm text-white">Listings Added</p>
				</motion.div>

				{/* Record 2: 3000+ Agents Listed */}
				<motion.div
					className="py-6 px-8 rounded-lg shadow-lg flex flex-col items-center text-center bg-blue-950 transition-all hover:bg-indigo-600"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path d="M12 3v18M3 12h18" />
						</svg>
					</div>
					<p className="text-3xl font-bold text-white">
						<Counter value={3000} />+
					</p>
					<p className="text-sm text-white">Agents Listed</p>
				</motion.div>

				{/* Record 3: 2000+ Sales Completed */}
				<motion.div
					className="py-6 px-8 rounded-lg shadow-lg flex flex-col items-center text-center bg-blue-950 transition-all hover:bg-indigo-600"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
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
					<p className="text-3xl font-bold text-white">
						<Counter value={2000} />+
					</p>
					<p className="text-sm text-white">Sales Completed</p>
				</motion.div>

				{/* Record 4: 5000+ Users */}
				<motion.div
					className="py-6 px-8 rounded-lg shadow-lg flex flex-col items-center text-center bg-blue-950 transition-all hover:bg-indigo-600"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path d="M12 3v18M3 12h18" />
						</svg>
					</div>
					<p className="text-3xl font-bold text-white">
						<Counter value={5000} />+
					</p>
					<p className="text-sm text-white">Users</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Records;
