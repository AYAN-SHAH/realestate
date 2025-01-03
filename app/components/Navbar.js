"use client";
// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
	const [activeDropdown, setActiveDropdown] = useState(null);

	// Dropdown animation configuration
	const dropdownVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	};

	return (
		<nav className="flex items-center justify-between px-6 py-2 bg-white  sticky top-0 z-50">
			{/* Logo */}
			<div className="flex items-center space-x-6 text-sm text-gray-400">
				<Link href="/" className="flex items-center space-x-2">
					<img
						src="/logo.svg" // Replace with your logo path
						alt="DreamsEstate"
						className="h-10"
					/>
				</Link>
				<div className="hidden lg:flex space-x-4">
					<Link href="/" className="hover:text-indigo-600 font-medium">
						Home
					</Link>

					{/* Dropdown Menus */}
					{["Listing", "Agent", "Agency", "Pages", "Blog"].map((item) => (
						<div
							key={item}
							className="relative group"
							onMouseEnter={() => setActiveDropdown(item)}
							onMouseLeave={() => setActiveDropdown(null)}
						>
							<Link
								href="#"
								className="flex items-center hover:text-indigo-600 font-medium"
							>
								{item}
								<i className="ml-1 fas fa-chevron-down text-xs"></i>
							</Link>

							{/* Dropdown Menu */}
							<AnimatePresence>
								{activeDropdown === item && (
									<motion.ul
										className="absolute left-0 mt-2 w-64 border-t border-indigo-600 bg-white shadow-md "
										variants={dropdownVariants}
										initial="hidden"
										animate="visible"
										exit="hidden"
									>
										<li>
											<Link
												href={`/${item.toLowerCase()}-grid`}
												className="block px-4 py-2 hover:bg-gray-100 hover:text-indigo-600"
											>
												{item} Grid
											</Link>
										</li>
										<li>
											<Link
												href={`/${item.toLowerCase()}-list`}
												className="block px-4 py-2 hover:bg-gray-100 hover:text-indigo-600"
											>
												{item} List
											</Link>
										</li>
									</motion.ul>
								)}
							</AnimatePresence>
						</div>
					))}

					<Link href="#" className="hover:text-indigo-600 font-medium">
						Contact Us
					</Link>
					<button className="text-gray-700 hover:text-indigo-600 font-medium">
						<Image
							src="/search-icon.svg"
							width={18}
							height={18} // Replace with your search icon path
							alt="Search Icon"
						/>
					</button>
				</div>
			</div>

			{/* Main Navigation */}

			{/* Header Right */}
			<div className="flex items-center space-x-4">
				<Link
					href="/add-new-property"
					className="flex items-center px-4 py-2 text-sm text-gray-400 rounded-md hover:text-indigo-600 transition-colors duration-500"
				>
					<i className="fa fa-plus-circle mr-2 text-indigo-600"></i>
					Add New Property
				</Link>
				<Link
					href="/register"
					className="relative flex items-center px-3 py-2 text-indigo-600 bg-gray-100 rounded-md overflow-hidden group text-sm font-s"
				>
					<i className="fas fa-user-plus mr-1 transition-all duration-300 group-hover:text-white z-20"></i>{" "}
					{/* Font Awesome Sign Up icon */}
					<span className="relative z-10 group-hover:text-white">Sign Up</span>
					<span className="absolute top-0 left-0 w-full h-full bg-indigo-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
				</Link>

				<Link
					href="/login"
					className="relative flex items-center px-3 py-2 text-sm text-white bg-indigo-600 rounded-md overflow-hidden group"
				>
					<i className="fas fa-sign-in-alt mr-2 transition-all duration-300 group-hover:text-indigo-600 z-20"></i>{" "}
					{/* Font Awesome Sign In icon */}
					<span className="relative z-10 group-hover:text-indigo-600">
						Sign In
					</span>
					<span className="absolute top-0 left-0 w-full h-full bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
